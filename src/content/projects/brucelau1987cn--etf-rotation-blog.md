---
repo: "brucelau1987cn/etf-rotation-blog"
name: "etf-rotation-blog"
description: "多市场 ETF/股票交易决策仪表盘：实时行情、滚动多空信号、趋势风控与宏观约束"
readmeQualityOk: true
url: "https://github.com/brucelau1987cn/etf-rotation-blog"
homepage: "https://etf.peekabo.cc/"
language: "Python"
languages: ["Python"]
languagePcts: [52]
topics: ["a-share", "astro", "cloudflare-pages", "quantitative-trading", "trading-dashboard", "cloudflare-d1", "etf", "hong-kong-stocks", "market-data", "us-stocks"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-31T08:16:02Z"
lastCommitAt: "2026-09-16T08:46:57Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 50
maintainers: ["brucelau1987cn"]
openGraphImageUrl: "https://opengraph.githubassets.com/843f77931fa3ab8c5c351a09837427c7b2814aca3d04b36562f194e62c4e0515/brucelau1987cn/etf-rotation-blog"
---

# ETF罗盘

面向 A股、港股、美股与商品期货的研究/交易决策仪表盘：实时行情、滚动多空信号、ETF 轮动、宏观约束、历史验证与研究审计。前端 Astro，生产环境 Cloudflare Pages + Functions + D1。

**在线访问：[https://etf.peekabo.cc/](https://etf.peekabo.cc/)**

快速入口：
[A股罗盘](https://etf.peekabo.cc/a-compass/) ·
[滚动罗盘](https://etf.peekabo.cc/rolling/) ·
[低筹码股](https://etf.peekabo.cc/rolling/low-chip/) ·
[期货滚动](https://etf.peekabo.cc/rolling/futures/) ·
[美股罗盘](https://etf.peekabo.cc/us-compass/) ·
[期货罗盘](https://etf.peekabo.cc/futures-compass/) ·
[宏观数据](https://etf.peekabo.cc/futures-compass/jin10/) ·
[金银持仓](https://etf.peekabo.cc/futures-compass/holdings/)

> 本项目提供研究与教育信息，不构成投资建议。影子模型仅用于研究和审计，不改变正式动作、权重、关键位或模拟执行规则。

## 主要页面

### A股 / 美股罗盘
- `/a-compass/`：A 股 ETF 罗盘与正式动作摘要（08:30 / 11:30 / 14:30 / 22:00 四窗）
- `/a-momentum/`：A 股 ETF 动量与全池
- `/a-macro/`：A 股中观与风险约束
- `/us-compass/`、`/us-momentum/`、`/us-macro/`：美股 ETF 对应页面

### 滚动罗盘（一级导航）
二级固定顺序：**A股 → 期货 → 港股 → 美股**
- `/rolling/`：A 股滚动多空能量传导
- `/rolling/futures/`：期货/现货滚动（当前白银现货 `SI=F` / `hf_XAG`）
- `/rolling/hk/`、`/rolling/us/`：港股 / 美股滚动
- `/rolling/low-chip/`：低筹码股内部模型观察列表（横条双行）
- `/rolling/low-chip/tracking/`：低筹码 10 日追踪（收盘历史 + 30 秒盘中批量行情、临时明细与实时统计）
- `/rolling/insights/`：滚动详细解读（盘后日更）

### 期货罗盘
-…
