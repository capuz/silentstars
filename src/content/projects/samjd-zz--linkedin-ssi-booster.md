---
repo: "samjd-zz/linkedin_ssi_booster"
name: "linkedin_ssi_booster"
description: "An adaptive continually learning hybrid RAG Agent for content, curation, and persona growth. It combines spaCy-based NLP, a persona graph, BM25 retrieval, a truth gate, confidence scoring, and local memory to generate, curate, rank, and route posts with more control than a basic AI writer workflow."
readmeQualityOk: true
url: "https://github.com/samjd-zz/linkedin_ssi_booster"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 13
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-03-17T14:55:30Z"
lastCommitAt: "2026-11-06T02:43:35Z"
lastReleaseAt: "2026-08-02T14:05:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 88
undervaluedScore: 47
maintainers: ["samjd-zz"]
openGraphImageUrl: "https://opengraph.githubassets.com/0e78eadb5f9fbb6c392ed24048641a301004cc8b3870cfce34eb235b2974dcc8/samjd-zz/linkedin_ssi_booster"
fundingLinks: ["GITHUB:https://github.com/samjd-zz", "BUY_ME_A_COFFEE:https://buymeacoffee.com/samjd42"]
---

# SSI Booster - 🦄 - POWERED - 💪 - by Buffer.com!

### 🗾 概要 (Overview)

本ポートフォリオは、高い信頼性と決定論的な設計（Deterministic Engineering）に基づいた、実践的なAI/知能システムの構築原則を示しています。単なるプロンプト生成にとどまらず、検証可能なロジック、耐障害性マルチエージェント、および高精度なハイブリッド検索（BM25 + kNN）を備えたシステムを開発・運用しています。

### 🏗️ 主要プロジェクト (Featured Architectures)

- **LinkedIn SSI Booster**: 真偽検証ゲート（Truth-Gated）と継続的学習機能を備えた自動化エージェント。BM25、NetworkX、spaCyを統合し、ハルシネーション（幻覚）を防止。

### ⚙️ コア技術 (Key Technical Pillars)

1. **ハイブリッドRAG & 応答検証**: BM25によるキーワードスコアリング、Model2Vecの意味類似度、NetworkXの構造解析、spaCyの意味検証を融合した多段階のTruth Gate。
2. **ペルソナ駆動の継続学習**: persona graph、ドメイン知識、RSSから抽出した知識、ナラティブメモリを統合し、根拠付きの会話とコンテンツ生成に再利用します。
3. **SSI向けコンテンツ・オーケストレーション**: Buffer連携、4つのSSI指標、信頼度ポリシー、候補選択学習を組み合わせ、生成・レビュー・公開の流れを自動化します。
4. **ローカル・マルチモーダル実行**: Ollamaを中心に、FLUX Capacitor、Piper TTS、Rei ToeiのSuno/Strudel音楽ノードをDockerプロファイルで分離運用します。

### 🇯🇵 日本語のNLPと継続学習 (Japanese NLP & Continual Learning)

本システムは**日本語の記事を翻訳経由ではなく原文から直接学習**します。日本語RSSは固定リストに埋め込まれておらず、`CURATOR_RSS_FEEDS` で置き換えるか、`CURATOR_RSS_FEEDS_EXTRA` で追加できます。設定された日本語ソースは、SudachiPyと`ja_core_news_md`を使う同じ継続学習パイプラインに入り、英語記事と共通の知識グラフ・BM25検索・根拠検証へ統合されます。

- 🧭 **自動言語ルーティング** — ひらがな・カタカナ・漢字を検出し、`ja_core_news_md` と `en_core_web_md` を自動で切り替え
- 🧩…
