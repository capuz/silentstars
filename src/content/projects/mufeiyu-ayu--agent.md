---
repo: "mufeiyu-ayu/agent"
name: "agent"
description: "Server-side agent runtime in TypeScript — streaming chat, tool calling, knowledge-base retrieval, and answers with citations. Ships with a web app and an admin console."
readmeQualityOk: true
url: "https://github.com/mufeiyu-ayu/agent"
language: "TypeScript"
languages: ["TypeScript", "Vue"]
languagePcts: [76, 23]
topics: ["agent-runtime", "ai-agent", "context-engineering", "deepseek", "function-calling", "hybrid-search", "llm", "nestjs", "pgvector", "postgresql"]
stars: 10
forks: 1
openIssues: 1
closedIssues: 105
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-23T06:53:01Z"
lastCommitAt: "2026-09-29T10:05:03Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 51
maintainers: ["mufeiyu-ayu"]
openGraphImageUrl: "https://opengraph.githubassets.com/d3d8511595be5db748b08a368cde818b2219bf2a76721dd52348ac261124e3ec/mufeiyu-ayu/agent"
---

# TypeScript Agent Runtime

<h3>Agents you can actually read.</h3>

A production-minded AI agent runtime in plain TypeScript.<br/>
No LangChain. No LangGraph. No workflow engine. Just the loop, the edge cases, and the tests.

**English** · [简体中文](https://github.com/mufeiyu-ayu/agent/blob/HEAD/README.zh-CN.md)

[Why](#why-this-exists) · [Highlights](#highlights) · [The loop](#the-whole-loop-in-one-screen) · [Quick start](#quick-start) · [Learn from it](#learn-agent-engineering-from-it) · [Roadmap](#roadmap)

</div>

---

## Why this exists

Most agent tutorials end at "call the model in a `while` loop". Real agents break after that point:

- the model writes half an answer, then asks for **two tools at once**;
- the tool arguments get **cut off** because the output hit its token limit;
- the user **closes the tab** while a tool is still running;
- a request fails, gets retried, and a **late result tries to overwrite** a run that already ended.

Frameworks hide these decisions behind abstractions. This project handles every one of them in explicit, tested TypeScript, so you can open a file and see exactly what happens.

| ~5,000 | 450+ | 80+ | 80+ |
| :---: | :---: | :---: | :---: |…
