---
repo: "ayaka-notes/texlive-full"
name: "texlive-full"
description: "🐳 TeXLive-Full in Docker (Specially For Overleaf CEP/Pro)"
readmeQualityOk: true
url: "https://github.com/ayaka-notes/texlive-full"
homepage: "https://overleaf-pro.ayaka.space/texlive"
language: "R"
languages: ["R", "Dockerfile"]
languagePcts: [50, 23]
topics: ["latex", "overleaf", "texlive", "overleaf-pro", "docker", "docker-image"]
stars: 33
forks: 9
openIssues: 2
closedIssues: 10
watchers: 0
contributors: 4
recentReleases: 1
createdAt: "2024-02-15T06:12:09Z"
lastCommitAt: "2026-07-22T06:10:28Z"
lastReleaseAt: "2026-06-20T16:28:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 48
maintainers: ["Musicminion"]
openGraphImageUrl: "https://opengraph.githubassets.com/c6cf0991e2e07a9e69d8a62993f37f5abe8e50672b2dcabe6bf9d0cef59bdb8c/ayaka-notes/texlive-full"
---

# Overleaf TeXLive Full

A fully-featured **TeXLive Docker image** designed for sandboxed LaTeX compilation in Overleaf Pro, Overleaf CEP, or standalone LaTeX compilation environments.

This image aims to provide an almost complete TeXLive distribution with common fonts and tools preinstalled, in order to minimize compilation failures caused by missing packages or fonts. Notes: This Docker Image **doesn't contain** any sharelatex/overleaf component. It's used for Overleaf/Overleaf Pro's compile.

## ✨ Features

- 🚀 Support Both x86_64 and arm64 server architectures
- 📦 Full and Optimized TeXLive installation
- 🧩 Preinstalled common fonts and utilities
- 🐳 Ready to use with Docker and Docker Compose  
- 🧪 Tested with Overleaf Server Pro / Overleaf Pro  
- 🔄 Regularly Updated with Latest TeXLive Releases
- 🏷 Multiple TeXLive Version tags (2020 – Latest)
- 🧑‍🔬 Knitr support for R code in LaTeX documents

## 🎯 Overleaf Pro Usage

TeXLive Full by Ayaka-notes is specially designed for [overleaf-pro](https://github.com/ayaka-notes/overleaf-pro), you can use the following environment variables to `config/variables.env` file if you are [toolkit…
