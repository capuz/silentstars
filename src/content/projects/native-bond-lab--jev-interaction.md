---
repo: "native-bond-lab/Jev-Interaction"
name: "Jev-Interaction"
description: "System-One-controlled full-duplex voice interaction: turn-taking as plain-language decisions judged by Jev."
readmeQualityOk: true
url: "https://github.com/native-bond-lab/Jev-Interaction"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [59, 26]
topics: ["conversational-ai", "full-duplex", "speech", "turn-taking", "voice-agent", "voice-ai", "jev", "llm"]
stars: 24
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-11-10T09:10:14Z"
lastCommitAt: "2026-11-12T11:42:10Z"
lastReleaseAt: "2026-11-11T11:43:16Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 38
maintainers: ["yj972", "tuzhong77"]
openGraphImageUrl: "https://opengraph.githubassets.com/38df3abc0f1e45d1d1ce02e5b2fdb418a085f557866c95522c5ff7ed2f7c0465/native-bond-lab/Jev-Interaction"
---

# Jev-Interaction

**System-One-controlled full-duplex voice interaction.**<br>Turn-taking as decisions you write — not a model you train.

Experience full-duplex voice interaction in your browser. Try it here: [Try it now](https://pupunpu-jev-interaction.hf.space/).

[中文](https://github.com/native-bond-lab/Jev-Interaction/blob/HEAD/README.zh-CN.md) · [Profiles](https://github.com/native-bond-lab/Jev-Interaction/blob/HEAD/jev_interaction/profiles) · [Decisions](https://github.com/native-bond-lab/Jev-Interaction/blob/HEAD/jev_interaction/judge/questions.py)

*Most of a conversation happens in the gaps: who waits, who yields, who answers with nothing but an "mm-hm".<br>We wrote every gap down as a question, and gave the questions to Jev.*

> **Built on [Jev](https://typesafe.ai).** Every turn-taking decision here is a question Jev answers in tens of
> milliseconds. Without it, none of this would work.

**Full duplex from a cascade.** Speech recognition → Jev's decisions → any language model → any speech synthesis. The
agent listens while it talks, says "mm-hm" while you talk, lets a pause stand, carries on through a backchannel, yields
or finishes its sentence when you cut in, and…
