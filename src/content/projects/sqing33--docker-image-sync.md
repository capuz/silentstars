---
repo: "sqing33/docker-image-sync"
name: "docker-image-sync"
description: "This project is used to sync Docker images to the GitHub repository ghcr.io to speed up downloading Docker images in China. If ghcr.io downloads are slow, you can try using the Nanjing University acceleration station ghcr.nju.edu.cn to speed up downloads."
originalDescription: "本项目用于将 Docker 镜像同步到 GitHub 的仓库 ghcr.io 以加速国内 Docker 镜像的下载，若ghcr.io下载速度慢可尝试使用南京大学加速站 ghcr.nju.edu.cn 加速下载。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/sqing33/docker-image-sync"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 18
forks: 29
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2025-01-31T15:00:37Z"
lastCommitAt: "2026-10-21T20:02:05Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 80
undervaluedScore: 70
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/45712f500e70a23d4a5b37a56abf8c6c5c95bdc0f431fe8839cce8ba8f744c1b/sqing33/docker-image-sync"
---

# 🚀 Docker Image Toolbox: Build and Sync

This project is a collection of GitHub Actions workflows, designed to provide a one-stop Docker image management solution.

It mainly includes two core features:

1. **Building multi-architecture images from Git repositories**: Pull the source code of any Git repository, automatically build Docker images supporting multiple CPU architectures (such as `amd64`, `arm64`), and push them to Docker Hub and GitHub Packages (`ghcr.io`).
2. **Syncing public images to speed up downloads**: Sync images from public registries such as Docker Hub to your own `ghcr.io` repository to speed up image pulls in mainland China and other regions. If `ghcr.io` is still not fast enough, it can be used together with the Nanjing University acceleration station `ghcr.nju.edu.cn`.

## ✨ Key Features

- **Dual core**: Combines image **building** and **syncing** in one, meeting needs in different scenarios.
- **Manual trigger**: All workflows can be started manually from the Actions page via a simple form.
- **Multi-architecture support**: Easily build images for `linux/amd64`, `linux/arm64`, `linux/arm/v7`, and other CPU architectures.
- **Multi-registry push**:…
