---
repo: "zhanghaozhecn/rime-llm-rerank"
name: "rime-llm-rerank"
description: "为小狼毫设计的本地LLM重排候选插件"
readmeQualityOk: true
url: "https://github.com/zhanghaozhecn/rime-llm-rerank"
language: "C"
languages: ["C"]
languagePcts: [77]
stars: 7
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-28T05:13:06Z"
lastCommitAt: "2026-08-16T04:09:55Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 53
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/563196d26c42db91fab753e08eec07eeb237cedfc31b45e95fe6e9fa7bad032a/zhanghaozhecn/rime-llm-rerank"
---

# RIME LLM 候选重排（rime-llm-rerank）

使用本地部署的小型 LLM 为任意 RIME **四码定长**输入方案（五笔、郑码、仓颉、拼读双拼等）提供打字时的智能候选排序。LLM 与编码方案无关——它只看到最终的中文候选词列表，利用上文的语义把正确词排到候选第一位，减少手动选重。

| 关键指标 | 值 |
|------|------|
| 首选率（10 tok / 5 候选） | **93.4%**（单字 96.8%） |
| 感知延迟 | **~43 ms**（CPU，预解码后） |
| 内存占用 | ~497 MB |
| 模型 | Qwen3.5-0.8B Q4_K_M（508 MB，GGUF） |
| 选重率 | 可降至原方案（字典序）的 **1/3** |
| 依赖 | 零（纯本地 CPU 推理） |

核心手段：**跨熵（CE）评分**而非文本生成——候选 token 全部并行解码，最多 3 次 `llama_decode`，与候选数无关；**预解码**利用 commit 到编码打完的时间差，把上下文解码从按键延迟中消掉。

---

# 一、研究

## 1 引言

四码定长输入法（编码长度固定、编码决定候选集合）的候选排序长期依赖词频、词典顺序和用户习惯。这类静态排序无法利用**语义上下文**：同码词（如 "著名/注明"）中哪个是用户此刻想要的，往往只有上文能回答。用户被迫高频手动选重，打字流畅性被打断。

本文提出在 RIME 内集成本地 LLM 对同码候选做语义重排：

- **任务定位**：只排序、不生成。LLM 对每个候选计算 `P(候选 | 上文)` 的交叉熵评分，成本远低于逐字生成，且可整批并行。
- **编码无关**：LLM 的输入是纯中文（上文 + 候选词），与具体编码方案无关，任何四码定长方案开箱即用。
- **本地部署**：0.8B 量化模型 + CPU 推理，无网络依赖，无隐私外泄，延迟可控。

主要贡献：

1. **分层并行解码**（§3.2）：利用"所有候选共享同一段上下文"的结构，N 个候选的评分只需最多 3 次 `llama_decode`（上下文 1 次 + 候选 token 分层并行），与候选数无关。
2. **预解码**（§3.3）：commit 后上文即已确定，异步预解码并缓存；按键时只需候选 token 的 decode，感知延迟约减半。
3. **KV 代次机制**（§3.3）：解决预解码缓存与完整评分流程之间的状态一致性，杜绝编辑流中"旧 logits 被误用"的连锁错误。
4. **工程集成**（§3.5）：lua filter + lua processor + C++ DLL 三层结构，官方 rime.dll 上零修改运行，schema 一键部署、热开关。…
