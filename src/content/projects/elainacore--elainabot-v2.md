---
repo: "ElainaCore/ElainaBot_v2"
name: "ElainaBot_v2"
description: "Elainabot框架重构版"
url: "https://github.com/ElainaCore/ElainaBot_v2"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 30
forks: 7
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-04-28T14:56:18Z"
lastCommitAt: "2026-07-03T12:21:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 43
maintainers: ["lengxi-root", "serfend", "3107410009"]
openGraphImageUrl: "https://opengraph.githubassets.com/6aec47929657789a8ae08708e39e64f91b1c5d4bfe204c1549f95a989d03b7aa/ElainaCore/ElainaBot_v2"
---

<p>

<h1>ElainaBot v2</h1>

ElainaBot V2是一个基于 Python 的 QQ 官方机器人框架，采用纯异步架构，支持 Webhook / WebSocket 多机器人连接，插件热重载、模块化扩展、Web 面板管理等特性。

- **纯异步架构** — 基于 aiohttp / websockets，高并发低延迟
- **插件市场** — 基于 GitHub 插件库，一键浏览、安装、更新插件
- **Web 管理面板** — 实时日志、系统监控、插件管理、配置编辑、数据库浏览

</p>
<br clear="left" />

> 项目仅供学习交流使用，严禁用于任何商业用途和非法行为。

## 📢 交流群

**ElainaBot 框架交流群：[1085402468](https://qm.qq.com/q/5O3xGoe4so)**

## 🚀 快速开始

### 环境要求

- Python 3.11+
- Git

### 安装

```bash
git clone https://github.com/ElainaCore/ElainaBot_v2.git #（手动部署跳过）
cd ElainaBot_v2
pip install -r requirements.txt
python main.py
```

启动后访问 Web 面板完成配置：

```
http://localhost:5200/web/
```

> **Webhook回调配置地址**: 进入框架后点击机器人名字右边的 **感叹号图标** 即可查看。

## 📁 框架结构

```
ElainaBot_v2/
├── main.py          # 主程序入口
├── config/          # 配置文件
├── core/            # 核心框架 (网络、消息、插件、存储)
├── plugins/         # 插件目录 (热加载)
├── modules/         # 模块目录
├── web/             # Web 面板后端
└── templates/       # 消息模板
```

## 🔌 插件开发

详见 **[插件开发文档 (PLUGIN_DEVELOPMENT.md)](PLUGIN_DEVELOPMENT.md)** — 包含完整的装饰器、Event API、按钮构造、主动消息、Web 面板扩展等参考。

## 🛒 插件市场

框架内置插件市场，从 [ElainaCore/Elaina-plugins](https://github.com/ElainaCore/Elaina-plugins) 获取插件列表。

- **Web 面板** —…
