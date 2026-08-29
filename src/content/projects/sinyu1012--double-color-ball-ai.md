---
repo: "sinyu1012/Double-Color-Ball-AI"
name: "Double-Color-Ball-AI"
description: "AI 双色球彩票预测，通过历史数据 + 热号/平衡/周期等策略"
readmeQualityOk: true
url: "https://github.com/sinyu1012/Double-Color-Ball-AI"
homepage: "https://double-color-ball-ai.vercel.app"
language: "JavaScript"
languages: ["JavaScript", "Python", "CSS"]
languagePcts: [29, 27, 25]
stars: 152
forks: 57
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-10-21T06:07:35Z"
lastCommitAt: "2026-08-29T17:27:31Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 34
maintainers: ["github-actions[bot]", "sinyu1012"]
openGraphImageUrl: "https://opengraph.githubassets.com/d30b44a8ba01b8c2c4c401e2d99396d13d8bb5e7e87d5e43e49985e9a15e9e10/sinyu1012/Double-Color-Ball-AI"
---

# 双色球开奖与 AI 预测数据展示系统

> 在线访问：[https://double-color-ball-ai.vercel.app](https://double-color-ball-ai.vercel.app)

一个现代化的双色球数据展示系统，支持历史开奖数据查看和多模型 AI 预测展示。

## ✨ 主要特性

- 🎨 现代化 UI 设计，支持亮色/暗色主题切换
- 📊 历史开奖数据展示
- 🤖 多 AI 模型预测结果对比
- 🎯 自动计算预测命中情况
- 📱 完全响应式设计，支持移动端
- ⚡ 优雅的动画效果和交互体验

<details>
<summary><h2>🚀 快速开始</h2></summary>

### 方法一：使用启动脚本（推荐）

#### macOS/Linux:
```bash
# 进入项目目录
cd Double-Color-Ball-AI

# 运行启动脚本
./start_server.sh
```

#### Windows:
```cmd
# 双击运行 start_server.bat
# 或在命令行中运行
start_server.bat
```

然后在浏览器中打开：http://localhost:8000

### 方法二：手动启动服务器

```bash
# 使用 Python 启动 HTTP 服务器
python3 -m http.server 8000

# 或使用 Python 2
python -m SimpleHTTPServer 8000
```

然后在浏览器中打开：http://localhost:8000

</details>

## 🔮 AI 预测策略

每个 AI 模型会生成 5 组预测，分别采用不同策略：

| 策略 | 说明 |
|------|------|
| 热号追随者 | 选择最近 30 期高频号码，追踪热门趋势 |
| 冷号逆向者 | 选择最近 30 期低频号码，期待均值回归 |
| 平衡策略师 | 综合奇偶比、大小比、和值、连号等多维度平衡 |
| 周期理论家 | 选择短期频率上穿长期频率的号码 |
| 综合决策者 | 融合以上所有策略的综合方案 |

## 📁 项目结构

```
Double-Color-Ball-AI/
├── index.html                     # 主页面
├── css/
│   └── style.css                  # 样式文件
├── js/
│   ├── app.js                     # 主应用逻辑
│   ├── data-loader.js             # 数据加载模块
│   └── components.js…
