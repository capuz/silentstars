---
repo: "jeremiahseun/dongle"
name: "dongle"
description: "Fuzzy terminal directory navigation with zero config. Type a fragment, pick your destination, jump. Works with bash, zsh, and fish."
readmeQualityOk: true
url: "https://github.com/jeremiahseun/dongle"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [44, 44]
topics: ["cd", "command", "command-line", "command-line-tool", "commandline", "dongle", "github", "terminal"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-02-21T11:20:29Z"
lastCommitAt: "2026-10-23T12:05:02Z"
lastReleaseAt: "2026-05-05T10:11:50Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 73
undervaluedScore: 17
maintainers: ["jeremiahseun", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/17a7f2d04a01c5cf1d496a3fb0ec3e4d1820d55c5ccc26216a7912b6c1e41faa/jeremiahseun/dongle"
---

# Dongle ⚡

> **Instant (<2ms) native fuzzy directory navigation — for any terminal.**

No more \`cd ../../some/deep/nested/folder\`. Press \`/\` and search.

\`\`\`
  Project  ~/my-project  (42 dirs)
  / src comp
  ❯ ★ src/components/ui       │ 📁 ui (main)
      src/components/auth     │  2 dirs, 5 files · 📦 Node/TS
      src/components/forms    │   commit: feat: add button variants
      tests/components        │   ▸ buttons/
                              │   ▸ modals/
                              │   • Button.tsx
  ─────────────────────────────────────────────────────────
  ↑↓ nav  Enter cd  Tab actions  ^H/^L up/in  ^B pin  ^V preview  ^W ws  ^Y mkdir  Esc exit
```

Press **Enter** to jump there — or press **Tab** to open in Cursor/VS Code, reveal in Finder, copy the path, or create a folder on the fly.

---

## Demo

https://github.com/user-attachments/assets/6460e432-f732-4d4b-8324-1308ee36460c

---

## Install

### One command (recommended)

\`\`\`
curl -sSL https://raw.githubusercontent.com/jeremiahseun/dongle/main/install.sh > install_dongle.sh && bash install_dongle.sh && rm install_dongle.sh
\`\`\`

That's it. The installer:
- Compiles or downloads the **156 KB…
