---
repo: "obs-rust/obs-studio"
name: "obs-studio"
description: "OBS-STUDIO-RUST is an independent fork of obsproject/obs-studio with all the problems fixed. want to have maintainer privledges? File an issue and tag @zackees"
readmeQualityOk: true
url: "https://github.com/obs-rust/obs-studio"
language: "C"
languages: ["C", "Rust"]
languagePcts: [40, 34]
stars: 113
forks: 22
openIssues: 104
closedIssues: 1314
watchers: 3
contributors: 694
recentReleases: 10
createdAt: "2026-10-08T05:06:55Z"
lastCommitAt: "2026-11-04T08:00:46Z"
lastReleaseAt: "2026-10-22T12:18:00Z"
status: "thriving"
tags: ["funded", "release_machine", "community_hub"]
healthScore: 98
undervaluedScore: 37
maintainers: ["zackees", "rdoupe", "vpacher"]
openGraphImageUrl: "https://opengraph.githubassets.com/8c39a944f3f3d410279df60d737b21d4b20a7295abb42de1bc799b8ec9a134ac/obs-rust/obs-studio"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/obsproject", "PATREON:https://patreon.com/obsproject"]
discussionCount: 25
---

# obs-studio-rust

> [!IMPORTANT]
> **We’re unifying OBS into one hybrid Rust/C/C++ build.**
> Prioritize migrating code to Rust and retiring the C/C++ implementations it replaces.
> Each completed port becomes part of the application, with compatibility and parity
> checks supporting the transition.

This is an independent rewrite of the obsproject's obs-studio.

Same obs studio, but without the bugs. AI generated issues and PRs welcome.

Got an idea? [Start a conversation](https://github.com/obs-rust/obs-studio/discussions).

**Want to help port OBS to Rust?** Paste this into your AI agent:

```bash
PROMPT="/loop 10m https://raw.githubusercontent.com/obs-rust/obs-studio/refs/heads/master/.claude/skills/obs-worker/SKILL.md"
claude --dangerously-skip-permissions "$PROMPT"
```

Using another agent? Paste this instead:

```text
You are a worker in obs-rust/obs-studio, the Rust rewrite of OBS Studio.
Take exactly one issue from claim to an open pull request, then stop.
1. Clone https://github.com/obs-rust/obs-studio if you are not in it.
   Read AGENTS.md, then .claude/skills/obs-worker/SKILL.md, and follow it.
   It sends you to docs/rust-port/coordination.md and…
