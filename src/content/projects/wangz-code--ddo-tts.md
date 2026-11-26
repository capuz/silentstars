---
repo: "wangz-code/ddo-tts"
name: "ddo-tts"
description: "Built-in EdgeTTS read-aloud / mimoTTS (custom intonation is fun). Text-to-speech needs no extra deployment: install and listen. The speech engine is based on rany2/edge-tts, which is not very stable. Zhang Xue is awesome."
originalDescription: "内置EdgeTTS大声朗读/mimoTTS(自定义语调真好玩), 文字转语音无需额外部署 即装即听,  语音引擎采用rany2/edge-tts 不太稳定,  张雪牛逼"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/wangz-code/ddo-tts"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [80]
topics: ["legado", "reader", "tts-edge", "inner-tts", "tts"]
stars: 90
forks: 19
openIssues: 3
closedIssues: 2
watchers: 0
contributors: 32
recentReleases: 2
createdAt: "2025-08-26T10:04:34Z"
lastCommitAt: "2026-11-26T12:58:48Z"
lastReleaseAt: "2026-11-25T05:04:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 53
undervaluedScore: 30
maintainers: ["wangz-code"]
openGraphImageUrl: "https://opengraph.githubassets.com/c46ce2298060ac877862104f1ac3999bc3bb76132ba354722e02cf5543ee6c7f/wangz-code/ddo-tts"
---

# TTS speech engine

## ddo-tts/Built-in EdgeTTS Microsoft Read Aloud
- Edgetts based on rany2/edge-tts https://github.com/rany2/edge-tts ✅
- Xiaomi MIMO speech synthesis https://mimo.mi.com/models/zh-CN/mimo-v2.5-tts-voiceclone (free for a limited time)
- If you are a new MIMO user registering, you can enter my invite code: Y2QCPB

### Why does this repo exist?
- I once submitted a PR that sat unmerged for several weeks. So waht ever! Me=null, Me+GPT=omnipotent
- I had this need myself: I couldn't fall asleep at night without listening to a few chapters. Installing a separate TTS is somewhat redundant, since the so-called TTS engines are essentially still rany2/edge-tts
- Local ebook recommendation: https://github.com/BlankRain/ebooks

### Main changes
- Changed how audio streams are staged (writing to disk => writing to memory)
- The original author cached audio on disk, with frequent writes and deletes (one write per paragraph).
- Frequent writes may affect storage lifespan, though for modern storage the impact is probably negligible 😋. But I moved it into memory, releasing the media for each chapter once it has been read.
- Follows rany2/edge-tts EdgeVersion 143.0.3650.75
