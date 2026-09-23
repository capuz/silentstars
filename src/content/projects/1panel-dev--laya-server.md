---
repo: "1Panel-dev/laya-server"
name: "laya-server"
description: "A self-hosted API and web interface for Laya's structured decision models, compatible with the TypeSafe Jev API format."
originalDescription: "A self-hosted API and web interface for Laya’s structured decision models, compatible with the TypeSafe Jev API format."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/1Panel-dev/laya-server"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [43, 41]
topics: ["jev", "jev-ai", "jev-api", "laya", "typesafe", "decision-model"]
stars: 11
forks: 36
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 18
recentReleases: 0
createdAt: "2026-09-23T05:08:49Z"
lastCommitAt: "2026-09-23T08:47:08Z"
status: "newborn"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 80
undervaluedScore: 49
maintainers: ["fit2cloud-chenyw", "Zxc4wonder", "baijiangjie"]
openGraphImageUrl: "https://opengraph.githubassets.com/007466e8b146ce946180b3ed35b3d7439332fe3e9d5a7a4ca7f0d12a3889f90a/1Panel-dev/laya-server"
---

# Laya Server

A standalone Laya System One HTTP service and single-admin console. Backend uses FastAPI + SQLite, frontend uses React + Vite + TypeScript with shadcn/ui; after building, a single application container provides the web interface and API.

## Upstream Source

This repository does not track Laya source code. Before building, check out the pinned v0.3.7 version in the repository root:

```sh
git clone https://github.com/NandhaKishorM/laya.git laya
git -C laya checkout --detach 010bacef009c855ccba814b51f7c8e1d38ab5e3f
sh scripts/check-upstream.sh
```

`laya/` has been added to `.gitignore`, but it will be included in the Docker build context. Dockerfile validates the complete SHA and a clean working directory; the final image contains only the upstream packages and licenses needed to run, excluding `.git`.

## Administrator and Configuration

Set `LAYA_ADMIN_USERNAME` and `LAYA_ADMIN_PASSWORD` (at least 10 characters) in `.env`. The service will generate an Argon2id hash in memory at startup for login verification. Alternatively, you can skip the plaintext password and use `.venv/bin/python scripts/hash-password.py` to generate `LAYA_ADMIN_PASSWORD_HASH` instead; only…
