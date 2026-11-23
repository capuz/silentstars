---
repo: "Deltologic/datadoe-ai-skills"
name: "datadoe-ai-skills"
description: "AI skills that take a coding agent from one prompt to a working Amazon app on DataDoe"
readmeQualityOk: true
url: "https://github.com/Deltologic/datadoe-ai-skills"
homepage: "https://www.datadoe.com/hub/ai-agents-and-skills"
language: "HTML"
languages: ["HTML"]
languagePcts: [77]
stars: 8
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 10
recentReleases: 0
createdAt: "2026-04-14T07:42:02Z"
lastCommitAt: "2026-11-23T13:28:52Z"
lastReleaseAt: "2026-05-12T09:55:14Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 63
maintainers: ["PatrykRadomDL", "jakubriegel", "RaffyKumruyan"]
openGraphImageUrl: "https://opengraph.githubassets.com/b90c9aa9fc0d75b1d41b21b8e2ebf80874fec417513fabd663659519898d1973/Deltologic/datadoe-ai-skills"
---

# DataDoe AI Skills

Public library of reusable AI skills that help users go from **one prompt to a working MVP/PoC app** powered by the DataDoe API.

Each skill is a practical blueprint you can use in coding agents (for example Cursor, Codex, Claude Code, Aider) to scaffold a ready-to-run application flow.

Most skills run in any MCP client (Claude, ChatGPT, Cursor, Claude Code) against the DataDoe MCP server; a few scaffold full apps via the DataDoe REST API. The **Interface** column below tells you which each skill needs.

## Purpose

- Provide ready-made skill instructions for building DataDoe-powered apps quickly.
- Standardize how AI agents generate apps that integrate with the DataDoe API.
- Reduce time from idea to first working prototype.

## How To Use

1. Pick a skill from the `skills/` directory.
2. Open its `SKILL.md` file.
3. In your coding agent, ask it to build the app using that skill.
4. Follow the generated setup steps (environment variables, API key, run commands).
5. Run and iterate on the generated MVP/PoC.
