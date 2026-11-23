---
repo: "coucya/mcp-server-requests"
name: "mcp-server-requests"
description: "Web Content Retrieval (full webpage, filtered content, or Markdown-converted), Custom User-Agent, Multi-HTTP Method Support (GET/POST/PUT/DELETE/PATCH), LLM-Controlled Request Headers, LLM-Accessible Response Headers, and more."
readmeQualityOk: true
url: "https://github.com/coucya/mcp-server-requests"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["crawler", "fatch", "llm", "mcp", "modelcontextprotocol", "requests", "spider", "web", "webpage"]
stars: 7
forks: 3
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-04-02T07:14:21Z"
lastCommitAt: "2026-11-19T15:51:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 54
maintainers: ["coucya"]
openGraphImageUrl: "https://opengraph.githubassets.com/d4e74dc8e880565751903642168767b580cf29da3356b4f768ce15a4387e5fb3/coucya/mcp-server-requests"
---

[中文](https://github.com/coucya/mcp-server-requests/blob/HEAD/README-zh.md)

-----

# mcp-server-requests

An MCP server that provides HTTP request capabilities, enabling LLMs to fetch and process web content.

## Features

- **fetch**: Web content fetching tool
  - Supports converting web content to Markdown format
  - Supports filtering web content (non-visual elements like script, style, meta)
  - Feeds into LLM context, reducing token consumption through Markdown conversion or filtering non-visual elements
- **fetch_to_file**: Web content saving tool
  - Disabled by default; enable it with `--enable-fetch-to-file`
  - File writes are limited to the configured writable directories, controlled by `--workspace` and `--writable-dir`
  - Web content is not fed into LLM context, avoiding excessive token consumption
- **http_request**: Generic HTTP request tool
  - Full HTTP method support (GET, POST, PUT, PATCH, DELETE)
  - Supports custom request headers
  - Supports text and JSON request bodies
  - Returns complete HTTP response information (status, headers, body) for LLMs
- Supports custom User-Agent
- Supports random User-Agent generation
