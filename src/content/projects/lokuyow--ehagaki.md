---
repo: "Lokuyow/ehagaki"
name: "ehagaki"
description: "A lightweight, post-only Nostr client that compresses media on your device for fast, data-efficient uploads."
readmeQualityOk: true
url: "https://github.com/Lokuyow/ehagaki"
homepage: "https://lokuyow.github.io/ehagaki/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [85]
topics: ["nostr", "nostr-client", "social-network"]
stars: 14
forks: 2
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-07-21T02:26:18Z"
lastCommitAt: "2026-09-15T08:54:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 75
maintainers: ["Lokuyow"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc056762c7796944210b76620003cdd768dbddbcfa6f9ac8d17ccf8e2ee87256/Lokuyow/ehagaki"
---

</a>
</p>

# eHagaki
https://lokuyow.github.io/ehagaki/

eHagaki（えはがき）は、画像・動画圧縮機能付きの投稿専用Nostrクライアントです。  
デバイス上で画像や動画を自動圧縮し、効率的にNostrへ投稿できます。

## 主な特徴

- **Nostr投稿専用**: 投稿機能に特化し、シンプルなUIで快適な利用体験を提供
- **画像・動画圧縮**: 画像・動画はアップロード前に自動で圧縮され、通信量を削減（圧縮レベル調整可能）
- **見たまま編集できるリッチエディター**: プレビュー画面と入力画面が分かれておらず、画像・動画・リンク・カスタム絵文字・ハッシュタグなどを実際の投稿に近い見た目で直接編集可能。ハッシュタグをピン留め（保持）して連続投稿することも可能
- **多彩なログイン・アカウント管理**: 秘密鍵(nsec)、ブラウザ拡張(NIP-07)、リモート署名(NIP-46)、親クライアント連携でのログインに対応。複数アカウントの切り替えも可能
- **PWA・共有インテント対応**: モバイル・デスクトップ両対応。Androidは外部アプリの共有ボタンから直接メディアアップロード可能
- **ドラフト機能**: 投稿内容を下書きとして保存し、後から編集・投稿が可能
- **リプライ・引用・チャンネル投稿**: 各種URLクエリや`nostr:` URIを通じたリプライ・引用投稿（NIP-10, NIP-18）に対応。パブリックチャット（NIP-28）のチャンネルへの投稿もサポート
- **Content Warning (CW)**: センシティブなコンテンツ（NIP-36）に対する警告の設定が可能
- **埋め込み**: iframe、Full Web Component、Host-owned Composer Lite Web Componentの3方式を提供
- **多言語対応**: 日本語・英語に対応（ブラウザ設定から自動判定）

## URLクエリ

アクセス時にエディターへテキストを事前入力できます：

```
https://lokuyow.github.io/ehagaki/?content={url-encoded-text-here}
```

### リプライ・引用投稿

URLクエリパラメータでリプライや引用投稿を指定できます。`nevent1...` または `note1...` 形式（NIP-19）に対応しています。

```
# リプライ
https://lokuyow.github.io/ehagaki/?reply=nevent1...

# note1形式でも可…
