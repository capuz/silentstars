---
repo: "xberg-io/liter-llm"
name: "liter-llm"
description: "One API for every LLM: 170+ providers through one client, with a Rust core and native bindings for every major language."
readmeQualityOk: true
url: "https://github.com/xberg-io/liter-llm"
homepage: "https://docs.liter-llm.xberg.io"
language: "Rust"
languages: ["Rust"]
languagePcts: [88]
topics: ["anthropic", "api-client", "llm", "machine-learning", "openai", "polyglot", "python", "rust", "streaming", "typescript"]
stars: 264
forks: 25
openIssues: 4
closedIssues: 163
watchers: 2
contributors: 15
recentReleases: 0
createdAt: "2026-03-25T07:30:37Z"
lastCommitAt: "2026-11-04T13:04:52Z"
lastReleaseAt: "2026-03-29T15:57:21Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 32
maintainers: ["Goldziher", "xberg-dev-publisher[bot]", "tobocop2"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1191384809/a9f1d371-67b4-410c-b2f2-4f11021e18e8"
---

# liter-llm

  
  

  

    <img
      height="22"
      src="https://img.shields.io/badge/Discord-Chat-007ec6?logo=discord&logoColor=white"
      alt="Join Discord"
    />

**One API for every LLM — in your language, without the rewrites.**

## What and Why?

liter-llm gives you a single, consistent way to call any large language model. Reach 174 providers — OpenAI, Anthropic, Google, Bedrock, and more — through one client, and switch models by changing a name instead of your code. The same client ships to 14 languages, all built on one Rust core, so you get identical behavior everywhere. Need a gateway? Point your existing OpenAI SDK at the built-in, drop-in proxy — no rewrites, no separate service to run.

- **Work with any provider without rewrites** — 174 providers behind one API; change the model name to switch, your code stays the same.
- **Use it from your language** — Python, TypeScript, Go, Java, Kotlin, C#, Ruby, PHP, Elixir, Dart, Swift, Zig, and WebAssembly, all built on the same Rust core, plus a C/FFI surface for everything else.
- **Secure by default** — API keys are wrapped, redacted from logs, and never serialized; cloud auth for Azure, AWS, and Vertex refreshes…
