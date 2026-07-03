---
repo: "indravoyager/cypy"
name: "cypy"
description: "cypy ✦ Automated manga translation CLI."
url: "https://github.com/indravoyager/cypy"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["cli-app", "manga", "python", "gemini-api", "translation", "yolov8"]
stars: 44
forks: 13
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 4
createdAt: "2026-06-23T14:54:55Z"
lastCommitAt: "2026-07-03T06:26:51Z"
lastReleaseAt: "2026-06-29T11:20:52Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 84
undervaluedScore: 34
maintainers: ["indravoyager", "SayMaven", "mbayue"]
openGraphImageUrl: "https://opengraph.githubassets.com/1278ff3d5ef6a3e347c24a55f3f92a127af87be419a9f10f85e0991d2382139f/indravoyager/cypy"
---

# cypy

</p>

**cypy** is a CLI manga translator using YOLOv8 to detect speech bubbles and the Google Gemini API to translate foreign text, keeping artwork clean and typography well-fitted.

---

## Preview

| Before (Original Page) | After (Translated Page) |
| :---: | :---: |
|  |  |

---

## Features

- **Multi-Language Support:** Translate to English, Indonesian, Japanese (with native vertical *Tategaki* text!), Mandarin (简体中文), Spanish, Portuguese, Javanese, and **Custom Languages** (supports Thai, Arabic, Cyrillic, etc. with automatic full variable font downloading!).
- **Multi-Provider AI:** Choose between **Google Gemini**, **OpenAI** (GPT-5,4), **Zen** (free, no key needed), **OpenRouter** (100+ models), or **Custom** (any OpenAI-compatible API) directly from the CLI.
- **Interactive Commands:** Change the target language (`lang`), switch API providers (`provider`), change models (`model`), or check current settings (`status`) on the fly inside the loop.
- **Zero-Setup Startup:** Prompts for the API key in the CLI and generates the `.env` file automatically if missing. Zen works out of the box — no API key required.
- **Custom API Support:** Bring your own…
