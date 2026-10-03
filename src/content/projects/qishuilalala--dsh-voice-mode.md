---
repo: "qishuilalala/dsh-voice-mode"
name: "dsh-voice-mode"
description: "Full-duplex voice plugin for DeepSeek Harness: streaming speech-to-text into an editable draft, text-to-speech read-aloud with live captions, true barge-in and wake word; on-device ASR, no API key, optional wake word."
originalDescription: "DSH 全双工语音插件：流式语音识别入草稿、语音合成按句朗读 + 实时字幕、开口即打断；本地识别免 API Key，可选唤醒词。 · Full-duplex voice plugin for DeepSeek Harness: streaming speech-to-text into an editable draft, text-to-speech read-aloud with live captions, true barge-in and wake word; on-device ASR, no API key."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/qishuilalala/dsh-voice-mode"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [73, 24]
topics: ["dsh-plugin", "asr", "deepseek-harness", "dsh", "sherpa-onnx", "tts", "voice", "voice-mode", "full-duplex", "barge-in"]
stars: 15
forks: 4
openIssues: 0
closedIssues: 4
watchers: 3
contributors: 4
recentReleases: 10
createdAt: "2026-08-22T16:16:35Z"
lastCommitAt: "2026-10-03T09:18:49Z"
lastReleaseAt: "2026-08-29T18:07:18Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 56
maintainers: ["qishuilalala", "ImgBotApp"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1342970553/6fccb35c-97a5-42c5-a674-184fa9b03aa2"
---

<h1 align="center">dsh-voice-mode</h1>

> **Full-duplex voice mode for DeepSeek Harness** —— Complete an entire conversation turn using voice within the conversation: as you speak, **text appears in real-time**, automatically sends after a pause; replies are **read aloud sentence-by-sentence** with live captions following throughout; **speak to interrupt anytime** while reading. Recognition runs locally without API Key; read-aloud defaults to Edge cloud (fast and natural), with local VITS/Kokoro optional (privacy-first). Compatible with all dsh versions from 0.1.1-rc.2 onwards (including 0.1.7-rc.2 / 0.2.0-rc.2 isolated smoke testing, full compatibility matrix see [docs/compat-contract.md](https://github.com/qishuilalala/dsh-voice-mode/blob/HEAD/docs/compat-contract.md) §10–§12). 380 tests all passing (28 suites); current version see npm badge above and [Releases](https://github.com/qishuilalala/dsh-voice-mode/releases).

---

## 💡 What is it

In a DeepSeek Harness conversation, click the microphone to complete an entire conversation turn using voice:

- 🎤 **You speak** —— **Text appears in real-time** as you speak (streaming recognition), automatically sends after about…
