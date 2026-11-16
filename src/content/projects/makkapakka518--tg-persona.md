---
repo: "MakkaPakka518/TG-Persona"
name: "TG-Persona"
description: "Telegram Persona Clone - Log into personal accounts, auto-reply to group keywords / react with emoji, manage via web visual dashboard"
originalDescription: "Telegram 人形分身 - 登录个人账号,群关键词自动回复/点表情,Web 可视化面板管理"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/MakkaPakka518/TG-Persona"
language: "Python"
languages: ["Python"]
languagePcts: [80]
stars: 13
forks: 8
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-10-27T15:48:23Z"
lastCommitAt: "2026-11-16T04:28:06Z"
lastReleaseAt: "2026-10-30T19:50:20Z"
status: "thriving"
tags: ["release_machine", "fork_magnet"]
healthScore: 70
undervaluedScore: 49
maintainers: ["MakkaPakka518", "Makka", "MakkaPakka"]
openGraphImageUrl: "https://opengraph.githubassets.com/03222422fa60af116aeede27d19812ec6663fda7851df0c6fe678dadb6928c51/MakkaPakka518/TG-Persona"
---

# TG Persona · Telegram Persona Clone

## Features

- **Visual TG login**: In the panel, you only need to configure the shared API_ID / API_HASH once. When adding a second or third account, enter a note, then directly input the phone number, verification code, and two-step verification password. Each account's session is stored independently, so no re-login is needed after a restart.
- **Panel security**: Passwords are stored as scrypt hashes. Random session tokens are strictly validated server-side with a 30-day validity period. After 3 consecutive wrong logins, a PNG bitmap captcha is required (single-use, valid for 3 minutes), and 10 failures lock the panel for 10 minutes. Forged proxy headers are not trusted by default, and changing the password requires verifying the original password. Secure Cookie is automatically enabled under HTTPS.
- **Group management**: List all groups the account has joined (searchable), with one-click join / stop monitoring.
- **Keyword rules**:
  - Multiple keywords separated by commas (any match), regex supported
  - Three action options: reply text / react with emoji / reply + emoji
  - Multiple reply contents separated by `||`, with one chosen at…
