---
repo: "S0ra-ai/Aletheia-onto"
name: "Aletheia-onto"
description: "可核验的业务语义内核：为传统业务系统建立领域本体与语义映射，输出带依据规则、证据链与决策留痕的判定结论"
readmeQualityOk: true
url: "https://github.com/S0ra-ai/Aletheia-onto"
homepage: "https://github.com/S0ra-ai/Aletheia-onto#readme"
language: "Python"
languages: ["Python"]
languagePcts: [86]
topics: ["data-governance", "fastapi", "governance", "knowledge-graph", "ontology", "python", "rule-engine", "semantic-layer"]
stars: 17
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-06T08:46:44Z"
lastCommitAt: "2026-08-24T04:22:55Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 86
undervaluedScore: 43
maintainers: ["S0ra-ai", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d2b4eb5008250007815ae0bf7e2cb37072e719d62712387150ead25a314b0f39/S0ra-ai/Aletheia-onto"
discussionCount: 0
---

# Aletheia

> 让埋在表结构里的业务语义显形，并让每个判定都可核验。

[English](https://github.com/S0ra-ai/Aletheia-onto/blob/HEAD/README.en.md) | 简体中文

Aletheia（ἀλήθεια）是古希腊语的「真理」，亦为真理女神之名。它的字面义是
**「去蔽」——使被隐藏之物显现**。这与本项目要做的事高度一致：业务语义被掩埋在
表名、字段与外键中，Aletheia 把它揭示为可治理的领域本体，并让每个判定结论都可核验。

神话中它的对立面是 Pseudologoi（谎言之灵）——看似合理却无法核验的言说。
这正是本项目要解决的问题。

---

## 解决什么问题

通用 RAG 框架优化的是「检索到的内容像不像答案」。Aletheia 优化的是
**「答案能不能被追问」**。

对权益、金额、合规、审批这类判定场景，一个「看起来对」的回答没有价值，
因为没有人能为它签字。Aletheia 的判定类结论必须同时给出四样东西：

| | 来源 |
|---|---|
| **结论** —— 订单 A123 不满足退款条件 | 规则引擎 |
| **依据规则** —— `refund_window_check` | 业务规则定义 |
| **证据链** —— 签收日期 2026-07-28，距今 24 天，超过 15 天窗口 | 结构化查询 |
| **决策记录** —— 落库的 `decision_record`，可审计、可复核、可追责 | 决策留痕 |

目标形态是这样一句客服回答：

> 「订单 A123 不满足退款条件，因签收已超 15 天（规则 `refund_window_check`），
> 依据《售后政策》第 3.2 条。」

其中「超 15 天」来自结构化查询，「不满足」来自规则引擎，
「第 3.2 条」来自文档检索。

**三段现已全部打通。** 「第 3.2 条」由文档知识层提供：条款按编号切分、
锚定到具体规则、经审核后才可被引用（见[文档知识库](#文档知识库)）。

检索质量不是本项目的优势，也明确列在 Non-Goals 中；默认实现为零外部依赖的
BM25，追求召回质量的部署可注册 pgvector 等后端。**可核验的引用**才是差异点。

与 Dify／FastGPT／LangChain 的差别不在检索精度，而在结论的可追问性。

## 效果图

以下均为真实运行截图，非示意图或设计稿。数据来自内置的合成示例系统
（`examples/contract-system` 与设备运维样例），不含任何真实业务信息。

### 工作台：一屏看清「接下来该做什么」

待处理事项按阻断优先排序，每条都指向可以处理它的页面。…
