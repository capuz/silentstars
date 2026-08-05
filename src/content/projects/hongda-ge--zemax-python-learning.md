---
repo: "hongda-ge/zemax-python-learning"
name: "zemax-python-learning"
description: "Learning notes and scripts for Zemax ZOS-API, Python automation, and optical simulation."
readmeQualityOk: true
url: "https://github.com/hongda-ge/zemax-python-learning"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-29T08:31:15Z"
lastCommitAt: "2026-08-05T06:05:08Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 36
maintainers: ["hongda-ge"]
openGraphImageUrl: "https://opengraph.githubassets.com/380c84bea0fa8fc9e1c0a62b9cdae9aeed821fdafc71edeb4d24ca4942ea1e26/hongda-ge/zemax-python-learning"
---

# Zemax 自动化实验编排与决策支持系统

> 使用 Python 与真实 ZOS-API，把一次性的手动光学试验转化为安全、可重复、可审计的参数研究与候选决策流程。

## 项目定位

传统 Zemax 优化通常给出某套评价函数下的一个低值解，但工程设计还需要回答更多问题：

- 参数在附近变化时，性能规律是什么？
- 最低点是尖锐最优点，还是存在更容易加工和装调的近优平台？
- Spot、MTF 与 Merit Function 给出不同倾向时，应该怎样解释？
- 不同候选是否使用了相同模型、分析设置和评价规则？
- 在没有明确需求时，怎样避免制造一个缺乏依据的“唯一最优解”？

本项目让 Zemax 负责真实光学计算，让 Python 负责实验编排、安全边界、批量执行、证据校验和决策报告。

```text
工程问题与约束
      ↓
YAML 实验配置与执行授权
      ↓
模型副本、哈希校验与 ZOS-API 连接
      ↓
参数扫描 → 重新对焦 → Spot / FFT MTF / Merit Function
      ↓
稳健区间、Pareto 候选与透明决策规则
      ↓
带适用条件的候选建议，而不是无条件的“最优值”
```

## 项目价值

### 1. 从单点优化转向性能规律

Python 可以在受控范围内系统改变光学参数，记录完整性能剖面。这样不仅能看到哪个采样点较好，还能观察趋势、敏感度和近优区域。

### 2. 从数学最优转向工程候选

单个最低点可能对制造误差非常敏感。本项目更关注性能良好、约束合法且局部变化相对平缓的候选区域，为后续公差、加工和装调分析提供依据。

### 3. 从脚本运行转向可审计实验

每次正式运行都保留配置、模型 SHA256、分析设置、原始 Zemax 文本、结构化 JSON/CSV 和连接关闭状态。异常会停止批量任务，而不是静默生成不可信结果。

### 4. 从隐藏总分转向透明决策

项目不使用缺乏依据的隐藏加权分数。候选先经过明确门槛，再按指定指标排序；推荐结果必须说明适用场景、比较规则和局限性。

### 5. 兼顾光学学习与自动化工程

学习过程按照“计划检查 → 单案例验证 → 小批量执行 → 结果解释”推进。每个阶段都有中文学习记录，适合光学背景、编程经验较少的学习者理解 ZOS-API 的真实工作流程。

## 当前 V1 实验

当前主线使用 Zemax 示例 Cooke Triplet，研究 LDE 面 2 的 `Thickness`：

- 物理含义：第一片与第二片透镜之间的空气间隔；
- 基准值：`6.0075511 mm`；
- 三个视场：`0° / 14° / 20°`；
- 三个波长：`0.480 / 0.550 / 0.650…
