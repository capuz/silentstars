---
repo: "sx4im/BMO"
name: "BMO"
description: "Introducing Bimo 5 (Autonomous Multi-Modal AI Agent with real-time voice, vision processing, document analysis, image generation, and web search/fetch)."
readmeQualityOk: true
url: "https://github.com/sx4im/BMO"
homepage: "https://bimo.qzz.io"
language: "Python"
languages: ["Python", "JavaScript", "CSS"]
languagePcts: [43, 35, 21]
topics: ["ai-chat", "ai-workspace", "flask", "llm", "openai-api", "python", "supabase", "voice-ai", "ai-agent", "ai-assistant"]
stars: 10
forks: 4
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-09-10T05:47:15Z"
lastCommitAt: "2026-10-31T15:58:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 83
maintainers: ["sx4im"]
openGraphImageUrl: "https://opengraph.githubassets.com/e04c875c2db678f26f431124c623ae18c88de1c84733ebc030fcc43acf94f468/sx4im/BMO"
---

A streaming AI chat workspace and agent built with vanilla JavaScript on the frontend and a lightweight Flask backend proxying NVIDIA inference and Supabase storage. Chat on the web or seamlessly connect via WhatsApp.

[Live demo](https://bimo.qzz.io) | [Report an issue](https://github.com/sx4im/BMO/issues)

---

## What is Bmo

Bmo is a fast, full-featured AI workspace and agent. It streams responses token by token via Server-Sent Events, renders live Markdown, code blocks with syntax highlighting, and math expressions, and supports image generation, document parsing, and bidirectional voice interaction.

The client is built with clean, dependency-free HTML, CSS, and modern ES modules—no bundlers or build steps required. The backend is an efficient Flask gateway that validates Supabase user tokens, enforces rate limits, and routes inference to NVIDIA and Mistral endpoints.

## Explainer video

---

## Features

- **Passwordless authentication**: Sign in with Google through Supabase OAuth. Tokens are verified using ES256 JWTs against project JWKS keys.
- **Live streaming**: Responses stream using Server-Sent Events with inline Markdown, syntax-highlighted code blocks, and KaTeX…
