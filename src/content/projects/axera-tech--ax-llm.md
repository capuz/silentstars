---
repo: "AXERA-TECH/ax-llm"
name: "ax-llm"
description: "Explore LLM model deployment based on AXera's AI chips"
url: "https://github.com/AXERA-TECH/ax-llm"
language: "C++"
languages: ["C++"]
languagePcts: [95]
topics: ["edge-computing", "huggingface", "llm", "transformer", "gemma2", "internvl2", "llama3", "minicpm", "minicpm-v", "qwen2"]
stars: 157
forks: 28
openIssues: 10
closedIssues: 16
watchers: 7
contributors: 8
recentReleases: 1
createdAt: "2024-03-14T09:52:06Z"
lastCommitAt: "2026-06-25T06:40:13Z"
lastReleaseAt: "2026-05-22T06:52:25Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 42
maintainers: ["ZHEQIUSHUI", "techshoww", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/f33d39995601f3339b623a7c27ffd1d8575381a4957977d2a002ecb19fe2a8a6/AXERA-TECH/ax-llm"
---

# AX-LLM

![GitHub License](https://img.shields.io/github/license/AXERA-TECH/ax-llm)

## 简介

**AX-LLM** 由 **[爱芯元智](https://www.axera-tech.com/)** 主导开发。该项目用于探索业界常用 **LLM(Large Language Model)** 在已有芯片平台上落地的可行性和相关能力边界，**方便**社区开发者进行**快速评估**和**二次开发**自己的 **LLM 应用**。

### 已支持芯片

- AX650A/AX650N
  - SDK ≥ v3.6.2
- AX630C
  - SDK ≥ v3.0.0

### 已支持模型

#### LLM
- Qwen2.5
- Qwen3
- MiniCPM
- SmolLM2
- Llama3
- HY-MT1.5-1.8B
- ...

#### VLM（多模态）
- Qwen3-VL-2B-Instruct
- Qwen3.5-2B
- Qwen3-VL-Embedding-2B（Embedding，多模态）
- SmolVLM2-500M-Video-Instruct
- FastVLM-1.5B-GPTQ-Int4
- InternVL3_5-1B-GPTQ-INT4
- PaddleOCR-VL-1.5
- ...

### 获取地址

我们的 ModelZoo 已迁移到 [Huggingface](https://huggingface.co/AXERA-TECH)

## 当前分支（axllm）

本分支统一输出可执行文件名为 `axllm`，根据运行环境自动选择 AX650 片上后端或 AXCL PCIe 后端。

### 安装方式（推荐）

使用根目录的安装脚本：

```shell
./install.sh
```

Windows + AXCL + MinGW64 可使用：

```bat
install.bat
```

或使用一行命令下载并执行（默认分支 `axllm`）：

```shell
curl -fsSL https://raw.githubusercontent.com/AXERA-TECH/ax-llm/axllm/install.sh | bash
```

脚本逻辑：

- **AX650 片上后端**
  - 条件：`/proc/ax_proc/board_id` 包含 `AX650` 且本机有 `gcc`
  - 行为：自动下载 BSP（msp_3.6.2），编译并安装到 `/usr/bin/axllm`
- **AXCL PCIe 后端**
  - 条件：可运行 `axcl-smi` 且存在…
