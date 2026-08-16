---
repo: "Acidmoon/DIzzy-DSH"
name: "DIzzy-DSH"
description: "My DSH plugins"
readmeQualityOk: true
url: "https://github.com/Acidmoon/DIzzy-DSH"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [96]
topics: ["dsh-plugin"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-13T16:51:18Z"
lastCommitAt: "2026-08-16T04:08:44Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 39
maintainers: ["Acidmoon"]
openGraphImageUrl: "https://opengraph.githubassets.com/b45adc439fe663dc2e50ce9208f18d7aba22586bfbc3d8230afa2c4a80eabec0/Acidmoon/DIzzy-DSH"
---

# 🌀 Dizzy-DSH —— DSH 插件合集

一个「克隆即装」的 [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) 插件合集:
**一条命令装完,重启即用** —— 余额、用量、Agent 规则、浏览器控制、订阅登录、视觉识别、生成式 UI、桌面通知、IDE 侧边栏、界面换装,一次到位。

无需 npm 发布;仓库本身作为 bundle 层安装,重启后依然生效。

##  能力总览

### 自有插件

| 插件 | 能力 | 怎么用 | 状态 |
|---|---|---|---|
|  **余额查询** `dizzy-dsh-balance` | DeepSeek 官方账户余额实时显示,每分钟自动刷新 | 输入栏右侧常驻徽章;对话中直接问「余额」或调用 `balance_check` 工具;`/dizzy/balance` 命令 | ✅ 稳定 |
|  **本月用量** `dizzy-dsh-usage-card` | 本地会话日志聚合 token 用量:月度热力图 / 近 7 天趋势 / 今日分模型堆叠条(输入未命中 / 命中缓存 / 输出) / 峰谷时段 | 对话区右侧「用量」Tab(对话、轨迹并列);曲线按横坐标吸附最近一天;悬浮弹窗看分项并跟随鼠标;支持月份切换 + 60s 自动刷新 | ✅ 稳定 |
|  **Agent 规则注入** `dizzy-dsh-agent-instructions` | 向每个会话注入 Agent 规则:用户哨兵规则(第一性原理 / 对抗式审查 / 子代理优先 / 喵字开头)+ 开发规范(不重复造轮子 / 核心约定 / 防御性模式 / 类型安全) | 装完即全局生效,所有会话、所有工作区;编辑规则文本**下一轮对话即生效**,无需重启 | ✅ 稳定 |
|  **浏览器控制** `dizzy-dsh-kimi-webbridge` | 通过 Kimi WebBridge(daemon + 浏览器扩展)控制你的**真实浏览器**:打开网页、读取页面、点击、填表、截图、抓包、存 PDF —— 带登录态的会话直接可用 | 渐进式披露:模型先调用 `kimi_browser_activate` 引导工具,随后获得全套 `kimi_browser_*` 工具(导航/快照/点击/输入/截图/标签管理) | ✅ 稳定 |

### 第三方插件(能力速览)

| 插件 | 能力 | 怎么用 | 状态 |
|---|---|---|---|
|  **视觉识别** `dsh-vision-toolkit` | 看图问答 / 描述 / OCR / 元素定位 / 检测 / 像素对比 / 长截图 OCR / UI 还原 |…
