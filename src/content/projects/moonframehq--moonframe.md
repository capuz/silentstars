---
repo: "moonframehq/moonframe"
name: "moonframe"
description: "The native desktop app factory: malleable apps in Rust and Luau that you or an agent reshape while they run."
readmeQualityOk: true
url: "https://github.com/moonframehq/moonframe"
homepage: "https://moonframe.dev"
language: "Rust"
languages: ["Rust", "Luau"]
languagePcts: [70, 21]
topics: ["coding-agents", "desktop-app", "gpui", "luau", "malleable-software", "moonframe", "native-app", "rust", "ui-framework", "webassembly"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-31T19:42:01Z"
lastCommitAt: "2026-11-11T19:44:32Z"
lastReleaseAt: "2026-11-11T00:08:16Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 63
maintainers: ["penso"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1441198486/20e8e5ff-fa69-4883-80eb-21256cba18ac"
---

A factory for native desktop apps you reshape while they run. Each app's
whole window is written in [Luau](https://luau.org). Rust checks the trees
it returns; [GPUI](https://www.gpui.rs) draws them by default, with
[Rune](https://github.com/anomalyco/rune) as an **experimental alternative**.
Both renderers use the same Luau. Every panel, split, toolbar and status bar
is a Luau file that reloads as you save,
with its state kept. Ask an agent for a change, or make it by hand, and the
running app reshapes itself, even from inside the app: its **Send feedback**
button hands what you write to a coding agent, which changes the app in front
of you.

Moonframe starts you off with an app of its own, ready to change, and builds
whole new ones beside it: each runs as a profile of its own and ships as a
standalone release. `examples/` holds 25 of them, from a mail client to an
infra console, all in one gallery with `just demo`. A Rust app can also use
Moonframe as a library.

## Gallery

## What you get

The features below describe the default GPUI build. See
[What draws the window](#what-draws-the-window) for Rune's current coverage
and how to try it.

- **A window laid out in Luau.** A…
