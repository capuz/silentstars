---
repo: "aplisay/llm-agent"
name: "llm-agent"
description: "LLM based Agent"
readmeQualityOk: true
url: "https://github.com/aplisay/llm-agent"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [54, 21]
stars: 38
forks: 7
openIssues: 13
closedIssues: 32
watchers: 3
contributors: 3
recentReleases: 1
createdAt: "2023-03-27T11:10:56Z"
lastCommitAt: "2026-07-28T15:00:22Z"
lastReleaseAt: "2026-05-15T09:24:20Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 56
maintainers: ["rjp44"]
openGraphImageUrl: "https://opengraph.githubassets.com/4610d1b1e47152c86ffcba22b6cc8041fd3502500c533522041c3fc99d72cd42/aplisay/llm-agent"
---

**Open infrastructure for voice AI agents** — `llm-agent` is the MIT-licensed core of the [Aplisay](https://aplisay.com) platform.

Define an agent once, as a portable JSON document — prompt, model, voice, tools and call handling. `llm-agent` runs it on your choice of LLM, speech-to-speech or full STT → LLM → TTS pipeline, and puts it on a real phone call over SIP or in a browser over WebRTC. Change vendor by changing one field; the agent, and your data, stay yours.

This is not a demo framework: it is the code Aplisay operates in production, delivering well over 1,000 concurrent calls per agent and limited in practice only by LLM provider capacity. Run it yourself — locally, on Kubernetes or Cloud Run — or let us run it for you.

## What you get

- **No model lock-in** — OpenAI, Google Gemini, Anthropic Claude, Moonshot Kimi, DeepSeek, OpenRouter and Ultravox speech-to-speech. Swap with a `modelName` change, or [fail over between agents automatically](https://github.com/aplisay/llm-agent/blob/HEAD/docs/agent-failover.md).
- **Real telephony** — inbound DDIs, SIP trunks and registrations ([phone…
