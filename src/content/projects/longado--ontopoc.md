---
repo: "Longado/ontopoc"
name: "ontopoc"
description: "Ontology tool for MCP / Claude: draft, check, and confirm ontologies from business data. Schema work ahead of a knowledge graph or semantic layer."
readmeQualityOk: true
url: "https://github.com/Longado/ontopoc"
homepage: "https://longado.github.io/ontopoc/"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [66, 31]
topics: ["evidence", "llm-agents", "ontology", "python", "human-in-the-loop", "nhtsa", "data-quality", "knowledge-graph", "ontology-engineering", "mcp"]
stars: 182
forks: 17
openIssues: 0
closedIssues: 0
watchers: 12
contributors: 2
recentReleases: 1
createdAt: "2026-08-29T01:47:28Z"
lastCommitAt: "2026-11-23T10:15:48Z"
lastReleaseAt: "2026-11-16T04:51:26Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 28
maintainers: ["Longado"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1350183888/d0e4a00a-4221-4594-bbac-0e1684ae2f72"
---

OntoPoc is an ontology tool for a team's own data: the team writes down what its tables mean (object types, keys, code meanings, relations, views), code checks each definition against every row, a second named person confirms it on a given data version, and Q&A, boards and AI agents over MCP answer only from what was confirmed. It is not a knowledge-graph platform; it is the confirmed part of a semantic layer.

团队把表格的含义写下来：对象类型和主键、代码列每个取值是什么意思（例如状态码 2 = 已取消）、关系、视图（例如“有效订单”）、派生属性。这就是团队的本体（ontology），也就是语义层里“这个数怎么算”的那一部分。每个定义由代码在全部行上检查，再由另一位具名同事对着某一版数据确认。问答、看板和通过 MCP 接进来的 AI 只用确认过的定义；数据或定义一变，靠它的东西回到“需再看”，用到它的问题拒答，说出是哪一项、谁能确认。OntoPoc 还在开发中，还没有作者以外的用户。

## 它会怎么拒答

三种结果，都在仓库自带的示例数据上（150 张订单，状态码 0–5），[演示站](https://35-229-236-140.sslip.io/)（临时地址）用的也是这份数据，访客只读：

| 你问 | OntoPoc 答 | 为什么 |
|---|---|---|
| “有效订单的总金额是多少？” | **119,810**，旁边写着按什么算的：视图“有效订单”（已付款、已发货、已送达），谁确认的，基于订单第 1 版 | 用到的定义都确认过 |
| 问题点名了一个还没人确认的定义 | 在问模型之前就挡下，说出是哪个定义、谁能确认 | 提出不等于确认。能看到这个定义的人会得知名字和谁能确认；查看者只读已确认的定义，从没确认过的定义不会被告知名字，已确认、正在等再确认的只被告知回答在等确认 |
| 上传 `orders_update.csv`（出现新代码 6，没人写过含义）之后再问同一题 | 拒答：“有效订单”需再看；看板上显示它在等谁、上次的数 | 确认之后数据变了 |

回答算的是全部行时，旁边还给出每个已确认视图各自的数；回答只算一个已确认视图时，旁边还给出全部行的数。上面那个数算哪些行，和以前一样决定。
