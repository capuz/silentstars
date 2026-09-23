---
repo: "JennieCN/cityu-mail-pilot"
name: "cityu-mail-pilot"
description: "Personalized real-time AI email processing software for Hong Kong City University, developed by INFE sophomore students"
originalDescription: "针对香港城市大学邮件开发的个性化➕即时ai处理软件，由infe大二学生开发"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/JennieCN/cityu-mail-pilot"
homepage: "https://119-28-17-175.sslip.io/#apply"
language: "Python"
languages: ["Python"]
languagePcts: [76]
stars: 5
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-09-15T01:39:41Z"
lastCommitAt: "2026-09-23T08:46:34Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 61
maintainers: ["AstraHan0531"]
openGraphImageUrl: "https://opengraph.githubassets.com/2e72a89ab64d2dfad6a5fb6f4dccf0df3d7694adbde04e7f092211b58e43196b/JennieCN/cityu-mail-pilot"
---

# CityU Mail Pilot

Convert emails from your school mailbox into a Chinese summary and send it back to you by email.

Your school mailbox is usually only accessible on a computer with Outlook open, which is inconvenient on your phone. This tool lets you **set up automatic forwarding in your CityU mailbox**, read emails from **your school** that are forwarded to your personal mailbox, generate a Chinese report using a large language model, and send it back to you — so you can see on your phone's email app **what this email requires you to do**.

**Read-only, only processes emails from your school. Use your own model key, or it can be uniformly provided by the person deploying this program.**

---

## How It Works

```
CityU Mailbox ──Auto Forward──▶ Your Personal Mailbox ──Read-only IMAP──▶ This Program ──▶ Chinese Report ──Email──▶ You
                                                                     │
                                                              Only retains @cityu.edu.hk emails
                                                              Generated using your (or this deployment's) API key
```

- **Read-only**: Throughout uses `BODY.PEEK[]`, never marks as…
