---
repo: "GiganticMinecraft/seichi_infra"
name: "seichi_infra"
description: "seichi.click networkのオンプレ環境の(公開可能な)インフラ設定にまつわるrepositoryです。"
readmeQualityOk: true
url: "https://github.com/GiganticMinecraft/seichi_infra"
homepage: "https://giganticminecraft.github.io/seichi_infra/"
language: "HCL"
languages: ["HCL", "Shell", "Go"]
languagePcts: [44, 22, 21]
stars: 69
forks: 8
openIssues: 33
closedIssues: 151
watchers: 2
contributors: 12
recentReleases: 0
createdAt: "2021-12-24T07:29:30Z"
lastCommitAt: "2026-08-01T06:13:41Z"
lastReleaseAt: "2022-03-21T02:34:50Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 96
undervaluedScore: 52
maintainers: ["renovate[bot]", "outductor", "Lucky3028"]
openGraphImageUrl: "https://opengraph.githubassets.com/fedd79119bb9b728b74f3aba9f8542cc8036b8c9a01b09af8c63e193e643a90b/GiganticMinecraft/seichi_infra"
---

# `seichi_infra`

seichi.click networkのオンプレ環境のうち、公開可能な箇所を管理するレポジトリです。

概要図は [`diagrams`](https://github.com/GiganticMinecraft/seichi_infra/blob/HEAD/diagrams) 以下で、 draw.io によってパース可能なsvgファイルとして管理されています。これらを編集する場合は [Draw.io VS Code Integration](https://github.com/hediet/vscode-drawio) の利用を推奨します。

## ドキュメント・Runbook

運用手順書やナレッジは [GitHub Pages](https://giganticminecraft.github.io/seichi_infra/) で公開しています。

## 開発者向けデプロイガイド

[DEPLOYMENT.md](https://github.com/GiganticMinecraft/seichi_infra/blob/HEAD/DEPLOYMENT.md) を参照してください。

## ディレクトリ構成

 - [`diagrams`](https://github.com/GiganticMinecraft/seichi_infra/blob/HEAD/diagrams/)
   - 概要図、ネットワーク構成図などの図を draw.io で描いて管理するディレクトリ。
   - 2022/03/18現在、GitHubがmermaidのレンダリングを正式にサポートしたため、新しい図はmermaidで作成して良いかも
   - 注意: `unchama-home-infra.drawio.svg` は2022年時点の構成図であり、現在の実態（Proxmoxホスト9台、TrueNAS 3台、Proxmox Backup Server等）を反映していません
 
 - [`seichi-onp-k8s`](https://github.com/GiganticMinecraft/seichi_infra/blob/HEAD/seichi-onp-k8s/)
   - オンプレ環境の k8s クラスタの定義を管理するディレクトリ。詳細は [README](https://github.com/GiganticMinecraft/seichi_infra/blob/HEAD/seichi-onp-k8s/README.md) を参照してください。

 -…
