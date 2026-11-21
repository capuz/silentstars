---
repo: "WTYJ/ucloud-Enhanced"
name: "ucloud-Enhanced"
description: "Optimize the display of the BUPT teaching cloud platform"
originalDescription: "优化北邮教学云平台显示效果"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/WTYJ/ucloud-Enhanced"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-25T04:10:57Z"
lastCommitAt: "2026-11-21T11:34:35Z"
lastReleaseAt: "2026-11-21T11:35:03Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 55
maintainers: ["WTYJ"]
openGraphImageUrl: "https://opengraph.githubassets.com/374613701d858c0d6004d556b14fcb4828042420ff4991ae87862eaed6878b34/WTYJ/ucloud-Enhanced"
---

# ucloud-Enhanced

**ucloud-Enhanced** 是一款北邮云邮教学空间（[ucloud.bupt.edu.cn](https://ucloud.bupt.edu.cn/)）的用户增强脚本，基于 [uarix/ucloud-Evolved](https://github.com/uarix/ucloud-Evolved) 二次开发，安装 Tampermonkey 后即可使用。

## ✨ 相对原版的改进

- **新增**：独立「工作台」（Shadow DOM 隔离，现代风亮/暗双主题，支持 `Esc` 逐级返回、`/` 聚焦搜索、`1/2/3` 切页签与滚动位置记忆）
  - **待办**：支持「待完成 / 已提交（未截止）」分段切换、截止紧迫度倒计时与色条、班级已交进度、多课程筛选胶囊
  - **课程 & 课程空间**：支持课程搜索、星标置顶、待办角标；点击进入课程空间可直接按章节浏览/预览/按组或整课批量下载课件，并查看本课全部作业与测试
  - **作业详情**：工作台内直接查看富文本要求、作业附件、班级进度，以及「我的提交与批改」（得分、教师评语/驳回原因、已交附件预览下载）
  - **通知**：支持关键词搜索、「仅看未读」筛选、单条/全部已读与安全外链渲染
- **修复**：测试类待办无法显示所属课程的问题（原版 [#12](https://github.com/uarix/ucloud-Evolved/issues/12)）——课程匹配现在同时扫描作业与测试列表
- **修复**：待办课程名偶发与条目错位——改为按活动标题与页面卡片对齐
- **新增**：自动深色模式（跟随系统深色外观即时切换；动态主题引擎：浅底转深底、深字转浅字，彩色与图片保持原样），默认开启
- **重构**：助手 UI 全面重设计——可拖动悬浮球 + 快捷开关面板 + 现代设置中心（轻量设置热生效，免强刷）
- **改进**：自动更新检查的版本比较按数值逐段进行（原版的字符串比较在 x.10 这类版本号上会误判）

## 🧩 继承自原版的功能

- 个人主页：作业显示来源课程、课程搜索（课程名/教师/院系）、翻页增强
- 课件预览：Office 365 / 浏览器原生 PDF / 内置图片预览器、预览自动下载
- 课程资源：全部下载（带进度显示）、下载按钮常驻显示
- 通知：按时间排序、未读高亮
- 系统：新标签页打开、解除复制限制、页面标题优化、可配置悬浮窗
