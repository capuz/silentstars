---
repo: "wlrwx/football-engine"
name: "football-engine"
description: "竞彩足球概率分析系统 - Dixon-Coles + Monte Carlo 集成模型，GitHub Actions 全自动运行"
readmeQualityOk: true
url: "https://github.com/wlrwx/football-engine"
language: "HTML"
languages: ["HTML"]
languagePcts: [91]
stars: 19
forks: 25
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-19T17:13:36Z"
lastCommitAt: "2026-11-09T04:35:11Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 100
undervaluedScore: 58
maintainers: ["github-actions[bot]", "wlrwx", "dykily"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b9daa55f32ef78f719eeed631fe796bbf7e6dcb5f9ff641e39557c76070b4c6/wlrwx/football-engine"
---

# Sporttery Engine

竞彩足球概率分析与虚拟投注模拟系统。基于 Dixon-Coles 泊松模型 + 蒙特卡洛模拟，
市场概率主导融合，Kelly 准则做虚拟投注分配，全自动运行在 GitHub Actions 上，
零服务器成本。**仅用于数据分析与算法学习，不构成任何投注建议，所有输出均为虚拟记账。**

## 核心理念（2026-08 数据实证驱动）

1. **市场是基准**：426 场账本实证，纯市场（去水）Brier 0.583 优于任何模型流
   （0.646+）→ 融合权重市场主导（0.75），模型/第三方仅微调
2. **一切开关数据裁决**：融合链每一步都是 config 开关
   （`config/prediction.json["fusion"]["post_fusion"]`），
   由 `scripts/ablation_replay.py` 对已结算账本做配对回放决定去留
3. **自进化带护栏**：校准层/LGBM 的任何自动启用必须通过时间切分 +
   配对显著性检验，退化自动停用——详见 `docs/UPGRADE2_20260829.md`

## 架构

```
每日循环: 抓数据 → 融合预测(fusion.py, 全程trace) → 锁定 → 结算 → 自学习
每周循环: 回测 → 权重优化(champion/challenger) → 参数重拟合 → 周一体检
进化闭环: 洁净样本(chain=v2)累积 → 校准层自动复活/停用(calibration_auto)
                      → LGBM 影子训练+验证(lgbm_shadow) → 周度效果判定(tracker)
```

## 技术栈

- Python 3.12 / numpy / scikit-learn / LightGBM / joblib
- GitHub Actions（计算）+ GitHub Pages（报告）
- 无数据库，纯 CSV/JSON + git 版本化，账本 append-only

## 目录结构

```
engine/
├── prediction/     # dixon_coles / monte_carlo / fusion(纯函数+开关+trace) / lgbm
├── strategy/       # kelly / 水位信号闸门 / 热门区注量 / edge封顶 / 三票制
├── learning/       # fusion_optimizer(权重自调优) / calibration_auto(校准自进化)
│                   # lgbm_shadow(影子训练) / league_params / elo
├──…
