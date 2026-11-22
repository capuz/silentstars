---
repo: "lrstanley/context7-http"
name: "context7-http"
description: "Context7 MCP Server (with HTTP SSE and Streamable)"
readmeQualityOk: true
url: "https://github.com/lrstanley/context7-http"
language: "Go"
languages: ["Go"]
languagePcts: [87]
topics: ["llm", "mcp", "mcp-server", "vibe-coding"]
stars: 23
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-05-24T10:49:46Z"
lastCommitAt: "2026-11-22T11:46:29Z"
lastReleaseAt: "2026-03-31T04:44:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 58
undervaluedScore: 32
maintainers: ["lrstanley"]
openGraphImageUrl: "https://opengraph.githubassets.com/14549a3928aace28a0d0934efb9227508e531578ebb48ae1136bf69b671160da/lrstanley/context7-http"
fundingLinks: ["GITHUB:https://github.com/lrstanley"]
discussionCount: 0
---

## :link: Table of Contents

  - [Features](#sparkles-features)
  - [Usage](#gear-usage)
    - [VSCode, Cursor, etc](#vscode-cursor-etc)
    - [Container Images (ghcr)](#whale-container-images-ghcr)
  - [References](#books-references)
  - [Support &amp; Assistance](#raising_hand_man-support--assistance)
  - [Contributing](#handshake-contributing)
  - [License](#balance_scale-license)

## :sparkles: Features

**context7-http** is a MCP server that supports HTTP streaming for the [Context7](https://context7.com) project.
This allows you to utilize the MCP server from anywhere, without installing anything locally.

- HTTP `streamable` support.
- Provides `resolve-library-uri` and `search-library-docs` tools for finding libraries, and searching their documentation.

> **Warning**
>
> This server utilizes the `v1` variant of the Context7 API, which may eventually be
> removed by the Context7 team. Note that the `v2` API requires API keys, is drastically
> more ratelimited, and expanded use does require paying. [See here](https://context7.com/plans).

---

## :gear: Usage

If you'd like to run context7-http yourself, use the following:
