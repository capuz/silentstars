---
repo: "modelscope/ms-enclave"
name: "ms-enclave"
description: "A modular and stable agent sandbox runtime environment."
readmeQualityOk: true
url: "https://github.com/modelscope/ms-enclave"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 54
forks: 11
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 6
recentReleases: 1
createdAt: "2025-09-11T09:30:18Z"
lastCommitAt: "2026-07-07T06:38:46Z"
lastReleaseAt: "2026-05-19T09:52:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 30
maintainers: ["Yunnglin"]
openGraphImageUrl: "https://opengraph.githubassets.com/d120e343313f33dae9885fcf4fd8d304eb3911822469d4461f1f5b340de92a0a/modelscope/ms-enclave"
---

<br>
    <br>
<p>

</p>

<p>

<p>

> ⭐ If you like this project, please click the "Star" button in the upper right corner to support us. Your support is our motivation to move forward!

## Introduction

ms-enclave is a modular and stable sandbox runtime environment that provides a secure isolated execution environment for applications. It implements strong isolation through Docker containers, equipped with local/HTTP managers and an extensible tool system, helping you execute code safely and efficiently in a controlled environment.

- 🔒 Secure Isolation: Complete isolation and resource limits based on Docker
- 🧩 Modular: Both sandboxes and tools are extensible (registered factory)
- ⚡ Stable Performance: Clean implementation, fast startup, with lifecycle management
- 🌐 Remote Management: Built-in FastAPI service, supports HTTP management
- 🔧 Tool System: Standardized tools enabled by sandbox type (OpenAI-style schema)

## System Requirements

- Python >= 3.10
- Operating System: Linux, macOS, or Windows with Docker support
- Docker daemon available on local machine (Notebook sandbox requires port 8888 open)

## Installation

### Install from PyPI

```bash
pip install…
