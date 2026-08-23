---
repo: "WebDecoy/FCaptcha"
name: "FCaptcha"
description: "Self-hosted, invisible CAPTCHA that detects AI agents driving real browsers. GDPR, WCAG 2.2 AA, and EAA: no cookies, no third-party data sharing, and no visual or audio puzzle. With a false-positive budget enforced in CI. Proof of work, drop-in for Turnstile and reCAPTCHA."
readmeQualityOk: true
url: "https://github.com/WebDecoy/FCaptcha"
homepage: "https://webdecoy.com/product/fcaptcha/"
language: "JavaScript"
languages: ["JavaScript", "Go"]
languagePcts: [52, 27]
topics: ["anti-bot", "behavioral-analysis", "bot-detection", "captcha", "fingerprinting", "go", "headless-browser-detection", "nodejs", "proof-of-work", "python"]
stars: 190
forks: 16
openIssues: 0
closedIssues: 7
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2025-12-29T04:54:40Z"
lastCommitAt: "2026-08-23T04:10:02Z"
lastReleaseAt: "2026-02-10T04:31:14Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 35
maintainers: ["cport1"]
openGraphImageUrl: "https://opengraph.githubassets.com/61eee144718dea927361aec76a65e8adb88554a9a4c2d5dc701f715ba235669d/WebDecoy/FCaptcha"
---

# F***Captcha

**Open source CAPTCHA that blocks bots, vision AI agents, and automation - with a single click or less.**

**[Try the Live Demo](https://webdecoy.com/product/fcaptcha-demo/)**

FCaptcha is a modern CAPTCHA system designed to detect everything: traditional bots, headless browsers, automation frameworks, CAPTCHA farms, and the new generation of AI agents — from vision models that screenshot-and-click to computer-use agents that drive a real browser over the Chrome DevTools Protocol.

## Features

- **Drop-in for Turnstile / reCAPTCHA / hCaptcha** - Serves the same `siteverify` contract on the same paths, so migrating an existing backend is a base-URL change; tokens carry a signed `hostname` and `action` your app can check
- **Single click or invisible** - Checkbox mode like Turnstile/reCAPTCHA v2, or invisible mode like reCAPTCHA v3
- **AI agent detection** - Catches vision agents (screenshot→API→click), DOM/CDP-driven agents (Claude in Chrome, Operator-style computer use), and synthetic input that reports `isTrusted: true` — via input-event forensics and LLM think-time cadence
- **Declared & verified agents** - Flags self-declaring agents (ClaudeBot, GPTBot,…
