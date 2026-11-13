---
repo: "MakkaPakka518/TG-Persona"
name: "TG-Persona"
description: "TG Persona · Telegram Persona Clone: logs into your personal account, auto-replies or reacts to keywords in groups, and is managed through a web visual dashboard"
originalDescription: "Telegram 人形分身 - 登录个人账号,群关键词自动回复/点表情,Web 可视化面板管理"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/MakkaPakka518/TG-Persona"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [72, 28]
stars: 11
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-27T15:48:23Z"
lastCommitAt: "2026-11-13T05:36:41Z"
lastReleaseAt: "2026-10-30T19:50:20Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 79
undervaluedScore: 55
maintainers: ["MakkaPakka518"]
openGraphImageUrl: "https://opengraph.githubassets.com/41d6a87963100583da5b92ed2ba63adfa58681d0a897300fb99e799d3d82627d/MakkaPakka518/TG-Persona"
---

# TG Persona · Telegram Persona Clone

An automatic reply tool for personal accounts, deployed on a small VPS. **It is not a bot.** It logs into your own Telegram account and, when someone in a monitored group posts a keyword you have set, replies with text or reacts with an emoji as you. Everything is managed through a **web visual dashboard** (http://IP:port).

## Features

- **Visual TG login**: configure the shared API_ID / API_HASH once in the dashboard. When adding a second or third account, enter a note, then directly input the phone number, verification code, and two-step verification password. Each account's session is stored independently, so there is no need to log in again after a restart.
- **Dashboard security**: passwords are stored as scrypt hashes. Random session tokens are strictly validated server-side with a 30-day validity period. After 3 consecutive failed logins, a PNG bitmap captcha is required (single-use, valid for 3 minutes), and 10 failures lock the account for 10 minutes. Forged proxy headers are not trusted by default, changing the password requires verifying the original password, and Secure Cookies are automatically enabled under HTTPS.
- **Group…
