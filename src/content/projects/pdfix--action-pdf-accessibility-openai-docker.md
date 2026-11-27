---
repo: "pdfix/action-pdf-accessibility-openai-docker"
name: "action-pdf-accessibility-openai-docker"
description: "Solving PDF accessibility with OpenAI"
readmeQualityOk: true
url: "https://github.com/pdfix/action-pdf-accessibility-openai-docker"
language: "Python"
languages: ["Python"]
languagePcts: [95]
topics: ["accessibility", "openai", "pdf", "pdfix-actions"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2025-01-20T21:23:04Z"
lastCommitAt: "2026-11-27T12:28:20Z"
lastReleaseAt: "2025-01-23T23:01:54Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 73
undervaluedScore: 59
maintainers: ["peterkral-pdfix"]
openGraphImageUrl: "https://opengraph.githubassets.com/f52d1c4868da1c6df2eae22a2273da5b95973e885d5a940e4382a2c1f525f4e0/pdfix/action-pdf-accessibility-openai-docker"
---

# PDF Accessibility OpenAI

Uses OpenAI models (cloud) to write alternate text for figures and formulas, table summaries and MathML for formulas. Requires an OpenAI API key; the rendered tags (or the MathML) are sent to OpenAI. For PDF output without watermarks, a **PDFix SDK** license is required.

## Table of Contents

- [PDF Accessibility OpenAI](#pdf-accessibility-openai)
  - [Getting started](#getting-started)
  - [Usage](#usage)
  - [Commands](#commands)
  - [Arguments](#arguments)
  - [Params JSON](#params-json)
  - [How it works](#how-it-works)
  - [Exit codes](#exit-codes)
  - [Examples](#examples)
  - [Help \& support](#help--support)
  - [Licenses](#licenses)

## Getting started

You need Docker installed and an OpenAI API key. The first run downloads the image and may take longer than later runs.

## Usage

Mount a folder into the container and run a subcommand:

```bash
docker run --rm -v "$(pwd)":/data -w /data pdfix/pdf-accessibility-openai:latest <command> [options]
```
