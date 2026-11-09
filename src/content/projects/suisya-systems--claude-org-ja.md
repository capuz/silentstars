---
repo: "suisya-systems/claude-org-ja"
name: "claude-org-ja"
description: "Claude Code 向け日本語ファーストのマルチエージェント運用フレームワーク。秘書・ディスパッチャー・キュレーター・ワーカーが、それぞれ明確な役割境界のもとで協働する。"
readmeQualityOk: true
url: "https://github.com/suisya-systems/claude-org-ja"
language: "Python"
languages: ["Python"]
languagePcts: [85]
topics: ["agent-orchestration", "claude-code", "japanese", "mcp", "multi-agent", "oss-japan"]
stars: 5
forks: 0
openIssues: 82
closedIssues: 518
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-19T03:31:43Z"
lastCommitAt: "2026-11-09T00:53:38Z"
lastReleaseAt: "2026-07-15T09:56:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 97
undervaluedScore: 56
maintainers: ["happy-ryo"]
openGraphImageUrl: "https://opengraph.githubassets.com/244951728dfdae5f1b239d94225ef8b6bd4ea4ca1b30bf91f2edebf57fa1944c/suisya-systems/claude-org-ja"
---

# claude-org-ja

> 日本語で使うことを前提にしたバージョンです。英語版は [suisya-systems/claude-org](https://github.com/suisya-systems/claude-org)。

## これは何か
claude-org-ja は、Claude Code を 1 つの窓口から複数のワーカーへ安全に仕事を振れるようにするための、マルチワーカー運用環境です。

複数の Claude Code を小さな開発チームのように連携させ、タスクの分解、作業場所の準備、ワーカーへの割り当て、状態保存、知見整理をまとめて扱います。

「ハーネスエンジニアリングやループエンジニアリングに興味はあるけれど、いきなり自分で構築するのは難しい」という人が、最初の一歩として使うのに向いています。

利用者は窓口の Claude Code と会話するだけでよく、タスクの分解、ワーカーへの作業割り当て、作業状態の保存と再開、たまった知見の整理は、すべて裏で自動的に進みます。
たまった知見を基に、スキルの修正や新たなスキルの作成を提案する機能も備えています。

人間が担うのは、タスクの選択、push・PR 作成、重要な設計判断などに絞ります。それ以外はできるかぎりエージェントに任せ、作業を進められるようにする設計です。

これらの機能を提供するために最低限必要なセキュリティ設定も事前に組み込まれています。

## すぐ試す

前提ツール（git / claude / gh / jq / Python）が入っていれば、1 行のコマンドでクローンとセットアップができます。
既定の起動方式（broker）は端末バックエンドとして tmux（Linux / WSL / macOS）または WezTerm（Windows）を使うため、あわせてインストールしておいてください。renga で起動する場合（後述の `ORG_TRANSPORT=renga`）は不要です。

```bash
# macOS / Linux
curl -fsSL https://raw.githubusercontent.com/suisya-systems/claude-org-ja/main/scripts/install.sh | bash
```

```powershell
# Windows (PowerShell 7+)
iwr -useb https://raw.githubusercontent.com/suisya-systems/claude-org-ja/main/scripts/install.ps1 | iex
```

クローン後、初回だけ次を実行します。

```bash
cd claude-org-ja
source…
