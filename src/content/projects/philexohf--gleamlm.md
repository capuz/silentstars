---
repo: "philexohf/gleamlm"
name: "gleamlm"
description: "面向教育和研究的小型语言模型——纯 PyTorch 从零实现 ，最低仅需单张 12GB 消费级显卡即可完整训练。Apache 2.0 开源。"
readmeQualityOk: true
url: "https://github.com/philexohf/gleamlm"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 39
forks: 6
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-06-14T17:36:14Z"
lastCommitAt: "2026-07-15T05:50:51Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 69
undervaluedScore: 27
maintainers: ["philexohf"]
openGraphImageUrl: "https://opengraph.githubassets.com/ead5f81d37f9d4611797b5ef74944bfcf131f4cba1127037b092cd9684a158f5/philexohf/gleamlm"
---

# GleamLM —— 面向教育和研究的小型语言模型

 **项目持续开发中， 点个 Star ⭐ 收藏，更新不错过。**

## 项目简介

纯 PyTorch 从零实现，零 HuggingFace 依赖，覆盖 **多源中文数据管线**（下载→清洗→去重→字符加权配比）→ **BBPE 分词器训练**（自研，零外部依赖）→ **Decoder-only 模型**（SwiGLU / GQA / RoPE / QK-Norm）→ **AMP + DDP 训练**（断点续训保存 optimizer/scheduler/scaler 全量状态）→ **SFT / DPO 对齐**（ChatML + loss mask）→FP16量化 → **KV Cache 流式推理**全链路。

| 版本 | 参数量 | 定位 | 状态 |
|------|--------|------|------|
| **GleamLM-Nano** | ~40M | 教学入门，单卡 12GB 即可完整训练 | ✅ 已完成 |
| **GleamLM-Lite** | ~87M | 消融实验平台，FFN 3.4× 扩容，Windows/Linux 双平台 | ✅ 已完成 |

## 技术架构

| 组件 | 方案 | 对标 |
|------|------|------|
| 范式 | Decoder-only | LLaMA 3 / Qwen3 |
| 归一化 | Pre-Norm + RMSNorm | LLaMA 3 / Qwen3 |
| 位置编码 | RoPE（支持长度外推） | LLaMA 3 / Qwen3 |
| 注意力 | GQA（8 Q-heads / 4 KV-heads）+ QK-Norm | LLaMA 3 |
| 激活函数 | SwiGLU | LLaMA 3 / Qwen3 |
| Tokenizer | BBPE 12K（自研，纯 Python） | — |
| 训练精度 | BF16/FP16 AMP | — |
| 分布式 | DDP（`torchrun` 一行启动） | — |
| 推理加速 | KV Cache + 流式生成 + 多采样策略 | — |

### 模型规格

| 参数 | Nano ~40M | Lite ~87M |
|------|:---:|:---:|
| 上下文窗口 | 1024 | **2048** |
| 词表大小 | 12,002（自研 BBPE） | 12,002（复用） |
| 网络层数 | 12 | 12 |
| 模型维度 | 512 | **768** |
| QK-Norm | ✅ | ✅ |
| 查询头 / KV 头 | 8 / 4 | **12 / 6** |
| SwiGLU 中间维度 |…
