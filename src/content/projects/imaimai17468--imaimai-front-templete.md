---
repo: "imaimai17468/imaimai-front-templete"
name: "imaimai-front-templete"
description: "いまいまいのフロント用テンプレートです。"
readmeQualityOk: true
url: "https://github.com/imaimai17468/imaimai-front-templete"
language: "TypeScript"
languages: ["TypeScript", "Python", "Shell"]
languagePcts: [39, 31, 24]
topics: ["nextjs", "tailwindcss", "typescript", "bun", "lefthook", "vitest", "claudecode", "oxfmt", "oxlint", "tsgo"]
stars: 54
forks: 5
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2022-10-30T05:50:00Z"
lastCommitAt: "2026-08-07T05:08:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 53
maintainers: ["imaimai17468", "dependabot[bot]", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a571e6e22c136e7508c1631573ff8e97e326ac409bed6fceaf8a8aad55805ec/imaimai17468/imaimai-front-templete"
---

# My App

TanStack Start + TypeScript + Tailwind CSS + shadcn/ui を使用したモダンな Web アプリケーションテンプレートです。

## 技術スタック

- **Framework**: TanStack Start (TanStack Router + Vite)
- **Language**: TypeScript 7 (native compiler)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Authentication**: Better Auth (Google OAuth)
- **Database**: Cloudflare D1 (SQLite) + Drizzle ORM
- **Storage**: Cloudflare R2
- **Hosting**: Cloudflare Workers (@cloudflare/vite-plugin)
- **Code Quality**: oxlint (linting) + oxfmt (formatting)
- **Testing**: Vitest + Testing Library
- **Package Manager**: Bun
- **Git Hooks**: Lefthook

## クイックスタート

```bash
git clone <your-repo-url>
cd <your-repo-name>
bun install
cp .env.local.example .env.local
bun run dev
```

http://localhost:5173 でアクセス。`@cloudflare/vite-plugin` により、`bun run dev` でも Cloudflare D1 / R2 バインディングが有効です。

データベース・認証・ストレージのセットアップ手順は [docs/DATABASE_SETUP.md](https://github.com/imaimai17468/imaimai-front-templete/blob/HEAD/docs/DATABASE_SETUP.md)、デプロイ・ロールバック・シークレット運用は [docs/DEPLOYMENT.md](https://github.com/imaimai17468/imaimai-front-templete/blob/HEAD/docs/DEPLOYMENT.md)、このテンプレートを新規プロジェクトに使う手順は…
