---
repo: "isuzu-shiranui/UnityMCP"
name: "UnityMCP"
description: "Drive the Unity Editor from an AI agent or the terminal. The Editor serves MCP itself over HTTP, so there is no second process to run, and the isuzu-unity-cli command needs no Node or .NET runtime."
readmeQualityOk: true
url: "https://github.com/isuzu-shiranui/UnityMCP"
homepage: "https://unity-mcp.shiranui-isuzu.dev/en/"
language: "C#"
languages: ["C#"]
languagePcts: [95]
topics: ["csharp", "model-context-protocol", "unity-editor", "ai-agent", "automation", "claude", "cli", "mcp", "unity"]
stars: 296
forks: 24
openIssues: 0
closedIssues: 10
watchers: 5
contributors: 3
recentReleases: 1
createdAt: "2025-04-16T05:00:13Z"
lastCommitAt: "2026-09-13T08:28:52Z"
lastReleaseAt: "2026-07-16T09:54:16Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 92
undervaluedScore: 42
maintainers: ["isuzu-shiranui", "meiiie", "takara2314"]
openGraphImageUrl: "https://opengraph.githubassets.com/a8955b6556fccfb154446644e158db1c5103e4597695972d84ec3b723d12d216/isuzu-shiranui/UnityMCP"
---

# Unity MCP 統合フレームワーク

[English Version](https://github.com/isuzu-shiranui/UnityMCP/blob/HEAD/README.en.md) | [Tiếng Việt](https://github.com/isuzu-shiranui/UnityMCP/blob/HEAD/README.vi.md)

Unity Editor を AI エージェントに開放するフレームワークです。人が手で実行しても、スクリプトから呼んでも、同じ経路を通ります。

- MCP クライアントは、Editor 自身が公開する Streamable HTTP エンドポイント `http://127.0.0.1:<port>/mcp` に直接接続します。別プロセスの MCP サーバーはありません。Claude Code、Cursor、Codex、Gemini CLI、VS Code、Claude Desktop で動作を確認しています。
- コマンドラインの `isuzu-unity-cli` からも同じツールを呼べます。配布している実行ファイルはネイティブなので、Node も .NET ランタイムも要りません。
- ツールは C# の static メソッドに `[McpTool]` を付けるだけで定義できます。

はじめて使う方は、図つきの導入ガイド [Unity MCP のはじめかた](https://unity-mcp.shiranui-isuzu.dev/) から始めてください。

## 必要条件

- Unity Editor 2022.3 以降。EditMode テストスイートは Unity 6000.0.35f1 で実行しています
- Git クライアント 2.14.0 以降を PATH に通しておいてください。Unity の Package Manager が git URL のパッケージを取得するのに使います（[Unity のマニュアル](https://docs.unity3d.com/Manual/upm-git.html)）。下の VPM リポジトリから入れる場合は要りません
- `com.unity.nuget.newtonsoft-json` 3.2.1。依存として自動で解決されます

## インストール

Unity の Package Manager で **Add package from git URL** を選び、次の URL を入力します。

```
https://github.com/isuzu-shiranui/UnityMCP.git?path=jp.shiranui-isuzu.unity-mcp
```

VCC（VRChat Creator…
