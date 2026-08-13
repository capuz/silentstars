---
repo: "kickflow/kickflow-mcp-server"
name: "kickflow-mcp-server"
description: "Official kickflow MCP server"
readmeQualityOk: true
url: "https://github.com/kickflow/kickflow-mcp-server"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 5
forks: 1
openIssues: 1
closedIssues: 0
watchers: 2
contributors: 17
recentReleases: 0
createdAt: "2025-04-26T13:52:35Z"
lastCommitAt: "2026-08-13T05:19:41Z"
lastReleaseAt: "2026-01-20T02:47:57Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 79
undervaluedScore: 64
maintainers: ["renovate[bot]", "okamoai", "hifumi9"]
openGraphImageUrl: "https://opengraph.githubassets.com/25691bfab4ab69133fde61e73ecba910c6b8420fca0cbfdb28421f7d52f582e6/kickflow/kickflow-mcp-server"
---

# kickflow MCP Server

[kickflow API](https://developer.kickflow.com/) をModel Context Protocol (MCP)経由で利用するためのサーバーです。

---

## ユーザー向け

### 必要条件

- Node.js v22.18.0以上
- kickflow アクセストークン
  - [アクセストークンの取得方法](https://support.kickflow.com/hc/ja/articles/360047613534)

### インストール

MCPクライアント（Claude Desktop, Cursor, Clineなど）の構成ファイル (`claude_desktop_config.json` など) に、以下のような記述を追加してください。
`KICKFLOW_ACCESS_TOKEN` には、取得したアクセストークンを設定してください。

#### MacOS/Linux

```json
{
  "mcpServers": {
    "kickflow": {
      "command": "npx",
      "args": ["-y", "@kickflow/mcp-server"],
      "env": {
        "KICKFLOW_ACCESS_TOKEN": "your-kickflow-access-token"
      }
    }
  }
}
```

#### Windows

```json
{
  "mcpServers": {
    "kickflow": {
      "command": "cmd",
      "args": ["/c", "npx", "-y", "@kickflow/mcp-server"],
      "env": {
        "KICKFLOW_ACCESS_TOKEN": "your-kickflow-access-token"
      }
    }
  }
}
```

### 機能一覧

このMCPサーバーは3つの汎用ツールを提供し、kickflow APIのすべての機能にアクセスできます。

#### discover_apis

利用可能なKickflow APIの一覧を表示します。`get_api_info`、`call_api`で使用する`operationId`を確認できます。

#### get_api_info

指定した`operationId`のAPI情報をJSON Schemaで取得します。`call_api`を呼ぶ前に必要なパラメータを確認できます。

#### call_api

Kickflow…
