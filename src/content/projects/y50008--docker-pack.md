---
repo: "y50008/docker-pack"
name: "docker-pack"
description: "A visual tool that packages project source code into Docker images, supporting target architectures such as amd64, arm, and riscv64."
originalDescription: "一款将项目源代码打包成Docker镜像的可视化工具，支持amd64、arm、riscv64等目标框架"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/y50008/docker-pack"
language: "Python"
languages: ["Python"]
languagePcts: [85]
stars: 8
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-10-08T08:29:16Z"
lastCommitAt: "2026-10-16T08:27:10Z"
lastReleaseAt: "2026-10-16T08:08:34Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 30
maintainers: ["y50008"]
openGraphImageUrl: "https://opengraph.githubassets.com/3ec3a7b90ce512337ca96b3edc32a731772270e87b23e50261f0c2af2a2d19f2/y50008/docker-pack"
---

# 🐳 Docker Pack GUI

**A visual tool that packages project source code into Docker images with one click. Double-click to run, no dependencies to install.**

Author: y50008 ｜ Open-source repository: https://github.com/y50008/docker-pack

---

## 📖 Project Overview

Docker Pack GUI is a **Windows desktop** tool for packaging Docker images. **Download the exe and double-click to open it. You don't need to install Python or configure any environment**, because the tool bundles all runtime files into the exe.

Just select a project source directory (or enter a Git repository URL), click "Start Packaging", and the tool will automatically:

1. **Detect the project language/framework** (supports 23 types, see below)
2. **Automatically generate a multi-stage Dockerfile** (China-based mirror sources for faster downloads, dependency cache reuse)
3. **Call Docker to build the image** (single-architecture or multi-architecture, with real-time BuildKit progress parsing)
4. **Export as a `.tar` (or `.tar.gz`) file** for you to download and save
5. **Optional**: post-build self-check, one-click generation of docker-compose.yml, and pushing to an image registry

> No need to write a Dockerfile…
