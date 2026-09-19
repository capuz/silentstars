---
repo: "LionSR/TeXRA"
name: "TeXRA"
description: "TeXRA — an AI theorist (math, physics, computer science). VS Code extension and terminal CLI."
readmeQualityOk: true
url: "https://github.com/LionSR/TeXRA"
homepage: "https://texra.ai"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
stars: 31
forks: 2
openIssues: 72
closedIssues: 3448
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2024-05-11T14:29:48Z"
lastCommitAt: "2026-09-19T02:47:20Z"
lastReleaseAt: "2024-08-21T08:15:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 100
undervaluedScore: 62
maintainers: ["LionSR", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9447f0c3015b05f955d98215976f68c3fef70ae13976875b627062fad593897d/LionSR/TeXRA"
fundingLinks: ["GITHUB:https://github.com/texra-ai", "CUSTOM:https://buymeacoffee.com/texra.ai"]
---

# TeXRA

An open-source AI theorist for VS Code and the terminal. It attempts real
theory work: deriving results, checking derivations, formalizing proofs in
Lean 4. It takes on open problems in long autonomous runs, with a team of
specialist agents. Apache 2.0, and you bring your own model keys or
subscriptions.

Development on `main` targets **TeXRA 1.0**, with a redesigned interface
organized around **projects** and a breaking change to stored application
state. Version 1.0 will start with fresh state; it will not migrate previous
JSON-based settings, session histories, or execution checkpoints. Existing
research files are outside this storage change. The implementation follows
the [1.0 development direction](https://github.com/LionSR/TeXRA/blob/HEAD/AGENTS.md#texra-10-direction), using SQLite
for application state and Effect for asynchronous execution. This describes
work in progress, not the currently published release.

## Install

```sh
# VS Code (or Cursor, Windsurf, Antigravity)
code --install-extension texra-ai.texra

# Terminal: requires Node.js 22.19.0 or later in 22.x, or Node.js 24 or later
npm install -g @texra-ai/cli

# Or via Homebrew (macOS / Linux)
brew install…
