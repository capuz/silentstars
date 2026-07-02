---
repo: "Pedal-Intelligence/saypi-userscript"
name: "saypi-userscript"
description: "Enterprise-grade browser extension bringing multilingual voice interaction to AI chatbots (Pi, Claude, ChatGPT). Features real-time speech detection with Silero VAD, accurate transcription via OpenAI Whisper, and ElevenLabs TTS. Built with TypeScript, XState, and modern web standards. Progressive enhancement across Chrome, Firefox, and Safari"
url: "https://github.com/Pedal-Intelligence/saypi-userscript"
homepage: "https://www.saypi.ai/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [80]
topics: ["ai", "chat", "chatbot", "dictation", "llm", "openai", "pi", "speech-recognition", "speech-to-text", "transcription"]
stars: 25
forks: 7
openIssues: 27
closedIssues: 159
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2023-07-21T07:53:43Z"
lastCommitAt: "2026-07-02T06:32:48Z"
lastReleaseAt: "2023-11-22T13:25:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 65
maintainers: ["rosscado"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/669042490/41e5e776-1669-4b0e-8a69-544bd411e62b"
---

# Say, Pi Browser Extension

**Transform your AI conversations with natural, hands-free voice interaction.**

Say, Pi is a browser extension that brings multilingual voice capabilities to AI chatbots. Built with enterprise-grade architecture and modern web standards, it delivers accurate speech recognition and natural text-to-speech across Pi.ai, Claude.ai, and ChatGPT.

[Watch Demo](https://youtu.be/siJAj879ii4) • [Install for Chrome](https://chromewebstore.google.com/detail/say-pi/glhhgglpalmjjkoiigojligncepccdei) • [Install for Firefox](https://addons.mozilla.org/firefox/addon/say-pi/) • [Documentation](https://www.saypi.ai)

---

## What is Say, Pi?

Say, Pi is a three-tier system that enhances AI chat experiences with sophisticated voice interaction:

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  Browser Extension (saypi-userscript)                       │
│  ├─ Content Script: Voice UI, chatbot integration           │
│  ├─ Service Worker: Auth, messaging, lifecycle management   │
│  ├─ Offscreen Documents: Audio processing under strict CSP  │
│  └─ Modern Stack: TypeScript, XState,…
