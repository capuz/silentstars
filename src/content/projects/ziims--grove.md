---
repo: "ZiiMs/Grove"
name: "Grove"
description: "Grove allows you to run multiple AI coding agents simultaneously, each working on its own git branch in an isolated worktree. Monitor their progress, attach to their terminal sessions, and integrate with your existing tools."
readmeQualityOk: true
url: "https://github.com/ZiiMs/Grove"
homepage: "https://grove.ziim.dev/"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [60, 34]
stars: 24
forks: 7
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-24T21:16:32Z"
lastCommitAt: "2026-10-29T05:49:36Z"
lastReleaseAt: "2026-02-28T00:01:13Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 47
maintainers: ["ZiiMs"]
openGraphImageUrl: "https://opengraph.githubassets.com/c74d54772966010fa2ab6188d30f8671452a232f943570d0c0f00c0841f6f68a/ZiiMs/Grove"
---

# Grove

One desktop home for every AI coding model — with the project's intent, not just its chat, kept in
view.

Grove talks to Anthropic, OpenAI, Google, OpenRouter and OpenCode Go directly: pick a provider, a
model and an API key, and Grove runs the agent itself. Around that loop sits the layer each vendor leaves out: a skill
catalog, a spec graph, a TODO plan that survives restarts, a git/PR panel, and an MCP server viewer.

- Intent of record: `goal-and-requirements.md`
- How it is built: `architecture.md`, with changed decisions in `docs/adr/`
- Terms used by the code: `GLOSSARY.md`
- Why providers replaced harnesses: `docs/adr/0003-providers-replace-harnesses.md`

## Status

First build, feature-complete and hardened. All fifteen tickets in `.scratch/grove/issues/` are
`done`; the dependency graph is in `.scratch/grove/spec.md`. The redesigned shell from
`design-reference/` is now the production UI: a project tree, an always-mounted conversation, a Git ·
Plan · Spec context column, and a settings sheet with seven themes. The decision record is
`docs/adr/0002-workspace-projects-and-the-redesigned-shell.md`. The gates below are run locally —
there is no CI — and the manual…
