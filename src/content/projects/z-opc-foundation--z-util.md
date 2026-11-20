---
repo: "z-opc-foundation/z-util"
name: "z-util"
description: "面向日常 Java 开发的多模块工具库集合(core/cache/ioc/aop/dsl/parser/expr/workflow/http/jdbc/math/ml/office/media/visualization/monitor/devops/distribute/cli/ch 等)"
readmeQualityOk: true
url: "https://github.com/z-opc-foundation/z-util"
language: "Java"
languages: ["Java"]
languagePcts: [99]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2019-07-06T04:21:23Z"
lastCommitAt: "2026-11-20T12:01:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 86
undervaluedScore: 69
maintainers: ["yuku123"]
openGraphImageUrl: "https://opengraph.githubassets.com/386c2ccbe873091a157a4ec3acbe7479eb0f56df92fdcf68a0d06213def75c23/z-opc-foundation/z-util"
---

# z-util

> 一人公司基座的底层 Java 工具库 —— 89 个模块 POM · Java 8/17 口径 · 按需引用、按需升级。

`z-util` 是 z-opc-foundation 的**基础库**：组织内其余仓（z-boot starter 家族、z-opc、z-ctc、z-mq、z-gw…）
要用到的字符串/集合/IO/加密/JWT、JSON 与多格式解析、表达式与对象整形 DSL、数据源与动态查询、缓存、
IoC/AOP/代理、二进制序列化、监控、Office、图像、数学与 ML，全部收在这里。

它解决的具体问题是**同一件小事在全站被写 N 遍**。收编之后只有一份口径：
分页只剩 `core.meta.page.PageResult`，JWT 只剩 `core.jwt.Jwt`（z-ctc 的 `JwtUtil` 已改成门面委托它），
分布式 ID 只剩 `distributes.sequence.*`，"库里取数 → 内存 SQL → 对象整形"这条链只剩
`z-util-jdbc` + `z-util-expr-sql` + `z-util-expr-obj`。

---
