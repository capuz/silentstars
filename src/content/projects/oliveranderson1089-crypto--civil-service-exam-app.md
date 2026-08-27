---
repo: "oliveranderson1089-crypto/Civil-Service-Exam-App"
name: "Civil-Service-Exam-App"
description: "公务员考试备考工作台：网页+安卓App。成语词语积累、古诗文名句速查(唐诗宋词四书五经)、语雀式小记、知识库块编辑器、资料库(Markdown阅读/OCR识图/全文搜索)、PDF导出。多用户+Cloudflare隧道远程访问。"
readmeQualityOk: true
url: "https://github.com/oliveranderson1089-crypto/Civil-Service-Exam-App"
homepage: "https://gk.gongkaopei2026.click"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [52, 25]
stars: 18
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-25T04:57:24Z"
lastCommitAt: "2026-08-27T14:26:55Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 42
maintainers: ["oliveranderson1089-crypto"]
openGraphImageUrl: "https://opengraph.githubassets.com/aa103b241191b00e4dcc9d110f5fd223975f98081a2813ec576f77d2238f27d7/oliveranderson1089-crypto/Civil-Service-Exam-App"
---

# 公考助手 · Civil-Service-Exam-App

一个公务员考试备考工作台：**网页 + 安卓 APK + 电脑桌面版（Linux .deb / Windows）**，多用户、可远程访问、可离线使用（PWA）。

从「成语词语积累」起步，现在覆盖**历年真题、行测专项练、申论批改与成文、每日时政、常识与理论积累、错题本与遗忘曲线复习、笔记资料管理**，并带微信推送。

> 🌐 在线体验（作者自部署）：**https://gk.gongkaopei2026.click**
> 📱 安卓包：https://gk.gongkaopei2026.click/apk （当前 v3.4）　💻 桌面版：https://gk.gongkaopei2026.click/deb （Linux .deb，当前 v5.1）　🪟 Windows：https://gk.gongkaopei2026.click/win （当前 v6.2）
> 📖 **完整文档在 [docs/README-full.md](https://github.com/oliveranderson1089-crypto/Civil-Service-Exam-App/blob/HEAD/docs/README-full.md)** —— 每个模块的设计取舍、量化实测、踩过的坑，都在那份里。

---

## 界面

**常驻导航**：手机是底部标签栏、电脑是左侧导航栏，五个标签 **今日 / 练 / 积累 / 库 / 我的**
（两者是同一份路由表的两个形态，出哪个只由屏幕宽度决定）。

首页是**今日仪表盘**——今日进度、一个主行动按钮、待办、今日更新、上次练习；
不是功能目录。分组维度是「动作」而不是「学科」：学科降级成标签页里的横向 chip，
横向切学科、纵向分动作。**「练」里选中一个板块 = 把板块页整页内联**，
原来 `首页→行测→言语理解→专项练` 四层，现在两层到位。

电脑端是三栏工作台：浅色工具栏（全局搜索 `Ctrl K` + 考试倒计时）、左侧两级导航（带待办角标）、
中间内容 + 面包屑、右侧常驻面板。做题页右栏可切 **答题卡 / AI 助手 / 草稿纸 / 笔记**——
答题卡能跳题、报用时与均速（模考模式只报答没答、不透出对错），「本题相关」告诉你这个考点
近 30 天练得怎么样；资料分析的材料单独占左栏，和题干并排。配 A–D / J·K / Enter 键盘操作。→ 细节见 [docs/README-full.md ·…
