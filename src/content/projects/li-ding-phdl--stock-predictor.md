---
repo: "Li-Ding-PhDL/stock-predictor"
name: "stock-predictor"
description: "一键式 A 股预测研究软件：34算法+5种超参优化+朴素基准/方向准确率诚实性评估，GUI/CLI/API 三种用法"
readmeQualityOk: true
url: "https://github.com/Li-Ding-PhDL/stock-predictor"
language: "HTML"
languages: ["HTML", "Python"]
languagePcts: [59, 41]
stars: 10
forks: 5
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-08-22T11:38:11Z"
lastCommitAt: "2026-11-16T11:54:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 67
undervaluedScore: 42
maintainers: ["airzcueyw-png"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd84e3878a140f31d1573066a272c7b1294e56fee083bb6b1237fe7593ca53a2/Li-Ding-PhDL/stock-predictor"
---

# stock-predictor · 一键式 A 股预测研究平台

> ⚠️ **免责声明 / 红线（务必先读）**
> - 本项目**仅供交流与学习，不构成任何投资建议，也绝不荐股**；作者与本产品**不承担任何法律责任与风险**，据此交易盈亏自负。
> - 真实 A 股上，多数模型的方向准确率≈50%（和抛硬币差不多）。本软件的价值**不在"预测得准"，而在于诚实地告诉你到底准不准、并帮你避开明显的雷**。
> - 请仅用于个人研究：勿高频抓取公开接口、勿转售/再分发数据、勿无「证券投资咨询」牌照对外荐股或收费（在中国属违法）。
> - **任何"保证高准确率""稳赚不赔"的股票预测都是骗局。**

一个**单文件**（`stock_predictor.py`，约 1.8 万行）的沪深 A 股预测研究平台，用一套统一的
「取数 → 特征 → 训练 → 评估 → 可视化」流水线，把 **35 种算法**插拔在一起，
提供 **图形界面（GUI）/ 命令行（CLI）/ 可编程 API** 三种用法。

它是照着作者的 MATLAB「MIMO 多输出研究平台」做的 Python 版，最大的设计信条是 **诚实优先（radical honesty）**。

---

## 2026-11-16：预测精度优化与场内实时涨跌计算

- **平稳特征工程与防过拟合正则化**：在默认的 `return`（涨跌幅）模式下，`FeatureEngineer` 自动剔除不具平移平稳性的绝对价格/均线/成交量水平列，补充隔夜跳空(`gap_ret`)、日内实体(`intraday_ret`)、上下影线、归一化真实波幅(`natr14`)、波动率调整动量(`ret_z5`/`ret_z20`)、归一化 MACD(`macd_*_norm`)、均线比率、量价相关性(`pv_corr10`)及有向成交量流(`obv_slope10`)等纯因果平稳特征；表格模型（非序列神经网络）通过 `TrainConfig.tabular_tail_steps=3` 截断高维冗余滞后窗口，并强化 `RidgeReg` / `ELM` / `RF` / `ExtraTrees` / `GBRT` / `XGBoost` / `LightGBM` 默认正则化，新增时序内部验证加权集成模型 **`Ensemble`**。
- **场内买卖实时涨跌预测计算**：
  - 新增 `StockDataFetcher.fetch_intraday_bars`（1/5/15/30/60 分钟前复权 K 线，严格校验代码匹配与超时）、`build_intraday_bar_features` 与 `predict_intraday_bars`（严格因果分时…
