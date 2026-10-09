---
repo: "moooff/HermitUI"
name: "HermitUI"
description: "Run local LLMs entirely in your browser, with no server, no install and no traces. A private, single-file AI chat UI and AGENT that also works with any OpenAI-compatible API."
readmeQualityOk: true
url: "https://github.com/moooff/HermitUI"
language: "HTML"
languages: ["HTML", "JavaScript"]
languagePcts: [68, 21]
topics: ["chat-ui", "local-llm", "openai-api", "privacy-first", "single-file", "zero-telemetry", "air-gapped", "air-gapped-ai", "gguf", "offline-first"]
stars: 9
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-24T21:14:43Z"
lastCommitAt: "2026-10-09T18:57:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 48
maintainers: ["moooff"]
openGraphImageUrl: "https://opengraph.githubassets.com/df3bbf46f8875c06c3a54286150a97bb5a63cda128123d7c700b4d348428d1bf/moooff/HermitUI"
---

HermitUI is a chat interface that is **one `.html` file**. No install, no server, no build step, no npm — double-click it and it opens.

Two things set it apart, and the combination is the point:

*   **🧠 It runs models itself.** GGUF models execute entirely in your browser via llama.cpp compiled to WebAssembly, with WebGPU acceleration. A 12.1 GB model loads in a tab and decodes at 43 tok/s — [and we measured it properly](#-benchmarks).
*   **🔒 It stores absolutely nothing.** No `localStorage`, no `IndexedDB`, no cookies, no model cache, no telemetry. Close the tab and the conversation *and* the model are gone — [and you can check that in a minute](#verify-the-privacy-claim).

Or ignore all of that and point it at LM Studio, Ollama, llama.cpp, or vLLM as a [normal client](#-connect-to-your-own-endpoint).

Built for the machines where nothing else fits: air-gapped boxes, locked-down corporate and government networks, shared kiosks and hot desks.

**New:** [🤖 **HermitUI Agent**](#-new-hermitui-agent-preview), a supervised coding agent with its own Python sandbox, in the same one-file, store-nothing spirit.

**Also new:** [🧹 **HermitUI…
