---
repo: "Godefroy/micdrop"
name: "micdrop"
description: "Micdrop is a set packages for node and browser that simplify voice conversations with AI systems."
readmeQualityOk: true
url: "https://github.com/Godefroy/micdrop"
language: "MDX"
languages: ["MDX", "TypeScript"]
languagePcts: [61, 32]
stars: 94
forks: 7
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2025-02-21T17:25:29Z"
lastCommitAt: "2026-10-11T10:14:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 48
maintainers: ["Godefroy"]
openGraphImageUrl: "https://opengraph.githubassets.com/48ab5f29f55de73533d79cabe81daba73eb8887f19d67158f36e906c6ae81d50/Godefroy/micdrop"
---

# 🖐️🎤 Micdrop: Real-Time Voice Conversations with AI

[Micdrop website](https://micdrop.dev) | [Documentation](https://micdrop.dev/docs)

Micdrop is a set of open source Typescript packages to build real-time voice conversations with AI agents. It handles all the complexities on the client and server side (microphone, speaker, VAD, network communication, etc) and provides ready-to-use implementations for various AI providers.

## 📦 Packages

### Core Packages (start here)

- [`@micdrop/web`](https://github.com/Godefroy/micdrop/blob/HEAD/packages/web/README.md) - Browser library handling microphone input, audio playback, and real-time communication
- [`@micdrop/react-native`](https://github.com/Godefroy/micdrop/blob/HEAD/packages/react-native/README.md) - The same call on iOS and Android
- [`@micdrop/server`](https://github.com/Godefroy/micdrop/blob/HEAD/packages/server/README.md) - Server implementation for audio streaming and AI integration orchestration

Both client packages are built on [`@micdrop/client`](https://github.com/Godefroy/micdrop/blob/HEAD/packages/client/README.md), which holds the protocol, the call state and the voice activity detection, and knows nothing…
