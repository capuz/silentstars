---
repo: "lexmount/browser-eval"
name: "browser-eval"
description: "Benchmarking Browsers and Web Tools for AI Agents. An evaluation harness for Browser Automation, and Web Fetch / Search / Extract / Scraping / Crawling."
readmeQualityOk: true
url: "https://github.com/lexmount/browser-eval"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["ai-agents", "browser-automation", "browser-benchmark", "headless-browser", "moli", "trajectory-replay", "web-fetch", "web-scraping", "agent-evaluation", "browser-use"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 85
watchers: 1
contributors: 5
recentReleases: 5
createdAt: "2026-08-31T10:57:31Z"
lastCommitAt: "2026-11-05T08:05:13Z"
lastReleaseAt: "2026-10-30T12:10:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 61
maintainers: ["lanyue-llk", "Maisiqi"]
openGraphImageUrl: "https://opengraph.githubassets.com/c62e5b00070a899c4b37ad36d7c21689c5293fdb3261c148ea9278d9a5cb0aa8/lexmount/browser-eval"
---

**English** · [简体中文](https://github.com/lexmount/browser-eval/blob/HEAD/docs/README.zh-CN.md)

[Quickstart](#quickstart) · [Tracks](#evaluation-tracks) · [Approach](#evaluation-approach) · [Reports](#reports) · [Datasets and code](#datasets-and-code) · [Versions](#versions) · [Contributing](https://github.com/lexmount/browser-eval/blob/HEAD/CONTRIBUTING.md)

Benchmark browsers and Web tools for AI agents through Web Fetch, Web Search and Browser Trajectory Replay. Compare correctness, latency, resource use and recorded cost. Optionally turn saved results into local reports you can inspect, rebuild and share, with drilldown to every individual result.

## Quickstart

Install [uv](https://docs.astral.sh/uv/getting-started/installation/), then run the offline example:

```sh
git clone https://github.com/lexmount/browser-eval.git
cd browser-eval
uv sync --frozen
uv run --frozen browser-harness-eval validate
uv run --frozen browser-harness-eval run --delay 0
```

Open the report path printed in the terminal. The example has one expected pass and one expected failure; it needs no browser, Docker or API key. Python 3.11 or newer is required; CI tests 3.11.

Next, [try HTTP, Moli or…
