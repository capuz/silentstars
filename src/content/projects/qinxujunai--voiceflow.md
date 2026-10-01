---
repo: "qinxujunai/VoiceFlow"
name: "VoiceFlow"
description: "Windows offline voice input: press F2 to speak, text returns to current cursor; no uploads, recoverable, long audio without tail loss."
originalDescription: "Windows 离线语音输入：按 F2 说话，文字回到当前光标；不上传、可恢复、长语音不丢尾。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/qinxujunai/VoiceFlow"
homepage: "https://qinxujunai.github.io/VoiceFlow/"
language: "Python"
languages: ["Python"]
languagePcts: [93]
topics: ["clipboard", "dictation", "local-first", "offline", "sensevoice", "sherpa-onnx", "speech-to-text", "windows", "accessibility", "pyside6"]
stars: 97
forks: 15
openIssues: 3
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-05-23T15:29:39Z"
lastCommitAt: "2026-10-01T10:24:20Z"
lastReleaseAt: "2026-10-01T04:26:33Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 81
undervaluedScore: 34
maintainers: ["qinxujunai"]
openGraphImageUrl: "https://opengraph.githubassets.com/e73e468d2eb625a6ac1d18e0f5e8057411e5737f46add87eb6b53841357279f9/qinxujunai/VoiceFlow"
---

# VoiceFlow

  <strong>Simplified Chinese</strong> · <a href="README.en.md">English</a>
</p>

> Open your mouth, text is in place.

VoiceFlow is an offline voice input tool on Windows. Press `F2` once to start, press again to finish; no need to switch applications, voice becomes text on this machine, results return to the current cursor.

## Why VoiceFlow

- **Completely offline**: no account needed, recordings not uploaded; dictation works normally even when offline.
- **Common input boxes**: attempts automatic paste in regular applications; preserves clipboard when permissions or targets are restricted.
- **Delivery fallback**: if paste doesn't land in input box, can be recovered from clipboard or history; preserves temporary recovery recording and prompts failure when copy is blocked.
- **Complete recording priority**: the capsule is only responsible for real-time feedback; generates final results based on complete recording after stopping.

## Download

Download the latest Windows installer from [GitHub Latest Release](https://github.com/qinxujunai/VoiceFlow/releases/latest). The installer already includes the default offline model, no Python needed, ready to use after…
