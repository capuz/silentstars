---
repo: "AozoraEpub3-JDK21/AozoraEpub3-JDK21"
name: "AozoraEpub3-JDK21"
description: "Java 21 対応版 AozoraEpub3 - 青空文庫テキストを EPUB 3 に変換"
readmeQualityOk: true
url: "https://github.com/AozoraEpub3-JDK21/AozoraEpub3-JDK21"
homepage: "https://aozoraepub3-jdk21.github.io/AozoraEpub3-JDK21/"
language: "Java"
languages: ["Java"]
languagePcts: [95]
topics: ["aozora-bunko", "aozoraepub3", "ebook-converter", "epub3", "java21", "jdk21", "narou", "kindle"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-12-15T09:32:21Z"
lastCommitAt: "2026-08-01T06:12:31Z"
lastReleaseAt: "2026-02-28T14:52:06Z"
status: "thriving"
tags: []
healthScore: 85
undervaluedScore: 53
maintainers: ["Copilot", "AozoraJDK21-bot", "Harusame64"]
openGraphImageUrl: "https://opengraph.githubassets.com/ad39cc84e44f729c6e143e73c54be2b675755454fcd375ebe7f7b8a15c689292/AozoraEpub3-JDK21/AozoraEpub3-JDK21"
---

# AozoraEpub3

**Java 21〜26対応 / Gradle対応版**

> [!NOTE]
> **Read this in other languages:** [English](https://github.com/AozoraEpub3-JDK21/AozoraEpub3-JDK21#readme) (Auto-translated by your browser)

青空文庫の注記入りテキストファイルを EPUB 3 ファイルに変換するツールです。

> [!IMPORTANT]
> **正規配布について**: このプロジェクトの正規配布物は [GitHub Releases](https://github.com/AozoraEpub3-JDK21/AozoraEpub3-JDK21/releases) のみです。
> 各リリースには SHA-256 チェックサム・GitHub artifact attestation を添付しています。
> 検証方法は [VERIFY.md](https://github.com/AozoraEpub3-JDK21/AozoraEpub3-JDK21/blob/HEAD/VERIFY.md) を参照してください。
> 非公式フォークや再配布物は、同名であっても正規版とは限りません。

## このプロジェクトについて

このプロジェクトは [hmdev/AozoraEpub3](https://github.com/hmdev/AozoraEpub3) を元に、Java 21対応および [narou.rb](https://github.com/whiteleaf7/narou) での利用を目的として改変したものです。

- **元プロジェクト**: [hmdev/AozoraEpub3](https://github.com/hmdev/AozoraEpub3)
- **ライセンス**: GPL v3（元作者に帰属）
- **目的**: narou.rb との連携、Java 21 への対応

---

## ライセンス

- **AozoraEpub3 の再配布・改変には GPL v3** が適用されます（元作者に帰属）。

## 特徴

 - 青空文庫テキスト（txt/zip）を EPUB 3.3 準拠（EPUB 3.2後方互換）で変換
- Web小説サイトのHTMLから青空文庫形式テキストを取得して変換
- 画像zip/rarを EPUB 3 に変換
- 縦書き・横書きに対応
- 日本の主要電子書籍リーダー（Kobo, Kindle, Reader等）に対応
- Java 21 ベースで開発（Java 25 LTS まで動作確認済み、JDK 26 でも CI ビルド/テスト PASS）…
