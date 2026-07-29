---
repo: "sx4im/BIMO"
name: "BIMO"
description: "Introducing Bimo 5 (Autonomous Multi-Modal AI Agent with real-time voice, vision processing, document analysis, image generation, and web search)."
readmeQualityOk: true
url: "https://github.com/sx4im/BIMO"
homepage: "https://bimo.qzz.io"
language: "JavaScript"
languages: ["JavaScript", "Python", "CSS"]
languagePcts: [40, 37, 23]
topics: ["ai-chat", "ai-workspace", "flask", "llm", "openai-api", "python", "supabase", "voice-ai", "ai-agent", "ai-assistant"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-09-10T05:47:15Z"
lastCommitAt: "2026-07-29T06:13:24Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 39
maintainers: ["sx4im"]
openGraphImageUrl: "https://opengraph.githubassets.com/e6b2c65a7cf292d9463faa746578b936c4ee1a4d47ebfac880c6b03797fee564/sx4im/BIMO"
---

<h1><img src=".github/assets/bimo-logo.svg" alt="Bimo logo" width="70" align="absmiddle" /> Bimo</h1>

A streaming AI chat workspace and agent built on a plain JavaScript frontend and a Flask backend proxying NVIDIA inference and Supabase storage.

[Live demo](https://bimo.qzz.io) | [Report an issue](https://github.com/sx4im/BIMO/issues)

</div>

---

## What is Bimo

Bimo is an open-source AI chat app and agent workspace. It streams responses token by token over Server-Sent Events, renders Markdown, code blocks, and math formulas as they arrive, and supports image generation, document parsing, and voice interaction.

The browser client uses HTML, CSS, and plain ES modules without build tools, frameworks, or bundlers. The backend is a Flask gateway that authenticates Supabase user tokens, enforces rate limits, and routes inference to NVIDIA endpoints.

## Explainer video

---

## Features

- **Passwordless authentication**: Sign in with Google through Supabase OAuth. Tokens are verified using ES256 JWTs against project JWKS keys.
- **Live streaming**: Responses stream using Server-Sent Events with inline Markdown, syntax-highlighted code blocks, and KaTeX rendering.
- **Model…
