---
repo: "1000ttank/free-vpn-clash-aggregator"
name: "free-vpn-clash-aggregator"
description: "Automatically aggregates public GitHub nodes and generates Clash Verge subscription"
originalDescription: "自动聚合公开 GitHub 节点并生成 Clash Verge 订阅"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/1000ttank/free-vpn-clash-aggregator"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 7
forks: 19
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-08T13:55:39Z"
lastCommitAt: "2026-11-01T22:58:16Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 80
undervaluedScore: 61
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d51fd2cbf8495c93d4051ddb5ae7a879d99a741a070ab9f43b0fdbcdfcb3af03/1000ttank/free-vpn-clash-aggregator"
---

# Free VPN Clash Aggregator

This repository merges 10 public GitHub Clash/V2Ray node projects into a single Clash Meta configuration. Failing upstreams are isolated, nodes are deduplicated, and GitHub Actions re-fetches and commits the generated files every 15 minutes.

## Clash Verge Import

After the repository is published, replace `OWNER/REPO` below with your GitHub repository path, then paste this into the subscription manager in Clash Verge Rev:

```text
https://raw.githubusercontent.com/OWNER/REPO/main/output/clash.yaml
```

If the repository is public, this link automatically returns the latest configuration as Actions updates it. `output/source-status.json` shows whether each upstream's most recent fetch succeeded.

## Local Run

```bash
python -m venv .venv
.venv/Scripts/pip install -r requirements.txt
.venv/Scripts/python scripts/update.py
```

You can use `MAX_NODES=500` to cap the number of output nodes. It is recommended not to remove the cap, as an oversized configuration may affect Clash Verge startup and speed testing.

## Security and Compliance

These nodes come from unknown third-party public services and should not be treated as trustworthy VPNs. Do not log…
