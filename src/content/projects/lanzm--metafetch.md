---
repo: "lanzm/MetaFetch"
name: "MetaFetch"
description: "基于 Python 异步极速并发，每天抓取免费节点，生成免费订阅链接，全球地区自动识别分流的高性能 Clash Meta 订阅全自动化引擎。"
url: "https://github.com/lanzm/MetaFetch"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 8
forks: 3
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-24T07:24:12Z"
lastCommitAt: "2026-06-28T10:58:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 42
maintainers: ["github-actions[bot]", "lanzm"]
openGraphImageUrl: "https://opengraph.githubassets.com/40f6bc872449d6ea2be4ee487962568b3d7ae57a9a6e9f91482adff1fd536078/lanzm/MetaFetch"
---

# 🚀 MetaFetch Proxy Aggregator

MetaFetch 是一款高性能的自动化代理节点聚合工具。它能够从全球公开渠道自动抓取、清洗、分类节点，并为 Clash (Mihomo) 提供开箱即用的高级分流配置文件。

> [!IMPORTANT]
> **声明：** 本项目由 [peasoft/NoMoreWalls](https://github.com/peasoft/NoMoreWalls) 改造而来，并在此基础上进行了深度定制化开发，增强了异步抓取、YAML 配置管理与地区自动分组逻辑。

---

## 📥 订阅链接 (推荐)

建议使用 **Clash Meta / Mihomo** 客户端以获得最佳体验（支持最新协议）。

### 🛠️ Clash / Meta 订阅 (YAML)
| 线路类型 | 订阅链接 (点击复制) |
| :--- | :--- |
| **CDN 加速 (推荐)** | `https://fastly.jsdelivr.net/gh/lanzm/MetaFetch@master/list.meta.yml` |
| **GitHub 直连** | `https://raw.githubusercontent.com/lanzm/MetaFetch/master/list.meta.yml` |

---

## ✨ 核心特性
- **⚡ 极速异步抓取**：基于 `httpx` & `asyncio` 的全异步并发抓取，抓取上百个源仅需数秒。
- **🛠️ 结构化配置**：使用简洁的 `sources.yaml` 管理订阅源。
- **🌍 智能地区分类**：自动归类 🇯🇵 日本、🇺🇸 美国、🇭🇰 香港、🇩🇪 德国等。
- **🏁 旗帜增强**：自动补全缺失 Emoji 的节点旗帜。
- **📅 每日动态源**：支持 `%Y%m%d` 日期占位符。

---

## 📊 节点分布统计

> 更新时间：`2026-06-28 18:58:31`
> 运行分析：从 `18` 个活跃源中抓取 `1070` 个节点，耗时 `2.64s`。去重后保留 `759` 个有效节点。

| 地区分布 | 🇭🇰香港 | 🇯🇵日本 | 🇺🇸美国 | 🇸🇬新加坡 | 🇰🇷韩国 | 🇩🇪德国 | 🇬🇧英国 | 🇻🇳越南 | 🇳🇱荷兰 | 🇮🇩印尼 | 🌍其他 | **总计** |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **数量** | 11 | 48 | 68 | 9 |…
