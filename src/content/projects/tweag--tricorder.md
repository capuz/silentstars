---
repo: "tweag/tricorder"
name: "tricorder"
description: "Tricorder provides simple, fast, focused feedback when hacking on Haskell (with or without LLM agents)."
readmeQualityOk: true
url: "https://github.com/tweag/tricorder"
language: "Haskell"
languages: ["Haskell"]
languagePcts: [95]
topics: ["agent", "cli", "developer-tools", "feedback-loop", "haskell", "llm", "tui"]
stars: 56
forks: 3
openIssues: 13
closedIssues: 66
watchers: 2
contributors: 19
recentReleases: 5
createdAt: "2026-04-07T10:38:54Z"
lastCommitAt: "2026-09-16T08:47:15Z"
lastReleaseAt: "2026-09-05T10:37:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 40
maintainers: ["Gipphe", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1203748195/52dee94b-c588-4067-99ee-6470e6dc3445"
---

# Tricorder

Tricorder aims to empower users developing programs with Haskell and LLM
coding agents. It does so by providing operations to surface the right
information required at a given stage: documentation, build status,
diagnostics, etc.

> ℹ️ More information about how to use `tricorder` can be found in [this presentation](https://youtu.be/vDmyl0ZJRF8?t=4815)
> for the Haskell Foundation's "Haskell and AI Workshop".

Like similar tools (`ghcid`, `ghciwatch`), it builds the code continuously on
every change, presents diagnostics, and runs the tests afterwards. However,
Tricorder offers other advantages:

- **Designed for humans** - A `tricorder ui` interactive TUI mode that presents
  stats in real time for developers.
- **Designed for agents** - A `SKILL` is provided to inform agentic usage via
  the `tricorder` CLI.
- **Background builds** - Building in the background using a daemon allows
  different clients to query the build state simultaneously without triggering
  multiple rebuilds. For instance, we ship the `tricorder ui` TUI and the
  `tricorder status` CLI command that communicate witha single daemon via a
  socket.
- **Sane defaults** - Running `tricorder start`…
