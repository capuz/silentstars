---
repo: "jacksenechal/scan-mcp"
name: "scan-mcp"
description: "MCP server for scanning (image capture/multipage assembly)"
readmeQualityOk: true
url: "https://github.com/jacksenechal/scan-mcp"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["documents", "images", "linux", "mcp", "sane", "scanner"]
stars: 6
forks: 5
openIssues: 3
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-09-11T05:11:02Z"
lastCommitAt: "2026-10-26T21:00:25Z"
lastReleaseAt: "2026-07-22T00:48:13Z"
status: "thriving"
tags: ["hidden_gem", "funded", "fork_magnet"]
healthScore: 62
undervaluedScore: 44
maintainers: ["jacksenechal", "dougborg", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/55d8b244a2e5989c8750c64aab370d7204e33712a5533e34d6be72db8684eeb1/jacksenechal/scan-mcp"
fundingLinks: ["GITHUB:https://github.com/jacksenechal"]
---

Minimal MCP server for scanner capture (ADF/duplex/page-size), batching, and multipage assembly.

## Features

- Small, typed MCP server exposing tools for device discovery and scan jobs
- zod-validated inputs; the JSON Schemas in `schemas/` document the contract and are contract-tested
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
- Artifacts are written under `INBOX_DIR` per job: `job-*/page_*.tiff`, `doc_*.tiff`, `manifest.json`, `events.jsonl`. When `crop_carrier_sheets` is…
