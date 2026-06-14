import { CredentialInfo } from "@/app/components/Credential";

export const cert1: CredentialInfo = {
    title: "CompTIA Security+",
    issuedDate: "2026",
    CertURL: "https://www.credly.com/badges/e056bb72-1776-41ae-8dda-5741669d30c1/public_url",
};

export const cert2: CredentialInfo = {
    title: "AWS Cloud Practitioner",
    issuedDate: "2026",
    CertURL: "https://www.credly.com/badges/166784c4-b223-4c95-862b-6f984e0cc920/public_url",
};

export const cert3: CredentialInfo = {
    title: "CS50 Introduction to Cybersecurity",
    issuedDate: "2025",
    CertURL: "https://certificates.cs50.io/c61154f1-3cea-4ce2-ae0a-565587e30f55.png?size=letter",
};

export const allCredentials: CredentialInfo[] = [cert1, cert2, cert3];