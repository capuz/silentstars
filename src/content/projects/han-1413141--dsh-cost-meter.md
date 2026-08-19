---
repo: "Han-1413141/dsh-cost-meter"
name: "dsh-cost-meter"
description: "DeepSeek Harness Session Cost Statistics & OpenCode Go Quota Display, DS Official Balance & Custom Provider Balance Lookup, Codex-like Token Heatmap Plugin: Session/Daily Cost, Budget, History, Peak/off-peak pricing, Price Sync, Multi-vendor pricing (90+ catalog), Coding Plan quota queries (6 vendors), Balance progress bar"
readmeQualityOk: true
url: "https://github.com/Han-1413141/dsh-cost-meter"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
topics: ["cost-tracking", "deepseek", "deepseek-api", "deepseek-harness", "dsh", "dsh-plugin", "dsh-plugins", "harness", "llm", "plugins"]
stars: 97
forks: 7
openIssues: 0
closedIssues: 17
watchers: 1
contributors: 5
recentReleases: 10
createdAt: "2026-08-13T14:57:55Z"
lastCommitAt: "2026-08-19T04:10:07Z"
lastReleaseAt: "2026-08-18T00:51:25Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 38
maintainers: ["Han-1413141", "hi-wenw", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1333235870/bbabaffa-e06a-405f-a283-346ae2884bdc"
discussionCount: 2
---

# dsh-cost-meter

**DeepSeek Harness 会话费用统计插件(界面中英双语)**

本会话费用 · 当日费用 · OpenCode Go 订阅额度显示 · 预算与已用百分比 · 官方账户余额 · 自定义 Provider 余额查询(可配任意 HTTP 端点) · 余额三段进度条 · 历史记录 · 峰谷计价时段显示(UTC 01:00–04:00、06:00–10:00 为峰时段) · 官方价格一键同步 · 类 Codex Token 用量热图 · 多厂商多模型价格计费(内置 90+ 模型价格目录与自动匹配) · 主流 Coding Plan 额度查询与显示(Anthropic / Z.ai / MiniMax / Kimi / OpenRouter / SiliconFlow 六家)

[English](https://github.com/Han-1413141/dsh-cost-meter/blob/HEAD/README.en.md) | **中文**

</div>

---

## 功能总览

| 功能 | 位置 | 说明 |
|---|---|---|
| 本会话费用 | 输入区下方 / 会话标题栏 | 实时累计费用 + 输入/缓存/输出 token,位置可配 |
| 官方余额 | 侧边栏顶部 / 设置页(可配) | 总余额 / 赠送 / 充值,自动刷新 + 手动刷新;可选三段进度条(蓝/橙/灰) |
| 自定义 Provider 余额 | 侧边栏 / 设置页(可配) | 可配置 HTTP 查询任意 Provider 余额(LiteLLM 等);中/英名称、币种、extract 规则;与 Coding Plan 同区可折叠配置 |
| OpenCode Go 额度 | 侧边栏 / 设置页 / 右下角(dock,可配) | 滚动 5 小时 / 本周 / 本月用量百分比与重置时间,三档可分别开关,可同时显示预算已用%;Key 自动发现(DSH 凭据库 OPENCODE_GO_API_KEY / 环境变量 / opencode 登录态)或手动填写 |
| Coding Plan 额度 | 设置页 | 多厂商 coding plan 订阅额度查询(Anthropic Claude Pro/Max、Z.ai/智谱 GLM、MiniMax Token Plan、Kimi/Moonshot 余额、OpenRouter credits、SiliconFlow 余额),各家独立启用开关与 Key,凭据只发往官方端点;无凭据/无订阅为中性提示;SCNet 超算互联网 Token Plan 无 API 额度端点,按官方 Credits 抵扣表由本地账本估算月度用量(无需凭据) |
| 当日费用 | 侧边栏底部(设置按钮上方) |…
