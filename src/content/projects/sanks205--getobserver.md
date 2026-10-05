---
repo: "sanks205/getobserver"
name: "getobserver"
description: "Finds what's wrong — and shows you the fix. Code, deps, config & infra — one offline scan, one report."
readmeQualityOk: true
url: "https://github.com/sanks205/getobserver"
homepage: "https://sanks205.github.io/getobserver/"
language: "Go"
languages: ["Go"]
languagePcts: [88]
topics: ["cli", "codeigniter", "devsecops", "laravel", "php", "sast", "scanner", "security", "appsec", "code-quality"]
stars: 15
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 7
createdAt: "2026-06-25T19:19:01Z"
lastCommitAt: "2026-10-05T10:46:59Z"
lastReleaseAt: "2026-09-23T11:06:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 77
undervaluedScore: 46
maintainers: ["sanks205"]
openGraphImageUrl: "https://opengraph.githubassets.com/d193e40209ef34a1c568901c759930b6faeb2e18681449d3fbd431dfb7699cdf/sanks205/getobserver"
discussionCount: 1
---

# Observer

**Finds what's wrong — and shows you the fix.**

*Code, dependencies, config, and infra — one scan, one report. Offline, single binary, no account.*

## ⬇️ Get Observer

Grab the single binary for your OS — no runtime, no dependencies, no account:

| Windows | macOS (Apple Silicon) | macOS (Intel) | Linux |
|:---:|:---:|:---:|:---:|
| [**Download**](https://github.com/sanks205/getobserver/releases/latest/download/observer_windows_amd64.exe) | [**Download**](https://github.com/sanks205/getobserver/releases/latest/download/observer_darwin_arm64) | [**Download**](https://github.com/sanks205/getobserver/releases/latest/download/observer_darwin_amd64) | [**Download**](https://github.com/sanks205/getobserver/releases/latest/download/observer_linux_amd64) |

Then point it at any project:

```bash
observer analyze . --out report.html

# Exclude project-specific generated or fixture directories by basename
observer analyze . --exclude-dir fixtures,generated --out report.html
```

You get **one self-contained `report.html`** — grouped findings, a standards-aligned Security Rating (A–E), and a suggested fix for every issue. Fully offline; open it in a browser or print to PDF.…
