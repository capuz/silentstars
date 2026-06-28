---
repo: "wujiachen0727/zhiyulab-evidence"
name: "zhiyulab-evidence"
description: "止语Lab 技术文章配套的实验代码和实测数据"
url: "https://github.com/wujiachen0727/zhiyulab-evidence"
language: "Go"
languages: ["Go"]
languagePcts: [83]
stars: 5
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-19T13:42:23Z"
lastCommitAt: "2026-06-28T03:07:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 46
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/aa3682734928db97c887eaef078dfcff33133a8a3dbd9f75734b097328c71651/wujiachen0727/zhiyulab-evidence"
---

# zhiyulab-evidence

> 止语Lab 技术文章配套的实验代码和实测数据——可信度承诺的底稿。

## 为什么有这个仓库

止语Lab 的长文都追求"论据自造"：能自己跑实验就不引用别人的结论。每一个实测数字、每一张 profile 都来自我在本地搭环境跑出来的原始文件。

这个仓库把这些实验代码和实测数据全部公开，目的有三：

1. **可复现**：读者可以亲自跑一遍，验证文章里的数字
2. **可质疑**：数据来源透明，谁都能翻看原始 pprof / trace / log 文件
3. **可继承**：实验代码本身可能比文章有更长的生命力——后来人可以在此基础上做自己的实验

## 目录结构

按文章 slug 分子目录，每篇文章一个独立空间。单篇文章内部通常按以下结构组织：

```
{slug}/
├── README.md              # 论据索引（实验清单、自造度统计、外部引用边界）
├── code/                  # 可执行实验代码
│   ├── {experiment-1}/    # 按实验编号或场景命名
│   │   ├── main.go
│   │   ├── go.mod
│   │   └── README.md      # 该实验的单独说明
│   └── {experiment-2}/
├── data/                  # 数据实测 / 逻辑推演类论据（.md / .csv / .json）
├── output/                # 代码跑出来的原始产物（.txt / .log / .md）
│   └── {experiment}/
├── scenarios/             # 场景模拟类论据
├── snapshots/             # 官方源码快照、版本对照等
└── screenshots/           # 截图（profile 火焰图、CLI 输出等）
```

说明：

- 不是每篇文章都有全部子目录，按文章实际用到的论据类型组织
- 早期文章可能按 `e1-xxx/` `e2-xxx/` 子目录平铺，代码和数据混在一起；近期文章按 `code/` `data/` `output/` 分层
- 子目录名自解释，配合对应文章阅读即可理解意图

## 文章清单

> 按发布时间倒序。标题点击跳转博客原文，「实验代码」列跳转本仓库对应子目录。

| 文章 | 发布时间 | 实验代码 | 配套实验数 |
|------|---------|---------|:---------:|
| [《Redis Bitmap…
