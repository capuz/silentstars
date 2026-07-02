---
repo: "concrnt/concrnt"
name: "concrnt"
description: "Concrnt is a next-gen decentralized social network platform designed to make your world richer."
url: "https://github.com/concrnt/concrnt"
homepage: "https://concrnt.world"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["concrnt"]
stars: 61
forks: 12
openIssues: 7
closedIssues: 42
watchers: 3
contributors: 7
recentReleases: 0
createdAt: "2023-02-03T18:11:06Z"
lastCommitAt: "2026-07-02T06:33:28Z"
lastReleaseAt: "2024-06-10T15:45:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 54
maintainers: ["totegamma", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/5f511ce4256deac63522147d3a251ed5faa7041917c7ae781b136669a20716c2/concrnt/concrnt"
---

# concrnt 2.0 実験場

## だいじなこと

- 小さな仕様を組み合わせて構成する
  - 仕様は[CIPs (Concrnt Improvement Proposals)](https://github.com/concrnt/CIPs-translated)へ
- 再実装しやすく・シンプルに
  - webサーバーがstatic hostでも成り立つように
    - アーカイブサーバーもそうだし
    - 書き換え時だけ動的に動いてs3とかに書き込むようなやつでもいいね
      - lambdaとかで動けるとすごい

## リリースまでのTODO
- [x] ackの実装
  - [x] 対象ユーザーが外部ドメインユーザーだった場合に転送する
- [x] subkeyの実装・検証
- [x] proxy実装
  - [x] webクライアント向け
- [x] policyの評価
  - [x] 他リソースのポリシーを参照できるルールを追加
- [x] 他サーバーとのrealtime通信
- [x] 通知周り(未テスト)
  - webpushはともかくiOSやAndroidのpushはどうする？
  - -> webpushだけにして、iosやandroidへはリレーサーバーを利用するようにする
    - https://github.com/mastodon/webpush-apn-relay
- [x] 引っ越し機能の実装
  - [x] 自分のログの出力API
  - [x] 引っ越し先のサーバーへのインポートAPI
  - [x] commitモードの追加(インポート時に外に配送しないように)
- [x] alias機能の実装
- [x] 通報まわり (未テスト)
  - [x] Abuse API
- [x] Block API (未テスト)

## リリース後
- [ ] timeline読み込みをキャッシュに載せる
- [ ] NATSとredis pubsubを切り替えられるように
- [ ] Cloud Datastore対応
- [ ] valkey対応？
- [ ] batchエンドポイント
- [ ] realtime周りのアップデート
  - 横に並べても問題が起きないようにしたい
    - リーダーインスタンスを決めてそこから受信するとか
      - k8sだったらleaseが使える

## まだ考え中なこと
- マイグレーションとか
  - そのままリソースをimportしてしまう手法
    - good: ユーザーの対応がほぼ不要
    - bad: 再度引っ越しとのときに引き継がれない
  - v0-\>v1と同様に全部export-\>importする手法
    - good:…
