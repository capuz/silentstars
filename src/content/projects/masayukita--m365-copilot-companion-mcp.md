---
repo: "MasayukiTa/m365-copilot-companion-mcp"
name: "m365-copilot-companion-mcp"
description: "Personal-use MCP server that gives Microsoft 365 Copilot real hands on your own laptop: files, Python, Office, SQL, Web. 100+ tools, autonomous relay, easily extensible, no extra licences."
readmeQualityOk: true
url: "https://github.com/MasayukiTa/m365-copilot-companion-mcp"
language: "Python"
languages: ["Python"]
languagePcts: [85]
topics: ["agent", "automation", "claude", "copilot-studio", "fastmcp", "local-first", "m365-copilot", "mcp", "model-context-protocol", "python"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 6
createdAt: "2026-05-27T10:53:31Z"
lastCommitAt: "2026-09-08T08:17:17Z"
lastReleaseAt: "2026-08-25T04:03:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 57
maintainers: ["MasayukiTa", "xxxxxxxxxxxxx"]
openGraphImageUrl: "https://opengraph.githubassets.com/27b1403a96720760dbb29c308b0f7fd3fe8c10e10165adf5c3f3aac9b4db24d3/MasayukiTa/m365-copilot-companion-mcp"
---

# m365-copilot-companion-mcp

> [!IMPORTANT]
> **既存ユーザーの方へ:** 次回リリースの公開後、必ずそのリリースへ更新してください。更新手順と配布物は [Releases](https://github.com/MasayukiTa/m365-copilot-companion-mcp/releases) で案内します。

M365 Copilot を、**あなたの PC を操作できる自律エージェント**にするツールです。
API 契約は不要。会社アカウントのまま。管理者権限も不要。
ファイルを読むだけだった Copilot に「手」を生やして、実際に作業させます。

> **English TL;DR** — This turns Microsoft 365 Copilot into an autonomous agent that operates your own PC — files, Excel, OCR, Python, local/corporate databases — with no API contract, on your normal work account, without admin rights. A small Python MCP server on your laptop exposes the tools; the relay drives the Copilot web UI unattended. **To install: double-click `quickstart.bat` and follow the prompts.** The one manual step (registering the MCP tool in Copilot Studio) is walked through with screenshots below. Full English guide: see the [English guide](#english-guide) section at the bottom.

---

## これは何

- M365 Copilot は中身が賢いのに、チャットに貼った文章を読むくらいしかしてくれません。
- このツールは、あなたのノート PC で動く小さなサーバーを Copilot に繋ぎ、**ファイル操作・Python 実行・Excel・OCR・社内 DB といった"手"**を与えます。
- 追加課金ゼロ。いま持っている M365 Copilot ライセンスの中だけで完結します。

---

## できること

- **ファイル**を読む・書く・整理する・重複を探す
- **Excel / CSV / JSON**…
