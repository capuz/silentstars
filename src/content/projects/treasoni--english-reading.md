---
repo: "Treasoni/english-reading"
name: "english-reading"
description: "这是一个可以交给别人使用的考研英语阅读项目：既包含已经整理好的 Obsidian 精读笔记，也提供命令行工具，把电子版真题自动拆成阅读文章、题目、长难句分析任务和语法笔记草稿"
readmeQualityOk: true
url: "https://github.com/Treasoni/english-reading"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [66, 32]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-13T16:14:10Z"
lastCommitAt: "2026-09-10T08:20:00Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 47
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/5dc1ff2f0917a2238c745ae76527c4493c1b2ad455c44bc539e5cc4d104f1683/Treasoni/english-reading"
---

# 考研英语阅读精读 Vault

这是一个 Obsidian 学习库：沉淀考研英语阅读真题的原文、翻译、语法、长难句、生词与跨篇总结。它通过 Codex 和 Claude Code 的同名技能辅助精读，不提供或承诺独立的 Python CLI。

详细使用说明请看：[使用说明](https://github.com/Treasoni/english-reading/blob/HEAD/使用说明.md)

## 使用方式

在 Obsidian 中打开此目录。处理一篇新阅读时，按项目规则使用以下六步流程：

| 步骤 | 技能 | 产出 |
| --- | --- | --- |
| 1 | `format-article` | `intermediate/<topic>/formatted-article.md` |
| 2 | `translate` | `intermediate/<topic>/translation.md` |
| 3 | `organize-grammar` | `intermediate/<topic>/grammar-notes.md` |
| 4 | `analyze-sentence` | 分析块内联至 `formatted-article.md` |
| 5 | `compile-note` | `<year>阅读/<topic>-精读笔记.md` |
| 6 | `extract-vocabulary` | 最终笔记中的词汇表与练习 |

跨篇整理使用 `summarize-grammar`；只有用户明确提出时才运行 `digest` 维护经验库。

## 目录约定

```text
├── 2000阅读/ ...                  # 已完成的最终精读笔记
├── intermediate/<topic>/          # 每篇文章的阶段性产物
├── .agents/skills/                # Codex 技能定义
├── .claude/skills/                # Claude Code 同步技能定义
├── .codebuddy/skills/             # CodeBuddy 的核心学习技能
├── .learnings/                    # 经验库（本地状态，不纳入版本控制）
└── scripts/                       # Vault 一致性校验
```

`<topic>` 必须使用完整 slug，例如 `2005-passage2-global-warming`；中间目录、最终文件名与 YAML frontmatter 的 `topic` 应完全一致。

## 校验…
