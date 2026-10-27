---
repo: "livekit/python-sdks"
name: "python-sdks"
description: "LiveKit real-time and server SDKs for Python"
readmeQualityOk: true
url: "https://github.com/livekit/python-sdks"
homepage: "https://docs.livekit.io"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["ai", "webrtc", "agents", "python", "real-time"]
stars: 390
forks: 154
openIssues: 19
closedIssues: 141
watchers: 14
contributors: 64
recentReleases: 0
createdAt: "2023-05-21T13:10:58Z"
lastCommitAt: "2026-10-27T09:17:21Z"
lastReleaseAt: "2023-09-19T04:12:30Z"
status: "thriving"
tags: []
healthScore: 94
undervaluedScore: 40
maintainers: ["github-actions[bot]", "renovate[bot]", "davidzhao"]
openGraphImageUrl: "https://opengraph.githubassets.com/40088fed17adb149eb1ec1feb1c3e27ec98620063ac5d68fb9e1342dc3672740/livekit/python-sdks"
---

# 📹🎙️🐍 Python SDK for LiveKit

Use this SDK to add realtime video, audio and data features to your Python app. By connecting to <a href="https://livekit.io/">LiveKit</a> Cloud or a self-hosted server, you can quickly build applications such as multi-modal AI, live streaming, or video calls with just a few lines of code.

This repo contains two packages

- [livekit](https://pypi.org/project/livekit/): Real-time SDK for connecting to LiveKit as a participant
- [livekit-api](https://pypi.org/project/livekit-api/): Access token generation and server APIs

> [!IMPORTANT]
> If you're building Voice AI, [LiveKit Agents](https://github.com/livekit/agents) is the SDK for code-first realtime voice agents. STT, LLM, TTS, turn detection, [expressive speech](https://docs.livekit.io/agents/models/tts/expressive/), [keyterm accuracy](https://docs.livekit.io/agents/models/stt/keyterms/), tool usage, and telephony all come bundled in the framework. It's available in both [Python](https://github.com/livekit/agents) and [Node.js](https://github.com/livekit/agents-js).
>
> ```python
> # agent.py
> from livekit import agents
> from livekit.agents import Agent, AgentServer, AgentSession,…
