---
repo: "zyjhandsome/SayInk"
name: "SayInk"
description: "Local offline dictation tool: hold a hotkey to speak, release to recognize and paste at the cursor; optional LLM polishing; can switch to continuous transcription or only record meetings to history"
originalDescription: "本地离线口述输入工具：按住快捷键说话，松开后识别并粘贴到光标处；可选大模型润色，可切换持续转写或只记录会议到历史"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/zyjhandsome/SayInk"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-04-06T14:25:25Z"
lastCommitAt: "2026-10-09T18:48:42Z"
lastReleaseAt: "2026-10-08T18:39:09Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 85
undervaluedScore: 55
maintainers: ["zyjhandsome"]
openGraphImageUrl: "https://opengraph.githubassets.com/bef29f0a5498eeb1d9c2b143d8fed56f3227342b1f1041eb6fbbb92fb89db358/zyjhandsome/SayInk"
---

# SayInk — Speech-to-Text Desktop Tool

A local, offline **dictation input** tool: **hold a hotkey to speak, release to recognize and paste at the cursor** (default). Uses local ASR for recognition, with optional LLM polishing. It can also switch to **automatic continuous transcription** (hold to start listening to an entire session; output appears automatically after each pause), or capture **computer playback audio** or **mixed** sources to listen to meetings. With these two sources, results are **only recorded to history and not pasted**, so they will not be mistakenly typed into the current window.

The version number follows `__version__` in **`sayink/version.py`** (currently **2.2.3**). Installer filenames, Inno metadata, and the `SayInk.exe` properties on Windows are all kept in sync with it.

> **Formerly VoiceInk.** When upgrading from VoiceInk, installing SayInk first uninstalls the old VoiceInk and renames `~/.voiceink` (settings, history, downloaded models) as a whole to `~/.sayink`. API Keys in the credential manager are also migrated automatically. No reconfiguration or model re-download is needed.

**Documentation navigation**

| Reader | Suggested reading |…
