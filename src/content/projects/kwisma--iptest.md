---
repo: "Kwisma/iptest"
name: "iptest"
description: "一个用于测试 Cloudflare IP 地址延迟和下载速度的 Go 语言工具。支持并发检测、延迟过滤、下载测速，并将结果导出为 CSV 文件。"
url: "https://github.com/Kwisma/iptest"
language: "Go"
languages: ["Go", "JavaScript"]
languagePcts: [52, 46]
stars: 79
forks: 35
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 2
createdAt: "2025-03-22T17:03:22Z"
lastCommitAt: "2026-06-27T06:23:17Z"
lastReleaseAt: "2026-06-10T05:44:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 37
maintainers: ["Kwisma"]
openGraphImageUrl: "https://opengraph.githubassets.com/fe97bad797a115893c39abbce15078e7e5108441bf3d66b24ed9b4c6598498e5/Kwisma/iptest"
---

# Cloudflare IP 测试工具

一个用于测试 Cloudflare IP 地址延迟和下载速度的 Go 语言工具。支持并发检测、延迟过滤、下载测速，并将结果导出为 CSV 文件。

## 功能特性

- **并发测试**：支持自定义最大并发线程数。
- **延迟检测**：可设置延迟阈值过滤高延迟 IP。
- **下载测速**：支持多线程下载速度测试。
- **地理位置信息**：自动获取数据中心和地理位置信息（支持中英文）。
- **结果导出**：生成 CSV 文件，包含 IP、端口、延迟、下载速度等详细信息。
- **TLS 支持**：可切换 HTTP/HTTPS 协议进行测试。

---

## 安装

### 编译步骤

1. 克隆仓库或下载代码：

```bash
git clone https://github.com/Kwisma/iptest.git
cd iptest
```

2.编译程序

```bash
go build -o iptest iptest.go
```

## 使用方法

点击 [Releases](https://github.com/Kwisma/iptest/releases) 下载执行文件

### 基本命令

```bash
./iptest -file=ip.txt -outfile=result.csv
```

### 参数说明

| 参数         | 默认值                                        | 说明                                                            |
| ------------ | --------------------------------------------- | --------------------------------------------------------------- |
| `-file`      | `ip.txt`                                      | IP 地址文件路径，格式为每行 `IP 端口`（例如 `1.1.1.1` `443`）。 |
| `-outfile`   | `ip.csv`                                      | 输出 CSV 文件路径。                                             |
| `-max`       | `100`                                         | 最大并发协程数。…
