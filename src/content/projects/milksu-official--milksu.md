---
repo: "MilkSU-Official/milksu"
name: "milksu"
description: "面向安全学习、漏洞研究与软件开发的本地 AI Agent GUI"
readmeQualityOk: true
url: "https://github.com/MilkSU-Official/milksu"
language: "Go"
languages: ["Go", "TypeScript", "JavaScript"]
languagePcts: [39, 31, 25]
stars: 24
forks: 5
openIssues: 4
closedIssues: 17
watchers: 0
contributors: 13
recentReleases: 10
createdAt: "2026-06-27T09:09:21Z"
lastCommitAt: "2026-09-17T08:50:17Z"
lastReleaseAt: "2026-08-25T08:51:22Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 49
maintainers: ["MilkSU-Official", "MetatronPrototype"]
openGraphImageUrl: "https://opengraph.githubassets.com/f9c8469ff1b5f4efd16c6d3d21d9d1a7a3a5484f75b16eee02cd88f028b5c24c/MilkSU-Official/milksu"
---

</p>

<h1 align="center">MilkSU</h1>

  面向安全学习、漏洞研究与软件开发的本地 AI 工作台
</p>

</p>

  ·
  ·
  ·
</p>

MilkSU 把 Coding、CTF、CVE 和实验室放进同一个桌面。Agent 读项目、改文件、跑测试；也可以对着一道题、一个 CVE 或一次实验室作业，把题面、材料、过程和产物留在同一条可回看的任务里。

它不是只有输入框的聊天客户端。项目文件、内置浏览器、你选定的真实浏览器标签页、外部桌面应用，都可以成为当前任务的一部分。你可以随时看、补一句、接管或停掉。

## 能做什么

### Coding

打开仓库，让 Agent 改代码、构建、测试、审阅。会话能改名、归档、恢复；回到 Coding 接着上次，不必每次从空白草稿开始。输入框旁有上下文用量；接近窗口约 80% 且空闲时会自动整理。执行范围用 Plan / Go，以及只读、请求批准、替我审批、完全访问。

### CTF

浏览 NSSCTF、CTFshow，收藏题目，拿每日训练。点进详情再打开，为每道题单独工作区。材料、Evidence、候选、Judge 回执和复盘都留在题目里。解题对话在右下角可拖放小窗，和终端、Git、产物在一起。成功只由平台 Judge 或你本人确认。

### CVE

按编号、产品或关键词搜索公开 CVE，加入个人研究列表。点进档案再复现：Agent 编辑 `report.md`，对话留在小窗。不以「复现成功 / 没复现上」当完成面。

### 实验室

和 CTF / CVE / Coding 同级。可以给本地或远程地址开一次探测，也可以从题目包起本机 Docker 靶（Juice Shop / WebGoat / S2-045 / whoami）或安卓 MilkSU-Lab。Agent 把过程写进 `report.md`。

<table>
  <tr>
    <td width="50%">
    </td>
    <td width="50%">
    </td>
  </tr>
  <tr>
    <td width="50%">
    </td>
    <td width="50%">
    </td>
  </tr>
</table>

## Agent 怎么动手

当前任务里有哪些能力，产品会告诉模型；模型按上下文选用。不会靠扫描你句子里的关键词去开浏览器或切页。

- 文件、Shell、Git、LSP、测试、产物预览
- 会话隔离的内置浏览器，以及你明确点选的 Chrome / Edge 标签页
- Computer Use：macOS / Windows 按窗口；Linux GNOME 按整桌面授权
- 设置里准备 IDA Pro /…
