---
repo: "HiWhaleW/dsh-toolbox"
name: "dsh-toolbox"
description: "Local-first DeepSeek Harness plugins for product research, context routing, plugin preflight, and compatibility monitoring."
readmeQualityOk: true
url: "https://github.com/HiWhaleW/dsh-toolbox"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [90]
stars: 26
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-13T17:18:46Z"
lastCommitAt: "2026-08-15T04:03:10Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 12
maintainers: ["HiWhaleW"]
openGraphImageUrl: "https://opengraph.githubassets.com/8f45b68e509863759ddfd1b01735847b6f4ddd538f414458d89ce5f907164168/HiWhaleW/dsh-toolbox"
---

</p>

<h1 align="center">DSH Toolbox</h1>

  给 DeepSeek Harness 的本地工具箱。<br>
  产品研究、上下文切换、插件预检和兼容性监控，都收进一个安全的可视化控制台。
</p>

</p>

  ·
  ·
</p>

> [!NOTE]
> 在线版是安全演示：健康检查、Bundle 开关、变更计划、活动和回滚只在当前浏览器内存中模拟，刷新即复原。它不会连接访客电脑，也不会读取 DSH Profile、API 凭据或 SQLite 数据。安装本地版后才会接通真实 DSH 链路。

> [!IMPORTANT]
> **Experimental MVP · 仅限非商业用途。** DeepSeek Harness 仍处于 Developer Preview，版本升级可能影响 Profile Bundle 兼容性。本项目独立开发，与 DeepSeek 无隶属或背书关系。

## DSH Toolbox 是什么

DSH Toolbox 是给单人本地工作流准备的 DeepSeek Harness 配套工具。四个插件作为原生 DSH Profile Bundles 运行；DSH Switchboard 则位于当前 Harness 进程之外，负责查看 Profile、运行健康检查、预览 Bundle 变更、创建备份并安全回滚。

默认没有账号、托管后端、行为分析、遥测、后台注册表检查或自动升级。真实运行数据保存在本机 SQLite；需要修改 Profile 时，一定先生成计划，用户确认后才写入，并保存可追溯的事务记录。

## 五个组成部分

| 组件 | 日常用途 | 工具数 |
| --- | --- | ---: |
| [`@dsh-toolbox/product-research-workbench`](https://github.com/HiWhaleW/dsh-toolbox/blob/HEAD/packages/product-research-workbench) | 导入 URL/文本证据，整理发现、评估机会、备份项目并生成 Markdown/HTML 报告。 | 12 |
| [`@dsh-toolbox/context-switchboard`](https://github.com/HiWhaleW/dsh-toolbox/blob/HEAD/packages/context-switchboard) | 把任务路由到有边界的上下文，激活原生运行时上下文并支持回滚。 | 10 |
|…
