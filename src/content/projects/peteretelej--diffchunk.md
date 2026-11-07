---
repo: "peteretelej/diffchunk"
name: "diffchunk"
description: "MCP server for chunking and navigating large diff files in AI-assisted code review. Empowers your AI Code Reviewer to better work on large changes."
readmeQualityOk: true
url: "https://github.com/peteretelej/diffchunk"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["code-review", "diff-analysis", "agents", "mcp", "mcp-servers", "ai", "diff"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-06-26T11:48:31Z"
lastCommitAt: "2026-11-07T13:55:33Z"
lastReleaseAt: "2026-03-15T10:50:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 44
maintainers: ["dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/342df35064645369de3bb9940c5a16dc957eee86ca3e2ef783b8eb3621f0001d/peteretelej/diffchunk"
---

# diffchunk

MCP server that enables LLMs to navigate large diff files efficiently. Instead of reading entire diffs sequentially, LLMs can jump directly to relevant changes using pattern-based navigation.

## Problem

Large diffs exceed LLM context limits and waste tokens on irrelevant changes. A 50k+ line diff can't be processed directly and manual splitting loses file relationships.

## Solution

MCP server with 5 navigation tools:

- `load_diff` - Parse diff file with custom settings (optional)
- `list_chunks` - Show chunk overview with file mappings and per-file line counts (auto-loads)
- `get_chunk` - Retrieve specific chunk content (auto-loads)
- `find_chunks_for_files` - Locate chunks by file patterns (auto-loads)
- `get_file_diff` - Extract the complete diff for a single file (auto-loads)

## Setup

**Prerequisite:** Install [uv](https://docs.astral.sh/uv/getting-started/installation/) (an extremely fast Python package manager) which provides the `uvx` command.

Add to your MCP client configuration:

```json
{
  "mcpServers": {
    "diffchunk": {
      "command": "uvx",
      "args": ["--from", "diffchunk", "diffchunk-mcp"]
    }
  }
}
```

## Usage

Your AI assistant can…
