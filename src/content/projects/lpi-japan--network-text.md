---
repo: "lpi-japan/network-text"
name: "network-text"
description: "Linuxネットワーク標準教科書開発用リポジトリ"
readmeQualityOk: true
url: "https://github.com/lpi-japan/network-text"
language: "TeX"
languages: ["TeX", "Shell"]
languagePcts: [68, 22]
stars: 21
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2026-05-10T15:09:21Z"
lastCommitAt: "2026-09-08T08:16:58Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 37
maintainers: ["tmiyahar", "yasuraok", "KojiAsari"]
openGraphImageUrl: "https://opengraph.githubassets.com/8ed432f862a07eba35d1f8e03a696c76893f6f6c97d2a84283db63757fd30b1a/lpi-japan/network-text"
---

# network-text

Linuxネットワーク標準教科書の開発用リポジトリ。

原稿（`Chapter*.md` と `image/`）はリポジトリ直下にある。日英・ディストリビューション別のバリアントはまだ無い。後から増やすときは server-text と同様、バリアント用ディレクトリを足して `pandoc.yaml` の `working-directory` を切り替える。

## ローカルビルド

```bash
docker build -t ghcr.io/lpi-japan/network-text:local build
./build/build-pdf.sh    # tmp/networktext_<ver>.pdf と _no_cover.pdf
./build/build-epub.sh   # tmp/networktext_<ver>.epub
```

ホストに pandoc / lualatex が無い場合、スクリプトが上記イメージ内で再実行する。
