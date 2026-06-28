---
repo: "eshaffer321/itemize"
name: "itemize"
description: "Automatically itemize and categorize retail transactions in Monarch Money"
url: "https://github.com/eshaffer321/itemize"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["amazon", "automation", "cli", "costco", "golang", "monarch-money", "personal-finance", "walmart"]
stars: 7
forks: 3
openIssues: 2
closedIssues: 3
watchers: 0
contributors: 4
recentReleases: 6
createdAt: "2025-09-01T03:32:43Z"
lastCommitAt: "2026-06-28T03:10:41Z"
lastReleaseAt: "2026-06-21T02:17:39Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 85
undervaluedScore: 75
maintainers: ["eshaffer321", "fnziman", "denniswalker"]
openGraphImageUrl: "https://opengraph.githubassets.com/1f626fa5a713b0f2bb60df5da3df1211e0d2caa89b031afff776991716209b6f/eshaffer321/itemize"
---

# Itemize

CLI tool that syncs purchases from Walmart, Costco, and Amazon with Monarch Money. Automatically splits transactions by category using AI.

## What it does

1. Fetches orders from retailers with item details
2. Matches them to transactions in Monarch Money
3. Categorizes items using an LLM (OpenAI or Anthropic Claude)
4. Splits the transaction by category with proportional tax

**Example**: A $150 Walmart transaction becomes:
- $104.57 Groceries (milk, bread, eggs...)
- $28.42 Household (paper towels, cleaning supplies)
- $17.32 Personal Care (shampoo, toothpaste)

## Setup

### Prerequisites

- Go 1.24+
- Monarch Money account
- An LLM API key — OpenAI or Anthropic (Claude)
- Retailer account(s)

### Install

```bash
git clone https://github.com/eshaffer321/itemize
cd itemize
go build -o itemize ./cmd/itemize/
```

### Configure

Set environment variables:
```bash
export MONARCH_TOKEN="your_monarch_token"

# Pick one LLM backend:
export OPENAI_API_KEY="your_openai_key"
# or
export ANTHROPIC_API_KEY="your_anthropic_key"
```

Or create `config.yaml`:
```yaml
monarch:
  api_key: "${MONARCH_TOKEN}"

openai:
  api_key: "${OPENAI_API_KEY}"
  model: "gpt-5.4-nano"

anthropic:…
