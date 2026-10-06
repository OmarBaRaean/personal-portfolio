"use client";
import { useEffect, useRef } from "react";

const COMMANDS = [
    "sudo tail -f /var/log/auth.log",
    "grep -i 'failed password' /var/log/auth.log",
    "nmap -sV -p- 10.0.0.0/24",
    "tcpdump -i eth0 port 443",
    "systemctl status wazuh-agent",
    "ss -tulpn",
    "journalctl -xe",
    "netstat -antp",
    "whoami",
    "sudo ufw enable",
    "ps aux | grep sshd",
    "iptables -L -n -v",
    "find / -perm -4000 2>/dev/null",
    "sha256sum suspicious.bin",
    "dig +short evil.example",
    "lsof -i :22",
    "last -a | head",
    "chmod 600 ~/.ssh/id_rsa",
    "cat /etc/passwd",
    "awk '{print $1}' access.log | sort | uniq -c",
    "openssl s_client -connect host:443",
    "ssh analyst@soc-01",
    "sudo apt update && sudo apt upgrade",
    "uname -a",
];
const FONT_SIZE = 16;
const COLUMN_WIDTH = FONT_SIZE * 2; // every other column, to keep it light
const FRAME_MS = 85;

type Stream = { text: string; pos: number; row: number };

const randomCommand = () => COMMANDS[Math.floor(Math.random() * COMMANDS.length)];
// new streams wait a random number of rows above the top, so only some columns are falling at once
const newStream = (rows: number): Stream => ({ text: randomCommand(), pos: 0, row: -Math.floor(Math.random() * rows * 2) });

// Matrix-style falling Linux commands, typed top to bottom one column each.
// Pauses when off screen or in a background tab, and stays empty for reduced motion.
export default function MatrixRain({ className = "" }: { className?: string }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        if (!canvas || !ctx) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        // canvas can't resolve CSS variables, so read the next/font family name directly
        const fontFamily = getComputedStyle(document.documentElement).getPropertyValue("--font-jetbrains").trim() || "monospace";
        let streams: Stream[] = [];
        let width = 0;
        let height = 0;
        let rows = 0;

        // drawn at 1x resolution: it's a faint background, so the sharper 2x canvas isn't worth 4x the pixels
        const resize = () => {
            width = canvas.clientWidth;
            height = canvas.clientHeight;
            canvas.width = width;
            canvas.height = height;
            rows = Math.ceil(height / FONT_SIZE);
            const columns = Math.ceil(width / COLUMN_WIDTH);
            streams = Array.from({ length: columns }, (_, i) => streams[i] ?? newStream(rows));
        };

        // fainter on the left where the hero text sits, and fading out toward the bottom
        const alphaAt = (x: number, y: number) => {
            const horizontal = 0.35 + 0.65 * Math.min(1, x / (width * 0.75));
            const vertical = y < height * 0.4 ? 1 : Math.max(0, 1 - (y - height * 0.4) / (height * 0.55));
            return horizontal * vertical;
        };

        const drawChar = (char: string | undefined, color: string, x: number, y: number) => {
            if (!char || char === " ") return;
            const alpha = alphaAt(x, y);
            if (alpha <= 0) return;
            ctx.globalAlpha = alpha;
            ctx.fillStyle = color;
            ctx.fillText(char, x, y);
        };

        const draw = () => {
            // fade existing glyphs toward transparent to leave trails
            ctx.globalAlpha = 1;
            ctx.globalCompositeOperation = "destination-out";
            ctx.fillStyle = "rgba(0, 0, 0, 0.06)";
            ctx.fillRect(0, 0, width, height);
            ctx.globalCompositeOperation = "source-over";

            ctx.font = `${FONT_SIZE}px ${fontFamily}, monospace`;
            for (let i = 0; i < streams.length; i++) {
                const stream = streams[i];
                const x = i * COLUMN_WIDTH;
                if (stream.row >= 0) {
                    // dim the previous head, then draw the new head brighter
                    drawChar(stream.text[stream.pos - 1], "#22d3ee", x, stream.row * FONT_SIZE);
                    drawChar(stream.text[stream.pos], "#ecfeff", x, (stream.row + 1) * FONT_SIZE);
                    stream.pos++;
                }
                stream.row++;
                if (stream.pos > stream.text.length || stream.row > rows) streams[i] = newStream(rows);
            }
        };

        let frame: number | undefined;
        let last = 0;
        let onScreen = true;
        const tick = (now: number) => {
            frame = requestAnimationFrame(tick);
            if (now - last < FRAME_MS) return;
            last = now;
            draw();
        };
        const start = () => {
            if (frame === undefined && onScreen && !document.hidden) frame = requestAnimationFrame(tick);
        };
        const stop = () => {
            if (frame !== undefined) cancelAnimationFrame(frame);
            frame = undefined;
        };

        const resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(canvas);
        const visibility = new IntersectionObserver(([entry]) => {
            onScreen = entry.isIntersecting;
            if (onScreen) start();
            else stop();
        });
        visibility.observe(canvas);
        const onTabChange = () => (document.hidden ? stop() : start());
        document.addEventListener("visibilitychange", onTabChange);

        resize();
        start();

        return () => {
            stop();
            resizeObserver.disconnect();
            visibility.disconnect();
            document.removeEventListener("visibilitychange", onTabChange);
        };
    }, []);

    return <canvas ref={canvasRef} aria-hidden="true" className={`matrix-rain ${className}`} />;
}
