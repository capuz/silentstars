---
repo: "OTweihan/Argus"
name: "Argus"
description: "AI-native web testing: describe what to test in plain English, and Argus plans, executes, and reports — no scripts required."
readmeQualityOk: true
url: "https://github.com/OTweihan/Argus"
language: "Python"
languages: ["Python"]
languagePcts: [68]
topics: ["ai", "natural-language-testing", "testing", "ai-agents", "developer-tools", "docker", "fastapi", "llm", "playwright", "python3"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-04-17T07:05:36Z"
lastCommitAt: "2026-08-05T06:06:40Z"
lastReleaseAt: "2026-05-22T05:28:39Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 75
undervaluedScore: 56
maintainers: ["OTweihan"]
openGraphImageUrl: "https://opengraph.githubassets.com/81c931f96ad088ffef079d54e434dcafca7f410d2344ac92174f9ffd922d72f4/OTweihan/Argus"
---

# Argus — AI-Native Web Testing

> Every bug has nowhere to hide.

Stop writing tests. Start describing them.

Argus is an open-source, AI-native test platform that lets you test web
applications by simply describing what you want to check — in plain English.
No Selenium. No Playwright scripts. No page objects to maintain.

```bash
argus run --goal "Submit the contact form and verify the success message" \
          --url "https://example.com/contact"
```

An LLM plans the browser actions, Playwright executes them, and a second LLM
evaluates whether the goal was met — with screenshots, DOM snapshots, and
structured reports at every step. When something fails, Argus recovers and
retries instead of giving up.

**Built for teams that want AI-driven test automation without the script tax.**

[中文文档](https://github.com/OTweihan/Argus/blob/HEAD/README.zh.md)

---

## Overview

Argus bridges the gap between human intent and automated testing. Instead of writing brittle Selenium scripts or complex Playwright code, you express what you want to test in plain language:

```bash
argus run --goal "Test the login form — check required fields and error messages" --url "https://example.com/login"…
