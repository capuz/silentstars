---
repo: "Neos21/neos21.net"
name: "neos21.net"
description: "Repository of Neo's World"
readmeQualityOk: true
url: "https://github.com/Neos21/neos21.net"
homepage: "https://neos21.net/"
language: "HTML"
languages: ["HTML"]
languagePcts: [81]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2017-08-03T06:47:37Z"
lastCommitAt: "2026-09-03T08:13:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 85
undervaluedScore: 47
maintainers: ["Neos21"]
openGraphImageUrl: "https://opengraph.githubassets.com/9bac34f6c26b9254d7b2c3547f1907d07fc5d940713955ef82c3cef7e644a834/Neos21/neos21.net"
fundingLinks: ["GITHUB:https://github.com/Neos21", "CUSTOM:https://neos21.net/"]
---

# [neos21.net](https://neos21.net/) : Neo's World

## [Enter The Website](https://neos21.net/)

- **<https://neos21.net/>**
- <https://www.neos21.net/>
- <http://neos21.net/>
- <http://www.neos21.net/>
  - 2020-11-01 に Value Domain で取得した独自ドメイン
  - [GitHub Pages](https://neos21.github.io/neos21.net) にてホスティングしている
  - GitHub Pages の Enforce HTTPS 機能で HTTPS 化している
  - DNS 設定は Value Domain から Cloudflare に移管しており、Apex ドメインには GitHub の IP を4つ指定し、`www` には `CNAME` で `neos21.github.io` を指定している
- <https://neos21.github.io/neos21.net/>
  - 実際にホスティングされている GitHub Pages の URL。`neos21.net` にリダイレクトされる

## テンプレートの仕様

`./src/templates/templates.html` が HTML・Markdown の共通テンプレート。二重ブレース `{{ }}` でプレースホルダを定義してある。

HTML・Markdown ファイルの先頭には YAML 形式の Front Matter が記述されており、コレを利用してプレースホルダを埋めている。マッピング仕様は以下のとおり。

- `{{ page-title }}`
  - 「インライン・プレースホルダ」 : `title` 要素で囲んでいる
  - マッピング : Front Matter の `title` プロパティ・記述必須
  - ページタイトル
  - トップページ (`title` が `Neo's World`) 以外は `【title プロパティ】 - Neo's World` を挿入するようにしてある
- `{{ head }}`
  - 「ブロック・プレースホルダ」 : `head` 要素の終了タグ直前に配置してある
  - マッピング : Front Matter の `head` プロパティ・任意
  - ページ独自の `style` 要素や `script` 要素などを挿入できるようにしてある
- `{{ path }}`
  - 「ブロック・プレースホルダ」 : `nav#path > ul`…
