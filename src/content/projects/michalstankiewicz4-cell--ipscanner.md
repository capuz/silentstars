---
repo: "michalstankiewicz4-cell/IPscanner"
name: "IPscanner"
description: "Just simple IP scanner in javascript"
readmeQualityOk: true
url: "https://github.com/michalstankiewicz4-cell/IPscanner"
homepage: "http://www.ipscanner.pl"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [73]
topics: ["ip", "ip-scanner", "ipscanner", "ipsec", "scanner", "osint", "osint-tool", "osint-tools", "powershell", "net"]
stars: 13
forks: 2
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-04-26T12:49:33Z"
lastCommitAt: "2026-07-13T06:37:04Z"
lastReleaseAt: "2026-05-15T17:49:27Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 98
undervaluedScore: 60
maintainers: ["michalstankiewicz4-cell", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/94ea39e18d1979161fb0b5892fb0f4673353469e1172f14321075a2183e16b95/michalstankiewicz4-cell/IPscanner"
discussionCount: 5
---

# OSINT NET Auditor

An amateur project made solely using vibe-coding for scientific purposes.

Desktop IP/port scanner application built with [Tauri](https://tauri.app/).

## Installation

### Ready-to-use installer (recommended)

1. Download the latest installer from the [Releases](https://github.com/michalstankiewicz4-cell/IPscanner/blob/HEAD/../../releases) tab:
   - `OSINT NET Auditor_x.x.x_x64_en-US.msi` — MSI installer (Windows)
   - `OSINT NET Auditor_x.x.x_x64-setup.exe` — NSIS installer (Windows)
2. Run the downloaded file and follow the installer instructions.
3. After installation, launch **OSINT NET Auditor** from the Start Menu or desktop shortcut.

### Build from source

**Requirements:**
- [Node.js](https://nodejs.org/) v18+
- [Rust](https://rustup.rs/) (stable)
- [Visual Studio Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/) (C++ components)

**Steps:**
```bash
git clone https://github.com/michalstankiewicz4-cell/IPscanner.git
cd IPscanner
npm install
npm run tauri:build
```

The built EXE and installers will appear in:
`src-tauri/target/release/bundle/`

### A note on antivirus false positives

Some antivirus engines flag the built…
