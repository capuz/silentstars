---
repo: "kazunori279/interpretab"
name: "interpretab"
description: "Real-time interpretation of tab audio and your microphone in Chrome, straight to the Gemini Live API with your own key. No server."
readmeQualityOk: true
url: "https://github.com/kazunori279/interpretab"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [89]
stars: 10
forks: 1
openIssues: 2
closedIssues: 22
watchers: 1
contributors: 1
recentReleases: 2
createdAt: "2026-08-13T01:34:18Z"
lastCommitAt: "2026-09-05T07:48:55Z"
lastReleaseAt: "2026-08-24T12:42:39Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 54
maintainers: ["kazunori279", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/88d952a27ee93c8013a2e2ee088878e30b6d0fa18d87bd169f07afd7f96d0fea/kazunori279/interpretab"
---

# Interpretab

User guide — what it does, what it costs, and how to turn it on:
**[English](https://kazunori279.github.io/interpretab/)** ·
**[日本語](https://kazunori279.github.io/interpretab/ja/)** ·
**[中文](https://kazunori279.github.io/interpretab/zh/)** ·
**[Español](https://kazunori279.github.io/interpretab/es/)** ·
**[Français](https://kazunori279.github.io/interpretab/fr/)** ·
**[Deutsch](https://kazunori279.github.io/interpretab/de/)** ·
**[Português](https://kazunori279.github.io/interpretab/pt/)** ·
**[한국어](https://kazunori279.github.io/interpretab/ko/)** ·
**[हिन्दी](https://kazunori279.github.io/interpretab/hi/)** ·
**[العربية](https://kazunori279.github.io/interpretab/ar/)**. What follows is the engineering side
of the same thing.

The same engineering as a five-minute talk, with the demos in it:
**[slides](https://kazunori279.github.io/interpretab/slides/)**. It reads itself aloud; press **Play
narration**, or `p`. The three problems it spends its second half on are
[session expiry](#session-expiry), [the blank close](#one-http-request-in-front-of-the-sockets) and
[the facts that expire](#the-two-facts-that-expire), each of which has a section here.

A Chrome extension…
