---
repo: "Rimagination/scansci-pi"
name: "scansci-pi"
description: "ScanSci Pi public beta downloads and issue feedback"
readmeQualityOk: true
url: "https://github.com/Rimagination/scansci-pi"
language: "Python"
languages: ["Python"]
languagePcts: [84]
stars: 22
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 8
createdAt: "2026-07-31T10:22:03Z"
lastCommitAt: "2026-08-13T04:52:28Z"
lastReleaseAt: "2026-08-13T03:40:38Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 89
undervaluedScore: 44
maintainers: ["Rimagination"]
openGraphImageUrl: "https://opengraph.githubassets.com/45dd5c2711ba2e379cbdf3d26d5db423286e809941f38eebf0548ec85f2804ce/Rimagination/scansci-pi"
---

# ScanSci Pi

**证据优先的科研 AI 工作台。** 找论文、读资料、核验证据、写综述、做幻灯片——每一步都绑定原文出处，证据不足时明确说明，不编造。

## 核心能力

### 文献发现与获取

- **多源搜索**：30+ 预配置模型供应商（OpenAI、DeepSeek、智谱、硅基流动……），国内直连和国际模型开箱即用。
- **Agent Reach 互联网路由**：内置 12 个只读互联网渠道——网页、RSS、GitHub、B 站、V2EX、YouTube 等，无需额外安装 CLI。登录态页面自动升级到内置浏览器桥接。
- **全文获取**：支持 PDF、DOCX、PPTX、EPUB、HTML 等 22 种格式导入；Zotero 和 Notion 集成可将外部知识库同步到本地。

### 证据检索与问答

- **句子级证据搜索**：在本地论文库中以句子粒度检索，每条答案绑定原文、引用和定位信息。
- **语义 + 关键词双路召回**：sqlite-vec 向量嵌入与词法检索并行，自动融合排序。支持本机运行 BGE-M3、GTE 等嵌入模型。
- **GPU/CUDA 智能检测**：模型市场标注 GPU 需求（CPU / 推荐 / 必需），设置页显示 CUDA 状态和安装引导。
- **文献综述生成**：多章节证据综述，逐句验证出处，自动补充遗漏来源，确保每一条引用都有原文支撑。

### PDF 与文档解析

- **MinerU 云端解析**：可选启用 MinerU API，对复杂排版的学术 PDF 进行高精度结构提取（公式、表格、多栏）。
- **多级回退**：MinerU（云）→ Docling（增强）→ MarkItDown（默认）→ pypdf（兜底），自动选择最佳解析器。
- **多 OCR 引擎**：Tesseract（本地默认）、Windows 系统 OCR、Paddle、DeepSeek OCR 可切换，中文 + 英文混排支持。

### 交付物生成

- **学术幻灯片**：6 套模板（通用学术、SCQA、答辩左右导航、国基金答辩、极简文献），支持从 PDF/DOCX 自动生成 PPTX。
- **办公文档**：内置 DOCX、XLSX、PPTX 创建工具，支持公式、样式、结构校验。
- **LaTeX / PDF**：自动检测 TeX Live 或 Tectonic，编译 LaTeX 并校验输出。

### 桌面应用

- **Windows 原生窗口**：无边框设计、最大化任务栏可见、自适应窄屏（≥800px）。
- **本地语音转写**：Qwen3-ASR 在本机运行，音频不上传。
- **本地视觉模型**：默认通过 ScanSci 的 Transformers 本地运行组件运行 MiniCPM-V…
