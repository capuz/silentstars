---
repo: "Guksu/suta"
name: "suta"
description: "Reduce AI Slop in Design"
readmeQualityOk: true
url: "https://github.com/Guksu/suta"
homepage: "https://guksu.github.io/suta/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [71]
topics: ["accessibility", "agent-skills", "ai-slop", "claude-code", "codex", "frontend", "ui-design"]
stars: 18
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 9
createdAt: "2026-08-19T07:38:43Z"
lastCommitAt: "2026-11-16T04:28:34Z"
lastReleaseAt: "2026-11-15T02:39:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 50
maintainers: ["Guksu", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/80c8d6c9cdc99c5c5b463a26d300fcbe5a7eb4cc2b54fe86fc09772430066674/Guksu/suta"
---

# suta

A skill for Claude Code and Codex that helps them build React UI that works with a keyboard, returns focus where it should, doesn't overflow on small screens and respects reduced motion. It comes with 57 UI patterns you copy into your project and a check that runs after each edit.

[한국어](https://github.com/Guksu/suta/blob/HEAD/README.ko.md) · [Live demo](https://guksu.github.io/suta/) · [Install](#installation) · [Full guide](https://github.com/Guksu/suta/blob/HEAD/docs/guide.en.md)

## What you get

- **Rules for layout and interaction problems.** Keyboard access, focus moving into and back out of dialogs, overflow at 320–390px, text contrast and reduced motion. These apply even when the project has its own design system. suta's visual defaults (color, cards, screen structure) apply only to projects without a design standard; existing tokens and components are kept. New screens without a standard get conventions for 24 screen types and type sizes and fonts chosen by industry. When no screen type fits, the skeleton comes from the job the screen does (choosing, inspecting, entering, monitoring).
- **57 patterns.** Modal, bottom sheet, toast, dropdown, select, form inputs,…
