---
repo: "yui540/comimi"
name: "comimi"
description: "Open-source comic reader library for JS/TS"
url: "https://github.com/yui540/comimi"
homepage: "https://yui540.com/comimi"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 392
forks: 16
openIssues: 1
closedIssues: 2
watchers: 4
contributors: 2
recentReleases: 0
createdAt: "2026-05-23T00:49:25Z"
lastCommitAt: "2026-07-03T06:23:57Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 72
undervaluedScore: 25
maintainers: ["yui540"]
openGraphImageUrl: "https://opengraph.githubassets.com/dce5baa3ebfb3bda29ef231764940b4e17c3707fca6b2bfc7c5d10d8f37c0560/yui540/comimi"
---

# comimi

comimiは、Webサイトに漫画ビューワーを組み込むことができるTypeScript/JavaScriptライブラリです。

ReactなどのUIライブラリに依存していないため、単体で動作します。

https://github.com/user-attachments/assets/3e37b9fb-6381-4f43-9b27-7ae8056a1905

[yui540.com/comimi](https://yui540.com/comimi)

## インストール

```sh
npm install @yui540/comimi
```

## クイックスタート

```ts
import { createMangaViewer } from "@yui540/comimi";

createMangaViewer(document.querySelector("#viewer")!, {
  manga: {
    id: "sample",
    title: "サンプル漫画",
    author: "yui540",
    pages: [
      { id: "p0", type: "image", src: "/pages/0.webp" },
      { id: "p1", type: "image", src: "/pages/1.webp" },
      { id: "p2", type: "image", src: "/pages/2.webp" },
    ],
  },
});
```

これが最小構成です。ビューワーは `#viewer` にマウントされ、DOMを自動的に管理します。戻り値のインスタンスを通じて、ページ送りや設定・イベント操作も行えます。

## ドキュメント

APIの詳細、オプション、設定、キーボードショートカット、永続化、i18n については [`docs/USAGE.md`](./docs/USAGE.md) に記載しています。

## ライセンス

MIT
