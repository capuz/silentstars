---
repo: "kcaldas/genie"
name: "genie"
description: "🧞 Powerful AI assistant for your command line - Built with Go and Gemini AI"
readmeQualityOk: true
url: "https://github.com/kcaldas/genie"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["ai", "assistant", "cli", "coding-assistant", "gemini", "golang", "terminal", "tui"]
stars: 12
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-06-16T03:04:02Z"
lastCommitAt: "2026-07-15T05:52:05Z"
lastReleaseAt: "2025-08-25T23:35:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 62
maintainers: ["kcaldas"]
openGraphImageUrl: "https://opengraph.githubassets.com/9c7d7152b417ce6cfe80c6aa7e455d7a81b86e39cb4f2ffc0dd1ddb948129567/kcaldas/genie"
discussionCount: 0
---

# 🧞 Genie - Powerful AI for Your Command Line

Transform your terminal into an AI-powered workspace. Born from a developer's need for control and transparency in AI assistance.

Quick demo:

Theming demo:

## 🚀 Quick Start

### Installation

#### macOS (Homebrew)
```bash
brew tap kcaldas/genie
brew install genie
```

#### Direct Download
```bash
# Download latest release
curl -L https://github.com/kcaldas/genie/releases/latest/download/genie_$(uname -s)_$(uname -m).tar.gz | tar xz
sudo mv genie /usr/local/bin/
```

#### Docker
```bash
docker run --rm -it ghcr.io/kcaldas/genie:latest
```

#### Build from Source
```bash
go install github.com/kcaldas/genie/cmd/genie@latest
```

### Configuration
Genie ships with Gemini enabled by default. To get started:
1. Generate a key from [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Set it as an environment variable:
```bash
export GEMINI_API_KEY="YOUR_API_KEY"
genie ask "hello world"              # CLI mode
git diff | genie ask "commit msg?"   # Unix pipes
genie                                # Interactive TUI mode
```

> **💡 Tip:** The Gemini API provides 100 free requests per day with Gemini 2.5 Pro. Upgrade to a paid plan…
