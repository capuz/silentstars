---
repo: "thrashr888/alchemy"
name: "alchemy"
description: "MacOS local AI notebook"
readmeQualityOk: true
url: "https://github.com/thrashr888/alchemy"
homepage: "https://thrashr888.github.io/alchemy/"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [61, 37]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-06-29T17:25:41Z"
lastCommitAt: "2026-07-31T06:29:56Z"
lastReleaseAt: "2026-07-06T08:52:26Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 55
maintainers: ["thrashr888"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/1284262505/a6fc6d01-47b8-4689-b8fb-fc1ec1009027?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260731%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260731T063205Z&X-Amz-Expires=300&X-Amz-Signature=6356e7f56dc275c3b1161780e934f11cb923cd71b1996bd6f49913450c4d2cf2&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTQ3OTgyNSwibmJmIjoxNzg1NDc5NTI1LCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.bmAOQChCMtowEkZsfw0rAqtQHHcfg7RjN_U2lpjReVc"
---

# Alchemy

A local-first, privacy-respecting desktop app inspired by
[NotebookLM](https://notebooklm.google/). Import your sources, chat with them
grounded in citations, and generate documents — running **100% on your
machine** when you want it to. No accounts, no cloud requirement, nothing
leaves your laptop by default.

Chat with any model you already have (see
[docs/RFC-inference-providers.md](https://github.com/thrashr888/alchemy/blob/HEAD/docs/RFC-inference-providers.md)):

- **On this Mac** — Apple's on-device model on macOS 26 with Apple
  Intelligence: fully offline, no setup, retrieval auto-tuned to its window.
- **Local servers** — [Ollama](https://ollama.com), LM Studio, vLLM, or any
  OpenAI-compatible localhost endpoint.
- **Subscriptions you already pay for** — Claude Code, Codex, Gemini CLI,
  Cursor, OpenCode, GitHub Copilot, Hermes, and IBM Bob run headless through
  their own CLIs; your existing sign-ins carry the bill and answers are
  captioned with the model (and metered cost when reported).
- **API gateways** — 30+ presets (OpenAI, Anthropic, NVIDIA, OpenRouter,
  Groq, …) or any custom OpenAI-compatible URL. See
  [Using a cloud…
