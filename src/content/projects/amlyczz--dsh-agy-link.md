---
repo: "amlyczz/dsh-agy-link"
name: "dsh-agy-link"
description: "Google Antigravity (agy CLI) models for DeepSeek Harness — streaming chat, thinking, tool activity, usage, in-GUI Google OAuth login"
originalDescription: "Google Antigravity (agy CLI) models for DeepSeek Harness — streaming chat, thinking, tool activity, usage, in-GUI Google OAuth login"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/amlyczz/dsh-agy-link"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["antigravity", "dsh", "dsh-plugin", "gemini"]
stars: 142
forks: 23
openIssues: 0
closedIssues: 44
watchers: 2
contributors: 14
recentReleases: 10
createdAt: "2026-08-19T04:47:42Z"
lastCommitAt: "2026-11-03T10:51:46Z"
lastReleaseAt: "2026-08-20T03:17:29Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 100
undervaluedScore: 36
maintainers: ["amlyczz", "zand", "hjwsm1989"]
openGraphImageUrl: "https://opengraph.githubassets.com/733744f39a5221654564eada264c74c42e9b5f520491399dec8b65fe8c2804af/amlyczz/dsh-agy-link"
---

# Chinese

Integrates **Google Antigravity models into DeepSeek Harness (DSH)**, with **multi-account smart pooling and rotation**, **official multi-bucket quota monitoring (5-hour rolling + 7-day weekly quota + independent Argon weekly pool)**, **one-click browser login without copy-pasting**, and **adaptive light/dark theme with high contrast**. Driven by the unmodified official `agy` CLI, with full support for streaming output, collapsible thinking, native tool cards, and precise token usage.

&nbsp;&nbsp;
&nbsp;&nbsp;

---

> 🚨 **[Core prerequisite for users in China: you must enable a system proxy / TUN mode!]**
>
> Google Antigravity service and OAuth login require a direct connection to Google's overseas official servers (`oauth2.googleapis.com`, `cloudcode-pa.googleapis.com`, etc.).
>
> 1. **Recommended approach (most reliable)**: Enable **TUN virtual network adapter mode (or global system proxy takeover)** in your proxy tool (Clash / Surge / v2rayA / Sing-box / Loon, etc.), ensuring that terminal commands, background Node.js processes, and browsers can all reach Google's network smoothly.
> 2. **Terminal proxy environment variables**: If the terminal is not automatically…
