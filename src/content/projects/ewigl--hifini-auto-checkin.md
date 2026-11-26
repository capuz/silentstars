---
repo: "ewigl/hifini-auto-checkin"
name: "hifini-auto-checkin"
description: "HIFITI (hifiti.com) music magnetic field scheduled automatic check-in. Supports multiple accounts. Supports Telegram notifications."
originalDescription: "HIFITI (hifiti.com) 音乐磁场 定时自动签到。支持多账号。支持 Telegram 通知。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/ewigl/hifini-auto-checkin"
homepage: "https://ewigl.github.io/projects/github-actions-tasks/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["hifini", "hifiti"]
stars: 45
forks: 172
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-06-02T11:18:49Z"
lastCommitAt: "2026-11-26T15:23:35Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 90
undervaluedScore: 43
maintainers: ["ewigl"]
openGraphImageUrl: "https://opengraph.githubassets.com/2301f7497e37e210893cfaec360fcbdb33aa9cd75663bc26e3129503a4556cd7/ewigl/hifini-auto-checkin"
---

## HIFINI Music Magnetic Field Scheduled Automatic Check-in

Supports simultaneous check-in for multiple accounts. Supports Telegram notifications. Only supports `hifiti.com`.

### Usage

1. Fork this repository.
2. Enable Actions in the forked repository.
3. Configure repository variables.

Detailed documentation: https://ewigl.github.io/projects/github-actions-tasks/

### Repository Variables

- **ACCOUNTS**: Account information. It is recommended to use a JSON editing tool to avoid formatting errors.

  Configuration example:

  ```json
  [
    {
      "name": "Enter account note here",
      "cookie": "Enter Cookie here"
    },
    {
      "name": "Enter account note here. If there is only one account, you can delete this {} record",
      "cookie": "Enter Cookie here. If you have two or more accounts, add new {} records below."
    }
  ]
  ```

  Getting the Cookie:

  After logging in to hifiti.com, open the browser console and get the Cookie from the network monitoring interface. Make sure the Cookie contains both the bbs_token and bbs_sid fields. Clicking the "Logout" button in the upper right corner of the website will invalidate the Cookie.
