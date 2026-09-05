---
repo: "kan/pike"
name: "pike"
description: "Light weight Agent Development Environment"
readmeQualityOk: true
url: "https://github.com/kan/pike"
language: "TypeScript"
languages: ["TypeScript", "Vue", "Rust"]
languagePcts: [41, 29, 27]
stars: 7
forks: 1
openIssues: 10
closedIssues: 138
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-23T14:58:18Z"
lastCommitAt: "2026-09-05T07:46:14Z"
lastReleaseAt: "2026-04-02T13:50:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 54
maintainers: ["kan", "tokuhirom"]
openGraphImageUrl: "https://opengraph.githubassets.com/c02719f4a30985fdc7d8f34d836bc812d202e1f51de876d08cb467badd66f8e7/kan/pike"
---

# Pike

**「AI エージェント × ターミナル」に特化した、軽量な開発環境です。** ターミナル中心で作業する開発者が VS Code の代わりに使えることを目指しています。

Tauri v2（Rust + Vue / TypeScript）製。Windows を主対象としています。macOS（Apple Silicon）版も署名・公証して配布しており、自動更新も同じように働きます。macOS ではホストのログインシェルで開発でき、Windows 固有の機能（WSL、ジャンプリスト、管理者ターミナル、ウィンドウ背景の透過）だけが対象外です。

<picture>
  <source media="(prefers-color-scheme: light)" srcset="docs/manual/img/screenshot-editor-light.png">
</picture>

<picture>
  <source media="(prefers-color-scheme: light)" srcset="docs/manual/img/screenshot-git-light.png">
</picture>

## 主な機能

- **マルチターミナル**：xterm.js + PTY（WSL / cmd / PowerShell / PowerShell 7 / Git Bash、macOS ではログインシェル）、タスクバーとトレイのメニューからのシェル選択
- **AI エージェント**：`claude` や `codex` をターミナルで直接動かす前提の導線。起動ボタン・定型プロンプトの挿入・過去セッションの再開
- **エージェント状態**：アカウント・利用率・トークン使用量とコストを Claude と Codex で並べて確認。複数アカウント（`CLAUDE_CONFIG_DIR`）にも追従
- **ターミナルの AI 補助**：`claude` 等をターミナルで使うための、ワンクリック起動 / 過去セッションの再開 / 定型プロンプト挿入、出力中のパスをクリックしてファイル・画像・ディレクトリを開く（行番号の有無を問わない）、エディタ選択範囲や診断をターミナルへ送る
- **エディタ**：CodeMirror 6（30+ 言語）、ミニマップ、検索・置換、git diff ガター、コンフリクトの解消、定義ジャンプ、タブごとの折り返し切替、文字コード/改行コード対応
- **Markdown の入力支援**：記法を挿入するツールバー、表と脚注のテンプレート、画像の挿入（選択・貼り付け・ドロップ）、貼り付けた URL をページのタイトル付きリンクに変換
- **プレビュー**：Markdown /…
