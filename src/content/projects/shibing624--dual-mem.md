---
repo: "shibing624/dual-mem"
name: "dual-mem"
description: "All your agents. One memory. Layered, versioned long-term memory for LLM agents, shared across Claude Code, Codex, Cursor and more. Let all your AI tools share one long-term memory: layered organization, versioned evolution, and it remembers when your preferences change."
originalDescription: "All your agents. One memory. Layered, versioned long-term memory for LLM agents, shared across Claude Code, Codex, Cursor and more. 让你的所有AI工具共享一份长期记忆：分层整理、版本演化，偏好变了也记得准。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/shibing624/dual-mem"
homepage: "https://shibing624.github.io/dual-mem/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agent", "chromadb", "embedding", "llm", "mcp", "memory", "python", "rag", "sdk"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-06-18T07:03:42Z"
lastCommitAt: "2026-10-24T08:07:45Z"
lastReleaseAt: "2026-10-23T15:37:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 53
maintainers: ["shibing624"]
openGraphImageUrl: "https://opengraph.githubassets.com/ee8149ea47a6e0022cbc42e90897473f5fd00cd30a0a0c9070746008ffa14d1f/shibing624/dual-mem"
---

## Why dual-mem

You've told the AI three times, "I don't eat spicy food anymore," and it still recommends Sichuan restaurants. After dozens of rounds of chatting, it can recite every sentence you said, but it can't tell you your stable habits for getting things done. Coding conventions you laid out in Cursor, Codex doesn't know about.

### 1. 🏆 Same model, better recall, faster writes

Extraction, answering, and scoring all use the same model (Qwen3.8-27B), the same embedding (bge-m3), and the same set of questions — **only the memory system is swapped**:

| Memory system | LoCoMo<br>(308 questions) | LongMemEval<br>(24 questions) | PersonaMem-v2<br>(476 questions) | Single long-conversation write time<br>(seconds, lower is faster) |
|---|:---:|:---:|:---:|:---:|
| **dual-mem** | **74.7** | **91.7** | **50.0** | **503** |
| hy-memory 2.0.4 | 66.6 | 70.8 | 43.5 | 2485 |
| mem0 | 65.6 | 83.3 | 47.9 | 808 |

**Ranks first on all three public benchmarks, with writes taking roughly one-fifth the time of hy-memory.** For the protocol, significance tests, question-type breakdown, and reproduction commands, see the [benchmark…
