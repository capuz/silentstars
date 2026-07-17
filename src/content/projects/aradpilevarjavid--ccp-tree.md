---
repo: "AradPilevarJavid/ccp_tree"
name: "ccp_tree"
description: "ccp: Snapshot, blueprint, scaffold  you can instantly capture project structure & files to Markdown/.tree, then regenerate anywhere."
readmeQualityOk: true
url: "https://github.com/AradPilevarJavid/ccp_tree"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 9
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-19T20:54:20Z"
lastCommitAt: "2026-07-17T06:03:57Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 69
undervaluedScore: 30
maintainers: ["AradPilevarJavid"]
openGraphImageUrl: "https://opengraph.githubassets.com/21ea9a2ead25032fca6e76c0ff30530541a3a2360308f59d796d61c5a7c4080f/AradPilevarJavid/ccp_tree"
---

# ccp — Copy Project
(crate: `ccp_tree`)

> 📸 Snapshot · 📋 Blueprint · 🏗️ Scaffold  
> Capture a directory into a portable format and recreate it anywhere.

`ccp` is a command‑line tool I built for daily use. It turns a folder into a human‑readable, copy‑paste‑friendly **snapshot**, and that same snapshot back into a real directory tree. Written in Rust 🦀 with a lot of love ❤️.

- 📄 **Snapshot** a project to Markdown (full content + tree) or a concise `.tree` definition.
- 📋 **Blueprint** – a single file that represents your entire project structure and contents.
- 🏗️ **Scaffold** – recreate the layout with a single command; perfect for bootstrapping, sharing ideas, or feeding LLMs full context.

It’s built for quick pasting into chat windows, code reviews, bug reports, and for generating repeatable project templates. Kinda neat actually 😄.

</p>

---

## Features ✨

- 📄 **Markdown output** – full project tree + every file inside fenced code blocks.
- 🌲 **Tree‑only mode** (`--structure`) – just the directory hierarchy and structure.
- 🔁 **Reverse mode** – emit a `.tree` definition that can later be rebuilt.
- 🛠️ **Generate / Create** – turn a `.tree` definition (file,…
