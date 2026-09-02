---
repo: "Narek-D8v/arduino-web-compiler"
name: "arduino-web-compiler"
description: "🚀 A free Cloud IDE for Arduino & ESP32. Write code in the browser, compile remotely via GitHub Actions, and flash firmware directly to your board using the Web Serial API. Supports multi-file projects, library management, and live build logs."
readmeQualityOk: true
url: "https://github.com/Narek-D8v/arduino-web-compiler"
homepage: "https://arduino-web-compiler.vercel.app"
language: "HTML"
languages: ["HTML"]
languagePcts: [89]
topics: ["arduino", "arduino-cli", "cloud-ide", "diy-electronics", "embedded-development", "esp32", "github-actions", "serverless", "vercel", "web-compiler"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-05-01T19:06:19Z"
lastCommitAt: "2026-09-02T08:05:50Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 52
maintainers: ["Narek-D8v", "actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/29354969cf9e0b49a3c7808b2a80b9d5287948757b0491545a66fb5b3e7f613b/Narek-D8v/arduino-web-compiler"
---

# Arduino Web Compiler

Browser-based Arduino IDE with remote compilation through Vercel Serverless Functions and GitHub Actions.

Write Arduino / ESP32 sketches in the browser, attach extra project files, compile them in GitHub Actions, and flash the generated firmware from the web UI — no local IDE required.

## Features

**Editor**
- Monaco code editor with Arduino snippets, syntax highlighting, and autocomplete.
- Editor settings overlay: font size, tab size, word wrap, line numbers, minimap toggle.
- Auto-format code (`Ctrl+Shift+F`) — normalises braces, spacing, and trailing whitespace.
- Keyboard shortcuts dialog (`Ctrl+/`) with all editor and app hotkeys.
- Lightweight pre-compile diagnostics for common syntax mistakes.

**Compilation**
- Remote compile using `arduino-cli` inside GitHub Actions.
- Board selector: Arduino Uno, Nano, Mega, ESP32, ESP32-S3, ESP32-C3.
- Live GitHub Actions build progress in the web UI with per-step status.
- Build cancellation — stop an in-progress compile from the UI.
- Compile error parsing — on build failure, logs are fetched and parsed into Monaco markers and a Problems panel with file/line/message.

**Project Management**
- Extra project…
