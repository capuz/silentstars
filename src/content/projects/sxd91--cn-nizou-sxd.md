---
repo: "sxd91/cn.nizou.sxd"
name: "cn.nizou.sxd"
description: "老挂戏老叟：小猿口算 com.fenbi.android.leo LSPosed 模块（自动答题/秒结算/循环PK）"
readmeQualityOk: true
url: "https://github.com/sxd91/cn.nizou.sxd"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [98]
topics: ["auto-answer", "lsposed", "lsposed-module", "xposed", "xposed-module", "xiaoyuan-kousuan"]
stars: 13
forks: 2
openIssues: 3
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2026-08-25T07:42:05Z"
lastCommitAt: "2026-09-06T08:03:00Z"
lastReleaseAt: "2026-08-31T11:10:45Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 43
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7477b28cf9147221112d5d249e401b9250fb4ab138346bb157c0de9e7fdca272/sxd91/cn.nizou.sxd"
---

# 老挂戏老叟

**小猿口算（`com.fenbi.android.leo`）LSPosed 增强模块 · libxposed Modern API 102**

> 💬 **QQ 交流群：`994173459`**（反馈问题 / 获取新版本 / 交流使用）

</div>

## 介绍

**老挂戏老叟** 是一款为 **小猿口算**（猿辅导旗下口算练习 App，包名 `com.fenbi.android.leo`）量身定制的 **LSPosed / Xposed 增强模块**，基于 libxposed Modern API 102 开发，灵感来自 [AutoOralCalculation](https://github.com/TinyHai/AutoOralCalculation)。

模块为小猿口算提供**口算自动答题、秒结算、循环 PK、自定义结算时间、用户信息采集**等增强能力，UI 对齐 [WeKit](https://github.com/Ujhhgtg/WeKit)（注入宿主全屏面板 + 悬浮胶囊底栏 + 动态配色）。

> 支持在小猿口算 App 内通过注入面板直接配置，也可独立打开模块本体设置。

## 功能

### 口算练习
- 口算练习自动答题
- 口算练习秒结算（进局环境加速）
- 口算练习循环练习（可与秒结算一起开）
- 口算练习刷分（可自定义次数）
- 识别结果永远为正确答案

### 口算 PK
- 口算 PK 自动答题
- **口算 PK 秒结算**（移植自 [ExElectron/Xiaoyuan_Kousuan_2026](https://github.com/ExElectron/Xiaoyuan_Kousuan_2026) 的 7 大 patch，运行时注入）：
  - 进局环境加速：CSS 动画压至 0s / 音效静音 / 自动模拟笔画（AUTODRAW）/ 跳题 0ms / 判题恒真兜底 / 跳过手写识别等待
  - 与自动答题（极速/标准）配合实现「进局秒结算」
- 口算 PK 循环 PK
- 自定义答题脚本功能（有前端开发经验应该可以自己定义答题逻辑）

### 其它
- 自定义结算时间（毫秒）
- 自定义分数 / 改答案 / 改题目数量
- 用户信息采集（多子账号卡片：昵称 / 头像 / ID / Cookie）
- 无视名字限制（昵称长度与字符/格式限制全部放开）
- 实时日志悬浮窗 / 运行与崩溃日志查看、分享、保存
- 抓包 / 改包（okhttp 拦截器）

## 下载

前往 [Releases](https://github.com/sxd91/cn.nizou.sxd/releases) 获取最新构建。

## 当前支持

| 项目 | 支持范围 |
| --- | --- |
|…
