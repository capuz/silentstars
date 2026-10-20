---
repo: "enesbaldemir/WSTG-Copilot"
name: "WSTG-Copilot"
description: "Interactive OWASP WSTG v4.2 pentest checklist — track progress, get step-by-step guidance, payloads and tool suggestions for every test case."
readmeQualityOk: true
url: "https://github.com/enesbaldemir/WSTG-Copilot"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [45, 38]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-08-07T14:28:18Z"
lastCommitAt: "2026-10-20T08:49:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 46
maintainers: ["enesbaldemir", "fatihsoyer9008", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/282c604cd8ee2b35a481502819239a3b98ec81bfc1604770ec8b4aaae9284a64/enesbaldemir/WSTG-Copilot"
---

# Pentest Workspace — OWASP WSTG v4.2

**[English](#english)** · **[Türkçe](#türkçe)**

---

## English

### Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Requirements](#requirements)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running](#running)
- [Authentication](#authentication)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

### Overview

Pentest Workspace is a web application for running penetration tests based on the **OWASP Web Security Testing Guide (WSTG) v4.2**. It combines the WSTG checklist with engagement management: scope definition, attack surface discovery, CVSS-scored findings, evidence collection, rule-based attack-chain correlation, a Kanban board and DOCX/HTML/PDF reporting. AI assistance (Anthropic, OpenAI, Google Gemini or Ollama) is optional and every AI output is a draft that the user reviews.

The checklist works with only a static file server. Projects, findings, evidence, reports and AI features require the Flask + SQLite backend.

### Features

**Checklist**
- 98 WSTG v4.2 test…
