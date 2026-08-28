---
repo: "Soren-ABT/dsh-knowledge"
name: "dsh-knowledge"
description: "Knowledge base & RAG plugin for DeepSeek Harness (DSH): chunking, local embeddings, hybrid search, management panel"
readmeQualityOk: true
url: "https://github.com/Soren-ABT/dsh-knowledge"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["deepseek-harness", "dsh", "dsh-plugin", "dsh-plugins", "knowledge-based-systems", "rag"]
stars: 17
forks: 5
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 6
createdAt: "2026-08-15T16:47:22Z"
lastCommitAt: "2026-08-28T14:24:31Z"
lastReleaseAt: "2026-08-20T17:05:09Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 50
maintainers: ["Soren-ABT", "wdannw"]
openGraphImageUrl: "https://opengraph.githubassets.com/295fe1c947ac1e7d4886a273368025e50f50cac5aa69a9626b26af8540c43b76/Soren-ABT/dsh-knowledge"
---

#  dsh-knowledge

**DSH 的知识库插件**

[**English**](https://github.com/Soren-ABT/dsh-knowledge/blob/HEAD/README.en.md) · [**中文**](https://github.com/Soren-ABT/dsh-knowledge/blob/HEAD/README.md)

一个深度的**知识库系统**，作为 [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)（DSH）的独立、可开源 bundle 插件。提供知识库（含**分组**）与文档管理、文本分块、向量化（OpenAI 兼容 / Ollama / **本地模型** / 关键词降级）、检索，以及模型可见工具与浏览器管理面板。

</div>

---

## 它带来什么

- **知识库与文档**：创建/删除/重命名知识库与文档；**分组管理**（新建/重命名/删除分组，侧边栏按分组折叠导航，知识库可在菜单中「移动到分组」）；**添加文档**（文件 / 网页 / 目录 / **文本（笔记）四入口**，纯文本亦可经模型工具 `knowledge_add_document`）、多文件拖拽上传（单文件 ≤22MB，文件选择器与拖拽均单次最多 20 个并过滤不支持扩展名，**5 路并发后台导入池**）、**目录导入**（递归扫描 txt/md/csv/html/json/pdf/docx/doc/pptx/ppt/xlsx/xls/epub 等，**导入为可下钻的文件夹树**，源文件复制进知识库 raw 存储，源盘变更后仍可重建）、URL 导入；**同名冲突弹窗决议**（服务端权威检测，**列出冲突文件名**，「全部重命名 / 替换 / 取消」+ 解析中锁定）、内容哈希去重；**文档预览**（PDF 内嵌查看器 + 文本/分块预览，超大文件自动截断）；资料行显示 **✓ 就绪状态徽标、实时导入状态（等待中 / 解析中 / 嵌入中 NN%）与相对更新时间**，失败行悬浮显示**本地化原因**（可聚焦、读屏可读），文件夹在任一后代处理时显示「导入中」；全部操作走正式对话框与 Toast 通知（无 window.prompt/confirm）。
- **扫描件 OCR（本地引擎）**：扫描版 PDF、**矢量绘制的无文本层 PDF** 与图片自动走**整页渲染 + PaddleOCR PP-OCRv5**（约 21MB 模型，含 1.8 万字符中文词典，设置 → 本地模型一键下载；页面用 mupdf WASM 渲染），识别失败自动回退 Tesseract；**1-bit 位图（JBIG2/CCITT…
