---
repo: "noshiro-pf/mono"
name: "mono"
description: "monorepo for TypeScript projects"
readmeQualityOk: true
url: "https://github.com/noshiro-pf/mono"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
stars: 6
forks: 0
openIssues: 12
closedIssues: 7
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2020-08-05T13:50:53Z"
lastCommitAt: "2026-09-04T08:09:18Z"
lastReleaseAt: "2026-08-10T19:35:09Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded", "release_machine"]
healthScore: 87
undervaluedScore: 75
maintainers: ["noshiro-pf", "noshiro-repo-automation-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4574e6ddbe509268bd3ceee329f7e9fe7a2472c1d937ead899dfa3b8aff2c057/noshiro-pf/mono"
fundingLinks: ["GITHUB:https://github.com/noshiro-pf"]
---

# mono

A monorepo for TypeScript projects: published libraries, applications, internal
tooling, and the Zenn articles published at <https://zenn.dev/noshiro_piko>.

## Setup

```sh
pnpm install
```

## Structure

- `libs/*` — 公開している npm パッケージ。1 ディレクトリ 1 パッケージ。
- `apps/*` — アプリケーション。
- `tools/` — リポジトリ内部向けのツール。
    - `tools/configs/` — root と各パッケージが共有する TypeScript / Vite / Rollup 設定。
    - `tools/scripts/cmd/` — リポジトリ全体のコマンド (`check-all`, `ws-build-stages` など)。
- `github/` — [github-settings-as-code](https://github.com/noshiro-pf/mono/tree/main/libs/github-settings-as-code) で適用する GitHub リポジトリ設定。
- `articles/`, `books/` — Zenn のコンテンツ。[Zenn](#zenn) を参照。
- `docs/` — 雑多なメモ。lint 対象外。
- `experimental/` — 旧 monorepo のコード。[experimental/](#experimental) を参照。

pnpm workspace のメンバーは `libs/*`, `apps/*`, `tools/*` のみ
（`pnpm-workspace.yaml`）。

## Commands

```sh
pnpm run check-all      # 全チェック（install, spell, markdown, type, build, test, lint, format）
pnpm run ws:build       # 依存関係の順にビルド
pnpm run ws:test        # 全パッケージのテスト
pnpm run fmt            # 未コミットのファイルを整形
pnpm changeset          # リリース用の changeset を追加
```

## Zenn

`articles/` と `books/` は、zenn.dev 側で設定された Zenn の GitHub 連携によって…
