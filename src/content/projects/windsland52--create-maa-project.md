---
repo: "Windsland52/create-maa-project"
name: "create-maa-project"
description: "MaaFW project scaffolding CLI & MCP Server for interactively creating and incrementally maintaining Pipeline / Agent projects"
originalDescription: "MaaFW 项目脚手架 CLI & MCP Server，交互式创建与增量维护 Pipeline / Agent 项目"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Windsland52/create-maa-project"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [82]
topics: ["maafw", "scaffold", "ai-agent", "cli", "developer-tools", "mcp-server", "agent-skill"]
stars: 16
forks: 2
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-06-10T22:31:42Z"
lastCommitAt: "2026-11-17T11:21:39Z"
lastReleaseAt: "2026-07-14T15:25:22Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 47
maintainers: ["Windsland52", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b7e69972bb1cdd61a0385d588e21d82c1fd63eb89fbb9b5ded264794af829e4/Windsland52/create-maa-project"
---

# create-maa-project

[English](https://github.com/Windsland52/create-maa-project/blob/main/README.en.md) | Simplified Chinese

`create-maa-project` is the scaffolding CLI for [MaaFramework](https://github.com/MaaXYZ/MaaFramework) (MaaFW) application projects. Answer a few questions, and it generates a Pipeline or Python Agent project that you can commit and build directly. All choices made at creation are recorded in `maa-project.json` in the repository. Afterward, they are maintained through explicit `--sync`, `--add`, `--update`, and `--doctor` commands, so both humans and AI tools can read it and reproduce the same results.

AI coding agents are recommended to connect via [Agent Skill](#配合-agent-skill-使用): the agent reads the workflow guide, then directly calls the same CLI commands that human users use. The CLI also includes a built-in MCP stdio server as an alternative integration method, suitable for environments where the agent has no shell permission or needs permission control at the tool level. Both paths share the same write path, so behavior and rollback mechanisms stay consistent.

## Table of Contents

- [Capability Boundaries](#能力边界)
- [Install the CLI](#安装-cli)
-…
