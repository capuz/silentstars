---
repo: "roboticsystem/OA-EPP"
name: "OA-EPP"
description: "工程实践4在线平台"
url: "https://github.com/roboticsystem/OA-EPP"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [54, 41]
stars: 10
forks: 11
openIssues: 45
closedIssues: 0
watchers: 0
contributors: 64
recentReleases: 0
createdAt: "2026-05-13T12:15:49Z"
lastCommitAt: "2026-06-25T01:31:11Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 73
undervaluedScore: 50
maintainers: ["2606351658-dev", "uwislab", "qiqixc"]
openGraphImageUrl: "https://opengraph.githubassets.com/e1d72fe83811c34d0a861c7d52e27292ade58eb6670e85fec69a460853b34d67/roboticsystem/OA-EPP"
---

# 《工程实践》在线网站

本项目为“《工程实践》”课程的在线学习与实践平台，聚焦工程能力训练与项目式学习。

---

## 课程结构

网站内容分为四大工程实践模块，每个模块下设若干章节：

- **工程实践1**
- **工程实践2**
- **工程实践3**
- **工程实践4**

此外还包含：
- **附录**（开发环境、工具指南等）
- **书写规范**（贡献与协作说明）
- **参考资料**

导航结构详见 `mkdocs.yml`。

---

## 快速开始

1. 克隆本仓库，安装依赖：
  ```bash
  pip install -r requirements.txt
  ```
2. 本地预览：
  ```bash
  python3 deploy_local_or_coolify.py
  # 选择 [1] 本地预览
  ```
  访问 http://127.0.0.1:8008 查看。
3. 远程部署：
  ```bash
  python3 deploy_local_or_coolify.py
  # 选择 [2] 远程部署（Coolify）
  ```

---

## 技术亮点

- MkDocs + Material 主题，响应式设计
- 支持 svgbob/Kroki 图表渲染
- 评论系统（Utterances，基于 GitHub Issues）
- Docker 一键部署，预编译 svgbob_cli 加速构建

---

## 贡献与协作

采用分支协作与 PR 审核模式，详细规范见 docs/contributing.md。

---

## 联系方式

如有问题、建议或合作意向，请联系：robotics-course@example.com

### Prerequisites

Create a `.env` file in the project root (excluded from git) with the following keys:

```
COOLIFY_API_KEY=<your-coolify-api-key>
GITHUB_TOKEN=<your-github-personal-access-token>
```

Install local dependencies:

```bash
pip install -r requirements.txt
```

### Local Preview

Start a local development server with live reload:

```bash
python3 deploy_local_or_coolify.py
# Select [1] Local Preview
```

The site will…
