---
repo: "elbruno/ElBruno.HuggingFace.Downloader"
name: "ElBruno.HuggingFace.Downloader"
description: "A .NET library to download files (ONNX models, tokenizers, voice presets, etc.) from Hugging Face Hub repositories with progress reporting, caching, and authentication support."
readmeQualityOk: true
url: "https://github.com/elbruno/ElBruno.HuggingFace.Downloader"
homepage: "https://elbruno.github.io/ElBruno.HuggingFace.Downloader/"
language: "C#"
languages: ["C#"]
languagePcts: [99]
topics: ["ai", "cli", "csharp", "dotnet", "dotnet-tool", "huggingface", "huggingface-hub", "machine-learning", "model-downloader", "nlp"]
stars: 10
forks: 3
openIssues: 0
closedIssues: 11
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-23T03:16:12Z"
lastCommitAt: "2026-11-02T15:17:51Z"
lastReleaseAt: "2026-07-14T14:19:30Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 39
maintainers: ["elbruno", "jasperdrescher", "Laurianti"]
openGraphImageUrl: "https://opengraph.githubassets.com/402f1646cb6cb357150320aca3b35fe6b0fa5d2771ba9d62807c834f98c1cf16/elbruno/ElBruno.HuggingFace.Downloader"
---

# 📥 ElBruno.HuggingFace.Downloader

A .NET library and CLI tool to download files (ONNX models, tokenizers, voice presets, etc.) from [Hugging Face Hub](https://huggingface.co) repositories with progress reporting, caching, and authentication support.

**Project website:** [elbruno.github.io/ElBruno.HuggingFace.Downloader](https://elbruno.github.io/ElBruno.HuggingFace.Downloader/). See the [website guide](https://github.com/elbruno/ElBruno.HuggingFace.Downloader/blob/HEAD/docs/WEBSITE.md) for publishing and local preview instructions.

## Features

- 📦 **Download any file** from public or private Hugging Face repositories
- 📊 **Rich progress reporting** with stages (Checking → Downloading → Validating → Complete)
- 🔑 **HF_TOKEN authentication** for gated/private repositories (env var or explicit)
- 🌐 **Custom Hub endpoints** via `HF_ENDPOINT` or downloader options
- 🔒 **Atomic writes** using temp files to avoid partial/corrupt downloads
- 🔁 **Resumable downloads** using HTTP range requests for interrupted large files
- 📌 **Revision pinning** with resolved commit metadata and optional expected commit enforcement
- 🗂️ **Remote file listing** — enumerate files in a repo…
