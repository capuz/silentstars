---
repo: "ookami0210/japan-travel-mcp"
name: "japan-travel-mcp"
description: "Comprehensive Japanese travel data for AI agents — 47 prefectures, 1,741 municipalities, multilingual content, all from public sources."
readmeQualityOk: true
url: "https://github.com/ookami0210/japan-travel-mcp"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
stars: 8
forks: 1
openIssues: 4
closedIssues: 3
watchers: 0
contributors: 22
recentReleases: 0
createdAt: "2026-04-25T15:17:37Z"
lastCommitAt: "2026-11-07T13:55:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 46
maintainers: ["web-flow"]
openGraphImageUrl: "https://opengraph.githubassets.com/9372a32bdd8a701da588a0a38a8ad9d08d1007e1bde5b95332b75eb42d7f88e7/ookami0210/japan-travel-mcp"
---

# Japan Travel MCP

> **Open Japanese tourism dataset + Model Context Protocol (MCP) server** —
> 13,394 tourist spots × 18 languages, about 20,000 accommodations, 690
> officially-designated cultural records (MAFF GI, METI traditional crafts,
> Japan Heritage, UNESCO ICH). **Free, no API key, no account.** All data is
> downloadable as JSON/JSONL from [Hugging Face](https://huggingface.co/datasets/open-travel/japan-travel-mcp-data).

## What you can do in 60 seconds

**1. Use it from any MCP client (Claude Desktop, Cursor, Windsurf):**

```json
{ "mcpServers": { "japan-travel": { "command": "npx", "args": ["-y", "japan-travel-mcp"] } } }
```

Then ask the model anything like "What's special about Tottori, in Russian?" — it gets an 18-language tourism description generated from factual information referenced to official Japanese public sources.

**2. Or grab the raw dataset for your own pipeline:**

```python
from huggingface_hub import snapshot_download
snapshot_download(repo_id="open-travel/japan-travel-mcp-data", repo_type="dataset")
```

**See also:** [🤗 Dataset card](https://huggingface.co/datasets/open-travel/japan-travel-mcp-data)

---

## Quick start (Claude Desktop)…
