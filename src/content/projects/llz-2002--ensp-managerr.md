---
repo: "llz-2002/ensp-managerr"
name: "ensp-managerr"
description: "ensp全自动化,ensp的mcp接口"
readmeQualityOk: true
url: "https://github.com/llz-2002/ensp-managerr"
language: "Python"
languages: ["Python"]
languagePcts: [58]
stars: 15
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-24T02:18:53Z"
lastCommitAt: "2026-08-20T04:09:33Z"
status: "thriving"
tags: []
healthScore: 55
undervaluedScore: 12
maintainers: ["llz-2002"]
openGraphImageUrl: "https://opengraph.githubassets.com/d024709de721af2d1042d4e01ee716c9317a08da5f9d0c4a007fc3f57ab6fd60/llz-2002/ensp-managerr"
---

# eNSP Telnet Manager

基于 Python 全栈开发的 eNSP 网络模拟器管理工具，提供 Web 界面和 MCP 协议两种交互方式，支持端口扫描、Telnet 设备连接、命令执行及拓扑文件解析分析。

## 功能概览

### Web 界面

| 模块 | 功能 |
|------|------|
| 端口扫描 | 扫描指定 IP 的端口范围，发现 eNSP 设备（默认起始端口 2000） |
| 设备连接 | 通过 Telnet 连接设备，每个设备拥有独立的终端标签页 |
| 命令执行 | 向已连接设备发送命令（如 `display version`）并实时查看返回结果 |
| 拓扑分析 | 上传 eNSP 拓扑文件，自动解析生成报告和拓扑图 |

### MCP 工具

| 工具名 | 功能 |
|--------|------|
| `scan_ports` | 扫描目标 IP 的端口范围 |
| `connect_device` | Telnet 连接设备 |
| `send_command` | 向设备发送命令 |
| `disconnect_device` | 断开设备连接 |
| `list_sessions` | 列出当前所有活跃会话 |
| `get_device_info` | 获取设备基本信息 |
| `get_topo_report` | 获取已上传拓扑的分析报告 |

## 快速开始

### 1. 安装依赖

```bash
pip install -r requirements.txt
```
## MCP 客户端配置

在 MCP 客户端（如 Claude Desktop）配置文件中添加：

```json
{
  "mcpServers": {
    "ensp-manager": {
      "command": "python",
      "args": ["mcp_server.py"],
      "cwd": "e:\\Trae CN\\code\\code\\ensp"
    }
  }
}
```

具体配置可参考项目根目录下的 `mcp.json` 文件。
### 2. 启动服务

```bash
python app.py
```

启动后同时运行两个服务：

```
============================================================
  eNSP Telnet Manager
  Web 界面: http://0.0.0.0:5000
  MCP SSE:  http://0.0.0.0:5001/sse…
