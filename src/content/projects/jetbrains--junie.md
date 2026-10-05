---
repo: "JetBrains/junie"
name: "junie"
description: "An AI coding agent by JetBrains that ships code from your terminal, IDE, or CI/CD pipeline - powered by any LLM you choose"
readmeQualityOk: true
url: "https://github.com/JetBrains/junie"
homepage: "https://junie.jetbrains.com"
language: "Shell"
languages: ["Shell", "Python", "PowerShell"]
languagePcts: [44, 29, 25]
stars: 468
forks: 35
openIssues: 2
closedIssues: 75
watchers: 7
contributors: 17
recentReleases: 0
createdAt: "2025-04-07T16:40:43Z"
lastCommitAt: "2026-10-05T10:46:28Z"
lastReleaseAt: "2025-06-27T12:40:03Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 38
maintainers: ["junie-agent", "vvsotnikov"]
openGraphImageUrl: "https://opengraph.githubassets.com/a8a851f81cebfeb7c54f88e7adca724e49faae79b74e150db913feeff4267971/JetBrains/junie"
---

# Junie
**An LLM-agnostic coding agent built for real-world development — by JetBrains.**

Junie is an AI coding agent that lives in your terminal, integrates with your IDE and CI/CD pipelines, and helps you ship code faster. Give it a task in natural language — fix a bug, implement a feature, review a PR — and Junie handles the rest. Like your real coding buddy.

Learn more at the **[official website](https://junie.jetbrains.com/).**

## 🚀 Get started

### 📦 Install

For more installation options and details, see the [quickstart](https://junie.jetbrains.com/docs/junie-cli.html#step-1-install-junie-cli) guide.

**macOS / Linux**:

```bash
curl -fsSL https://junie.jetbrains.com/install.sh | bash
```

**Windows:**

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -Command "iex (irm 'https://junie.jetbrains.com/install.ps1')"
```

**macOS (Homebrew):**

```bash
brew tap jetbrains-junie/junie
brew install junie
```

**npm:**

```bash
npm install -g @jetbrains/junie
```

### 🔀 Try another update channel

If Junie is already installed, you can run the latest build of a different channel
**for a single launch** without changing your installed default. The shim fetches
and…
