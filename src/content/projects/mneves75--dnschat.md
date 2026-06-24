---
repo: "mneves75/dnschat"
name: "dnschat"
description: "A React Native mobile application that provides a modern, ChatGPT-like chat interface using DNS TXT queries to communicate with an LLM."
url: "https://github.com/mneves75/dnschat"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [70]
stars: 72
forks: 6
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 5
createdAt: "2025-08-06T18:24:00Z"
lastCommitAt: "2026-06-24T00:24:31Z"
lastReleaseAt: "2026-06-10T11:17:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 63
undervaluedScore: 40
maintainers: ["mneves75"]
openGraphImageUrl: "https://opengraph.githubassets.com/3024dbb9988b4bf334b3ea8135343775658382cdd25d14f6e08fdcb6bdfae5ed/mneves75/dnschat"
---

# DNSChat

DNSChat is a React Native Expo app that sends short chat prompts as
DNS TXT queries (default DNS server: `llm.pieter.com`). The app includes:

- A native DNS TXT resolver module for iOS/Android (`modules/dns-native/`)
- JavaScript fallback transports (UDP/TCP) for constrained networks
- An in-app Logs screen to inspect attempts, failures, and fallbacks

## Features

- Chat with LLMs over DNS - no API keys, no accounts, no tracking
- Native DNS resolution on iOS and Android with JS fallback transports
- Encrypted local chat history (AES-GCM)
- Multi-server support with automatic transport fallback
- Bilingual UI (English / Portuguese)
- Full offline chat history with search
- **NativeTabs** with SF Symbols (iOS) and Material Symbols (Android)
- **Platform colors** via expo-router Color API (auto light/dark, Android 12+ dynamic)
- **Native iOS toolbars** with share, clear, and new-chat actions (liquid glass)
- **Zoom transitions** (iOS 18+) from chat list to thread

## Tech stack

- App version: `4.1.4` (build `71`)
- Expo workflow: Expo Router + EAS-compatible native config
- Expo SDK: `56.0.12`
- React: `19.2.3`
- React Native: `0.85.3`
- TypeScript: `6.0.x`
- Hermes:…
