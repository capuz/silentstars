---
repo: "caiovicentino/opencode-remote"
name: "opencode-remote"
description: "Control your local opencode agent from your phone — PWA ⇄ blind relay ⇄ daemon. Passkey+QR pairing, E2E-encrypted, voice, rewind, AutoMode, push notifications."
readmeQualityOk: true
url: "https://github.com/caiovicentino/opencode-remote"
homepage: "https://culturabuilder.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
topics: ["ai-agents", "coding-agent", "developer-tools", "e2ee", "llm", "mobile", "nodejs", "opencode", "pwa", "react"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-29T17:44:14Z"
lastCommitAt: "2026-09-12T08:05:43Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 64
maintainers: ["caiovicentino"]
openGraphImageUrl: "https://opengraph.githubassets.com/a9bf171fdec940ffe7440a1eedde8fccfdab07d2bc7bea09f2f11b7839224787/caiovicentino/opencode-remote"
---

# OpenCode Remote

[🇧🇷 Português](https://github.com/caiovicentino/opencode-remote/blob/HEAD/README.pt-BR.md) | 🇬🇧 English

Control the [opencode](https://opencode.ai) agent on your machine from your
phone, from anywhere. **Your machine, your code, your keys** — nothing leaves
your hardware; the relay is a blind pipe that cannot read the traffic.

```
[PWA (phone)] ⇄ [Relay] ⇄ [Daemon] ⇄ [opencode serve]
   passkey+QR      blind       E2E          localhost
```

</p>

## Why this exists

Claude Code, Codex and friends run your agent in *their* cloud. OpenCode
Remote runs it on **your** machine — full filesystem, real terminal, your
API keys, any model — and gives you a phone cockpit that is end-to-end
encrypted. The relay never sees plaintext, so even a hosted relay stays
private. That is the product: **local power, remote control, zero trust**.

## What you get

- **Full chat** with streaming, markdown, images and tool-activity history;
  the chat header shows the conversation's title (generic "session" while the
  session has no title yet) and carries quiet ghost action buttons (handoff,
  export, tool activity) matching the composer's icon chrome; a fresh
  conversation…
