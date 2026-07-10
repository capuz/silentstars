---
repo: "qirabot/qirabot-python"
name: "qirabot-python"
description: "AI automation bolt-on for any framework — Playwright, Selenium, Appium, desktop, and CLI"
readmeQualityOk: true
url: "https://github.com/qirabot/qirabot-python"
homepage: "https://qirabot.com"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai", "appium", "automation", "playwright", "python", "rpa", "sdk", "selenium", "testing"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 7
createdAt: "2026-06-04T15:07:55Z"
lastCommitAt: "2026-07-10T07:01:53Z"
lastReleaseAt: "2026-07-03T09:15:45Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 60
maintainers: ["hellof20"]
openGraphImageUrl: "https://opengraph.githubassets.com/fb5f5436572d90bdd6295aee168d14d3915e5e5212d445707bd3faaf8ececd5f/qirabot/qirabot-python"
---

# Qirabot Python SDK

Cross-platform GUI automation, driven by multimodal AI vision. Drive browsers, mobile apps, full desktops, and games through pixels — no DOM, no selectors — reaching what frameworks like Playwright, Selenium, and Appium cannot.

Run it standalone (`bot.open()` launches a browser for you), bolt it onto your existing Playwright / Selenium / Appium / Airtest / pyautogui session, drop it into a pytest suite, or bind by HWND to drive a Unity / Unreal / native desktop game. Same API across all of them.

**Contents:** [Installation](#installation) · [Quick Start](#quick-start) · [CLI](#cli) ·
[Bolt-On to Any Framework](#bolt-on-to-any-framework) · [API Reference](#api-reference) ·
[Reports](#reports) · [Configuration](#configuration) · [Error Handling](#error-handling) ·
[Agent Skill](#agent-skill)

## Installation

New to qirabot? Take the default path — browser automation, no other setup:

```bash
python3 -m venv .venv && source .venv/bin/activate   # recommended: a fresh virtualenv
python -m pip install "qirabot[browser]"
playwright install chromium      # one-time browser download
export QIRA_API_KEY="qk_your_api_key"   # from your dashboard:…
