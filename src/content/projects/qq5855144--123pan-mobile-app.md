---
repo: "qq5855144/123pan-mobile-app"
name: "123pan-mobile-app"
description: "Third-party 123Pan Mobile Application (Android WebView)"
originalDescription: "第三方123云盘移动端应用（Android WebView）"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/qq5855144/123pan-mobile-app"
language: "Java"
languages: ["Java", "JavaScript"]
languagePcts: [41, 41]
stars: 28
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 6
createdAt: "2026-08-28T12:42:22Z"
lastCommitAt: "2026-09-19T08:13:46Z"
lastReleaseAt: "2026-09-19T08:14:22Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 79
undervaluedScore: 39
maintainers: ["qq5855144"]
openGraphImageUrl: "https://opengraph.githubassets.com/2729858a7f6a494fce207ef5d419f53c01412962db9bf217086af796e08ea47d/qq5855144/123pan-mobile-app"
---

# 123pan-mobile-app

A third-party mobile clone of 123Pan, built on **Android WebView wrapper + embedded web frontend** architecture.

## Technical Architecture

- **Dual-platform architecture**: WebView loads the embedded frontend from `assets/` (`index.html`/`style.css`/`app.js`), calls system capabilities through the native bridge (`MainActivity#NativeBridge`), and `PanProvider` provides FileProvider sharing.
- **Authentication**: The native layer initiates HTTP requests with `authorization` headers attached; multi-account credentials (tokens) are persisted locally, **switching accounts does not require re-login**, only falls back to the official login page when tokens are missing.
- **Build chain**: `aapt2` resource compilation/linking → `javac`(1.8) → `d8` → repackage `assets` → `zipalign` → `apksigner` formal signing.
- **Signature consistency**: Development and CI use the same formal keystore to ensure installation can overwrite previous versions.

## Directory Structure

```
app/src/main/
├── assets/              # Web frontend (index.html / style.css / app.js)
├── java/com/pan/mobile/ # Android source code (MainActivity / PanProvider)
├── res/                 # values /…
