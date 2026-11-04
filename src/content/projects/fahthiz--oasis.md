---
repo: "FAHTHIZ/oasis"
name: "oasis"
description: "An open-source, extensible environment for intelligent development, research, orchestration and automation. Designed for modular capabilities, developer control and an evolving AI-native toolchain."
readmeQualityOk: true
url: "https://github.com/FAHTHIZ/oasis"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [92]
topics: ["agent-framework", "agent-harness", "claude-code-alternative", "codex-alternative", "coding-agent", "developer-tools", "multi-agent", "subagents", "agent-skills", "automation"]
stars: 5
forks: 0
openIssues: 5
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-10-27T02:36:19Z"
lastCommitAt: "2026-11-04T08:03:22Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 80
undervaluedScore: 37
maintainers: ["FAHTHIZ"]
openGraphImageUrl: "https://opengraph.githubassets.com/d5e8b3aae03fa97d0655161cad8e61b87a86efb1eb7d8d8d6e125e986af1d56f/FAHTHIZ/oasis"
---

## Why OASIS

A coding agent is a model plus a harness. The model decides what to do; the harness decides what actually happens to your repository. Most of what people hate about coding agents is harness failure: tool calls that don't parse, edits that miss by one space, `rm -rf` in auto mode, "done" without running a test, a function replaced by `// ... rest unchanged`, a terminal that looks frozen for two minutes.

OASIS fixes each of those in the runtime, so the fix holds whichever model you connect.

**Any model, really.** Claude, GPT, Gemini, DeepSeek, OpenRouter, Bedrock, Vertex, Azure Foundry, or a local Ollama, LM Studio, llama.cpp or vLLM server. Small models get a compact prompt, a 13-tool profile and tool-call repair, so even a 4B local model drives the tools; whether its code is right is still up to the model. In our live runs on a 2-CPU cloud machine with no GPU, Qwen3-4B passed two of four hidden-test tasks (`parse-boolean-flag` and `dedupe-names`). `clamp-integer` failed in all three tries. `safe-task-id` passed once in two tries, but that code fails the stricter verifier added afterwards ([field…
