---
repo: "Prastavna/leetcode-compensation"
name: "leetcode-compensation"
description: "Near real-time LeetCode compensation insights for India"
readmeQualityOk: true
url: "https://github.com/Prastavna/leetcode-compensation"
homepage: "https://prastavna.github.io/leetcode-compensation/"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [50, 33]
topics: ["leetcode"]
stars: 5
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2025-08-03T18:29:18Z"
lastCommitAt: "2026-10-24T00:15:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 86
maintainers: ["ssahillppatell"]
openGraphImageUrl: "https://opengraph.githubassets.com/c3f1ba508248dbff7f28eb319e880596b10202bb9fb3ed7107871bd15dd300cf/Prastavna/leetcode-compensation"
---

**[LeetCode Compensation](https://prastavna.github.io/leetcode-compensation)** is a tool that helps you find **Software Engineer Salary in India** by:

- Fetching compensation data from Leetcode forums using GraphQL API
- Automated weekly updates through GitHub Actions
- Using LLMs (free models via [OpenRouter](https://openrouter.ai)) for parsing and sanitizing structured data from posts
- Intelligent data processing with mapping and aggregation
- Automatic cleanup to maintain data quality and file sizes

> [!WARNING]
> A 5-day data refresh delay allows the votes to accumulate, after that posts with negative votes are dropped.

> [!NOTE]
> This project started as a fork of [LeetCode Compensation](https://github.com/kuutsav/leetcode-compensation)

## Getting Started

### Prerequisites

Install [uv](https://github.com/astral-sh/uv) - a fast Python package manager:

```shell
# On macOS and Linux
curl -LsSf https://astral.sh/uv/install.sh | sh

# On Windows
powershell -c "irm https://astral.sh/uv/install.ps1 | iex"

# Or via pip
pip install uv
```

### Setup

1. **Clone the repository:**
   ```shell
   git clone https://github.com/prastavna/leetcode-compensation.git
   cd…
