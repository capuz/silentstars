---
repo: "hakoniwalab/hakoniwa-business-pack"
name: "hakoniwa-business-pack"
description: "A catalog and recipe hub for composing Hakoniwa components with AI to turn user ideas into working demos and products."
readmeQualityOk: true
url: "https://github.com/hakoniwalab/hakoniwa-business-pack"
language: "Python"
languages: ["Python"]
languagePcts: [93]
stars: 5
forks: 3
openIssues: 14
closedIssues: 42
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-07-18T22:40:00Z"
lastCommitAt: "2026-08-20T04:07:00Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 61
maintainers: ["tmori", "ykikuchii", "comoc"]
openGraphImageUrl: "https://opengraph.githubassets.com/c157009da1b1daf1717c338d3a5165196fd373d3bb6e8ff2d8c9c25117ae0a7c/hakoniwalab/hakoniwa-business-pack"
---

# hakoniwa-business-pack

> **A catalog and recipe hub for composing Hakoniwa components with AI to turn user ideas into working demos and products.**

## 箱庭ビジネスパックの全体像

箱庭ビジネスパックは、ユーザーの要求を技術カタログと実行可能なレシピへ落とし込み、
箱庭上で異なる技術を構成・実行・検証するための知識基盤です。
実行と評価から得られた知見を Catalog、Recipe、Use Case へ継続的に還流し、
接続の選択肢と実現できる価値を育てていきます。

> 初めて利用する方は [`docs/getting-started-ja.md`](https://github.com/hakoniwalab/hakoniwa-business-pack/blob/HEAD/docs/getting-started-ja.md) から始めてください。環境構築から最初の Recipe 実行までを説明しています。

## AI Bootstrap Prompt

If you are an AI agent, do not summarize this repository after reading only this
README.

Before answering that you understand `hakoniwa-business-pack`, read these files
in order:

1. `AGENTS.md`
2. `docs/hakoniwa-base-ecosystem-ja.md`
3. `docs/hakoniwa-component-asset-guide-ja.md`
4. `catalog/index.yaml`
5. `catalog/schema.yaml`
6. `docs/hakoniwa-runtime-primer.md`
7. relevant `catalog/components/*.yaml`
8. `recipes/README.md`
9. relevant `recipes/examples/*.yaml`
10. `foundation/README.md` for Foundation-aware local execution
11. `docs/hakoniwa-workspace-environment-ja.md` for the managed process environment

The documents have different responsibilities:

- **Base…
