---
repo: "Physics-Learning-Wiki/Physics-Learning-Wiki"
name: "Physics-Learning-Wiki"
description: "物理学习Wiki，结合大家的经验，让物理学习更加如鱼得水！"
readmeQualityOk: true
url: "https://github.com/Physics-Learning-Wiki/Physics-Learning-Wiki"
homepage: "https://physics-learning-wiki.github.io/Physics-Learning-Wiki/"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [67, 27]
topics: ["learning", "math", "mathematics", "physics", "self-learning", "web"]
stars: 9
forks: 5
openIssues: 7
closedIssues: 3
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-11-14T04:24:51Z"
lastCommitAt: "2026-08-24T04:19:39Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 84
undervaluedScore: 63
maintainers: ["Leafuke", "Find-Light1130", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a947fdc972ce7328b65b2e977c97bcd30e9f66eff760c82a938b7d819f78747/Physics-Learning-Wiki/Physics-Learning-Wiki"
discussionCount: 3
---

# 欢迎来到 **Physics Learning Wiki**！

## 项目简介

**Physics-Learning-Wiki** 是一个面向物理爱好者与大学本科生的系统化物理学习站点。项目当前将“本科入门/自学主线”放在第一优先级，目标不是简单汇总零散条目，而是帮助读者建立一条可持续扩展的学习路径：先完成主线，再进入专题、竞赛和更进阶的内容。

项目内容覆盖主线学科模块、数学与实验支撑模块、计算工具以及专题强化页面，并逐步补齐路线图、模块导学页和章节写作规范。

## 题库开发与校验

章节小测使用仓库根目录的 `question-bank/` 保存 YAML 源题，并在 MkDocs 构建时生成页面级 JSON。常用命令如下：

```powershell
uv run python -m scripts.question_bank validate --include-drafts
uv run python -m scripts.question_bank coverage
corepack yarn quiz:typecheck
corepack yarn quiz:test
corepack yarn quiz:build:check
uv run mkdocs serve
```

需要在本地联调未经人工审核的草稿题时，显式设置 `$env:PLW_QUIZ_PREVIEW = "1"` 后运行 `uv run mkdocs serve`，结束后使用 `Remove-Item Env:PLW_QUIZ_PREVIEW` 清除。生产和 GitHub Actions 禁止启用该变量。正式发布题目前还必须运行 `uv run python -m scripts.question_bank validate --release`。

详细格式、审核和版权要求见 [`question-bank/README.md`](https://github.com/Physics-Learning-Wiki/Physics-Learning-Wiki/blob/HEAD/question-bank/README.md)。

## 鸣谢

感谢 [OI wiki](https://oi-wiki.org/) 以及 OI wiki 的贡献者们提供的框架、内容与技术支持！
感谢所有为 **Physics Learning Wiki** 做出贡献的朋友们！
> 由于学物理的同学们并不常有GitHub账号，您在页面中可能会看到一些“匿名同学”做出的贡献，这些贡献大多为同学们联系项目成员帮忙提交的内容，也十分感谢他们的付出！

## 目录总体框架

项目的主要内容组织在 `docs/` 目录下，包含以下模块：

-…
