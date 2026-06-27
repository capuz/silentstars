---
repo: "d-party/chrome-extension"
name: "chrome-extension"
description: "d-partyのchrome extensionを開発するリポジトリ"
url: "https://github.com/d-party/chrome-extension"
homepage: "https://d-party.net"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
topics: ["chrome-extension", "css", "rspack", "typescript"]
stars: 14
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 8
createdAt: "2022-03-13T10:23:03Z"
lastCommitAt: "2026-06-27T00:34:12Z"
lastReleaseAt: "2026-06-23T16:40:33Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 72
maintainers: ["Uno-Takashi", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/469336583/7bf26800-9ae5-4dd9-b67c-404c610d809f"
discussionCount: 0
---

# d-party Chrome Extension

dアニメストアで『同時視聴』を実現する d-party の Chrome 拡張機能（Manifest V3 / TypeScript）。

## スタック

Manifest V3 · TypeScript · pnpm · rspack · React 18 + shadcn/ui（Tailwind CSS v4）·
Storybook · ESLint · Prettier · orval（型安全な REST クライアント）。
クリーンアーキテクチャで構成しています。詳細は [AGENTS.md](AGENTS.md) を参照。

## 開発

本拡張機能の動作検証にはバックエンドが必要です。
[d-party-Backend](https://github.com/d-party/d-party-Backend) を起動してください。

```bash
pnpm install
pnpm api:generate     # orval で REST クライアント生成
pnpm build            # dist/ を生成
pnpm dev              # ファイル監視ビルド
pnpm typecheck
pnpm lint
pnpm storybook        # UI コンポーネントカタログ
```

`pnpm build` 後、`chrome://extensions` →「パッケージ化されていない拡張機能を読み込む」で
`dist/` を選択します。

### Storybook

UI コンポーネントのカタログを Storybook で公開しています（`main` へのマージ時に GitHub Pages へ自動デプロイ）。

- 公開先: <https://d-party.github.io/chrome-extension/>
- ローカル: `pnpm storybook`（http://localhost:6006）

### 接続先の設定

接続先は [`src/infrastructure/env.ts`](src/infrastructure/env.ts) に集約しています。
既定は `wss://d-party.net`（本番）。ローカルバックエンドへ向ける場合は `BACKEND_HOST` を
`localhost/`、`BACKEND_PROTOCOL` を `http://`、`WEBSOCKET_PROTOCOL` を `ws://` に変更します。

> monorepo のローカル開発スタック（ルートで `docker compose up`）は **dev モード**で
> http / ws・`localhost`…
