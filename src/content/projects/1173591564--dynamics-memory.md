---
repo: "1173591564/Dynamics-memory"
name: "Dynamics-memory"
description: "Bounded, self-correcting long-term memory layer for LLM agents: distill continuous, contradictory project interaction logs into bounded, self-updatable memory repositories. Bounded, self-correcting long-term memory for LLM agents — candidate pool + value dynamics + tension adjudication + causal-replay evals."
originalDescription: "LLM agent 的有界自纠错长期记忆层：把连续、含矛盾的项目交互日志蒸馏成有界、可自更新的记忆库。Bounded, self-correcting long-term memory for LLM agents — candidate pool + value dynamics + tension adjudication + causal-replay evals."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/1173591564/Dynamics-memory"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["agent-memory", "llm", "llm-agents", "long-term-memory", "memory-management", "python", "retrieval-augmented-generation", "agents", "memory", "rag"]
stars: 83
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-15T11:16:41Z"
lastCommitAt: "2026-10-01T10:23:06Z"
status: "thriving"
tags: []
healthScore: 89
undervaluedScore: 28
maintainers: ["1173591564", "arena-ai-coding-agent[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/519b79f06c5c0efc7e70c614d7393c8d565a9de49acdedb7ff095c64665156fc/1173591564/Dynamics-memory"
---

# Dynamics-memory

**Bounded long-term memory layer for LLM agents**

Distill continuous, noisy, and contradictory project interactions into a memory repository that won't pile up into a "history mountain".<br/>
In a new session, with just "let's continue", the agent knows where it progressed to and where it got stuck last time.

[Architecture](#architecture-push-capture--pull-repair) · [Dynamics](#memory-dynamics) · [Verification Status](#verification-status) · [Running](#running) · [Design Document](https://github.com/1173591564/Dynamics-memory/blob/HEAD/docs/ouroboros.md)

</div>

---

## 30-second quickstart

```bash
pip install numpy pytest
cp .env.example .env          # ZAI_API_KEY=...

python -m pytest tests/                          # 302 passed
python -m hybrid_memory.server --project <dir>   # or auto-launched by opencode plugin
```

To integrate with opencode (official CLI only, no source code required):

```bash
npm i -g opencode-ai
cd <this-repo> && opencode        # .opencode/plugin/memory-bridge.ts auto-loads and launches sidecar
```

<sub>For use in other projects: symlink `memory-bridge.ts` to `<project>/.opencode/plugin/`. The plugin's `@opencode-ai/plugin`…
