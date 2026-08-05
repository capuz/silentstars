---
repo: "tommyboy326/html2u"
name: "html2u"
description: "Paste AI-generated HTML, get a sandboxed shareable link — password / one-time / auto-expiry. 把 AI 產出的 HTML 一鍵變成沙箱化的分享連結。"
readmeQualityOk: true
url: "https://github.com/tommyboy326/html2u"
homepage: "https://html2u.vercel.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [61]
topics: ["anonymous", "authjs", "content-security-policy", "html", "nextjs", "sandbox", "sharing", "supabase", "typescript", "vercel"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-27T06:36:10Z"
lastCommitAt: "2026-08-05T06:08:19Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 81
undervaluedScore: 46
maintainers: ["tommyboy326", "kaiwutech-TW"]
openGraphImageUrl: "https://opengraph.githubassets.com/22efcead296ef9d3461382ea1ca7d71b38ba4776e08764985bb350f9fb422002/tommyboy326/html2u"
---

# html2u

Turn **AI-generated HTML** into a shareable link — instantly.
把 **AI 產出的 HTML** 一鍵變成可分享的網頁連結。

**[English](#english) · [繁體中文](#繁體中文)** · Live: https://html2u.vercel.app

---

## English

### Why this exists

When you work with an AI (like Claude) you often end up with HTML meant *for
people to look at* — reports, slides, prototypes, data visualizations, design
mockups. Sharing it is awkward: a wall of source code is unreadable, a file
makes the other person open it themselves, a screenshot loses interactivity.

**html2u lets you paste that HTML and get a link instantly** — the recipient
opens it and sees the rendered page. Direct, what-you-see-is-what-you-get. And
because it publicly hosts other people's HTML, it ships layered security (below).

### Features

- **No sign-up**: paste HTML → get a share link.
- **Three access levels**:
  - `link` — public (anyone with the URL can view)
  - `password` — password-protected (reusable)
  - `magic` — one-time link (view once then dead, no password; consumed only on
    a click-through landing page so link-preview bots don't burn it)
- **Auto-expiry**: `1h` / `1d` / `7d` / `30d`, deleted on expiry.
- **Admin dashboard**: Google…
