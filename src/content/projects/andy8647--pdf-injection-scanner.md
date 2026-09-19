---
repo: "Andy8647/pdf-injection-scanner"
name: "pdf-injection-scanner"
description: "CLI tool to detect hidden prompt injection attacks in PDF files (white text, tiny fonts, off-page text)"
readmeQualityOk: true
url: "https://github.com/Andy8647/pdf-injection-scanner"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 16
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-04-09T06:01:03Z"
lastCommitAt: "2026-09-19T02:47:24Z"
lastReleaseAt: "2026-09-19T02:34:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 45
undervaluedScore: 4
maintainers: ["Andy8647"]
openGraphImageUrl: "https://opengraph.githubassets.com/93e159b86f95faf515ffebae806270b2208be4ee96ef9bd795f52dd9f7c87fe7/Andy8647/pdf-injection-scanner"
---

# pdf-injection-scanner

A CLI tool to detect hidden prompt injection attacks in PDF files.

Professors and others may embed invisible instructions in PDFs (white text, tiny fonts, off-page text) designed to manipulate AI assistants. This tool finds them.

## Detection capabilities

| Type | Severity | How it works |
|------|----------|-------------|
| **White/invisible text** | HIGH | Detects characters with white or near-white fill color |
| **Tiny text** | HIGH | Flags text smaller than 2pt — invisible to the eye |
| **Off-page text** | HIGH | Finds text positioned outside visible page boundaries |
| **Suspicious patterns** | MEDIUM | 30+ regex patterns for prompt injection phrases (EN + CN) |

## Install

```bash
# uv (recommended)
uv tool install pdf-injection-scanner

# pip
pip install pdf-injection-scanner

# Homebrew (macOS)
brew install Andy8647/tap/pdf-injection-scanner

# From source
git clone https://github.com/Andy8647/pdf-injection-scanner.git
cd pdf-injection-scanner
pip install -e .
```

## Usage

```bash
# Basic scan
pdf-scan assignment.pdf

# Verbose output with details
pdf-scan assignment.pdf -v

# JSON output for piping
pdf-scan assignment.pdf --json
```

###…
