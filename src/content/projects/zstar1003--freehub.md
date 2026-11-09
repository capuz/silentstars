---
repo: "zstar1003/FreeHub"
name: "FreeHub"
description: "一个免费产品的集合平台 A collection platform of free products"
readmeQualityOk: true
url: "https://github.com/zstar1003/FreeHub"
homepage: "https://xdxsb.top/FreeHub"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [73, 24]
stars: 29
forks: 8
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-10-13T14:32:15Z"
lastCommitAt: "2026-11-09T03:30:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 65
maintainers: ["github-actions[bot]", "tumingke0", "zstar1003"]
openGraphImageUrl: "https://opengraph.githubassets.com/23ebf723c4b83c7c953f35c10d752850ffa5f5701514ed89268e19d78154e467/zstar1003/FreeHub"
---

一个免费产品的集合平台，同时提供每日 AI 新闻、AI 热榜、AI 站点导航等功能。

在线访问：https://xdxsb.top/FreeHub

## 📥 快速开始

### 环境要求

- Node.js 18+
- npm 或 yarn

### 安装步骤

1. **克隆项目**

   ```bash
   git clone https://github.com/zstar1003/FreeHub.git
   cd FreeHub
   ```
2. **安装依赖**

   ```bash
   npm install
   ```
3. **启动开发服务器**

   ```bash
   npm run dev
   ```
4. **访问应用**

   打开浏览器访问 `http://localhost:5173`

### 构建部署

```bash
# 生产构建
npm run build

# 预览构建结果
npm run preview
```

## 📝 产品收录

如果你有优质的免费产品想要收录到 FreeHub，可以通过以下方式：

### 方式一：提交 Pull Request

1. Fork 本仓库
2. 编辑 `public/projects.json` 文件
3. 按照以下格式添加你的产品信息：

```json
{
  "name": "产品名称",
  "nameEn": "Product Name",
  "summary": "简短摘要",
  "summaryEn": "Short summary",
  "description": "详细描述",
  "descriptionEn": "Detailed description",
  "url": "https://product-url.com",
  "categories": ["分类1", "分类2"],
  "submittedBy": "提交者",
  "submittedAt": "2024-01-01",
  "logo": "product/logo.png"
}
```

4. 如果有 logo，将图片放到 `public/product/` 文件夹
5. 提交 PR 并等待审核

### 方式二：直接联系

- 📧 邮箱：zstar1003@163.com
- 💬 微信：zstar1003

## 🗂️ 项目结构

```
FreeHub/
├── public/
│   ├── product/          # 产品 logo 图片
│   ├── projects.json     # 产品数据
│   └── ai-news.json      # AI 资讯数据
├── scripts/
│…
