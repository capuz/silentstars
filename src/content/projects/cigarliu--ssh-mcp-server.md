---
repo: "Cigarliu/ssh-mcp-server"
name: "ssh-mcp-server"
description: "A powerful SSH/SFTP MCP server with multi-instance support and intelligent configuration discovery"
readmeQualityOk: true
url: "https://github.com/Cigarliu/ssh-mcp-server"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 10
forks: 5
openIssues: 2
closedIssues: 2
watchers: 0
contributors: 4
recentReleases: 4
createdAt: "2026-01-03T10:50:37Z"
lastCommitAt: "2026-08-21T04:10:18Z"
lastReleaseAt: "2026-08-21T04:12:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 72
undervaluedScore: 44
maintainers: ["Cigarliu", "emilsteixner"]
openGraphImageUrl: "https://opengraph.githubassets.com/0fa64076be7bdc477901479a48531b5e93475d5ee876d598035eb85ab0a1b879/Cigarliu/ssh-mcp-server"
---

# SSH MCP Server

[English](https://github.com/Cigarliu/ssh-mcp-server/blob/HEAD/README.en.md)

面向 AI 客户端的 stdio MCP Server，用于安全地执行 SSH 命令、传输文件、操作交互式终端和串口控制台。连接档案与执行历史可由同一台机器上的多个 MCP 实例共享；模型后续只按稳定的连接 ID 操作，不会再次取得已保存的目标地址、用户名或认证信息。

## 主要能力

- SSH 命令执行、SFTP 上传下载和目录管理。
- SSH Shell/TUI 与串口终端，支持受控读写、输出偏移和明确完成状态。
- 基于 SQLite 的连接档案与命令历史，跨 MCP 实例和重启保留。
- 最小化工具面：默认 `files` profile 暴露 11 个日常工具。
- 严格 stdio 协议边界：MCP 数据只写入 stdout，日志只写入 stderr。

## 安装

**推荐：使用 GitHub Releases 的预编译包。** 下载与你的平台匹配的归档，解压后将 `sshmcp`（Windows 为 `sshmcp.exe`）放在稳定目录。每个归档包含示例配置、双语 README 和许可证。

从源码构建需要 Go `1.24.4` 或更高版本：

```bash
git clone https://github.com/Cigarliu/ssh-mcp-server.git
cd ssh-mcp-server
go build -o sshmcp ./cmd/server
```

首次启动时，如果未提供配置文件，服务会自动生成默认配置：

- Windows：`%USERPROFILE%\.sshmcp\config.yaml`
- macOS/Linux：`~/.sshmcp/config.yaml`

也可以使用 `-config <path>` 指定配置位置。

## MCP 客户端配置

将程序作为 stdio MCP Server 注册。以 Windows 为例：

```json
{
  "mcpServers": {
    "ssh-mcp": {
      "command": "C:\\Tools\\sshmcp\\sshmcp.exe",
      "args": ["-config", "C:\\Users\\you\\.sshmcp\\config.yaml"]
    }
  }
}
```

在 macOS 或 Linux 上，将 `command` 和 `-config` 参数替换为对应的绝对路径。不要让服务在启动时请求 sudo 密码；这会占用 stdin 并破坏 MCP 握手。

## 连接与历史…
