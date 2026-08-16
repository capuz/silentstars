---
repo: "teddytennant/wizard"
name: "wizard"
description: "Self-extending autonomous agent in one Rust binary. One-line install, any provider (OpenAI-compatible, Anthropic, xAI) or fully local via llama.cpp, live /evolve self-modification, MCP, messaging gateway, built-in bench"
readmeQualityOk: true
url: "https://github.com/teddytennant/wizard"
homepage: "https://wizard.teddytennant.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 67
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-06-09T14:02:48Z"
lastCommitAt: "2026-08-16T04:12:43Z"
lastReleaseAt: "2026-07-07T21:52:19Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 89
undervaluedScore: 38
maintainers: ["teddytennant", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d8e6e23b9601e9a68cc9a4bcad30544990967b240e6e5f3d75c9f6e251ff7d46/teddytennant/wizard"
---

# Wizard

</p>

**One line. Your sovereign agent. Self-extending. Bring any model.**

```bash
curl -fsSL https://raw.githubusercontent.com/teddytennant/wizard/main/install.sh | bash
```

That installs the `wizard` binary. First run asks which provider you want and handles the rest. Pick **Local** and Wizard sizes a Qwen 3 GGUF to your hardware and runs [llama.cpp](https://github.com/ggml-org/llama.cpp)'s `llama-server` for you, no API key needed. Or sign in with an xAI or ChatGPT account, or drop in a key for xAI, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, Moonshot, Z.AI, MiniMax, Together, Fireworks, Cerebras, OpenRouter, Cloudflare Workers AI, or any OpenAI-compatible endpoint, and switch live with `/provider`. One fast Rust binary on Linux and macOS. Everything it keeps lives under `~/.wizard/` in files you can read: TOML for config, markdown for memory, JSONL for sessions — edit or delete any of them.

> **Other ways to install:** local-stack preinstall, minimal, bring-your-own-model, Nix, macOS, Termux, plus a first-run walkthrough, all in **[Getting started](https://github.com/teddytennant/wizard/blob/HEAD/docs/getting-started.md)**.

---

## What it does

-…
