---
repo: "Coff0xc/Github-API-scan"
name: "Github-API-scan"
description: "在指定的 GitHub 组织或仓库中查找泄露的 API 密钥，并导出脱敏的披露记录。"
readmeQualityOk: true
url: "https://github.com/Coff0xc/Github-API-scan"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["api-scanner", "python", "redteam"]
stars: 85
forks: 47
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-12-10T17:43:58Z"
lastCommitAt: "2026-11-09T04:34:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 60
undervaluedScore: 24
maintainers: ["Coff0xc"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b9daa55f32ef78f719eeed631fe796bbf7e6dcb5f9ff641e39557c76070b4c6/Coff0xc/Github-API-scan"
---

# AI API Key Scanner

在你有权检查的 GitHub 组织或仓库里查找泄露的 API 密钥。远程搜索没有 `--target-org` 或 `--target-repo` 不会发出。交给外部代理的文件是脱敏记录，不是一套能直接使用的密钥。

唯一入口是 `main_v2.2.py`。使用边界见 [AUTHORIZED_USE.md](https://github.com/Coff0xc/Github-API-scan/blob/HEAD/AUTHORIZED_USE.md)。

## What does this do?

在限定的组织或仓库里搜索已提交的密钥材料，滤掉明显的测试值和低熵字符串，再写入本地 SQLite。终端界面会跳过已经查过的记录。

`benchmark.py` 只比较合成数据的 SQLite 插入。它不搜索 GitHub，也不访问模型厂商。旧的「430 倍」不是端到端扫描结果。

## Supported platforms

**Major AI platforms:**
- OpenAI (GPT-4, GPT-5)
- Anthropic (Claude)
- Google (Gemini)
- Azure OpenAI
- xAI (Grok)
- Meta (Llama API)

**API aggregators:**
- OpenRouter
- Portkey
- LiteLLM
- Cloudflare Workers AI

**Cloud provider AI services:**
- AWS Bedrock
- Google Vertex AI
- Alibaba Cloud
- Volcano Engine
- Tencent Cloud
- Baidu Qianfan

**Regional providers:**
- DeepSeek, Moonshot, Zhipu (Chinese platforms)
- Groq, Mistral, Cohere (International)
- Plus 20+ more platforms

Full list: OpenAI, Anthropic, Google Gemini, Azure, xAI, Meta Llama, OpenRouter, Portkey, LiteLLM, Cloudflare AI, AWS Bedrock, Vertex AI, Alibaba Cloud, Volcano Engine, Tencent Hunyuan, Baidu Qianfan, DeepSeek, Moonshot, Zhipu, Yi AI, StepFun, iFlytek, HuggingFace, Groq,…
