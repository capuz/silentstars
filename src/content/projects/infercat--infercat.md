---
repo: "infercat/infercat"
name: "infercat"
description: "Share the model on your machine with friends: one binary in front of llama.cpp, vLLM, Ollama or LM Studio; one invite code; they chat from a browser. Self-hosted, end-to-end encrypted, no accounts."
readmeQualityOk: true
url: "https://github.com/infercat/infercat"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [50, 29]
topics: ["go", "llama-cpp", "llm", "lm-studio", "local-llm", "ollama", "openai-api", "react", "self-hosted", "tailscale"]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 6
createdAt: "2026-09-02T05:44:30Z"
lastCommitAt: "2026-09-11T08:12:01Z"
lastReleaseAt: "2026-09-11T05:27:52Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 53
maintainers: ["YuanpingSong"]
openGraphImageUrl: "https://opengraph.githubassets.com/4204c2c8f47a18e94a7018845a2e9024b33e852553c5b9661a8e845477b6bcde/infercat/infercat"
---

English · [简体中文](https://github.com/infercat/infercat/blob/HEAD/README.zh-CN.md)

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/media/mark-paper.svg">
</picture>

# Infercat

**Let friends chat with your GPU.**

---

Share the model on your machine with friends. You run one binary in front of the inference server you already have — llama.cpp, llama-swap, vLLM, Ollama or LM Studio — and give each friend one invite code. They paste it into a web page and chat with your model: no account, no VPN, nothing to install. The connection is encrypted end to end; the relay in between sees ciphertext. You set limits per friend. Chat logs contain counts unless you opt into logging text; image jobs keep prompts and pictures under the friend’s key for up to 7 days.

*Recorded from the real app: a friend's browser, through the relay, to a laptop running llama.cpp.*

## How it works

- **The host** runs `infercat serve`. It finds the inference server, opens a WireGuard tunnel to a relay, and serves a small gateway inside the tunnel: OpenAI-compatible, one key per friend.
- **The friend** opens the web app and pastes the invite. The app carries the tunnel's client side as…
