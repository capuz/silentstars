---
repo: "GameServer-GH/MolMind"
name: "MolMind"
description: "AI Agent 驱动的可审计候选优先级系统 · MASLD / HepG2-FFA 对话 / 技能编排 · 公开实验数据 · 毒理证据 · 多组学机制"
readmeQualityOk: true
url: "https://github.com/GameServer-GH/MolMind"
homepage: "https://molmind.cn/"
language: "Python"
languages: ["Python"]
languagePcts: [84]
stars: 21
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-13T07:58:57Z"
lastCommitAt: "2026-08-13T05:16:50Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 35
maintainers: ["GameServer-GH"]
openGraphImageUrl: "https://opengraph.githubassets.com/cca04511a9e9019c1849d934fa20e5232f0af67a67d5dbec935964d397f59ef5/GameServer-GH/MolMind"
---

# MolMind · 分子思维

</p>

  <strong>分子思维（MolMind）</strong> · 生命科学 AI Agent<br />
  对话编排工具与技能 · 可审计科学核 · 可扩展插件与配置方案<br />
</p>

---

## 它是什么

**分子思维（MolMind）** 是面向生命科学的 **AI Agent**：用自然语言提出研究问题，由 Agent 规划并调用工具、技能与插件，产出可追溯的科学材料。模型负责理解意图、编排步骤与解释结果；硬科学结论由内置科学核写出，**不得被 LLM 或可选插件私改**。

产品按 **工具 / 插件 / 技能 / 配置方案（Profile）** 组织。新增领域时扩展插件与技能，不必改写运行时。设置中可查看、启用或关闭能力包；可选 Catalog 按会话主动接入。

当前出厂默认面向 **MASLD / HepG2-FFA** 的候选分子提名——这是第一条已落地的科学能力，不是产品的全部定义。实验室配置方案可接入更多生命科学工具；默认配置只启用与当前任务相关的内置能力。

它**不是**已通过湿实验验证的药效或安全性预测器。计算提名属于优先级建议；科学声明受 `scientific_status` / `claim_ceiling` 约束，未知保持未知。

---

## 对话能完成什么

上传化合物库或附件后，可以直接说：

- 「帮我提名一批值得优先验证的分子，并导出结果」
- 「解释第 3 名为什么入选、证据上限是什么」
- 「查这个分子的公开活性与毒理证据」
- 「生成机制假说和验证方案」

同一套能力也可经 Web、API 或 CLI 调用。Web 对话是主入口：会话可恢复、任务可排队、运行中可硬中断。

| 入口 | 用途 |
|------|------|
| **Web** | 浏览器对话、上传库、看过程与产物 |
| **API** | 可编程会话、筛选与下载 |
| **CLI** | 批处理导出 |
| **Docker Compose** | 本地与部署环境同一路径拉起 |

在线试用：<https://molmind.cn/>（健康检查：`/health`）

---

## 当前默认能力：MASLD 候选提名

细胞实验里「脂滴变少」并不等于有效命中——若细胞活力受损，脂质下降可能只是死亡假象。默认科学核因此采用：

> **有效命中 = 降脂 ∧ 低毒**  
> 只降脂、高毒性 = **假阳性**（应优先拦截）

MolMind 负责 **可复现的计算优先级**；最终效力与安全边界仍由 **HepG2-FFA 平行双终点**（脂滴下降且活力可接受）在湿实验确认。不计算、不写入 SI / EC₅₀ / CC₅₀，避免无剂量–反应数据时的伪精确。…
