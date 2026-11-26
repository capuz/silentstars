---
repo: "yiyihuohuo/WMPFWorkbench-go"
name: "WMPFWorkbench-go"
description: "A mini program workbench that runs independently of WeChat and supports MCP"
originalDescription: "脱离微信独立运行、支持 MCP 的小程序工作台"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/yiyihuohuo/WMPFWorkbench-go"
language: "Go"
languages: ["Go"]
languagePcts: [87]
stars: 109
forks: 70
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 1
recentReleases: 5
createdAt: "2026-11-16T10:58:44Z"
lastCommitAt: "2026-11-26T15:25:11Z"
lastReleaseAt: "2026-11-26T14:26:39Z"
status: "newborn"
tags: ["release_machine", "fork_magnet"]
healthScore: 90
undervaluedScore: 22
maintainers: ["yiyihuohuo"]
openGraphImageUrl: "https://opengraph.githubassets.com/245e4d2ba46e848c57f9adc8a752b516c70825c62957d402109575cbd2cd9bd9/yiyihuohuo/WMPFWorkbench-go"
---

# Mini Program Workbench · WMPFWorkbench-go

**A mini program workbench that runs independently of WeChat and supports MCP**

  **QR login · Mini program search · Standalone launch · Runtime debugging · Code restoration · Package export · Agent integration**

> Unofficial personal learning and research project, not affiliated with Tencent, WeChat, or YingYongBao in any way.

---

## What problem it solves

Testing in the mini program space often involves a fragmented workflow: one tool to find an entry point, another window for debugging, and separate methods to obtain the code.

**The Mini Program Workbench connects these steps, from QR login to viewing the code, without switching programs in between.** It hosts the WMPF runtime itself, so mini programs can be opened and debugged without the WeChat client, and it exposes all of its capabilities as MCP interfaces that Agents can call directly. The significance of this project is that it proposes a new direction: why must mini program reverse engineering be done manually inside WeChat? Can it run entirely outside WeChat? Can it be fully integrated with an agent to achieve truly complete automation?
