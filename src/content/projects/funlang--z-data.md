---
repo: "Funlang/z-data"
name: "z-data"
description: "Z-data is an extremely lightweight zero configuration embedded mini front-end js framework."
readmeQualityOk: true
url: "https://github.com/Funlang/z-data"
homepage: "https://funlang.org/z-data/"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [68, 24]
topics: ["frontend", "template-engine", "framework", "lightweight", "embedded", "minimal", "zero-dependency", "zero-configuration", "html", "javascript"]
stars: 20
forks: 2
openIssues: 0
closedIssues: 11
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2021-04-18T08:18:18Z"
lastCommitAt: "2026-08-15T04:03:19Z"
lastReleaseAt: "2021-05-02T09:20:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 65
undervaluedScore: 39
maintainers: ["Funlang"]
openGraphImageUrl: "https://opengraph.githubassets.com/7ee60af9f9a0e1339a68211af3d2c3f19293eed19313faee1ebb269563e6d088/Funlang/z-data"
---

# z-data

Z-data 是一个超轻量级的零配置嵌入式前端框架.
Z-data is an extremely lightweight zero configuration embedded mini front-end framework.

[[English](https://github.com/Funlang/z-data/blob/HEAD/README-en.md)] [[中文](https://github.com/Funlang/z-data/blob/HEAD/README-cn.md)]

# 1. 特性 | Features:

- 没有虚拟 DOM | Without VDOM
- 零配置零依赖, 无需编译 | Zero configuration zero dependency, no compile time
- 极简, 超轻量级 | Extremely simple and lightweight, minify ~ 8K, gzipped < 5K
- H5 模板技术, 支持 for/if/else/use 等 | H5 template supports for/if/else/use
- 模板支持多根 | Template supports multi-roots
- 支持双向数据绑定和事件  | Data dual-binding and events
- 嵌入式, 可以和其他框架无缝嵌入 | Embedded, run with other front-end frameworks (such as Vue) together easily
- 更多语法糖, 特别对 class 和 style 友好 | Useful syntax sugars, friendly for class and style
- 鼓励配合 tailwind 以 H5 DOM 为中心 | Run with tailwind, supports production with H5 DOM inline

# 2. 示例 | Examples:

```html
     #background=`silver`
>
    <template for='k:v,i in items' key=k>
        <template if=!i>
                 :style={fontSize:`200%`}
                 #color=`#fa0a`
            ></div>
                 :class={t1:true}
                 .t2…
