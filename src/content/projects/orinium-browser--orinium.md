---
repo: "orinium-browser/orinium"
name: "orinium"
description: "ブラウザエンジン、ブラウザのOrinium"
readmeQualityOk: true
url: "https://github.com/orinium-browser/orinium"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
topics: ["browser", "orinium", "web", "browser-engine", "rust"]
stars: 29
forks: 5
openIssues: 5
closedIssues: 35
watchers: 4
contributors: 5
recentReleases: 0
createdAt: "2024-09-15T06:45:26Z"
lastCommitAt: "2026-08-23T04:09:10Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 97
undervaluedScore: 59
maintainers: ["098orin", "tas0dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/370fe0bb5eab7d4f95d24be79edda763456e2bc124f9e3b57076e34c7242ba60/orinium-browser/orinium"
discussionCount: 1
---

<h1 align="center">Orinium Browser</h1>

  <br>
</div>

> [!NOTE]
> このプロジェクトは現在開発中です。まだ現代的なブラウザには及びませんが、基本的な Web ページを表示できる程度には動作します。

> [!TIP]
> 以下にコードのドキュメントがあります。常に、dev ブランチの最新を保っています。
>
> https://orinium-browser.github.io/orinium/orinium_browser/

## Web を特定企業の実装から分離する

Orinium は、Webを特定企業の実装や方針に依存しない、ユーザーと開発者が制御できるオープンな実行環境へ戻すことを目指すブラウザエンジンです。

現在、多くのブラウザは Chromium に依存しています。Chromium は優れたオープンソースプロジェクトですが、一つの実装が Web 全体の事実上の基準になることは、Web の多様性や独立性に影響を与えます。

ブラウザエンジンが単一の方向へ集中すると、Web 標準の解釈、非標準機能の普及、将来の技術選択が一つの組織の判断に大きく左右される可能性があります。

Orinium は、Google を排除するためのプロジェクトではありません。特定企業による支配点を作らず、Web が誰でも参加でき、誰でも改善できるオープンな技術基盤であり続けることを目指します。

## 拡張機能形式

将来的にこのブラウザエンジンは拡張機能をサポートします。現在サポート予定の形式は、

- Orinium 独自の形式
- Firefox addon
- Chromium manifest v2（部分的）

です。これらの機能のサポートは他のブラウザとの互換性を保つのに役立ち、またこのブラウザに適した独自の機能でより良いユーザーエクスペリエンスを提供できます。

## Run

リポジトリをクローンします。

```bash
git clone https://github.com/orinium-browser/orinium.git
cd orinium
```

Cargo を使って実行可能です。

```bash
cargo run
```

> [!NOTE]
> Ubuntu で以下のパッケージのインストールが必要になることが確認されています。
>
> ```bash
> sudo apt install pkg-config libasound2-dev
> ```

### 開発用テスト

開発用の test harness が `examples/tests.rs` にあります。

```bash
# コマンド一覧を表示
cargo run --example…
