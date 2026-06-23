---
repo: "QdabuliuQ/easy-resume"
name: "easy-resume"
description: "免费在线简历编辑器・无需登录・AI 润色・一键导出 PDF / Free online resume editor, no login required, with AI polishing and one-click PDF export."
url: "https://github.com/QdabuliuQ/easy-resume"
homepage: "https://resume.qdabuliuq.cn"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["cv-builder", "free", "full-stack", "nextjs14", "reactjs", "resume", "resume-editor"]
stars: 75
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-06-03T15:43:01Z"
lastCommitAt: "2026-06-23T06:41:38Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 46
maintainers: ["QdabuliuQ"]
openGraphImageUrl: "https://opengraph.githubassets.com/972bf244df2edda81c268ce8ad85eafb683dc033445612908bb3a66fb818bff5/QdabuliuQ/easy-resume"
---

<h1 align="center">青松简历</h1>

  <strong>简体中文</strong>
  &nbsp;|&nbsp;
</p>

</p>

</p>

  <br>
  <br>
</p>

</p>

## ✨ 功能概览

- 简历模块编辑（个人信息、工作经历、项目、教育、技能、证书等）
- 画布预览与网格布局（`react-grid-layout`）
- Quill 富文本与 HTML 安全处理（DOMPurify）
- 服务端渲染简历 HTML，PDF/PNG 导出 API
- AI 相关能力，支持 AI 润色优化

## 🛠️ 技术栈

| 类别 | 选型 |
|------|------|
| 框架 | Next.js 14、React 19、TypeScript |
| UI | Ant Design 5、Tailwind CSS 4 |
| 状态 | MobX、mobx-react |
| 编辑器 / 布局 | Quill、@dnd-kit、react-grid-layout |
| 导出 | Puppeteer |
| 规范 | ESLint 9、Prettier、Husky、Commitlint |

## 💻 环境要求

- **Node.js** ≥ 18.17（见 `package.json` `engines`）
- **PDF/PNG**：生产环境需可用的 Chromium；默认期望可执行文件为 `/usr/bin/chromium-browser`，或通过环境变量指定（见下表）

## 🚀 快速开始

```bash
npm install
# 若出现 React / Next  peer 依赖冲突，可使用：
# npm install --legacy-peer-deps

npm run dev
```

开发服务器默认由 Next 分配端口；本地访问路径形如：`http://localhost:3000/zh/edit`（端口以终端输出为准）。

生产构建与启动：

```bash
npm run build
npm run start
```

`start` 脚本固定监听 **3010** 端口。

## 📜 常用脚本

| 命令 | 说明 |
|------|------|
| `npm run dev` | 开发模式 |
| `npm run build` | 生产构建 |
| `npm run start` | 生产启动（端口 3010） |
| `npm run lint` | ESLint |
| `npm run lint:pritter` | Prettier 格式化 `src/` |
| `npm run prepare` | 安装 Husky（`npm…
