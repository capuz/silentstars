---
repo: "meshy-dev/meshy-3d-agent"
name: "meshy-3d-agent"
description: "AI agent skills for Meshy AI 3D generation platform"
readmeQualityOk: true
url: "https://github.com/meshy-dev/meshy-3d-agent"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [86]
topics: ["3d-generation", "agent-skills", "ai", "claude-code-skills", "claude-skills", "cursor-skills", "meshy", "skill-md", "text-to-3d", "image-to-3d"]
stars: 107
forks: 26
openIssues: 3
closedIssues: 1
watchers: 0
contributors: 7
recentReleases: 7
createdAt: "2026-03-17T05:38:34Z"
lastCommitAt: "2026-11-06T02:44:08Z"
lastReleaseAt: "2026-11-06T02:44:39Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 78
undervaluedScore: 35
maintainers: ["serafin-meshy", "Arlieeee", "raybobo"]
openGraphImageUrl: "https://opengraph.githubassets.com/c808584160fb103175e3bf826d9035754eb85a2c956decf29a85a68ece993a5b/meshy-dev/meshy-3d-agent"
---

# Meshy 3D Agent

Meshy skills for creating digital assets and preparing 3D prints. All three skills drive
**Meshy CLI 0.8** (0.8.3 or later, `meshy`) on **Node.js 22.12+**. They are instructions and references only —
no bundled runtime scripts. Current release: **0.9.4**.

**Requires a paid Meshy plan (Pro or above),** and generation spends Meshy credits. Sign in with
your Meshy account; no API key needed. A Free account can sign in, but creating tasks is refused
(HTTP 402 `plan_upgrade_required`, CLI exit 9). Plans and prices: <https://www.meshy.ai/pricing>.

## Let your agent install it

Paste this into Claude Code, Codex, Cursor, OpenClaw, Hermes Agent, Meta Muse or another agent:

> Help me install Meshy CLI and the meshy-3d-agent skills:
> https://raw.githubusercontent.com/meshy-dev/meshy-3d-agent/main/INSTALL.md

[INSTALL.md](https://github.com/meshy-dev/meshy-3d-agent/blob/HEAD/INSTALL.md) walks the agent through the CLI, the skills for its host and one
browser sign-in.

## Start by asking for what you want

Once installed, say the thing, in your own words:

> Turn this photo into a textured GLB and save it to `./assets/chest.glb`. Set it up if it
> isn't yet.

The agent…
