---
repo: "ChesterTheCatt/meshy-ai-to-stl"
name: "meshy-ai-to-stl"
description: "an chrome extension made for you to download meshy ai STL in a quick way"
readmeQualityOk: true
url: "https://github.com/ChesterTheCatt/meshy-ai-to-stl"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [87]
stars: 43
forks: 8
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-06-22T22:13:41Z"
lastCommitAt: "2026-10-29T21:24:26Z"
lastReleaseAt: "2026-09-26T23:06:07Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 62
undervaluedScore: 14
maintainers: ["ChesterTheCatt"]
openGraphImageUrl: "https://opengraph.githubassets.com/b22e4a19460b9cccff816e6b14636de371b5adc3ababfdec99c60cc47c5b2f9e/ChesterTheCatt/meshy-ai-to-stl"
fundingLinks: ["KO_FI:https://ko-fi.com/chesterthecat"]
---

# Meshy To STL

Meshy To STL is a Chrome extension that finds `.meshy` files loaded by the current browser tab and converts them to STL, OBJ, or GLB files.

## Features

- Detects `.meshy` files from the current page network activity.
- Also checks browser resource entries from `performance.getEntriesByType("resource")`.
- Converts Meshy encrypted model files locally in the browser.
- Exports binary STL for 3D printing, OBJ for 3D editors, or the decoded GLB model.
- Does not commit Meshy's loader files to this repository.

## Installation

Before loading the extension, download the local decoder files:

### Windows

```powershell
cd C:\path\to\meshy-to-stl
powershell -ExecutionPolicy Bypass -File .\setup-vendor.ps1
```

### macOS or Linux

Open Terminal in the extracted project folder and run:

```bash
sh ./setup-vendor.sh
```

Then load the extension in Chrome:

1. Open `chrome://extensions`.
2. Enable `Developer mode`.
3. Click `Load unpacked`.
4. Select the project's `chrome-extension` folder.

## Usage

1. Open the page where the Meshy model is hosted.
2. Reload the page so the extension can capture network requests.
3. Click the Meshy To STL extension icon.
4. Select the…
