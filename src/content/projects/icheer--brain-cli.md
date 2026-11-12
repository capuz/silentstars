---
repo: "icheer/brain-cli"
name: "brain-cli"
description: "A minimalist side-brain CLI for AI agents — provides independent second opinions from cross-vendor models, supporting parallel cross-checking, multi-round debate, and image generation, giving agents an additional perspective for thinking."
originalDescription: "A minimalist side-brain CLI for AI agents — 跨厂商模型提供独立第二意见，支持并行互证、多轮辩论与图像生成，让 Agent 多一个思考视角。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/icheer/brain-cli"
language: "Go"
languages: ["Go"]
languagePcts: [96]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-24T11:33:20Z"
lastCommitAt: "2026-11-12T11:41:00Z"
lastReleaseAt: "2026-10-26T13:04:43Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 55
maintainers: ["icheer"]
openGraphImageUrl: "https://opengraph.githubassets.com/76390f80f3de59d8c26b8bba5d34f8af7e56ed2547634a715a65137130eccbac/icheer/brain-cli"
---

# brain-cli

**English** | [Simplified Chinese](https://github.com/icheer/brain-cli/blob/HEAD/README.zh-CN.md)

> The repo is named `brain-cli`; the binary command is **`brain`**.

`brain` is a minimalist CLI that acts as a "side brain" for host agents (Claude Code, Codex, DeepSeek Harness, etc.): it calls an LLM gateway via the OpenAI Chat Completions compatible protocol, performs one high-quality advisory/analysis call, and hands the result back to the agent cleanly. The same model reviewing its own conclusions cannot catch its own systematic bias — brain plugs in heterogeneous cross-vendor models as an independent second opinion.

## Highlights

- **Agent-friendly**: stdout carries only the model reply; metadata/warnings/heartbeat all go to stderr. Pipes / `-f` multi-file / `-i` image multimodal input work out of the box; multi-source inputs are wrapped in XML-style tags (`<user_message>`/`<attachment>`/`<stdin>`) for unambiguous context separation
- **Model alias routing**: `fast` / `reason` / `coding` / `vision` aliases plus automatic failover (retry with backoff, switch along the chain, noted on stderr) — agents never memorize model names
- **Parallel cross-examination**:…
