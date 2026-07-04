---
repo: "Fenng/Tech-Doc-Style-Chinese"
name: "Tech-Doc-Style-Chinese"
description: "Yet another reusable writing skill for Chinese technical documentation and product copy."
url: "https://github.com/Fenng/Tech-Doc-Style-Chinese"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["skill", "typography"]
stars: 396
forks: 24
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-04-12T13:14:56Z"
lastCommitAt: "2026-07-04T06:12:40Z"
lastReleaseAt: "2026-07-04T05:35:51Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 77
undervaluedScore: 20
maintainers: ["Fenng", "zzxwill"]
openGraphImageUrl: "https://opengraph.githubassets.com/6ad92097d6ce324f43d8d11a84d85c1c71c5cccd4bea63854c11e94a5ba686c8/Fenng/Tech-Doc-Style-Chinese"
---

# Chinese Tech Doc Style

本项目只是一份面向中文技术文档、产品文案与界面文案的写作 Skill。

这份 Skill 的目标很明确：中文技术写作应更克制、更准确、更易读。不追求宣传感，也不试图把所有内容都写成统一模板，而是聚焦几类高频问题：

- 中文技术文案容易空泛、重复、宣传化
- 中文与英文、数字混合排版时可读性差
- 常见英文状态词和错误词容易被机械直译
- 文档首页、解决方案页、接口说明页、FAQ 的信息密度和结构经常失衡

如果需要一套适合中文技术文档的基础写作规范，这份 Skill 可以直接拿来使用，或是作为参考。

## 适用场景

本 Skill 适合以下内容：

- 文档首页、落地页、首屏文案
- 接口文档、参数说明、错误码说明、更新日志
- 产品能力介绍、解决方案页、能力说明页
- 界面文案、按钮文案、导航标签、提示信息

不适合以下内容：

- 代码字面量
- JSON 键名
- URL
- API 路径
- 数据库字段名
- 其他机器可读标识符

## 核心规则概览

这份 Skill 主要覆盖以下规则：

- 中文引号统一使用直角引号 `「」`
- 不使用 `你`、`您`、`同学` 这类直接称呼
- 在可见正文中处理中文与英文、数字之间的留白
- 避免机械直译 `Success`、`Invalid`、`Bad Request` 等英文状态词
- 避免高频互联网黑话，如 `赋能`、`抓手`、`闭环`、`打通`
- 按钮文案应体现下一步动作，避免与标题重复
- 移动端优先保证可读性，而不是继续沿用桌面排版

完整规范请阅读：

- [NoCode-Skill.md](./NoCode-Skill.md)

## 仓库结构

```text
tech-doc-style-chinese/
├── SKILL.md
├── NoCode-Skill.md
├── README.md
├── agents/
│   └── openai.yaml
└── references/
    └── Project-Overrides.md
```

各文件的作用：

- `SKILL.md`：正式技能入口，供 Codex、Claude Code 等 Agent 使用
- `NoCode-Skill.md`：对外说明稿，适合公开阅读和分享
- `README.md`：GitHub 仓库首页说明
- `agents/openai.yaml`：技能展示元数据
- `references/Project-Overrides.md`：项目私有约定示例

## 如何在 Codex 中使用

### 使用 npx 安装（推荐）

如果本机有 Node.js 环境，可直接用 `npx skills` 安装：

```bash
#…
