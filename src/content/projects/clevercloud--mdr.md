---
repo: "CleverCloud/mdr"
name: "mdr"
description: "a very light rust based markdown reader with support of mermaid (web, native, TUI). vibe coded "
readmeQualityOk: true
url: "https://github.com/CleverCloud/mdr"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 483
forks: 29
openIssues: 9
closedIssues: 43
watchers: 2
contributors: 17
recentReleases: 0
createdAt: "2026-02-22T12:37:58Z"
lastCommitAt: "2026-09-07T08:35:19Z"
lastReleaseAt: "2026-05-20T14:11:53Z"
status: "thriving"
tags: []
healthScore: 84
undervaluedScore: 16
maintainers: ["waxzce", "njreid"]
openGraphImageUrl: "https://opengraph.githubassets.com/d60b786953a4e87826fc85eb7fedc9f36ca035a6f7100cd5a3cf8f869099d437/CleverCloud/mdr"
---

</p>

<h1 align="center">mdr — Markdown Reader</h1>

  A lightweight, fast Markdown viewer with Mermaid diagram support and live reload. Built in Rust.
</p>

## Why mdr?

**Built for the LLM era.** AI tools generate Markdown constantly — code documentation, technical specs, analysis reports — packed with diagrams, tables, and structured content. You need a fast way to read them.

Most developers end up previewing Markdown in VS Code, pasting into a browser, or squinting at raw text in the terminal. None of these handle Mermaid diagrams. None are instant. mdr is.

- **One command** — `mdr file.md` and you're reading, not editing
- **Native Rust binary** — no Electron, no Node.js, no npm, starts in milliseconds
- **Mermaid diagrams** — flowcharts, sequence diagrams, pie charts rendered as SVG natively (no headless browser)
- **Three backends** — full GUI (egui), native webview (WebKit/WebView2), or terminal UI (TUI) over SSH
- **Live reload** — edit your file or let your AI tool regenerate it, see changes instantly
- **In-document search** — Ctrl+F / `/` to find text across all backends
- **Fully keyboard-driven** — every backend quits, scrolls, searches and navigates from the…
