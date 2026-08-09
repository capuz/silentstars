---
repo: "adysec/AVE"
name: "AVE"
description: "AVE 是面向安全运营的多源漏洞知识库，统一 AVE 编号并输出结构化 TOML，同时整理和校验公开 PoC/EXP 资产，支持按严重等级快速筛选高价值漏洞。漏洞爬取与梳理的代码和逻辑暂未开源。"
readmeQualityOk: true
url: "https://github.com/adysec/AVE"
homepage: "http://ave.adysec.com/"
language: "JavaScript"
languages: ["JavaScript", "CSS"]
languagePcts: [37, 25]
topics: ["avd", "ave", "cnnvd", "cnvd", "cve", "nessus", "nuclei", "vulnerability"]
stars: 31
forks: 23
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-10T06:03:20Z"
lastCommitAt: "2026-08-09T04:46:19Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 80
undervaluedScore: 46
maintainers: ["adysec"]
openGraphImageUrl: "https://opengraph.githubassets.com/0171ef4c2798f55936cfd7349ba082c5ce04fc9aae273633352fb5e9982ff083/adysec/AVE"
---

# AVE 多源漏洞聚合引擎

> **AVE** 的多重含义：

| 含义 | 中文 | 说明 |
|------|------|------|
| AdySec Vulnerability Exposures | AdySec 漏洞披露 | 项目归属 |
| AI-powered Vulnerability Engine | AI 驱动漏洞引擎 | 核心方法 |
| Automated Vulnerability Extractor | 全自动漏洞提取 | 无人值守 |

Description: AVE 是面向安全运营的多源漏洞知识库，统一 AVE 编号并输出结构化 TOML，同时整理和校验公开 PoC/EXP 资产，支持按严重等级快速筛选高价值漏洞。漏洞爬取与梳理的代码和逻辑暂未开源。

该目录用于独立公开的 GitHub 仓库，并通过 GitHub Pages 提供展示。

## 公开内容

- 漏洞详情（`vulns/{year}/*.toml`，按年份分目录存储）
- PoC 文件（`pocs/{year}/*.toml`）
- EXP 文件（`exploits/{year}/*.toml`）
- 静态站点（`index.html`、`detail.html`、`assets/`）

## 不公开内容

- 漏洞爬取与梳理的核心代码与处理逻辑（暂未开源）
- 内部基础设施与私有自动化实现

## 站点功能

### 漏洞列表（`index.html`）

- **分页浏览**：每页显示 15 条漏洞记录，支持上下翻页。
- **搜索筛选**：支持按关键词（AVE/CVE/标题/描述）搜索，以及按严重性（CRITICAL / HIGH / MEDIUM / LOW / INFO / UNKNOWN）过滤。
- **列排序**：点击表头可按 AVE 编号、标题、严重性、日期、评分排序，支持升降序切换。默认按发布时间（`published`）降序排列。
- **表格布局**：使用 `table-layout: fixed` 固定列宽百分比分配，确保 8 列内容完整显示，大文本自动省略截断。
- **PoC/EXP 标记**：基于仓库中公开文件的真实存在性，自动标注"有/无"徽章。
- **年份统计**：侧边栏展示各年份的漏洞/PoC/EXP 数量分布。
- **严重性分布**：可视化进度条展示当前列表的严重性占比。
- **URL 状态持久化**：搜索条件、页码、筛选状态同步到 URL 参数，支持分享和书签。

### 漏洞详情（`detail.html`）

- **完整字段展示**：AVE 编号、CVE 编号（从 aliases 中提取）、标题、描述、严重性、评分。
- **元信息网格**：发布时间、更新时间、状态、采集时间。
-…
