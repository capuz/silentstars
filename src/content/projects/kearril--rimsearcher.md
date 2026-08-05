---
repo: "kearril/RimSearcher"
name: "RimSearcher"
description: "A RimWorld mod development tool that helps AI analyze source code."
readmeQualityOk: true
url: "https://github.com/kearril/RimSearcher"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["cli", "cli-tool", "skill", "skills"]
stars: 32
forks: 5
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-07T12:57:18Z"
lastCommitAt: "2026-08-05T06:07:50Z"
lastReleaseAt: "2026-03-05T06:51:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 42
maintainers: ["kearril"]
openGraphImageUrl: "https://opengraph.githubassets.com/3b472a796c8c7006a3a3de2106004774a12d0a78c0407116c8aadb4252c93d26/kearril/RimSearcher"
---

# RimSearcher

[English](https://github.com/kearril/RimSearcher/blob/HEAD/README.en.md) | 简体中文

> **设计哲学**：把工具的错误变成知识的输入——让模型从错误中学习。
> 错误即文档、失败即教学：每个限制与失败路径都设计为模型的学习素材。

#### RimSearcher V3 全面焕新重置，工具从该版本开始，舍弃了过去的mcp架构，转而使用skills+cli的设计模式，这带来了更好的性能，更低的占用以及更智能的 AI 决策，并且现在支持模组环境的代码分析了！

## 介绍

RimSearcher 是一套供 AI 使用的专业 RimWorld 源码分析工具链：既有 CLI 与游戏内模组构成的查询工具，也有教模型如何使用它们的技能——它不只是工具，也是老师。

RimSearcher 特化 Def 数据层（XML 定义、字段结构、类型关联）：游戏内的 DataMod 将当前模组环境的全部 Def 导出为 SQLite 数据库，CLI 提供全文检索与精确反查。C# 源码分析交由 [DecompilerServer](https://github.com/pardeike/DecompilerServer)——直接反编译加载的 .NET 程序集，类型搜索、成员签名、IL 指令、调用链追踪、跨版本比对，让 AI 看到的不再是"可能存在的 API"，而是真正运行的代码。正如其设计目标所言：*"I can inspect the actual code that runs"*。

Skill 文件将两者串联成一条分析管线：CLI 定位 Def → 提取 C# 类型名 → DecompilerServer 读源码。

多模组环境由两层配合支撑：DecompilerServer 同时加载原版与任意模组的程序集（各自独立上下文别名，并排查看源码与 IL，精确定位 Hook 点与兼容性边界）；DataMod 导出当前模组环境的 Def 数据供 CLI 查询——一个管代码，一个管数据，相辅相成。

## 歧途有灯——错误如何成为路标

行路者不问歧途，问的是歧途尽处的灯火。

工具把每一次折返都化作路标：凡查询无果，必有言示路——或指他途，或导别径；语法失语，则引之精确之门；版本相违，则告之以重来。纵使未获，亦非败绩——"此路无物"之讯，非责难，乃信息。

然最险者非风雷，乃无声之渊。空壳之器、错位之名、虚引之实——试错不可察者，择其要者录之，如航者之海图，标前人暗礁，使后来者免于重蹈。

工具指路，模型行路，行路者终识途——此项目之呼吸也。…
