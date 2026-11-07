---
repo: "Lance0901/AI-TwinCAT-Skill"
name: "AI-TwinCAT-Skill"
description: "PowerShell module for AI-driven TwinCAT 3 automation — 34 cmdlets for IDE control, PLC build/deploy, ADS read/write, and automated testing with zero dialog popups"
readmeQualityOk: true
url: "https://github.com/Lance0901/AI-TwinCAT-Skill"
language: "PowerShell"
languages: ["PowerShell"]
languagePcts: [88]
stars: 18
forks: 2
openIssues: 10
closedIssues: 88
watchers: 0
contributors: 3
recentReleases: 5
createdAt: "2026-03-28T19:19:05Z"
lastCommitAt: "2026-11-07T22:51:45Z"
lastReleaseAt: "2026-11-01T06:52:09Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 98
undervaluedScore: 56
maintainers: ["Lance0901"]
openGraphImageUrl: "https://opengraph.githubassets.com/c9c5235b82f42c82e1962625986d92f92d7d19dd959e6fa120f09612ffb71b1f/Lance0901/AI-TwinCAT-Skill"
---

[繁體中文](https://github.com/Lance0901/AI-TwinCAT-Skill/blob/HEAD/README.zh-TW.md) | English

# AI TwinCAT Skill

A PowerShell module that lets **any AI coding tool** (Claude Code, Codex, Antigravity, etc.) fully automate TwinCAT 3 IDE and PLC runtime — from project creation to live testing — with zero dialog popups.

## Why

TwinCAT 3 has a powerful COM-based Automation Interface, but it's notoriously hard to script: modal dialogs block automation, COM type conflicts crash PowerShell, and the lifecycle has undocumented ordering requirements. This module solves all of that, providing 82 cmdlets that any AI tool can call to build, deploy, and test PLC programs autonomously.

## Install (MCP server)

The module runs as the **TcAuto MCP server** for Claude Code, Claude Desktop and Codex. Needs Windows 10/11 and TwinCAT 3.1 XAE (4024 or 4026); a customer PC does **not** need Node.js or git. The client is registered once with a small launcher installed in `%LOCALAPPDATA%\TwinCATAutomation\`; new versions are switched in with the MCP tool `ReloadRuntime`, no client restart. Full guide: [docs/setup-mcp.md](https://github.com/Lance0901/AI-TwinCAT-Skill/blob/HEAD/docs/setup-mcp.md).

###…
