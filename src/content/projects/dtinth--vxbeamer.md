---
repo: "dtinth/vxbeamer"
name: "vxbeamer"
description: "self-hosted, personal speech transcriber with a real-time web interface"
readmeQualityOk: true
url: "https://github.com/dtinth/vxbeamer"
homepage: "https://vxbeamer.vercel.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
stars: 6
forks: 1
openIssues: 3
closedIssues: 19
watchers: 0
contributors: 3
recentReleases: 5
createdAt: "2026-03-19T05:42:43Z"
lastCommitAt: "2026-07-17T05:58:01Z"
lastReleaseAt: "2026-07-16T20:06:11Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 90
undervaluedScore: 66
maintainers: ["Copilot", "dtinth", "dtinth-claw[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6bf42601e76afe91e33ed658517debbb912a1949f96743c1566de14cf00f54c3/dtinth/vxbeamer"
---

# vxbeamer

vxbeamer is a self-hosted, personal speech transcriber with a real-time web interface.

## Demo (how I use it)

I speak into my phone. The voice message is instantly transcribed. Then I can swipe on my phone to beam the transcription to my laptop.

[vxbeamer.webm](https://github.com/user-attachments/assets/ff6188ed-3d5c-4d0d-bbf1-a39916091e2a)

## Overview

For most of my transcription needs, I use [Google Gemini](https://ai.google.dev/gemini-api/docs/audio) (through the [@lsnr](https://dt.in.th/Lsnr) LINE bot) as it provides the highest accuracy. However, it comes with high latency, which makes it somewhat frustrating to use for voice typing scenarios. _(It has very high throughput though, e.g., 15 minutes of audio content can be transcribed in less than 20 seconds.)_

vxbeamer uses a different workflow: [Qwen3-ASR-Flash](https://modelstudio.console.alibabacloud.com/ap-southeast-1?tab=doc#/doc/?type=model&url=2840914_2&modelId=qwen3-asr-flash) handles real-time speech recognition, and [gpt-oss-120b](https://openai.com/index/introducing-gpt-oss/) (an open-source model by OpenAI, served on [Groq](https://groq.com) for fast inference) does post-processing. This trades…
