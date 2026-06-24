---
repo: "briandilley/gilbert"
name: "gilbert"
description: "Gilbert - the AI Assistant for business and home"
url: "https://github.com/briandilley/gilbert"
language: "Python"
languages: ["Python"]
languagePcts: [84]
stars: 8
forks: 2
openIssues: 1
closedIssues: 8
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-04-05T00:17:45Z"
lastCommitAt: "2026-06-24T00:21:04Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 53
maintainers: ["briandilley", "jereanon"]
openGraphImageUrl: "https://opengraph.githubassets.com/f037c120b0f0ea50c06c8570f1f9a6e6b63df44c2b8c2183d88a3492050e8e66/briandilley/gilbert"
---

# Gilbert

An AI-powered assistant for home and business automation. Gilbert combines a modular, interface-driven architecture with an agentic AI core — giving it the ability to control speakers, greet people at the door, manage email, spin up a radio DJ, expose its tools over MCP, and much more, all orchestrated through natural conversation or automated event-driven workflows.

Everything in Gilbert is an abstraction. Swap your AI provider, your speaker system, your presence detector, or your storage backend without touching a single line of business logic. The core ships with only vendor-free backends (local auth, local filesystem documents, local + browser speaker playback, local Whisper speech-to-text, internal-URL via sslip.io, MCP transports); every third-party integration — Anthropic, Sonos, Google, UniFi, ElevenLabs, Tavily, Slack, ngrok, Tesseract — is a **plugin**. Plugins live in a separate [gilbert-plugins](https://github.com/briandilley/gilbert-plugins) repo that's included as a git submodule at `std-plugins/`, and new plugins can be added at runtime from any GitHub URL.

Gilbert is a **multi-user system from the ground up** — every piece of state (mailboxes, chat…
