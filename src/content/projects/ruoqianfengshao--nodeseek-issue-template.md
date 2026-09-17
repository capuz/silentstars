---
repo: "ruoqianfengshao/nodeseek-issue-template"
name: "nodeseek-issue-template"
description: "nodeseek issue template script"
readmeQualityOk: true
url: "https://github.com/ruoqianfengshao/nodeseek-issue-template"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [97]
stars: 17
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-07-27T07:46:39Z"
lastCommitAt: "2026-09-17T08:50:02Z"
lastReleaseAt: "2026-07-28T07:54:43Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 77
undervaluedScore: 39
maintainers: ["ruoqianfengshao"]
openGraphImageUrl: "https://opengraph.githubassets.com/e449d9ee9178277c545eeb919048798740b8d0b244fc21068a48f868ff7ded15/ruoqianfengshao/nodeseek-issue-template"
---

# NodeSeek Issue Templates

为 NodeSeek 交易帖准备的 Tampermonkey 脚本。通过表单快速生成单机或多机交易帖的标题与 Markdown，减少重复填写，让配置信息更清晰、交易内容更易读。

## 安装

在 Tampermonkey 中直接安装：[NodeSeek Issue Templates.min.user.js](https://github.com/ruoqianfengshao/nodeseek-issue-template/releases/latest/download/NodeSeek.Issue.Templates.min.user.js)。

脚本覆盖 NodeSeek 全站，但只会在包含帖子标题和 Markdown 编辑器的新帖页或编辑帖页注入“出🐔模板”入口，不影响普通浏览。

## 使用界面

点击发帖页面的“出🐔模板”入口，填写机器配置、交易信息和常用标签后，即可生成可直接发布的内容；“收🐔模板”则提供独立的轻量收购表单。

支持文本和表格两种 Markdown 格式，也可以在一篇帖子中整理多台机器。

| 文本格式 | 表格格式 |
| --- | --- |
|  |  |

可选导出剩余价值卡片，帮助买家快速了解剩余价值。

## 功能

- 支持厂商、型号、CPU、内存、硬盘、带宽、流量等配置的选择、匹配和自由新增
- 支持单机、多机书签编辑与统一标题生成
- 支持剩余价值计算、续费金额人民币换算和实时汇率；可选择是否导出价值卡片
- 支持预出总价与溢价二选一校验及价格预览
- 支持填写 NodeSeek / TQ 地址，以及常用标签快捷选择
- TG 地址本地缓存：填写一次后可自动回填
- 支持文本和表格两种 Markdown 导出格式
- 支持在发帖页一键设置抽奖，发布后自动把抽奖信息写进正文
- 支持新帖与编辑已有帖子；编辑时会自动解析当前 Markdown，还原单机或多机表单
- 支持独立的收🐔模板，可填写目标机器、配置、续费与交易要求，并选择溢价收、剩余价值折收、剩余价值收、总价收或带价聊

## 抽奖

发帖页「发布」按钮旁有独立的「🎁 抽奖配置」入口，只对当前页面这一次发布生效，重新打开发帖页就要重新填：

- 开奖时间（默认 24 小时后，使用日期时间选择器）、奖品数量、起始楼层（三项同一行）、楼层去重
- 参与方式合并写成一行，互动（点赞 / 鸡腿）排在回复内容（任意回复 / 包含回复 / 固定回复）前面
- 抽奖信息按配置写在正文末尾或开头；「显示信息」里可单独关闭参与方式、开奖时间、中奖人数的显示
- 「标题」默认 `# 🎁 抽奖信息`，会作为抽奖块的第一行写进正文（支持 Markdown，留空则不写标题行）
-…
