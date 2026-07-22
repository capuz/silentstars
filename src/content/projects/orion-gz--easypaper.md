---
repo: "orion-gz/EasyPaper"
name: "EasyPaper"
description: "An integrated web service that translates academic PDF papers using AI and allows conversations based on the content of the papers."
originalDescription: "학술 PDF 논문을 AI로 번역하고 논문 내용을 기반으로 대화할 수 있는 통합 웹 서비스"
descriptionLang: "ko"
readmeQualityOk: true
url: "https://github.com/orion-gz/EasyPaper"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [44, 36]
stars: 15
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-24T06:34:36Z"
lastCommitAt: "2026-07-22T06:10:09Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 40
maintainers: ["orion-gz"]
openGraphImageUrl: "https://opengraph.githubassets.com/9f2032b22a7212a6ae9c15d2e935d5140c545170b4bbed79988d12b71c4c72b2/orion-gz/EasyPaper"
---

# EasyPaper

EasyPaper is an integrated web service that translates academic PDF papers using AI and allows conversations based on the content of the papers. When you upload a paper, the AI translation is displayed next to the original text, and you can ask questions about the content directly.

This service supports local Ollama models, external APIs (Gemini, Claude, OpenAI), and CLI-based engines (Antigravity, Claude Code, Codex) for translation and assistant models.

## Screenshots
<details>
<summary>View Images</summary>

</details>

---

## Quick Start

All scripts needed for installation and execution are gathered in the `scripts/` folder — for macOS/Linux in `scripts/sh/`, and for Windows in `scripts/bat/`.

**macOS / Linux**
```bash
# 1. Clone the repository
git clone https://github.com/orion-gz/EasyPaper.git
cd EasyPaper

# 2. Run the installation script
# (Creates a Python virtual environment, installs dependency packages, creates a .env file, includes frontend build)
./scripts/sh/setup.sh

# 3. Start the server
./scripts/sh/start.sh
```

**Windows**

Double-click the `scripts\bat\setup.bat` file (or run it from the command prompt), and after completion, run…
