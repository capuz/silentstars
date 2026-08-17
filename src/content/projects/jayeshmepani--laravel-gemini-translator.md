---
repo: "jayeshmepani/laravel-gemini-translator"
name: "laravel-gemini-translator"
description: "Laravel Gemini AI Translation Extractor scans your Laravel project for translation keys, uses Google Gemini AI for translations, and generates language files automatically—streamlining and accelerating your localization workflow."
readmeQualityOk: true
url: "https://github.com/jayeshmepani/laravel-gemini-translator"
homepage: "https://jayeshmepani.github.io/laravel-gemini-translator/"
language: "PHP"
languages: ["PHP"]
languagePcts: [75]
topics: ["ai-tools", "ai-translator", "artisan-command", "automation", "composer-package", "developer-tools", "gemini-ai", "google-gemini", "i18n", "language-files"]
stars: 70
forks: 4
openIssues: 0
closedIssues: 4
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2025-06-14T09:52:11Z"
lastCommitAt: "2026-08-17T04:11:29Z"
lastReleaseAt: "2026-04-28T12:18:34Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 67
undervaluedScore: 35
maintainers: ["jayeshmepani"]
openGraphImageUrl: "https://opengraph.githubassets.com/af640afd7fe25d3560a0715c32a01235cc19a69b20c2769b0534cee00d9a6872/jayeshmepani/laravel-gemini-translator"
fundingLinks: ["GITHUB:https://github.com/jayeshmepani", "CUSTOM:https://github.com/sponsors/jayeshmepani"]
discussionCount: 1
---

# Laravel Gemini AI Translation Extractor

An interactive Artisan command that scans your Laravel project for translation keys, translates them using Google's Gemini AI, and generates the necessary language files with advanced safety and performance features.

> **AI translations are a best-effort draft.** The package asks Gemini for the language you selected and rejects some mixed-script or leftover-English output, but it cannot guarantee a perfect, literal, or single-language result. Gemini can still mix writing systems, slip in another language, or return wording that is not what you expected (for example a Gujarati run that also contains Hindi, Kannada, or English). Review generated files before you ship them. In the Translation Manager, turn on **Highlight script faults**. Re-run `--refresh` or `--refresh-clean` for bad rows.

## 🚀 Key Features

- **AI-Powered Translation:** Uses Gemini AI with source text and per-locale script rules. Output is best-effort — review before production (see the notice above)
- **Translation Manager:** Browser UI at `/translations-manager` to browse, edit, save, scan, and add languages. Optional **Highlight script faults** checkbox marks cells…
