---
repo: "JunCxio/GoldMonitor"
name: "GoldMonitor"
description: "GoldMonitor 是一个黄金价格监控工具，提供 Windows 桌面版和 macOS DMG 安装包，用于查看实时金价、设置风险提醒、接收邮件通知、手动生成风险分析，并持续关注行情。"
readmeQualityOk: true
url: "https://github.com/JunCxio/GoldMonitor"
language: "Python"
languages: ["Python"]
languagePcts: [72]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-06-08T09:22:56Z"
lastCommitAt: "2026-07-29T06:15:12Z"
lastReleaseAt: "2026-07-28T02:32:28Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 52
maintainers: ["JunCxio", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/253011b3f201e9259442856c3fdca0d3be0eb69f8d06b9526ff9ac7ee2c4c381/JunCxio/GoldMonitor"
---

# GoldMonitor

</p>

</p>

</p>

GoldMonitor 面向希望在本机持续观察金价、管理持仓并复盘交易决策的用户。数据和配置默认保存在本地；风险分析仅在用户手动触发时调用已配置的模型服务。

## 适合的使用场景

- 需要同时查看国际金价、人民币克价与 USD/CNY 汇率，并掌握数据来源和更新时间。
- 希望按价格、短时波动或目标价接收桌面、邮件或 Webhook 提醒。
- 需要在本地维护黄金持仓、流水、风险分析历史和复盘记录。
- 希望使用免费、可审查、可自行构建的桌面工具，而不是把配置和历史上传到云端。

## 主要功能

- 实时获取 XAU/USD、人民币克价和 USD/CNY 汇率，展示数据源、更新时间、缓存状态和日内统计。
- 提供统一预警中心，在同一列表维护价格、波动、目标价和持仓规则；支持名称搜索、状态筛选、批量启停/重置/删除，并集中查看监控中、已触发、已过期和已停用状态。
- 每条规则可设置生效时间、失效时间、独立冷却时间和通知渠道；渠道可继承全局设置、指定本机/邮件/Webhook，或仅记录不发送。
- 规则详情提供运行诊断和单规则最近 30 天触发复盘，展示当前值、距触发差距、数据阻塞原因、实际通知渠道、送达率、处理率和 24 小时后行情延续率。
- 新建或编辑价格、波动、目标价和持仓规则时，可运行 7 天、30 天或 90 天历史模拟。持仓规则会使用本地流水与历史行情还原估值，并在交易日期或历史覆盖不足时明确拒绝生成不可靠结果。
- 支持预警策略模板，可保存价格阈值、波动提醒、冷却、静默和通知级别，并按场景一键切换。
- 支持持仓看板，可维护人民币克价和国际金价持仓，展示成本、市值、浮动盈亏，并导出 CSV。
- 警报记录会显示邮件和 Webhook 的最终投递状态，区分发送中、已送达和失败；可对失败通知重发，并记录有限重试次数与完成时间。
- 警报记录支持本地保存、新警报计数、通知异常重发、搜索筛选、CSV 导出到固定导出目录和一键清空。
- 支持提醒冷却时间、静默时段、邮件标题模板和正文模板。
- 支持 Webhook 通知，可按预警级别控制是否发送。
- 支持本地每日摘要调度，可按设定时间通过邮件或 Webhook 汇总最近 24 小时的价格、预警、风险分析、新闻、复盘笔记、数据质量和持仓；程序当天晚启动时会补发，摘要不会自动调用模型。
- 新安装会显示四步首次使用向导，集中说明本地存储、行情状态、桌面行为和本机预警设置；完成后可从运维设置重新打开。
- 支持桌面金价悬浮条，显示涨跌颜色、更新时间和数据源状态，并提供右键菜单。
- macOS 桌面版支持菜单栏金价、菜单栏打开主窗口、刷新行情、风险分析、通知中心提醒和系统提示音。
- 支持风险分析助手，用户手动触发，避免后台自动消耗模型…
