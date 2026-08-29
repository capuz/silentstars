---
repo: "xm6018924/BSAI-MiniMAX-H3-Prompt"
name: "BSAI-MiniMAX-H3-Prompt"
description: "ComfyUI custom node for optimizing MiniMax H3 video generation prompts based on the H3 model manual"
readmeQualityOk: true
url: "https://github.com/xm6018924/BSAI-MiniMAX-H3-Prompt"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [62, 22]
stars: 5
forks: 0
openIssues: 3
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-04T10:21:12Z"
lastCommitAt: "2026-08-29T17:27:17Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 69
undervaluedScore: 37
maintainers: ["xm6018924"]
openGraphImageUrl: "https://opengraph.githubassets.com/cb592e29a12b34a303bea3b7d24a31f73027702394fd32dcefad3133911499c6/xm6018924/BSAI-MiniMAX-H3-Prompt"
---

# BSAI MiniMax H3 Prompt - ComfyUI 自定义节点

根据 [MiniMax H3 模型使用手册](https://vrfi1sk8a0.feishu.cn/wiki/FIWjwgL33ipnkekzk30crmKUnIh)，将用户手动输入的提示词自动优化为符合 H3 规范的完整结构化提示词。

## 核心功能

按照 H3 提示词三段公式自动优化：

```
完整提示词 = 参考素材说明 + 核心创意 + 画面过程说明
```

### 节点列表

| 节点名称 | 功能 |
|-|-|
| **BSAI MiniMAX H3 Prompt** | 核心节点：使用本地模型，接收用户提示词，输出优化后的 H3 提示词 |
| **BSAI H3 Model Loader** | 加载本地 GGUF 大语言模型（基于 llama-cpp-python） |
| **BSAI H3 Unload Model** | 卸载模型释放显存 |
| **BSAI H3 Remote API** | 远程 API 调用：通过 OpenAI/DashScope 兼容接口优化提示词，无需本地模型 |
| **BSAI H3 Prompt Template** | 提示词模板：分类选择一键使用 H3 提示词模板，含 GIF 预览 |

### 两种使用模式

| 模式 | 节点组合 | 显存占用 | 适用场景 |
|-|-|-|-|
| **本地模型模式** | Model Loader + H3 Prompt + Unload Model | 高（需加载 GGUF 模型） | 离线环境、隐私敏感、无 API 额度 |
| **远程 API 模式** | H3 Remote API（独立使用） | 零（不加载本地模型） | 节省显存给视频生成、使用更强云端模型 |

### 提示词优化覆盖的维度

- **参考素材说明**：13 种素材用途（人物参考、物体参考、场景参考、关键帧、音色参考、故事版、风格参考、构图参考、音频复用、音频部分复用、动作参考、运镜参考、视频编辑）
- **核心创意**：主体、地点、事件、题材/风格、特殊运镜、时长、导演风格、摄影风格、电影类型、切镜类型、配乐风格
- **画面过程说明**：按时间轴/shot 分段，景别+内容+运镜+动作+台词+音效，想要/不想要
- **五类生成模式**：纯文字生成视频(T2VA)、图片生成视频(I2VA)、首尾帧生成(FL2VA)、尾帧生成(L2VA)、多模态素材融合(Ref2VA)，系统推荐根据输入自动判断
- **常见坑位避免**：6 条易错点自动检测与修正

## 安装

### 方式一：手动安装（推荐）

1. 将本仓库克隆或下载到 ComfyUI 的…
