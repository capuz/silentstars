---
repo: "paoloantinori/cookies-extractor"
name: "cookies-extractor"
description: "Android WebView app: log in manually, extract session cookies, and share them. Passkey/WebAuthn not supported."
readmeQualityOk: true
url: "https://github.com/paoloantinori/cookies-extractor"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [97]
stars: 8
forks: 1
openIssues: 1
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 3
createdAt: "2026-07-15T06:13:25Z"
lastCommitAt: "2026-10-27T09:15:44Z"
lastReleaseAt: "2026-09-24T12:09:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 63
undervaluedScore: 35
maintainers: ["paoloantinori"]
openGraphImageUrl: "https://opengraph.githubassets.com/476ee443ff8392e1bace1d6324d7c25d7ef86d546b1a0aadb20f1965c95c9f40/paoloantinori/cookies-extractor"
---

# WebView Cookie Extractor

A small Android app for **extracting your own session cookies** from a website after you
log in manually inside an in-app WebView; handy for passing them to `curl`, `wget`,
`yt-dlp`, or any script that needs an authenticated session.

It exists because headless automation (Selenium/Playwright, etc.) is increasingly blocked
by 2FA QR codes, interactive challenges, and anti-bot flows. Here you log in **by hand**,
exactly like in a normal browser, then tap one button to pull the session cookies.

## What it does
- Address bar + in-app WebView (links stay inside the app).
- Log in manually with **password / 2FA / OTP** (and most SSO-redirect flows).
- **FAB** → extracts cookies and sends them through the Android **share sheet**
  (messaging apps, clipboard, etc.). Default since v2: the structured multi-domain JSON
  (see Extra domains); the overflow menu's cookie-format entry switches back to the
  legacy flat "cookies for the loaded domain" string.
- **Share template**: long-press the share FAB to define the message template used for
  both shares (cookies and captured OAuth tokens). Placeholders: `{payload}` (the
  cookie/token text), `{url}`, `{title}`,…
