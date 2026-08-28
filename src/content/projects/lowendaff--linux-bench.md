---
repo: "Lowendaff/linux_bench"
name: "linux_bench"
description: "Benchmark script used by Lowendaff"
readmeQualityOk: true
url: "https://github.com/Lowendaff/linux_bench"
language: "Shell"
languages: ["Shell"]
languagePcts: [94]
stars: 18
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-01-07T02:12:55Z"
lastCommitAt: "2026-08-28T12:23:22Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 43
maintainers: ["github-actions[bot]", "JamCh01"]
openGraphImageUrl: "https://opengraph.githubassets.com/e2b236b79e3885dd27842242171b237e9b18960bd91bd5badd61b5d59ad343bd/Lowendaff/linux_bench"
---

# Linux Bench (Lowendaff Edition)

**Linux Bench** 是一个综合性的 Linux 服务器性能测试与网络质量检测脚本。它集成了业界主流的测试工具，旨在为用户提供一键式的硬件性能评估、网络连通性测试及流媒体服务解锁检测。

本项目特别针对服务器维护者设计，默认运行全部测试、可用 `--skip-xxx` 按需跳过，并包含自动维护机制以确保测试数据的准确性。

## 📚 项目概述

* **核心功能**：一键检测 CPU/磁盘性能、网络带宽、路由追踪、IP 质量（欺诈/原生检测）及流媒体解锁情况。
* **解决问题**：简化繁琐的服务器测试流程，提供可视化、标准化的测试报告。
* **目标用户**：Linux 服务器管理员、VPS 爱好者、运维工程师。

## 🛠 技术栈

本项目使用以下技术构建：

* **核心语言**：Bash Shell (用于主控逻辑与交互)
* **辅助工具**：Python 3.12 (用于数据抓取与处理)
* **CI/CD**：GitHub Actions (用于自动化定时任务)
* **依赖组件**（脚本自动管理）：
* **系统工具**：`curl`, `jq`, `tar`, `xz-utils`
* **性能测试**：`sysbench` (CPU), `fio` (磁盘), `geekbench6` (基准跑分)
* **网络工具**：`iperf3` (带宽), `nexttrace` (路由追踪), `cloudflare-speed-cli` (Cloudflare 测速), `iNetSpeed-CLI` (Apple CDN 测速), `yt-dlp` (动态 YouTube CDN 检测)

## 📥 安装与部署

### 环境要求

* **操作系统**：Linux (仅支持 Debian 或 Ubuntu 发行版)
* **权限**：需要 `root` 权限或 `sudo` 权限
* **网络**：需具备正常的互联网连接以下载依赖工具

### 快速安装

您可以通过以下命令直接下载并运行脚本

```bash
bash <(curl -L -s bench.lowendaff.com)
```

### 部署自动更新

如果您 Fork 了本项目，可以启用 GitHub Actions 自动维护数据文件：

1. **Netflix IX 映射** (`utils/nf_ix_map.txt`)：`fetch_nf_ix_map.yml`，每周一 UTC 00:00 (北京时间 08:00) 从 PeeringDB 抓取。
2. **去程追踪源**…
