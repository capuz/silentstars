---
repo: "p32929/rotato"
name: "rotato"
description: "Zero-dependency Node.js LLM proxy that auto-rotates API keys for OpenAI, Gemini, Groq and OpenRouter on 429s"
readmeQualityOk: true
url: "https://github.com/p32929/rotato"
language: "HTML"
languages: ["HTML", "JavaScript"]
languagePcts: [58, 42]
topics: ["api-key-rotation", "gemini", "groq", "nodejs", "openai", "openrouter", "openai-compatible-api", "llm-proxy", "load-balancer", "rate-limit"]
stars: 77
forks: 32
openIssues: 0
closedIssues: 8
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-08-01T08:18:12Z"
lastCommitAt: "2026-11-17T14:36:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 89
undervaluedScore: 47
maintainers: ["p32929"]
openGraphImageUrl: "https://opengraph.githubassets.com/bee010baff2d5974a424add22c4b13b50a6bdf0fee1fe7c3ebd1b3b897f26489/p32929/rotato"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/p32929"]
---

# rotato

rotato is a small proxy you run yourself that rotates your API keys for OpenAI, Gemini, Groq, OpenRouter and any OpenAI or Gemini compatible API. Free and cheap keys hit their rate limit fast. Give rotato several keys, and when one is limited it quietly tries the next, so your app keeps working.

**No third-party packages, so there is no supply chain to attack.** Most tools like this pull in hundreds of npm packages, and any one of them could be hijacked to steal the API keys you give it. rotato uses only Node.js itself: there is nothing to `npm install`, no `node_modules`, and every line that touches your keys is in this repo where you can read it. The admin panel's code and Tailwind styles are served from this repo too (only its font comes from Google Fonts).

## Features

1. **Switches keys for you** when a provider answers with a rate limit (429 by default) or any other codes you choose.
2. **Works with any OpenAI or Gemini compatible API,** each provider on its own path, like `/groq` or `/gemini`.
3. **Streaming works,** so chat replies still arrive word by word.
4. **Avoids keys that just failed,** and lets you reorder keys or turn off a key or a whole provider.
5.…
