---
repo: "zero2005x/RokidAIAssistant"
name: "RokidAIAssistant"
description: "Your smart companion for Rokid Glasses. An open-source Android AI assistant featuring voice control and intelligent query processing."
readmeQualityOk: true
url: "https://github.com/zero2005x/RokidAIAssistant"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
stars: 99
forks: 38
openIssues: 1
closedIssues: 7
watchers: 5
contributors: 2
recentReleases: 2
createdAt: "2026-01-18T08:26:26Z"
lastCommitAt: "2026-10-01T10:24:43Z"
lastReleaseAt: "2026-08-08T10:16:34Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 42
maintainers: ["zero2005x", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/b7d2f1fdaddf328a3f00e178233993ab72e6b1718d46eb6b85fc26ab841d8cc5/zero2005x/RokidAIAssistant"
---

# Rokid AI Assistant

> 📖 [繁體中文版](https://github.com/zero2005x/RokidAIAssistant/blob/HEAD/doc/zh-TW/README.md)

**AI-powered voice and vision assistant for Rokid AR glasses.**

---

## 🚀 Quick Start (5 minutes)

```bash
# 1. Clone
git clone https://github.com/zero2005x/RokidAIAssistant.git && cd RokidAIAssistant

# 2. (Optional) Configure API keys
cp local.properties.template local.properties
# Add any provider key — or skip this and enter keys later in the app's Settings screen.

# 3. Build & Install
ANDROID_SERIAL=PHONE_SERIAL ./gradlew :phone-app:installDebug    # Install phone app
ANDROID_SERIAL=GLASSES_SERIAL ./gradlew :glasses-app:installDebug  # Install glasses app (on Rokid device)
```

> **No AI key is required** to install the app or open Settings. Only the one
> provider you actually use needs a key (entered in-app, stored encrypted with
> Android Keystore). `ROKID_CLIENT_SECRET` is only needed for glasses pairing.

---

## Scope

### In Scope

- Voice-to-text transcription and AI chat on Rokid AR glasses
- Photo capture from glasses camera with AI image analysis
- Phone ↔ Glasses communication via Rokid CXR SDK
- Multiple AI/STT provider support (Gemini, OpenAI,…
