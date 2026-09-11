---
repo: "windcicada/Hundun-Flow"
name: "Hundun-Flow"
description: "Opensource Turbulent Combustion Simulation Software (C++17/MPI-3)"
readmeQualityOk: true
url: "https://github.com/windcicada/Hundun-Flow"
language: "C++"
languages: ["C++"]
languagePcts: [95]
stars: 80
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2026-07-17T03:12:55Z"
lastCommitAt: "2026-09-11T08:13:43Z"
lastReleaseAt: "2026-07-29T02:05:58Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 30
maintainers: ["windcicada"]
openGraphImageUrl: "https://opengraph.githubassets.com/a9aacdf8ac8a0fde80af59f0fb31ca471c765ebafa131700504ae0e64cfa42dd/windcicada/Hundun-Flow"
discussionCount: 1
---

# HUNDUN-FLOW

近年来，AI技术推动了湍流燃烧建模研究和数值模拟技术的发展，研究者可以将物理认识与模型构思快速转化为算法和程序模块。HUNDUN-FLOW提供开放的核心实现、明确的模块接口和面向Coding Agent的工作规范，支持研究者开展方法开发与软件扩展。

HUNDUN-FLOW面向湍流燃烧数值模拟研究，采用C++17和MPI开发，以笛卡尔网格、局部重构浸没边界方法（IBM）和SIMPLE/PISO压力耦合为基础，组织LES、PaSR/TCR-TPDF与拉格朗日喷雾模型。研发目标包括局部加密、几何自动标记及面向真实燃烧室的多物理过程模拟。软件采用Apache License 2.0，支持研究者按照许可条款开发、使用和分发自己的衍生程序，并自主选择衍生代码的开放方式。

软件的命名来自《山海经·西山经》，其中以“其状如黄囊，赤如丹火”描述帝江，HUNDUN-FLOW将其工程化地理解为一个由边界包围的囊状密闭腔体，内部承载湍流流动-燃烧化学反应相互作用的多物理过程，这一意象与燃烧室数值模拟相呼应。另外“浑敦”同时表示有待分解和建模的复杂整体，数值模拟的任务是从这种复杂性中建立物理认识。

## 程序架构

下列表格介绍HUNDUN-FLOW的总体架构与算法设计，当前实现集中于`versions/v0.4`。程序采用自上而下的分层架构。应用层定义算例并组织计算，模型与SDK层提供物理模型及其接口，求解与网格层完成离散和几何处理，并行运行时管理分布式数据、通信和持久化。依赖关系保持为`applications -> models/sdk -> solver/mesh -> runtime`，字段所有权和MPI通信由运行时统一管理。

| 层次 | 逻辑模块 | 主要职责 | 接口边界 |
| --- | --- | --- | --- |
| 应用编排层 | `applications/` | 解析算例配置，组装网格、求解器和物理模型，执行主时间循环与运行生命周期。 | 应用通过SDK选择模型和参数，模型内部的数值顺序由相应模块管理。 |
| 模型与SDK层 | `models/`、`sdk/` | 提供湍流、燃烧、喷雾、边界等模型，以及字段视图、类型化服务、源项累加器和模型注册接口。 | 模型读取受控字段视图并返回候选增量和计算报告，状态发布由求解事务统一完成。 |
| 数值求解层 | `solver/` | 求解质量、动量、组分和总热化学焓方程，执行SIMPLE/PISO耦合、时间推进、化学积分和线性求解。 | 求解器使用网格与运行时服务，外部热化学库通过适配器接入。 |
| 网格与几何层 | `mesh/` | 管理笛卡尔网格、局部加密、全局网格编号、几何查询、IBM标记、局部重构及网格耦合模板。 |…
