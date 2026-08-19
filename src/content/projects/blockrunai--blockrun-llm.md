---
repo: "BlockRunAI/blockrun-llm"
name: "blockrun-llm"
description: "Python SDK for BlockRun — 66 AI models, pay-per-call with USDC. OpenAI-compatible. Zero rate limits."
readmeQualityOk: true
url: "https://github.com/BlockRunAI/blockrun-llm"
homepage: "https://pypi.org/project/blockrun-llm/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["ai-agents", "python", "usdc", "x402"]
stars: 5
forks: 4
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 5
recentReleases: 5
createdAt: "2025-12-27T16:55:11Z"
lastCommitAt: "2026-08-19T04:10:05Z"
lastReleaseAt: "2026-07-21T05:17:01Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 88
maintainers: ["VickyXAI", "KillerQueen-Z"]
openGraphImageUrl: "https://opengraph.githubassets.com/3cdda66ddef9391e2bfcc93899c4d62e63dcab62b71f3084b898ee75892d9e24/BlockRunAI/blockrun-llm"
---

# BlockRun LLM SDK (Python)

> **blockrun-llm** is a Python SDK for accessing 80+ large language models (GPT-5.x, Claude 4.x, Gemini 3.x, DeepSeek, Grok 4.x, GLM, MiniMax, Moonshot and more) plus image / video / music generation, Grok Live Search, prediction-market data (Predexon), Exa neural web search, and Pyth-backed market data — all with automatic pay-per-request USDC micropayments via the x402 protocol. No API keys required; your wallet signature is your authentication. Built for AI agents that need to operate autonomously.
>
> 🆓 **Includes 8 fully-free NVIDIA-hosted models** — DeepSeek V4 Flash (1M context), Nemotron Nano Omni (vision), Qwen3 Next + Coder, Llama 4 Maverick, Mistral Small 4, plus `gpt-oss-120b/20b` (hidden from `/v1/models` but direct calls still work). Zero USDC, no rate-limit gimmicks. Use `routing_profile="free"` or call any `nvidia/*` model directly.

**BlockRun assumes Claude Code as the agent runtime.**

## Supported Chains

| Chain | Network | Payment | Status |
|-------|---------|---------|--------|
| **Base** | Base Mainnet (Chain ID: 8453) | USDC | ✅ Primary |
| **Base Testnet** | Base Sepolia (Chain ID: 84532) | Testnet USDC | ✅ Development |
|…
