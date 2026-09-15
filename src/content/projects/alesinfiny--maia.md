---
repo: "AlesInfiny/maia"
name: "maia"
description: "Spring Boot + Vue.jsのシステム開発で利用可能なドキュメントとサンプルを提供します。"
readmeQualityOk: true
url: "https://github.com/AlesInfiny/maia"
homepage: "https://maia.alesinfiny.org/"
language: "Java"
languages: ["Java", "TypeScript"]
languagePcts: [52, 23]
topics: ["application-architecture", "java", "spring-boot", "vuejs"]
stars: 12
forks: 3
openIssues: 257
closedIssues: 645
watchers: 2
contributors: 16
recentReleases: 0
createdAt: "2021-08-27T07:43:57Z"
lastCommitAt: "2026-09-15T08:54:54Z"
lastReleaseAt: "2023-05-30T08:05:46Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "community_hub"]
healthScore: 89
undervaluedScore: 72
maintainers: ["dependabot[bot]", "kenjiyoshid-a", "rnakagawa16"]
openGraphImageUrl: "https://opengraph.githubassets.com/d6640d05fb5f2a14e209377dbd415a5b1a3806462a2ad060936c9838c4b65267/AlesInfiny/maia"
discussionCount: 45
---

# AlesInfiny Maia OSS Edition

AlesInfiny Maia OSS Edition は現代の Java システム開発において標準的なアプリケーションアーキテクチャを提供します。
商用のエンタープライズシステム開発から個人開発の小規模なシステムまで、 無償で利用可能です。

## Getting Started

AlesInfiny Maia OSS Edition は、以下の Web サイトを通じて最新バージョンを公開しています。
ドキュメントの閲覧やサンプルアプリケーションのダウンロードは、 Web サイトから行ってください。

<https://maia.alesinfiny.org/>

## ローカル開発環境

ドキュメントやサンプルアプリケーションの開発には VS Code を使用します。
最新のバージョンをインストールしてください。

### ドキュメント開発環境

ドキュメント開発環境の構築手順は以下を参照してください。

- [AlesInfiny Maia OSS Edition ドキュメントについて | ドキュメント執筆環境の構築方法](https://github.com/AlesInfiny/maia/blob/HEAD/documents/README.md#ドキュメント執筆環境の構築方法)

### サンプルアプリケーション、要件別サンプル開発環境

サンプルアプリケーションや要件別サンプルの開発環境は、 VS Code を推奨します。
開発環境の構築手順は以下を参照してください。

- [AlesInfiny Maia OSS Edition | ローカル開発環境の構築](https://maia.alesinfiny.org/guidebooks/how-to-develop/local-environment/)

## サンプルアプリケーションのテスト

### Java アプリケーション

Java アプリケーションは、 VS Code のテストランナー、または gradlew コマンドでテストできます。

テストには、メソッドレベルでの動作を確認する単体テストと、 Web API レベルでの動作を確認する結合テストがあります。
いずれのテストも完全に自動化されています。
またテストフレームワークには JUnit を使用しています。

VS Code を利用してテストを実行する場合は、 VS Code のテスト拡張機能からテストを実行します。

gradlew コマンドを利用してテストを実行する場合は、ルートプロジェクトのフォルダーで以下のコマンドを実行します。

```shell
./gradlew test
```…
