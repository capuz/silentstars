---
repo: "sinhs0301-prog/kimbiseo"
name: "kimbiseo"
description: "KimBiseo — a voice-activated PC assistant and desktop character pet (Windows, Qwen3-TTS · whisper · Gemma 4 / Claude Code / Codex)"
originalDescription: "김비서 — 말로 부르는 내 PC 비서와 바탕화면 캐릭터 펫 (Windows, Qwen3-TTS · whisper · Gemma 4 / Claude Code / Codex)"
descriptionLang: "ko"
readmeQualityOk: true
url: "https://github.com/sinhs0301-prog/kimbiseo"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [74, 21]
stars: 13
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 8
createdAt: "2026-11-12T01:36:55Z"
lastCommitAt: "2026-11-17T14:24:05Z"
lastReleaseAt: "2026-11-17T14:35:26Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 28
maintainers: ["sinhs0301-prog"]
openGraphImageUrl: "https://opengraph.githubassets.com/49ec589c7d63827abec389997ae6431444646de9fdc96bf64b2fcfc0279a473e/sinhs0301-prog/kimbiseo"
---

# 김비서 (KimBiseo)

A **voice-activated assistant** and **desktop character pet** that run on your own PC.
Say "김비서" or type into its window and it will answer. The desktop pet moves its mouth to match speech and changes its expressions and actions.

This project was made by 하이라이프PC.

## What it does

- **Conversation**: Ask by voice and listen to the answers. Built-in basic tools include weather, search, price lookup, calculation, opening programs, remembering things, and writing notes. Multi-step requests such as "Search for the RTX 5090 price and organize it in Notepad" are handled in order. Notes are written only in the **김비서 메모** window that 김비서 opens itself (Windows Notepad is not opened automatically). Save with Ctrl+S or the save button to `문서\김비서 메모\`.
- **Brain**: If Claude Code or Codex (ChatGPT) is logged in on this PC with your own account, 김비서 uses that subscription directly (it calls that program itself; it does not see the account or tokens). Otherwise it uses the Gemma 4 uncensored build running on your PC (usually E4B, or the lighter E2B; llama.cpp; downloaded directly from the original distributor). In settings you can also switch to your own local AI address…
