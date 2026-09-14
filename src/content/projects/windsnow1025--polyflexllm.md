---
repo: "windsnow1025/PolyFlexLLM"
name: "PolyFlexLLM"
description: "A full-stack web platform for interacting with various LLMs (OpenAI, Gemini, Claude), featuring full conversation context control, and Markdown + LaTeX rendering."
readmeQualityOk: true
url: "https://github.com/windsnow1025/PolyFlexLLM"
homepage: "https://www.windsnow1025.com"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [51, 34]
topics: ["fastapi", "mui", "nextjs", "nginx", "tailwindcss", "docker", "nestjs", "minio", "k3s", "kubernetes"]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-01-12T05:38:28Z"
lastCommitAt: "2026-09-14T09:12:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 76
maintainers: ["windsnow1025", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/356ed4d3aa9ca81345e4ef749203630cf0c0828c9267b3fdd02ff1d8a1970e12/windsnow1025/PolyFlexLLM"
---

# PolyFlexLLM

A full-stack web platform for interacting with various LLMs (OpenAI, Gemini, Claude), featuring full conversation context control, and Markdown + LaTeX rendering.

## Tech Stack

- **Front End**: Node.js, React.js, Next.js, Tailwind CSS, MUI
- **Back End**: Node.js (Nest.js), Python (FastAPI)
- **Storage**: PostgreSQL, MinIO, Redis
- **Authentication**: Firebase (Email Verification)
- **Infrastructure**: Linux (Debian 12), Kubernetes (K3S), Nginx
- **DevOps**: GitHub Actions
- **Payment**: Creem

## Live Demo

[https://www.windsnow1025.com](https://www.windsnow1025.com)

## Setup

### Prepare Environment

1. Copy `./app-secret.example.yaml` to `./app-secret.yaml` and `./app-secret-test.yaml`, modify value for each key.

### Debian Production

Log in as root user

#### Set Config and Environment

1. Compress `./kubernetes` to `./kubernetes.zip`
2. Run
   ```bash
   mkdir /root/kubernetes
   ```
3. Install Dependencies
   ```bash
   apt update
   apt install unzip
   ```
4. Upload `./kubernetes.zip` to `/root/kubernetes/`
5. Create Configs
   ```bash
   cd /root/kubernetes
   unzip kubernetes.zip
   rm kubernetes.zip
   mv kubernetes PolyFlexLLM
   cd PolyFlexLLM/…
