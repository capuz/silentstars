---
repo: "lineagett/cf-workers-nav"
name: "cf-workers-nav"
description: "✨一个部署在CF的轻量化导航页面，可移动卡片式书签，方便管理"
readmeQualityOk: true
url: "https://github.com/lineagett/cf-workers-nav"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 209
forks: 107
openIssues: 2
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-05-25T10:46:17Z"
lastCommitAt: "2026-09-14T09:12:49Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 82
undervaluedScore: 26
maintainers: ["lineagett"]
openGraphImageUrl: "https://opengraph.githubassets.com/00c050203a27b0560e0e417fbcf76cba74587c233e3cb5839d59522caf1de5f5/lineagett/cf-workers-nav"
---

<h1>cf-workers-nav  个人导航页</h1>
  <p>
    一个部署在CF上的轻量化导航页
    <br />
    <i>⚡ 轻松创建属于自己的导航主页</i>
  </p>
</div>

📋 轻松部署的个人导航页 

> 一个部署在CF上的轻量化导航页面。
> 集成了书签管理、图标自动获取、拖拽排序、私密链接保护等功能， Worker 单文件，方便部署。

## ✨ 主要特性

*   **⚡️ Serverless 架构**：完全运行在 Cloudflare Workers 上。
*   **💾 KV 存储**：数据存储在 Cloudflare KV 中。
*   **🎨 简洁的UI**：基于 Tailwind CSS，支持**深色模式**自动/手动切换，响应式设计适配 PC 与移动端。
*   **🖱️ 拖拽排序**：支持 PC 端鼠标拖拽和移动端长按拖拽来整理分类与卡片顺序。
*   **🔒 私密保护**：支持设置“私密链接”，仅在管理员登录后可见。
*   **📂 数据管理**：支持在线添加/编辑/删除链接，支持导入 Chrome / Edge 的 HTML 书签，支持 JSON 格式的数据导入/导出及自动备份。
*   **🔍 聚合搜索**：内置多款搜索引擎（Google, Bing, Baidu）及站内快捷搜索。

## 界面预览

### 浏览视图
| Card View | APP View |
|-|-|
| | |

### 编辑模式视图
| Card View | APP View |
|-|-|
| | |

## 部署方式

### 部署到Cloudflare

<details>
<summary>点击展开</summary>

#### 部署步骤

1. 登录 [Cloudflare](https://www.cloudflare.com):
   - 创建workers，复制仓库里workers.js的代码，然后点击部署

2. 创建KV存储:
   - 新建一个名为CARD_ORDER的KV存储，用于存储数据

3. 添加环境变量:
   - ADMIN_PASSWORD，管理员登录密码
   - JWT_SECRET，用于加密 Token，输入点随机字符串即可 （如果是老版本更新的请一定要添加，否则会出错）

4. 绑定KV命名空间
   - 变量名称为CARD_ORDER，KV选择之前创建好的CARD_ORDER

5. 添加域名

</details>

## 近期更新

<details>
<summary>点击查看/隐藏更新日志</summary>

### 2026/09/14
- ✅ 增加一键测活(仅作参考)
### 2026/09/13
- ✅ 支持Chrome…
