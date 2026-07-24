---
repo: "anandb/nb-complete"
name: "nb-complete"
description: "Netbeans Plugin to integrate with OpenCode using ACP"
readmeQualityOk: true
url: "https://github.com/anandb/nb-complete"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["assistant", "coding", "netbeans", "opencode", "ai", "assistants", "llm"]
stars: 20
forks: 2
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-04-11T07:18:19Z"
lastCommitAt: "2026-07-24T06:07:25Z"
lastReleaseAt: "2026-05-30T16:37:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 52
maintainers: ["anandb"]
openGraphImageUrl: "https://opengraph.githubassets.com/2cfce60e4098070453dc9e557999ea979f91d97901b3fff8bed62e2ff7489798/anandb/nb-complete"
discussionCount: 0
---

# Coding Assistant

Coding Assistant is a NetBeans IDE plugin designed to provide integrated AI capabilities through the Agent Client Protocol (ACP). It offers a structured chat interface for technical assistance, including code generation, project analysis, and automated task execution.

| | | |
| :---: | :---: | :---: |
|  |  |  |

---

## Getting Started

See the [Quickstart Guide](https://github.com/anandb/nb-complete/blob/HEAD/QUICKSTART.md) for setup, feature details, and usage instructions.

### Test Configuration

Due to time constraints, testing is primarily done on this configuration. The plugin
should work on other versions/operating systems, but your experience may vary.

| Component | Details |
| --- | --- |
| **OS** | openSUSE Tumbleweed-Slowroll |
| **NetBeans** | RELEASE220 |
| **Java** | JDK 17+ |
| **Opencode** | 1.17.17 |
| **Opencode plugins** | `@franzmoca/opencode-lombok`, `true-mem` |
| **LLMs** | Big Pickle; GPT 5.4-mini, GPT 5.4-nano; GLM 5.1, GLM 5.2; DeepSeek V4 Pro, DeepSeek V4 Flash; Kimi K2.5, Kimi K2.6; Mimo V2.5; Qwen3.5, Qwen3.6; Gemma4 |

Note: Qwen models require `--think=false` if using Ollama, and a `"reasoningEffort": "none"`
configuration in…
