---
repo: "OpenSecretCloud/Maple"
name: "Maple"
description: "Maple - Private AI Chat"
readmeQualityOk: true
url: "https://github.com/OpenSecretCloud/Maple"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [49, 43]
stars: 90
forks: 11
openIssues: 64
closedIssues: 148
watchers: 6
contributors: 9
recentReleases: 0
createdAt: "2025-01-27T17:51:44Z"
lastCommitAt: "2026-08-23T04:09:17Z"
lastReleaseAt: "2025-04-12T16:43:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 45
maintainers: ["AnthonyRonning", "marksftw", "benthecarman"]
openGraphImageUrl: "https://opengraph.githubassets.com/575d70b0a2df3f111f89047a820d682f3ff40a36bc039ee1833b684306349099/OpenSecretCloud/Maple"
---

# Maple

Maple is an open-source AI client built with React, Vite, and Tauri. It runs as
a web application and as native desktop/mobile applications, and uses
[OpenSecret](https://github.com/OpenSecretCloud/opensecret) for confidential
authentication, inference, conversations, and related APIs.

Research chat and desktop Agent Mode are different client paths. Research chat
uses the TypeScript OpenSecret SDK with the Responses and Conversations APIs;
Agent Mode embeds Goose and uses the Rust OpenSecret SDK through Tauri. The
local OpenAI-compatible proxy is a separate user-facing service.

## Quick start

The supported development environment is the Nix flake. It pins Bun, Rust,
platform tools, and native dependencies used by the repository.

```bash
nix develop --no-update-lock-file
./setup-hooks.sh
just install
test -e frontend/.env.local || cp frontend/.env.example frontend/.env.local
```

This creates `frontend/.env.local` only when it is absent. Never overwrite an
existing file: it may be externally managed or contain checkout-specific
backend and application configuration. Inspect its source before changing its
values.

The common recipes below assume the active Nix shell.…
