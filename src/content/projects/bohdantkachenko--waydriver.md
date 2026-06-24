---
repo: "BohdanTkachenko/waydriver"
name: "waydriver"
description: "A Rust library for headless GUI application testing on Wayland. Launches apps in isolated compositor sessions, interacts with them via AT-SPI accessibility APIs, and captures screenshots and WebM video via PipeWire."
url: "https://github.com/BohdanTkachenko/waydriver"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
stars: 10
forks: 0
openIssues: 0
closedIssues: 19
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-04-06T01:41:52Z"
lastCommitAt: "2026-06-24T00:20:44Z"
lastReleaseAt: "2026-04-16T01:11:30Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 58
maintainers: ["BohdanTkachenko", "claude", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/719436f70b74a83233f97f11283ac94f5c06f5b41a9430f1e4a7a1b2795a7d92/BohdanTkachenko/waydriver"
discussionCount: 0
---

# WayDriver

**Headless GUI application testing on Wayland.** WayDriver launches GTK apps in isolated, headless compositor sessions, drives them through the AT-SPI accessibility tree, and captures screenshots and WebM video via PipeWire — no physical display required.

It comes in two forms:

- **[`waydriver`](https://crates.io/crates/waydriver)** — a Rust library for writing headless GUI tests.
- **`waydriver-mcp`** — a standalone [Model Context Protocol](https://modelcontextprotocol.io) server that lets AI assistants (Claude Code, Claude Desktop, …) drive GTK4 apps directly.

> 📖 **Full documentation — guides, API reference, and architecture notes — lives at [waydriver.io](https://waydriver.io).**

## Demo

The clip below is the full output of the [`gnome_calculator` example](crates/waydriver-examples/examples/gnome_calculator.rs) (`cargo run -p waydriver-examples --example gnome_calculator`): a session lifecycle, AT-SPI button clicks, keyboard chords, a typed unit conversion, and per-step verification via XPath locators — recorded by WayDriver itself via PipeWire.

<video src="https://github.com/user-attachments/assets/96480250-0e78-4cd7-8228-d5e0620b4ca1" controls…
