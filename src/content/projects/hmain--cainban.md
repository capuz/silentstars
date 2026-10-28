---
repo: "hmain/cainban"
name: "cainban"
description: "Cainban (c-AI-nban): Command line kanban with integrated MCP server"
readmeQualityOk: true
url: "https://github.com/hmain/cainban"
homepage: "https://cainban.com"
language: "Go"
languages: ["Go"]
languagePcts: [87]
topics: ["cli", "kanban", "kanban-application", "kanban-board", "kanban-board-application", "mcp", "mcp-server", "tui"]
stars: 7
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2025-09-09T16:47:40Z"
lastCommitAt: "2026-10-28T09:58:02Z"
lastReleaseAt: "2026-10-19T19:20:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 91
maintainers: ["hmain"]
openGraphImageUrl: "https://opengraph.githubassets.com/9084adb962984f872578f1dd7df653a54d6f0d52039adaa19378e8daaa6fa465/hmain/cainban"
---

# cainban

cainban (c-AI-nban) is a kanban board you drive entirely from the command line. Use it for a todo list, your daily tasks, or a personal backlog.

It also gives AI coding agents a task backend over MCP, so an agent can break a project into small tasks and work through them one at a time.

## Overview

Everything cainban does works from the CLI, no GUI needed. There's a terminal UI (`cainban tui`) with viewport scrolling for large boards when you want one, and a built-in MCP server so AI tools can read and change the board.

It runs two ways from one codebase, chosen at runtime by `CAINBAN_BACKEND`: local SQLite for the CLI/TUI, and a serverless DynamoDB path for the AWS Lambda deployment. The serverless side is multi-user — a stateless MCP server on Lambda behind an API Gateway HTTP API, with per-repo tenancy and GitHub-only auth: you sign in with GitHub, and a GitHub App decides which repos you can touch. See [Serverless deployment](#serverless-deployment) and [`infra/README.md`](https://github.com/hmain/cainban/blob/HEAD/infra/README.md).

## Getting started

### Install

The quickest path is a pre-built binary. Download the latest release for your platform from…
