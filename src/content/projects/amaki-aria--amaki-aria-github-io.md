---
repo: "amaki-aria/amaki-aria.github.io"
name: "amaki-aria.github.io"
description: "Xiao Mengmeng's Library"
originalDescription: "小梦梦的图书馆"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/amaki-aria/amaki-aria.github.io"
language: "HTML"
languages: ["HTML"]
languagePcts: [68]
stars: 56
forks: 8
openIssues: 6
closedIssues: 6
watchers: 7
contributors: 3
recentReleases: 0
createdAt: "2019-12-01T06:20:45Z"
lastCommitAt: "2026-11-03T10:51:54Z"
lastReleaseAt: "2020-03-23T02:40:56Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 85
undervaluedScore: 24
maintainers: ["amaki-aria"]
openGraphImageUrl: "https://opengraph.githubassets.com/42a21df6d913693fe5a65dc437845c726c081fa42eeaeea9967f3b3509fd21a0/amaki-aria/amaki-aria.github.io"
---

# amaki-aria.github.io

Here is the personal website of 蝶天希 (Amaki-aria)!

- [Novel site](https://amaki.kiyume.top/novel/)

## Formatting Guidelines

For example

### Directory and File Naming Conventions

```
魔女之吻乃百合之味1：梦与希望的女神
├── 第一卷
│   ├── _index.md
│   ├── 第1章.md
│   ├── 第2章.md
│   ├── 第3章.md
.
.
.
│   └── 第37章.md
├── 第二卷
│   ├── _index.md
│   ├── 第38章.md
│   ├── 第39章.md
.
.
.
│   └── 第80章.md
.
.
.
└── _index.md
```

### front-matter

The specific book title should be written in `魔女之吻乃百合之味1：梦与希望的女神/_index.md`

```
---
title: 魔女之吻乃百合之味1：梦与希望的女神
author: 蝶天希
date: 2019-06-17
weight: 1
---
The introduction can be written here
```

The specific volume title should be written in `魔女之吻乃百合之味1：梦与希望的女神/第一卷/_index.md`

```
---
title: 第一卷 梦幻物语
author: 蝶天希
date: 2019-08-03
weight: 1
---
The introduction can be written here
```

The specific chapter title should be written in `魔女之吻乃百合之味1：梦与希望的女神/第一卷/第1章/_index.md`

```
---
title: 第一章 一切物语开始的地方
weight: 1
---
The chapter content goes here
```

### Formatting Guidelines (continued)

#### Use Markdown syntax whenever possible

#### Do not repeat the title

Wrong example:

```markdown
+++
title = "第十章 苏醒的魔导书"
weight = 10
+++
第一卷：梦幻物语 第10章

As…
