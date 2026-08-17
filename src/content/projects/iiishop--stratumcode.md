---
repo: "iiishop/StratumCode"
name: "StratumCode"
description: "AI coding agent that shows its work — every step visible, every patch approved by you. Build projects brick by brick, stay in control."
readmeQualityOk: true
url: "https://github.com/iiishop/StratumCode"
language: "Python"
languages: ["Python", "Vue"]
languagePcts: [65, 34]
topics: ["agent", "ai-agent", "ai-coding", "coding-agent", "developer-tools", "human-in-the-loop", "llm", "local-first", "mcp", "python"]
stars: 14
forks: 2
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-07-02T20:33:23Z"
lastCommitAt: "2026-08-17T04:19:18Z"
lastReleaseAt: "2026-08-06T01:29:39Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 80
undervaluedScore: 42
maintainers: ["iiishop"]
openGraphImageUrl: "https://opengraph.githubassets.com/23b18254c74732514308de457008553b5602c567a43c9ff56abbdffaecccbeeb/iiishop/StratumCode"
---

</p>

</p>

  <strong>证据驱动，契约先行。</strong>
</p>

  一个本地优先的软件工程 Agent。不会直接从你的指令跳到改代码——<br/>
  而是走完任务分析、代码调查、设计决策、可执行施工计划、事务式修改和独立验证一整套流程。<br/>
  每一步都可追踪、可审计、可回退。
</p>

</p>

---

## 为什么要做这个

从去年开始，我几乎把所有编码工作都交给了 AI。起初还算克制——自己设计好架构、定好接口，再让 Claude 逐个文件产出。后来 Copilot 的 agent 能力上线，我连设计都省了。需求丢进去，等结果，不好就再试一次。现在流行叫"许愿式编程"。

效率当然高。毕设那会儿产出速度是原来的三四倍。以前一天最多写一千行，现在可能只是一个对话的量。

但有些东西在消失。以前写完一段代码，脑子里就能预演运行效果，最后看着自己一砖一瓦搭起来的东西在屏幕上跑——那种爽感是不言而喻的。还有对代码质量的执念：硬编码不能忍、高耦合不能忍、为了可维护性整日整夜地琢磨。

Agent 改变了这一切。输出量太大了，大到我已经不再 Review，只看最终效果。代码变成了黑箱，而我成了验收机器。

大约半年前，纯 agent coding 到了瓶颈期。我试着转回手写，但尝过那种效率之后，很难回头。就像工业革命时期，你还在抱着珍妮机，别人已经流水线了。

所以我开始读 ReAct、Toolformer 这些早期 agent 论文，试遍了市面上的主流 coding agent，最终决定自己做。

**StratumCode**，直译是"代码层析"，但我更喜欢叫它"代码考古"。

Agent 出现之前的程序员，每天做的最多的事是在电脑前发呆。根据函数名跳转看实现、根据字段名查引用、在脑子里把整个模块跑起来，构建一个庞大的代码网络。其实很像考古——从一个小碎片开始，逐渐扩展，最终拼出一个庞大造物的真相。

这个 agent 也是这个思路。我要用程序化的契约和 runtime 管理来硬性约束流程，而不是靠 skill 写一堆提示词苦口婆心求模型遵守。

## 核心理念

> **模型负责提议。Runtime 负责验证、授权、记录和路由。**

大多数 coding agent 追求从需求到补丁的最短路径。这很高效——直到需求本身的假设是错的、代码库告诉你另一个故事、或者一个看似合理的修改悄悄破坏了某处的契约。

StratumCode 换了一个前提：**软件变更在被执行之前，应该是可以被解释的。**

## 工作流

StratumCode 用一个明确的状态机串联整个过程。每个阶段有独立的职责和转移规则：

```
用户需求 → Task Analysis → Investigation → Design →…
