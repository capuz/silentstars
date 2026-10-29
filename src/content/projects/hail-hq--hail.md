---
repo: "hail-hq/hail"
name: "hail"
description: "Give your agent a real phone number and an email inbox — in minutes, not days."
readmeQualityOk: true
url: "https://github.com/hail-hq/hail"
homepage: "https://hail.so"
language: "Python"
languages: ["Python"]
languagePcts: [86]
topics: ["email", "sms", "telephony", "ai-agents", "livekit", "mcp", "twilio", "voice-ai"]
stars: 32
forks: 12
openIssues: 4
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-22T09:11:19Z"
lastCommitAt: "2026-10-29T12:25:37Z"
lastReleaseAt: "2026-07-02T12:11:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 40
maintainers: ["r13i", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1217837484/6582cb9a-a4b2-42bf-bad2-84ec2243430b"
---

# Hail

**Give your agent a real phone number and an email inbox — in minutes, not days.**

Your agent needs to call a person to move an appointment. Hail connects to the telephone carrier and runs the voice pipeline — STT, TTS, turn detection. Your agent is the brain: point Hail at any OpenAI-compatible endpoint ([bring your own LLM](https://github.com/hail-hq/hail/blob/HEAD/docs/public/byo-llm.md)), or let Hail's fallback chain (Anthropic → OpenAI → Gemini) do the talking. SMS and email work the same way — one MCP endpoint, one API key, one invoice.

Self-hostable with Docker Compose; LiveKit Cloud and the communication
providers remain external. Open source under AGPLv3.

## Self-host quick start

Prerequisites: Git, Docker Engine, and Docker Compose v2. For a public
production deployment you also need a domain, HTTPS, and a managed Postgres;
start with the [VM deployment guide](https://github.com/hail-hq/hail/blob/HEAD/docs/public/self-host/vm-deploy.md).

The commands below run a local evaluation stack with bundled Postgres.
Voice calls additionally require LiveKit Cloud, a carrier (Twilio, Telnyx or
DIDWW), Deepgram, Cartesia, and at least one LLM provider. Email is optional…
