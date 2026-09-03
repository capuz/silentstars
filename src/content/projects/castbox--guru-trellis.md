---
repo: "castbox/guru-trellis"
name: "guru-trellis"
description: " Guru Team 面向业务研发仓库提供的 Trellis 团队扩展"
readmeQualityOk: true
url: "https://github.com/castbox/guru-trellis"
language: "Python"
languages: ["Python"]
languagePcts: [94]
stars: 8
forks: 0
openIssues: 25
closedIssues: 156
watchers: 0
contributors: 17
recentReleases: 10
createdAt: "2026-07-03T08:28:38Z"
lastCommitAt: "2026-09-03T08:13:29Z"
lastReleaseAt: "2026-08-31T07:05:33Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 97
undervaluedScore: 58
maintainers: ["wesleywu"]
openGraphImageUrl: "https://opengraph.githubassets.com/f09dc85dfb99f1693b818d5c7c112a4fa09f18aeb0ed1ef141f7b69af455fa33/castbox/guru-trellis"
---

# Guru Trellis

Guru Team GitHub operations require an installed and authenticated GitHub CLI.
All platform reads and mutations are explicitly repository-bound `gh` or
`gh api` operations; GitHub App, MCP, connector, and browser UI fallback are
not supported. Git transport remains owned by `git`.

Guru Trellis 是 Guru Team 面向业务研发仓库提供的 Trellis 团队扩展。

它建立在官方 Trellis 之上，为团队补充一套开箱即用、AI-first 的研发协作方式，让不同 AI 工具能够按照一致的流程理解需求、规划实现、检查变更、审查分支并完成交付。

如果你只是想在业务仓库中使用 Guru Team Trellis，不需要理解本仓库的内部实现。可以把本仓库地址交给业务仓库中的 AI，让它完成安装或升级，也可以使用下方固定版本命令：

[https://github.com/castbox/guru-trellis](https://github.com/castbox/guru-trellis)

## 本次发布固定身份

| 组件 | 固定版本 |
| --- | --- |
| Guru Trellis repo tag | `v0.6.15-guru.3` |
| Guru Team extension revision | `0.6.15-guru.39` |
| 官方 `@mindfoldhq/trellis` CLI | `0.6.15` |

repo tag 与 extension revision 是两个独立版本轴。本次发布的 workflow 与 preset
固定使用同一个目标 annotated tag `v0.6.15-guru.3`。该 tag object、peeled commit、
GitHub Release、tag-pinned install 与 post-publish smoke 尚未创建或验证；#267 必须在
preparation PR 合并后重新冻结 exact candidate，并从头执行 Release gates。

新仓库的非交互安装入口：

```bash
npm install --global @mindfoldhq/trellis@0.6.15
trellis init -y --claude --codex --cursor \
  --workflow…
