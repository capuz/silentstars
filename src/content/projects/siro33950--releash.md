---
repo: "siro33950/releash"
name: "releash"
description: "AIに任せきりでは、意図通りの実装は実現しない。AIエージェントのリードを取り戻すためのデスクトップアプリ。"
url: "https://github.com/siro33950/releash"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [71, 28]
topics: ["ai-agents", "claude-code", "coding-agent", "desktop-app", "git", "react", "rust", "tauri", "diff-review", "code-review"]
stars: 5
forks: 0
openIssues: 77
closedIssues: 617
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-03T19:36:55Z"
lastCommitAt: "2026-06-24T00:24:17Z"
lastReleaseAt: "2026-02-24T11:22:55Z"
status: "thriving"
tags: ["under_pressure"]
healthScore: 97
undervaluedScore: 53
maintainers: ["siro33950", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f039a91c99f5c20ca8afa6a9c1fa15730b49a7b98896954f584105b3068b60bd/siro33950/releash"
---

# Releash

**AIに任せきりでは、意図通りの実装は実現しない。AIエージェントのリードを取り戻すためのデスクトップアプリ。**

## なぜReleashか

Claude Code に「このバグ直して」と頼めば、それなりに動くコードは返ってくる。だが、それが意図通りか・考慮漏れがないかは別問題だ。最終的にあなたがdiffを読み、考慮漏れを指摘し、テストを書かせ、修正を促すことになる。AIエージェントの登場で「コードを書く時間」は減ったが、「**意図と実装をすり合わせる時間**」はむしろ増えている。

その時間の中で発生するもの：

- diffから得た気づきを、毎回チャットに長文で書き起こす
- 同じレビュー観点を毎回口頭で繰り返す（テストは？エラー処理は？仕様充足は？）
- 並行する複数タスクの進行状況・停止地点を見失う
- 承認した内容の記録が残らない
- Agentの「実装した」「テスト通った」は、実態と一致するとは限らない

Releashは、**AIに任せきりだとこぼれ落ちるこれらの摩擦をデスクトップアプリ側で吸収する**ことで、意図通りの実装に到達するまでの時間を短くする。

## Releashが提供するもの

### 1. Diffにコメント → AIに直接渡る

シンタックスハイライト付きdiffビューア（gutter / inline / split）の任意の行にコメントを記す。送信操作により `@path:Lstart-Lend` 形式に構造化され、AIセッションへ届く。AIは指摘対象を正確に把握する。送信済みコメントは記録され、画像 / Markdown の差分も専用ビューアで扱える。

### 2. AIエージェントの作業をワークフローとして定義する

ワークフローをYAMLで宣言することで、AIの振る舞いを構成する。順序・並列・反復・承認ゲートを組み合わせ、AIに実行させる手順を定義する。構造はあなたが定め、AIは各ステップの中身を埋める。

Releash自身の開発に使用しているワークフローをビルトインで同梱している。

### 3. Worktree単位でセッション・Diff・ターミナル・承認状態が連動する

複数タスクの並行進行は、各タスクをworktreeに分けて行う。Releashでのworktree切替に連動し、AIセッション・Diff・ターミナル・コメント・承認状態がすべて切り替わる。

### 4. 進行と状態を画面で常に把握できる

各AIセッションの状態（待機中 / 動作中 / 許可待ち）はリアルタイムに表示される。ワークフロー実行中は Timeline / Step detail / Step conversation を Workflow パネルで観測できる。許可待ちは Slack /…
