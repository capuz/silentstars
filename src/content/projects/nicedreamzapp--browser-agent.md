---
repo: "nicedreamzapp/browser-agent"
name: "browser-agent"
description: "Local browser agent: MLX + Chrome DevTools Protocol. Handles cross-origin iframes, Shadow DOM, ProseMirror. Runs on Apple Silicon, no cloud."
readmeQualityOk: true
url: "https://github.com/nicedreamzapp/browser-agent"
homepage: "https://youtu.be/SIuMNa2k6Wc"
language: "Python"
languages: ["Python"]
languagePcts: [93]
topics: ["ai-agent", "apple-silicon", "autonomous-agent", "browser-automation", "cdp", "chrome-devtools-protocol", "gemma", "local-llm", "macos", "mlx"]
stars: 29
forks: 8
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 2
recentReleases: 1
createdAt: "2026-03-27T07:37:58Z"
lastCommitAt: "2026-10-23T12:04:50Z"
lastReleaseAt: "2026-08-06T17:25:48Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 94
undervaluedScore: 51
maintainers: ["nicedreamzapp", "claude"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1193413044/ed321764-1e7e-4531-add5-deb68dca23cb"
fundingLinks: ["GITHUB:https://github.com/nicedreamzapp"]
---

# browser-agent

### The agent does the work. The broker makes it safe to share your real, logged-in browser with it.

An AI agent is most useful in the browser you already use, the one where you are logged in to your email, your store and your accounts. That is also where it gets in your way. It grabs the tab you were reading. A second agent navigates the first one's tab out from under it. And when you step in to help, by typing in a form or solving a captcha, the agent does not notice: it reloads the page and wipes your work, then tries again.

This repo is the two pieces that fix that, and they are built to work together:

| | Part | What it does |
|---|---|---|
| 🌐 | **The agent** ([`agent.py`](https://github.com/nicedreamzapp/browser-agent/blob/HEAD/agent.py)) | You type a task in plain English. A model running on your own Mac picks the steps, and the agent carries them out in your real Brave browser and your shell. No cloud APIs. |
| 🚦 | **The broker** ([`broker/`](https://github.com/nicedreamzapp/browser-agent/blob/HEAD/broker/)) | A small local proxy that owns the browser's debug port (9222). Each agent gets its own background tab in your real browser, cannot see your…
