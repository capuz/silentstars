---
repo: "Sdju/projector"
name: "projector"
description: "Local Linux application and project launcher with a GTK palette, web workspace and terminals"
originalDescription: "Local Linux application and project launcher with a GTK palette, web workspace and terminals"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/Sdju/projector"
language: "TypeScript"
languages: ["TypeScript", "JavaScript", "Vue"]
languagePcts: [52, 27, 21]
topics: ["gtk4", "launcher", "linux", "typescript", "vue"]
stars: 8
forks: 0
openIssues: 12
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-10-02T19:40:35Z"
lastCommitAt: "2026-11-15T11:20:03Z"
lastReleaseAt: "2026-11-08T10:23:01Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 44
maintainers: ["Sdju"]
openGraphImageUrl: "https://opengraph.githubassets.com/50833ccbaf084a9f17159139f9ee41a2cc73190bf90ec67f141fe5c8c5373dce/Sdju/projector"
---

# Projector

Projector is a local application for Linux, Windows and macOS that brings work on a project into one window: files, Git, Markdown, terminals, and graphical chats for Codex, Claude Code, OpenCode, Cursor and Kimi Code. Projects open by path and immediately become searchable, while launching applications and projects from any screen stays with the GTK palette. There is one server per machine: a repeated launch picks up the already running process.

> Warning! This is a personal project made for myself and only for myself. It solves my own pain points and replaces tools I find inconvenient. If you decide to install it, do so only at your own risk.

> Info! This is not an IDE in the usual sense; it sits between an IDE and an ADE. The focus is on reading, navigation and launching: files, commit snapshots, diff, terminals and agents. Code editing remains with the agent or another editor.

## How Projector differs

### The agent works through the same commands as the palette

Interface actions are registered as `ide.*` commands with clear names and hotkeys. Ctrl+Shift+P or F1 opens a palette with search across them. The same commands are seen and executed by Projector's…
