---
repo: "Vxtzq/CrowdGPT"
name: "CrowdGPT"
description: "CrowdGPT is an opensource AI that aims to be trained without any datacenters"
readmeQualityOk: true
url: "https://github.com/Vxtzq/CrowdGPT"
homepage: "https://www.crowdgpt.net/"
language: "Python"
languages: ["Python"]
languagePcts: [60]
topics: ["ai", "chatgpt", "collaborative", "dataset", "llm", "model-weights"]
stars: 111
forks: 4
openIssues: 5
closedIssues: 10
watchers: 5
contributors: 4
recentReleases: 1
createdAt: "2026-08-18T20:31:00Z"
lastCommitAt: "2026-10-27T12:39:35Z"
lastReleaseAt: "2026-10-16T18:29:47Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 91
undervaluedScore: 32
maintainers: ["Vxtzq", "blaich499", "Vxtzq2"]
openGraphImageUrl: "https://opengraph.githubassets.com/6af5db2a897649c3ce072fa26eb59d724829ccd5e80041f37065ddfa9d6e3510/Vxtzq/CrowdGPT"
---

# CrowdGPT v1.2 Changelog
- Fixed client being "too much monolithic"
- Undergoing the fix of the server to make it safer and more robust
  
## What is CrowdGPT?

CrowdGPT is a **project for training arbitrary big LLMs** using volunteered compute.

Instead of one datacenter doing all the work, CrowdGPT distributes training across participating machines.

**All of this working without money, API keys or any centralized GPU clusters.**

### How it works

See [ARCHITECTURE.md](https://github.com/Vxtzq/CrowdGPT/blob/main/docs/ARCHITECTURE.md)
## ⚡ Quick installation (one command)

For Linux/MacOS

```bash
curl -sSL https://raw.githubusercontent.com/Vxtzq/CrowdGPT/main/install.sh | bash
```

For Windows

```
cmd /c "curl.exe -fsSL -o install.bat https://raw.githubusercontent.com/Vxtzq/CrowdGPT/main/install.bat && install.bat"
```

## ⏳ Legacy installation (deprecated)

```bash
git clone https://github.com/Vxtzq/CrowdGPT.git
cd CrowdGPT
```

Install the dependencies for your hardware:

```bash
# NVIDIA
pip install -r requirements_cuda.txt

# AMD
pip install -r requirements_rocm.txt

# Windows / DirectML
pip install -r requirements_directml.txt

# CPU / Apple Silicon
pip install -r…
