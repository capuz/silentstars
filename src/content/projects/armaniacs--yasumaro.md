---
repo: "armaniacs/yasumaro"
name: "yasumaro"
description: "ブラウザの閲覧履歴を、AIによる要約付きで保存します。Obsidianのデイリーノートに自動保存したり検索したりするChrome拡張機能です。"
url: "https://github.com/armaniacs/yasumaro"
homepage: "https://armaniacs.github.io/yasumaro/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
stars: 18
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-01-14T22:12:03Z"
lastCommitAt: "2026-06-28T03:11:01Z"
lastReleaseAt: "2026-04-06T10:52:36Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 52
maintainers: ["armaniacs"]
openGraphImageUrl: "https://opengraph.githubassets.com/d52192d300799440d6afcc2fd94671a2de7502a03e7491b0a5757033691b4fd5/armaniacs/yasumaro"
---

# Yasumaro - AI Browsing Logger

[日本語](#日本語) | [English](#english)

  </a>
  </a>
</p>

---

## 日本語

### 概要
ブラウザの閲覧履歴を、AIによる要約付きでObsidianのデイリーノートに自動保存するChrome拡張機能です。

### オリジナルの Obsidian Smart History の紹介
オリジナルは https://note.com/izuru_tcnkc/n/nd0a758483901 で紹介されている記事です。

Yasumaroは、オリジナルの Obsidian Smart History をフォークして作成したものです。

### フォークの理由
オリジナルからフォークさせた一番の理由は、OpenAI互換APIをサポートすることでした。つまり、GroqやOllama、さくらのAIエンジンなども使えるようになりました。
多くをサポートしていますがAPIを追加したい場合は [CONTRIBUTING.md](CONTRIBUTING.md) を参照してください。

### 特徴
- 🤖 **AIによる要約**: OpenAI互換APIまたはGemini APIを使用して、ウェブページの内容を簡潔に要約します（Groq、OpenAI、Anthropic、ローカルLLM等に対応）。
- 📝 **Obsidian連携**: 閲覧履歴を直接Obsidianのデイリーノートに保存します。
- 🎯 **スマート検出**: 実際に読んだページのみを保存します（滞在時間とスクロール深度に基づきます）。
- 📂 **整理された保存**: デイリーノート内に専用の「ブラウザ閲覧履歴」セクションを自動作成し、管理します。
- ⚙️ **カスタマイズ可能**: 最小滞在時間、スクロール深度、API設定などを自由に構成できます。

以下は、yasumaroの独自でversion2以降に追加した機能です。

- 🖱️ **手動記録機能**: 「今すぐ記録」ボタンで現在のページを即座に記録できます。重複チェックなしで同じページを複数回記録可能です。
- 📱 **改良されたUI**: メイン画面と設定画面を分離し、⚙アイコンから専用ダッシュボードへ簡単にアクセスできます。
- 🌐 **ドメインフィルター**: ホワイトリスト/ブラックリストで記録するドメインを制御できます。ワイルドカードパターンに対応。
- 🚫 **uBlock Origin形式フィルター**: EasyListなどの既存のuBlockフィルターリストを直接インポートして使用できます。
- ✏️ **AIプロンプトカスタマイズ**:…
