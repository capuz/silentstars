---
repo: "moorestech/moorestech"
name: "moorestech"
description: "Animated open world automated factory game"
url: "https://github.com/moorestech/moorestech"
language: "C#"
languages: ["C#", "ShaderLab"]
languagePcts: [61, 29]
topics: ["dotnet-core", "dotnet", "dotnetcore", "csharp", "realtime-server", "game-development", "game", "game-server", "unity", "unity3d"]
stars: 77
forks: 10
openIssues: 58
closedIssues: 224
watchers: 2
contributors: 11
recentReleases: 0
createdAt: "2021-03-31T04:00:14Z"
lastCommitAt: "2026-07-03T06:23:39Z"
lastReleaseAt: "2023-11-05T02:38:34Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "legacy_hero"]
healthScore: 95
undervaluedScore: 48
maintainers: ["sakastudio", "toropippi", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/295e68bd24ad29af4fc4610da70f19b035a0a88c921baaac3dcabeaf83ccdd27/moorestech/moorestech"
discussionCount: 2
---

# moorestech

工業ゲームmoorestechのUnityのサーバー、クライアントです

# 起動方法
mooresech_clientをUnityで開きMainGameシーンを再生してください

# コーディングエージェントの使用について

## セキュリティに関する注意事項

本プロジェクトではuLoopMCPを使用してUnityエディタとAIエージェントを接続しています。MCPサーバーが有効な状態では、AIエージェントがUnityエディタを介して**任意のコード実行**を行う可能性があります。信頼できないエージェントやプロンプトを使用しないでください。もし不要な場合は個別で停止してください。

## codex cli を使用する場合の注意事項

`tools/unity-test.sh` スクリプトを Codex CLI 経由で実行する際は、Unity のライセンス認証にネットワークアクセスが必要となります。

デフォルトのサンドボックス設定ではネットワークアクセスが制限されているため、`--dangerously-bypass-approvals-and-sandbox` (`--yolo`) オプションを指定してClaude Code CLIを起動してください。

```bash
codex --yolo
```

MCPを使う場合はこの限りではありません。
~/.codex/config.toml
```toml
[mcp_servers.moorestech_server]
command = "node"
args    = ["/Users/[user]/mcp-stdio-to-streamable/dist/index.js"]
env = { MCP_SERVER_IP = "localhost", MCP_SERVER_PORT = "56901" }

[mcp_servers.moorestech_client]
command = "node"
args    = ["/Users/[user]/mcp-stdio-to-streamable/dist/index.js"]
env = { MCP_SERVER_IP = "localhost", MCP_SERVER_PORT = "56902" }
```

# LICENSE
コードは[Apache2.0](https://github.com/moorestech/moorestech/blob/master/LICENSE) ライセンスで配布されています。
コード以外の各種コンテンツは[moorestech Game Content License…
