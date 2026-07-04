---
repo: "xr843/Buddhist-AI-Translator"
name: "Buddhist-AI-Translator"
description: "慧译通 - 专业佛教AI翻译器 | Buddhist AI Translator with Sanskrit, Pali, Tibetan support. Powered by DeepSeek API."
readmeQualityOk: true
url: "https://github.com/xr843/Buddhist-AI-Translator"
homepage: "https://xr843.github.io/Buddhist-AI-Translator"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [79]
topics: ["ai-translator", "buddhism", "chinese", "deepseek", "nlp", "open-source", "pali", "sanskrit", "tibetan", "web-app"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-06-16T14:15:46Z"
lastCommitAt: "2026-07-04T22:20:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 65
undervaluedScore: 38
maintainers: ["xr843"]
openGraphImageUrl: "https://opengraph.githubassets.com/5372255f4e6764065d7f3895b996bdbdd467ab7f92bd7c5f5c7c7bbcc8a04b05/xr843/Buddhist-AI-Translator"
---

# 慧译通 | Buddhist AI Translator

**专业佛教文献 AI 翻译平台 | Professional Buddhist Text AI Translation Platform**

[English](#english) | [中文](#中文)

</div>

---

## 项目简介

慧译通是一款专为佛教文献翻译设计的 AI 翻译平台。结合 DeepSeek 大语言模型与专业佛学术语库，为学者、修行者和佛学爱好者提供准确、专业的多语种翻译服务。

### 核心特性

| 特性 | 说明 |
|------|------|
| **AI 智能翻译** | DeepSeek API 驱动，深度理解佛学语境 |
| **18 种语言** | 梵文、巴利文、藏文、文言文、现代中文、英文等 |
| **50+ 术语库** | 内置专业佛教术语数据库，确保翻译准确性 |
| **语音功能** | 语音输入 + 多语言朗读，支持分段高亮 |
| **静态部署** | 纯前端 ES 模块，可用任意静态服务器运行 |

### 支持语言

- **古典语言**: 梵文 (Devanagari/Harvard-Kyoto)、巴利文、藏文、文言文
- **现代语言**: 中文、英文、日文、韩文、法文、德文、西班牙文、葡萄牙文、意大利文、荷兰文、俄文、阿拉伯文

### 快速开始

**在线使用**: [https://xr843.github.io/Buddhist-AI-Translator](https://xr843.github.io/Buddhist-AI-Translator)

**本地部署**:
```bash
git clone https://github.com/xr843/Buddhist-AI-Translator.git
cd Buddhist-AI-Translator
python3 -m http.server 8000
# 访问 http://127.0.0.1:8000/
```

**配置 API**:
1. BYOK 模式: 访问 [DeepSeek 开放平台](https://platform.deepseek.com) 获取 API 密钥，在浏览器中本地保存
2. Worker 代理模式: 部署 `worker/`，在 `src/config.js` 配置 `proxyURL`
3. 公共部署建议使用 Worker 代理，避免在浏览器暴露共享密钥

### 键盘快捷键

| 快捷键 | 功能 |
|--------|------|
| `Ctrl + Enter` | 执行翻译 |
| `Ctrl + Shift + C` | 复制翻译结果 |
| `Ctrl + Shift + V` | 粘贴文本…
