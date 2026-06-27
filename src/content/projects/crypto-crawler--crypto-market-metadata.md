---
repo: "crypto-crawler/crypto-market-metadata"
name: "crypto-market-metadata"
description: "Scrape cryptocurrency markets metadata from exchanges everyday"
url: "https://github.com/crypto-crawler/crypto-market-metadata"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2021-11-04T12:44:35Z"
lastCommitAt: "2026-06-27T00:46:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 76
maintainers: ["actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/e47d0763c2f646f904c35b76c2dafb4253e9af512de4cc85c84093ed59023b27/crypto-crawler/crypto-market-metadata"
---

# crypto-market-metadata

Scrape cryptocurrency markets metadata from exchanges everyday.

## Data Schema

Each `.json` file under the `data` directory is a list of [`Market`](https://github.com/soulmachine/crypto-crawler-rs/blob/main/crypto-markets/src/market.rs#L28), sorted by `symbol` field.
