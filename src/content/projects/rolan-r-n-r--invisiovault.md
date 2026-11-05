---
repo: "rolan-r-n-r/InvisioVault"
name: "InvisioVault"
description: "InvisioVault hides encrypted files and messages inside ordinary images, PDFs, and scannable QR codes—keeping them 100% undetectable while the carriers look and function completely normally."
readmeQualityOk: true
url: "https://github.com/rolan-r-n-r/InvisioVault"
homepage: "https://invisio-vault.vercel.app"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [60, 26]
topics: ["python", "cryptography", "data-embeddings", "data-privacy-standards", "data-security", "file-encryption", "flask-api", "flask-app", "full-stack", "image-processing"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2024-11-08T11:15:35Z"
lastCommitAt: "2026-11-05T11:24:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 69
maintainers: ["rolan-r-n-r"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/885323472/6e1c7706-efd0-43d8-953a-4c1633530313"
---

Conceal confidential files inside images, documents, audio, and scannable QR codes with authenticated encryption.

---

## Overview

InvisioVault is an open-source cybersecurity and steganography toolkit. It allows you to conceal encrypted files inside ordinary carrier files (images, PDFs, media, and QR codes) with zero visual distortion or header corruption.

---

## Features

- **Image Steganography:** Embeds data into high-entropy image textures using Sobel edge guidance and randomized LSB matching (±1), paired with Reed-Solomon error correction to defeat statistical steganalysis.
- **Universal Polyglots:** Merges files so they open normally as images, videos, or PDFs, but extract as fully valid archives when opened in 7-Zip, WinRAR, or Archive Utility.
- **Stealth QR Codes:** Conceals encrypted payloads inside standard-looking QR codes that scan harmlessly with everyday camera apps while decrypting inside InvisioVault.

---

## Quick Start

### Windows

Run `run.bat` to launch both the backend and frontend automatically.

### Manual Setup

1. **Backend (Python 3.10+):**
   ```bash
   cd backend
   python -m venv .venv
   # Windows: .venv\Scripts\activate | Linux/macOS: source…
