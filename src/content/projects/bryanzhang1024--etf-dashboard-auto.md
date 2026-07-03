---
repo: "bryanzhang1024/etf-dashboard-auto"
name: "etf-dashboard-auto"
description: "ETF 估值与性价比仪表盘 面向逆向与估值驱动的 ETF 投资者，这个仪表盘把 A 股、港股、美股核心指数的估值区间、回撤、股息率等关键指标放在同一视图里，帮你快速判断“贵还是便宜”。  https://bryanzhang1024.github.io/etf-dashboard-auto/"
url: "https://github.com/bryanzhang1024/etf-dashboard-auto"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 37
forks: 11
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-10-14T01:30:18Z"
lastCommitAt: "2026-07-03T12:23:15Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 69
undervaluedScore: 32
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/18338c9e647b9f09041abfac1f33bbba5daba7b76e62eb632cf3ce73fed2b640/bryanzhang1024/etf-dashboard-auto"
---

# ETF 估值与性价比仪表盘

面向逆向与估值驱动的 ETF 投资者，这个仪表盘把 A 股、港股、美股核心指数的估值区间、回撤、股息率等关键指标放在同一视图里，帮你快速判断“贵还是便宜”。

> **在线体验**：https://bryanzhang1024.github.io/etf-dashboard-auto/
>
> **数据刷新**：每个交易日北京时间 18:30 左右自动更新（GitHub Actions）

## 这个仪表盘能帮你

- 一眼看到 20 个核心指数的 Value（PE/PB 百分位）与 Pain（近十年回撤）得分，找出真正低估的板块。
- 展示当前股息率、ROE、估值区间标签，辅助在“便宜但陷阱”和“便宜有支撑”之间做决策。
- 保留 ETF 代理列表，点开即知道可以交易的对标产品。

## 如何使用

### 在线直接查看

1. 打开上方在线地址，默认展示最新一次数据快照。
2. 如遇缓存，可使用 `Shift + F5` 刷新确保看到最新分数。
3. 点击单个指数卡片可展开指标明细。

### 本地探索或自行部署

```bash
pip install -r requirements.txt
python scripts/fetch_djeva.py
python scripts/fetch_cn_csindex.py
python scripts/fetch_hk_hsi.py
python scripts/fetch_us_yf.py
python scripts/compute_metrics.py
python scripts/build_assets.py
python -m http.server 8000 --directory docs  # 可选：本地预览
```

运行完成后，最新结果会写入 `docs/assets.csv`，本地访问 `http://localhost:8000` 即可复现线上页面。

> 抓数脚本依赖外网访问；如在 CI 或内网环境执行，请确保出口能够访问中证指数、恒指官网及 Yahoo Finance。

## 数据来源与更新频率

- **中证系指数**：通过 AKShare 请求中证官网估值与行情接口，持有 15 年历史；如接口返回 403，可将配置中的 `pe_source/pb_source/dp_source` 暂设为 `none`，模型会自动降权。
- **恒生系列**：定期抓取恒指官网 Factsheet PDF 中的 PE/PB/Dividend Yield，再用 Yahoo Finance 提供的行情补齐时间序列。
- **美股及其他海外指数**：利用 Yahoo Finance 指数行情 + ETF 代理股息率（SPY、QQQ、XLV 等）计算分位。
-…
