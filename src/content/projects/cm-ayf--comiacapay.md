---
repo: "cm-ayf/comiacapay"
name: "comiacapay"
description: "同人即売会用のレジアプリ"
readmeQualityOk: true
url: "https://github.com/cm-ayf/comiacapay"
homepage: "https://comiacapay.vercel.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 11
forks: 0
openIssues: 4
closedIssues: 15
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-10-30T05:43:55Z"
lastCommitAt: "2026-08-25T04:08:23Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 94
undervaluedScore: 71
maintainers: ["cm-ayf", "dependabot[bot]", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/acf4a6a818fbea34d60995e76edb0cd4c7487de9fd6ae7e370f6a12bf94fc55e/cm-ayf/comiacapay"
fundingLinks: ["GITHUB:https://github.com/cm-ayf"]
---

# Comiacapay

同人誌即売会用のレジアプリです．[Kiradopay](https://github.com/takemar/kiradopay) および [Kiradopay2](https://github.com/cm-ayf/kiradopay2) を原型としています．

以下の説明は開発者向けです．[利用者向けの説明はこちら](https://github.com/cm-ayf/comiacapay/blob/HEAD/docs/index.md)．

## コントリビュートする前に

現在，このリポジトリには [`@TypeChangeBot[bot]`](https://github.com/apps/typechangebot) という GitHub App が導入されています．この GitHub App はコミッターによる変更を観察し，その変更を何故行ったかを尋ねて記録します．  
もし現時点以降の記録を望まないのであれば `@TypeChangeBot[bot] OPTOUT` と，もし今までの全ての記録を削除したいのであれば `@TypeChangeBot[bot] REMOVE` を，それぞれコメントしてください．

詳しくは，[開発者による説明](https://cse-rdyer-05.unl.edu/tcbot/)を参照してください．

## 技術スタック

- [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/)：フロントエンドおよびバックエンド
- [React](https://reactjs.org/)：フロントエンド
- [MUI](https://mui.com/)：UI フレームワーク
- [Drizzle ORM](https://orm.drizzle.team/)：ORM

## 開発

- 準備
  - Node.js をインストールしてください．
  - `npm install`を実行してください．
  - 「[環境変数](#環境変数)」を参照して`.env`を作成してください．
- 実行：`npm run dev`を実行してください．

## デプロイ

### ホスティング

ホスティングには[Vercel](https://vercel.com/)を利用することを想定しています．  
デプロイ方法については[公式ドキュメント](https://vercel.com/docs/concepts/deployments/overview)を参照してください．

また，React Router が動作する他のプラットフォームでも動作すると考えられます．

###…
