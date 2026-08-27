---
repo: "SkillsCat/skillscat"
name: "skillscat"
description: "An open platform for discovering, sharing, and installing AI agent skills."
readmeQualityOk: true
url: "https://github.com/SkillsCat/skillscat"
homepage: "https://skills.cat"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [77]
topics: ["ai-agent-skills"]
stars: 42
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-03T18:30:50Z"
lastCommitAt: "2026-08-27T14:28:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 32
maintainers: ["backrunner"]
openGraphImageUrl: "https://opengraph.githubassets.com/d0107cd1e7884ca78bb54e165b05a483a6c798c3d283a99b85d4cae9adac7d30/SkillsCat/skillscat"
---

</p>

<h1 align="center">SkillsCat</h1>

  <strong>An open platform for discovering, publishing, and installing AI agent skills.</strong>
</p>

</p>

  |
  |
  |
  |
  |
</p>

## Why SkillsCat

SkillsCat is a Cloudflare-first registry and CLI for reusable AI agent skills.

- Discover public skills through the website, JSON registry APIs, and search tooling
- Publish private or public skills through native SkillsCat workflows
- Install full skill bundles, not just `SKILL.md`, into local agent directories
- Precompute search, recommendations, and ranking data with background workers
- Expose compatibility surfaces for ecosystems outside the native `skillscat` CLI

## What We Support

| Surface | What it does | Entry point |
| --- | --- | --- |
| Native SkillsCat registry | Search, inspect, install, publish, and manage skills via the website and `skillscat` CLI | `https://skills.cat/registry`, `https://skills.cat/api`, `npx skillscat ...` |
| Claude Code Marketplace feed | Exposes public GitHub-backed skills as Claude Marketplace-compatible plugins | `https://skills.cat/marketplace.json` |
| ClawHub-compatible registry | Lets `clawhub` CLI and OpenClaw clients discover, install,…
