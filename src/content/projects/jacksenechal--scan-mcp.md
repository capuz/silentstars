---
repo: "jacksenechal/scan-mcp"
name: "scan-mcp"
description: "MCP server for scanning (image capture/multipage assembly)"
readmeQualityOk: true
url: "https://github.com/jacksenechal/scan-mcp"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["documents", "images", "linux", "mcp", "sane", "scanner"]
stars: 6
forks: 5
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 1
createdAt: "2025-09-11T05:11:02Z"
lastCommitAt: "2026-07-23T06:14:54Z"
lastReleaseAt: "2026-07-22T00:48:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "fork_magnet"]
healthScore: 90
undervaluedScore: 52
maintainers: ["jacksenechal", "github-actions[bot]", "dougborg"]
openGraphImageUrl: "https://opengraph.githubassets.com/6cd6a0e923af6800caa7ee8f8460c5646267cd7ccd0f6d0842256ee4c44672ab/jacksenechal/scan-mcp"
fundingLinks: ["GITHUB:https://github.com/jacksenechal"]
---

</p>

<h1 align="center">scan-mcp</h1>

Minimal MCP server for scanner capture (ADF/duplex/page-size), batching, and multipage assembly.

## Features

- Small, typed MCP server exposing tools for device discovery and scan jobs
- JSON Schema–validated inputs with deterministic, typed outputs
- Smart device selection (prefers ADF/duplex, avoids camera backends), robust defaults
- Local-first transports: stdio by default to keep everything on-device, optional HTTP for your own network deployments

Note: This package targets Node 22 and Linux SANE backends (`scanimage`).

## Quick Start (local stdio, default)

Add a server entry to your MCP client configuration:

```
{
  "mcpServers": {
    "scan": {
      "command": "npx",
      "args": [
        "-y",
        "scan-mcp"
      ],
      "env": {
        "INBOX_DIR": "~/Documents/scanned_documents/inbox"
      }
    }
  }
}
```

- This invocation runs over stdio for a privacy-first, single-machine setup.
- Call `start_scan_job` without a `device_id` to auto-select a scanner and begin scanning.
- Artifacts are written under `INBOX_DIR` per job: `job-*/page_*.tiff`, `doc_*.tiff`, `manifest.json`, `events.jsonl`. When…
