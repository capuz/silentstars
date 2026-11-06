---
repo: "SAOS-3624/dsh-see-now"
name: "dsh-see-now"
description: "Let AI see your screen in real time: frames are filtered by how much they change and several frames are tiled into one image; a static screen costs almost no tokens"
originalDescription: "让 AI 实时看见你的屏幕：按变化量筛选帧、多帧拼进一张图，静止画面几乎不花 token"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/SAOS-3624/dsh-see-now"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [97]
topics: ["ai-agent", "dsh", "dsh-plugin", "ffmpeg", "llm", "realtime", "screen-capture", "token-efficient", "vision"]
stars: 404
forks: 41
openIssues: 9
closedIssues: 13
watchers: 1
contributors: 8
recentReleases: 7
createdAt: "2026-11-01T13:32:34Z"
lastCommitAt: "2026-11-06T12:17:16Z"
lastReleaseAt: "2026-11-05T18:08:45Z"
status: "newborn"
tags: ["release_machine"]
healthScore: 88
undervaluedScore: 26
maintainers: ["SAOS-3624", "ggfgfgf-on", "citydirector"]
openGraphImageUrl: "https://opengraph.githubassets.com/7ddc09d73ff39222e2ebc5a17e71cff63b816210ba02e88503b7e546d2faebac/SAOS-3624/dsh-see-now"
---

# See Now · Let AI See Your Screen in Real Time

> **AI no longer "listens to you describe the screen". It looks for itself, and only sends the frames where the picture has changed.**

A real-time vision plugin for [DSH](https://github.com/deepseek-ai) that turns your screen (or camera / video file) into a stream of frames filtered by how much they change, packs several of those frames into one image, and hands it to the model.

A static screen costs almost nothing. A one-take video gets frames based on how much motion there is. A hard-cut slideshow keeps one frame per cut.

---

## License

**Apache License 2.0**: use it freely. Personal use, internal company use, closed-source products, SaaS, and redistribution are all allowed. **You don't need to ask me for permission, and it's free.** You only need to keep the [LICENSE](https://github.com/SAOS-3624/dsh-see-now/blob/HEAD/LICENSE) and [NOTICE](https://github.com/SAOS-3624/dsh-see-now/blob/HEAD/NOTICE) files.

If you feel it saved you time, you're welcome to scan the QR code to tip. It's purely voluntary and **doesn't change anything above**:

Before submitting a PR, read…
