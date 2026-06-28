---
repo: "aviutl2/aviutl2_community_translation"
name: "aviutl2_community_translation"
description: "非公式他言語訳プロジェクト。"
url: "https://github.com/aviutl2/aviutl2_community_translation"
homepage: "https://crowdin.com/project/aviutl2-community-translation"
language: "Ruby"
languages: ["Ruby", "Rust"]
languagePcts: [66, 32]
stars: 16
forks: 1
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 3
createdAt: "2026-01-12T09:38:42Z"
lastCommitAt: "2026-06-28T06:56:14Z"
lastReleaseAt: "2026-06-14T10:23:36Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 50
maintainers: ["actions-user", "sevenc-nanashi"]
openGraphImageUrl: "https://opengraph.githubassets.com/f8ef9bdfcf398b3f6f0c00f065fd87bf8c508a636f3a22298bf19541fbe59a43/aviutl2/aviutl2_community_translation"
---

# AviUtl2 Community Translation

メンテナー：[@sevenc-nanashi](https://github.com/sevenc-nanashi)

[English README](README.en.md)

AviUtl2の非公式多言語翻訳プロジェクト。
このリポジトリでは、

- AviUtl2本体および付属するエフェクトの翻訳ファイル
- 翻訳したファイルを自動でアップデートするプラグイン

を管理しています。

## 使い方

### 自動

AviUtl2 カタログから[AviUtl2 Community Translation Companion](https://aviutl2-catalog-badge.sevenc7c.workers.dev/package/aviutl2-community.aviutl2_community_translation_companion)をインストールしてください。
または、[Releases](https://github.com/aviutl2/aviutl2-community-translation/releases)から`aviutl2-community.aviutl2_community_translation_companion-v*.au2pkg.zip`をダウンロードし、AviUtl2のプレビューウィンドウにドロップしてインストールしてください。

### 手動

`./locales/`フォルダ内の`.aul2`を開き、右上のダウンロードボタンから翻訳ファイルをダウンロードしてください。

## プラグインについて

AviUtl2 Community Translation Companionは、翻訳ファイルを自動でダウンロードし、AviUtl2に適用するプラグインです。
起動時に翻訳ファイルの更新を確認し、必要に応じてダウンロードと適用を行います。

## 翻訳の仕方

<https://crowdin.com/project/aviutl2-community-translation> を利用してください。
リポジトリは定期的にCrowdinと同期されます。

## ライセンス

このリポジトリの翻訳ファイルは、[MITライセンス](LICENSE)の下で提供されています。
AviUtl2本体および付属エフェクトの著作権はそれぞれの作者に帰属します。
