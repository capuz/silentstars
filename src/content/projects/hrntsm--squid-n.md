---
repo: "hrntsm/Squid-n"
name: "Squid-n"
description: "Rust で作った構造計算一貫プログラムの playground"
readmeQualityOk: true
url: "https://github.com/hrntsm/Squid-n"
homepage: "http://hiron.dev/Squid-n/"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2026-06-16T23:54:55Z"
lastCommitAt: "2026-08-26T04:16:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 50
maintainers: ["hrntsm"]
openGraphImageUrl: "https://opengraph.githubassets.com/65713511ce989fa98ba39d0d9c34fde0fd53dbe2b359df18fd734f6e90b59d80/hrntsm/Squid-n"
---

# Squid-n

</div>

日本の建築構造計算一貫プログラム。Rust で実装。
モデル作成 → 荷重 → 解析（静的・固有値・地震・プッシュオーバー・時刻歴）→ 検定・設計 → レポートまでを
デスクトップ GUI または MCP サーバから扱う。

## アーキテクチャ

**16** のクレートから成る階層型アーキテクチャ（詳細は [docs/architecture.md](https://github.com/hrntsm/Squid-n/blob/HEAD/docs/architecture.md)）:

```
Layer 0: squid-n-core（基本データ構造・DOF 管理・荷重組合せ）、squid-n-math（疎行列・ソルバ）、
         squid-n-material（一軸材料履歴則）、squid-n-ml（ML 断面提案）
Layer 1: squid-n-section（断面性能算定）、squid-n-load（Ai 分布・床荷重）、squid-n-gpu（GPU 高速化）
Layer 2: squid-n-edit（編集トランザクション）、squid-n-skeleton（スケルトン曲線）
Layer 3: squid-n-element（梁・板・パネルゾーン要素）
Layer 4: squid-n-solver（各種解析）、squid-n-io（結果 I/O・ST-Bridge）
Layer 5: squid-n-design-jp（日本仕様設計計算）
Layer 6: squid-n-job（解析前処理・解析条件・解析の純粋計算）
Layer 7: squid-n-mcp（MCP サーバ）、squid-n-app（GUI アプリケーション）
```

`squid-n-job` は GUI と MCP の共通下層。依存方向は上層から下層のみ。
循環依存は `cargo run -p xtask -- check-deps` で検出する。

## ビルド・開発

手順の詳細（テスト・静的解析・機能フラグ）は [CONTRIBUTING.md](https://github.com/hrntsm/Squid-n/blob/HEAD/CONTRIBUTING.md) を参照。

```bash
# ワークスペース全体ビルド
cargo build --workspace

# GUI 起動（egui/eframe）
cargo run -p squid-n-app --features gui

# MCP サーバ起動（stdio）
cargo run -p squid-n-mcp --features mcp
```

## ドキュメント

### 利用者向け（mdBook）…
