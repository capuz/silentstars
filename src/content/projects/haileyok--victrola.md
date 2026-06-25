---
repo: "haileyok/victrola"
name: "victrola"
description: "A self-modifying, TUI and Discord-facing, AI agent harness with parallel tool calling"
url: "https://github.com/haileyok/victrola"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["agent", "agents", "ai", "ai-agents", "llm", "llms"]
stars: 26
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-02-08T05:51:58Z"
lastCommitAt: "2026-06-25T01:38:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 22
maintainers: ["haileyok"]
openGraphImageUrl: "https://opengraph.githubassets.com/355ee5a094e60ccc804b48772c2273c44341ec60ffe926597263cbfbcbe0976f/haileyok/victrola"
---

# Victrola

> [!WARNING]
> No guarantees about security are made. I have reasonable confidence that things like secrets cannot be accessed by the agent (unless, of course, you allow it access through one of its custom tools...), but again make no guarantees. Don't do stupid things with agents. Don't give agents access to sensitive information. Do we really need to warn about anything else?
>
> You are also trusting [the Deno sandbox](https://docs.deno.com/runtime/fundamentals/security/). For a truly hardened setup, you should absolutely be executing code in something like Firecracker VMs, not Deno alone.

A general-purpose personal AI agent harness. You chat with it through a TUI or through Discord. It writes and runs code to do tasks for you!

Victrola is a single-operator agent runtime. You (the operator) drive it through chat. The agent has persistent memory, a scheduler, and can write its own tools in TypeScript that run in a sandboxed Deno process. You can also pre-write your own tools in Python using a decorator.

Victrola supports Anthropic, OpenAI, or any OpenAPI compatible endpoint like Ollama or llama-cpp.

## Tool Calling

The agent interacts with its tools via a single…
