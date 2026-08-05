---
repo: "MetaMikuAI/il2cpp-to-csharp-skill"
name: "il2cpp-to-csharp-skill"
description: "A skill for BepInEx il2cpp modders."
readmeQualityOk: true
url: "https://github.com/MetaMikuAI/il2cpp-to-csharp-skill"
language: "Python"
languages: ["Python", "Java"]
languagePcts: [63, 37]
stars: 21
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-13T02:26:39Z"
lastCommitAt: "2026-08-05T06:06:33Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 72
undervaluedScore: 14
maintainers: ["MetaMikuAI", "Denverjin"]
openGraphImageUrl: "https://opengraph.githubassets.com/c790917bf92ff3dca7b9d3f46ed40be90e960b471dbe3c1f153fd662a13767b9/MetaMikuAI/il2cpp-to-csharp-skill"
---

# il2cpp-to-csharp-skill

[中文](https://github.com/MetaMikuAI/il2cpp-to-csharp-skill/blob/HEAD/README.zh-CN.md)

A skill for restoring readable C# from Unity IL2CPP binaries. It ships **two independent backends** that share the same goal and the same Il2CppDumper artifacts:

| Backend | Environment | Docs |
|---|---|---|
| **IDA** | IDA Pro + IDA Pro MCP | [`ida/workflow.md`](https://github.com/MetaMikuAI/il2cpp-to-csharp-skill/blob/HEAD/ida/workflow.md) |
| **Ghidra** | Ghidra GUI or `analyzeHeadless` | [`ghidra/workflow.md`](https://github.com/MetaMikuAI/il2cpp-to-csharp-skill/blob/HEAD/ghidra/workflow.md) |

This is not a one-click decompiler. It helps an agent analyze user-provided VAs or function names and reconstruct C# while preserving strings, switch branches, lambdas, LINQ, async/coroutine state machines, and IL2CPP-specific quirks.

**Backend selection:** the root [`SKILL.md`](https://github.com/MetaMikuAI/il2cpp-to-csharp-skill/blob/HEAD/SKILL.md) is a thin dispatcher. It asks the user to specify which backend to use, then follows that backend's `workflow.md`. The two backends never mix instructions, so neither workflow is diluted.

Output quality depends on the AI model…
