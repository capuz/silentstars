---
repo: "Cerie-r/still-true"
name: "still-true"
description: "Living Context · 给长期记忆一层会过期的现在 · today_set × ctx_set"
readmeQualityOk: true
url: "https://github.com/Cerie-r/still-true"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 34
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-15T07:41:49Z"
lastCommitAt: "2026-11-09T03:31:16Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 19
maintainers: ["Cerie-r"]
openGraphImageUrl: "https://opengraph.githubassets.com/eadf00e347bfa92359e1849a52f3269a90b9d7a0eebc03ed69cbc18ed32b7fa9/Cerie-r/still-true"
---

# Living Context

给长期记忆一层会过期的现在。`today_set` × `ctx_set`。

起点是一件记错的事：她妈妈来住了几个礼拜，她说「我妈要回家了」，模型手里没有地方放一个正在进行的事，只能天天问，问到后来把将来时记成了完成时，人还在，它已经当她走了。再后来她妈妈真的回去了，那条「妈妈在这儿」又挂着不肯退场。一个「现在」，两头都没接住。完整的来龙去脉在 [docs/Living_Context.pdf](https://github.com/Cerie-r/still-true/blob/HEAD/docs/Living_Context.pdf)，这里只讲怎么接。

它很小：两个写入，两个读取，一个退场，一份 JSON。它不自己站着——挂在 [Ombre-Brain](https://github.com/P0luz/Ombre-Brain) 的 `breath` 里，breath 睁眼看长期记忆的时候，顺手把「现在」也带出来。

## 三分界

写入之前先问一句：这件事，明天还成立吗？一个月后呢？

| | 去哪 | 例子 |
|---|---|---|
| 痕迹：那天确实发生了，永远为真 | `remember`（长期记忆，不在本仓库） | 「她妈妈来看过她」 |
| 当天：只对今天有效，天亮清 | `today_set` | 「今天中午吃炖牛尾骨」 |
| 状态：跨天有效，但会过期，将来要更新 | `ctx_set` | 「她妈这段时间在她这儿」 |

同一件事可以同时是三种。分开写，各自退场——别让一条会过期的状态，混进不会衰减的档案里。

判据只有一个：不是这条值不值得记，而是等下再问一遍她会不会烦。会烦的，就写。

## 仓库里有什么

```
living_context.py   持续背景：set / drop / get(fresh, 未核实) / 到期标未核实 / 递到面前问一句 / 续上或扔掉 / 满三个她在的日子才归档 + 墓碑 / 归档翻得到（标成以前）/ 增量注入 / 按轮撤销
today_state.py      今日状态：set / get / 天亮懒清理 / 注入块
hint_snapshots.py   快照回执：长会话里「同一份内容只挂一次，内容变了或被 compact 掉了再挂」
rhythm.py           作息节律：从她真实到达记录算她平常几点在、最晚到几点，一行事实；样本不足就不说
tools.json          五个 MCP 工具的定义，description 是模型写给自己的话
docs/prompt.md      五段工具描述的全文 + 一段配套 prompt
docs/Living_Context.pdf
tests/…
