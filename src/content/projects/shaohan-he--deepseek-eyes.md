---
repo: "Shaohan-He/deepseek-eyes"
name: "deepseek-eyes"
description: "Give DeepSeek the ability to see images — MCP Server + Qwen-VL, clipboard images → vision model → text descriptions"
originalDescription: "给 DeepSeek 装上眼睛 — MCP Server + 通义千问VL, 剪贴板图片→视觉模型→文字描述 / Give DeepSeek the ability to see images via clipboard + Qwen-VL"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Shaohan-He/deepseek-eyes"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["chinese", "claude-code", "deepseek", "developer-tools", "mcp-server", "modelscope", "qwen-vl", "vision"]
stars: 63
forks: 4
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-28T08:04:01Z"
lastCommitAt: "2026-09-28T10:06:31Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 75
undervaluedScore: 13
maintainers: ["Shaohan-He", "Capetlevrai", "michaelSun07"]
openGraphImageUrl: "https://opengraph.githubassets.com/989ae2f6db4a3d3303d00fcc212bdfe73718d8f0a99c1d6335a9e1f5460d3a63/Shaohan-He/deepseek-eyes"
---

# deepseek-eyes 👁️

  <b>Give DeepSeek the ability to see (no external network required!).</b><br>
  Screenshot → clipboard → MCP → Qwen-VL → text description → DeepSeek can also 'see'
</p>

  <b><i>Give DeepSeek the ability to see.</i></b><br>
  <i>Screenshot → clipboard → Qwen-VL → text → your text-only model can "see"</i>
</p>

</p>

---

## 🇨🇳 Chinese

### 🤖 Automatic installation

Paste the following prompt directly to Claude Code / DeepSeek / ChatGPT, and AI will automatically help you complete the entire process of cloning, installing, and configuring:

> Please help me install deepseek-eyes, repository address [https://github.com/Shaohan-He/deepseek-eyes](https://github.com/Shaohan-He/deepseek-eyes). Follow the steps in README: clone → create venv → pip install -e . → guide me to get ModelScope API Key → configure MCP client.

[📋 Complete installation prompt (Chinese & English)](https://github.com/Shaohan-He/deepseek-eyes/blob/HEAD/docs/INSTALL_PROMPT_CN.md)

---

### ⚡ Manual installation / Quick start

```bash
# 1. Clone
git clone https://github.com/Shaohan-He/deepseek-eyes.git
cd deepseek-eyes

# 2. Install
python -m venv .venv
.venv\Scripts\activate    # Windows
#…
