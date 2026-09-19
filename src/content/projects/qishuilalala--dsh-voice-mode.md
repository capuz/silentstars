---
repo: "qishuilalala/dsh-voice-mode"
name: "dsh-voice-mode"
description: "Full-duplex voice plugin for DeepSeek Harness: local zipformer2 streaming ASR (no API key) → editable draft; Edge TTS or local VITS / Kokoro read-aloud with live captions; true barge-in; hardened HTTP surface + model SHA256 pinning; compatible with dsh 0.1.1 → 0.1.2. · Full-duplex voice plugin for DSH: streaming recognition into draft, sentence-by-sentence read-aloud with live captions, instant interrupt capability; no API Key, security hardening, compatible with old and new versions."
originalDescription: "Full-duplex voice plugin for DeepSeek Harness: local zipformer2 streaming ASR (no API key) → editable draft; Edge TTS or local VITS / Kokoro read-aloud with live captions; true barge-in; hardened HTTP surface + model SHA256 pinning; compatible with dsh 0.1.1 → 0.1.2. · DSH 语音双工插件：流式识别入草稿、按句朗读+实时字幕、开口即打断；免 API Key、安全加固、新旧版本兼容。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/qishuilalala/dsh-voice-mode"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [59, 38]
topics: ["dsh-plugin", "asr", "deepseek-harness", "dsh", "edge-tts", "sherpa-onnx", "tts", "voice", "voice-mode", "full-duplex"]
stars: 12
forks: 4
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 4
recentReleases: 10
createdAt: "2026-08-22T16:16:35Z"
lastCommitAt: "2026-09-19T02:47:29Z"
lastReleaseAt: "2026-08-29T18:07:18Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 59
maintainers: ["qishuilalala", "ImgBotApp"]
openGraphImageUrl: "https://opengraph.githubassets.com/d18c0b619fda94e43b3364f30ddd7c68fc1043a3032e1cbad1d583594c04836d/qishuilalala/dsh-voice-mode"
---

<h1 align="center">dsh-voice-mode</h1>

> **Full-duplex voice mode for DeepSeek Harness** —— Complete an entire conversation turn using voice within a chat session: **text appears in real-time as you speak**, auto-send after a pause; reply is **read sentence-by-sentence** with live captions following along; **interrupt instantly** while reading. Recognition runs locally with no API Key needed; read-aloud defaults to Edge cloud (fast and natural), with optional local VITS / Kokoro (privacy-first). Compatible with all versions from dsh 0.1.1-rc.2 onward (verified end-to-end with real LLM on 5 versions: 0.1.1-rc.2 / 0.1.2-rc.1 / 0.1.5-alpha.2 / 0.1.5-rc.2 / **0.1.6-alpha.2**). Current version **v0.7.11**, all 385 tests passing.

---

## 💡 What is it

Within a DeepSeek Harness conversation, click the microphone to complete an entire turn using voice:

- 🎤 **You speak** —— **Text appears in real-time as you speak** (streaming recognition), auto-send after approximately **1500ms pause**;
- 🔊 **AI answers** —— Final reply is **read sentence-by-sentence**, with live captions throughout;
- ⏸️ **Interrupt anytime** —— **Interrupt instantly** while AI is reading, your words are heard…
