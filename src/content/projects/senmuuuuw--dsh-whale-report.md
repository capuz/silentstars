---
repo: "SenmuuuuW/dsh-whale-report"
name: "dsh-whale-report"
description: "深迹 DeepTrace — Your Agent, in numbers. DSH 插件：从会话事件日志生成日报/周报/月报/年报/自定义区间，确定性洞察与协作复盘，只读、不改写历史。"
readmeQualityOk: true
url: "https://github.com/SenmuuuuW/dsh-whale-report"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [51, 49]
topics: ["deepseek-harness", "dsh", "dsh-plugin", "agent-report"]
stars: 18
forks: 2
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 2
createdAt: "2026-08-14T10:40:58Z"
lastCommitAt: "2026-08-17T04:19:49Z"
lastReleaseAt: "2026-08-16T15:56:53Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 51
maintainers: ["SenmuuuuW", "mathhyphen"]
openGraphImageUrl: "https://opengraph.githubassets.com/de6c4b0d9d744bd88981431679d4da5028f98c413af9ee08f8038f046b2fb55e/SenmuuuuW/dsh-whale-report"
---

</p>

<h1 align="center">深迹 · DeepTrace</h1>

</p>

<table align="center">
  <tr>
    <td align="center" style="background:#0b1733;border-radius:12px;padding:10px 30px">
    </td>
  </tr>
</table>

<br/>

---

## Why DeepTrace

Agent 跑完之后，真正难回答的问题不是"它做了什么"，而是：

- 哪些 session 最贵？
- 为什么突然开始 retry？
- 哪些操作值得注意？
- 夜里到底跑了多少？
- 是哪次任务把成本拉高的？

DeepTrace 不是 log viewer，也不是普通 dashboard——它把会话事件日志聚合成报告，让这些问题有答案。

## The loop

<table align="center">
  <tr>
    <td align="center" width="30%" style="background:#f5f8f9;border:1px solid #d9e3e8;border-radius:12px;padding:16px 14px">
      <b style="color:#4d6bfe">SEE</b><br/>
    </td>
    <td align="center" width="5%" style="color:#94a2b3">→</td>
    <td align="center" width="30%" style="background:#f5f8f9;border:1px solid #d9e3e8;border-radius:12px;padding:16px 14px">
      <b style="color:#4d6bfe">NOTICE</b><br/>
    </td>
    <td align="center" width="5%" style="color:#94a2b3">→</td>
    <td align="center" width="30%" style="background:#f5f8f9;border:1px solid #d9e3e8;border-radius:12px;padding:16px 14px">
      <b style="color:#4d6bfe">TRACE</b><br/>
    </td>
  </tr>
</table>

一次报告，走完整个闭环。

## Product

<sub>DeepTrace overview — hero, provider…
