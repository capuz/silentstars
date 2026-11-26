---
repo: "astral-app/astral"
name: "astral"
description: "🌌 Native client mod for Discord on iOS and Android, with Lua plugins."
readmeQualityOk: true
url: "https://github.com/astral-app/astral"
language: "Rust"
languages: ["Rust"]
languagePcts: [65]
topics: ["android", "discord", "ios", "mod", "phoenix", "rust"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-11-22T01:22:02Z"
lastCommitAt: "2026-11-26T15:23:25Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 46
maintainers: ["castdrian", "marioparaschiv"]
openGraphImageUrl: "https://opengraph.githubassets.com/5311bfabbd11afe9288c0004c9380f401b57f1de6b69aad3c8658d3582bfd19b/astral-app/astral"
---

Lua plugins, themes, icon packs and emoji packs, drawn by Discord's own components.

**[Plugins](https://github.com/astral-app/astral/blob/HEAD/packages/addons/plugins/README.md)** · [Plugin API](https://github.com/astral-app/astral/blob/HEAD/docs/plugins.md) · [Roadmap](https://github.com/astral-app/astral/blob/HEAD/docs/roadmap.md)

## Contents

- **For Users:** [What Is astral?](#what-is-astral) · [Features](#features) · [Installation](#installation)
- **For Developers:** [Writing Plugins](#writing-plugins) · [Developing astral](#developing-astral) · [Architecture](#architecture)
- **Project:** [Contributing](#contributing) · [Acknowledgements](#acknowledgements) · [Star History](#star-history)

## For Users

### What Is astral?

astral mods Discord's Phoenix engine. It rewrites the UI batches Discord's Rust guest sends to the native host, so everything it adds is a real Discord component.

Jailed and jailbroken installs run the same path. The one piece of code it patches is Phoenix's access gate, so accounts outside Discord's test group can open Phoenix too. Plugins are sandboxed Lua, so a plugin cannot crash Discord.
