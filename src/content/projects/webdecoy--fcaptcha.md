---
repo: "WebDecoy/FCaptcha"
name: "FCaptcha"
description: "Self-hosted, invisible CAPTCHA that detects AI agents driving real browsers. GDPR, WCAG 2.2 AA, and EAA: no cookies, no third-party data sharing, and no visual or audio puzzle. With a false-positive budget enforced in CI. Proof of work, drop-in for Turnstile and reCAPTCHA."
readmeQualityOk: true
url: "https://github.com/WebDecoy/FCaptcha"
homepage: "https://webdecoy.com/product/fcaptcha/"
language: "JavaScript"
languages: ["JavaScript", "Go", "Python"]
languagePcts: [50, 26, 20]
topics: ["anti-bot", "behavioral-analysis", "bot-detection", "captcha", "fingerprinting", "headless-browser-detection", "nodejs", "proof-of-work", "python", "scraping-protection"]
stars: 264
forks: 27
openIssues: 8
closedIssues: 14
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2025-12-29T04:54:40Z"
lastCommitAt: "2026-11-22T02:07:04Z"
lastReleaseAt: "2026-02-10T04:31:14Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 91
undervaluedScore: 35
maintainers: ["cport1", "dependabot[bot]", "CreedTech"]
openGraphImageUrl: "https://opengraph.githubassets.com/95d531e5baf2faa5fb737f7aab3c87e49cc62f6b896f589417ea14a150701adf/WebDecoy/FCaptcha"
discussionCount: 3
---

# F***Captcha

**Open source CAPTCHA that blocks bots, vision AI agents, and automation - with a single click or less.**

**[Try the Live Demo](https://webdecoy.com/product/fcaptcha-demo/)** · [Product overview](https://webdecoy.com/product/fcaptcha/)

FCaptcha is a modern CAPTCHA system designed to detect everything: traditional bots, headless browsers, automation frameworks, CAPTCHA farms, and the new generation of AI agents — from vision models that screenshot-and-click to computer-use agents that drive a real browser over the Chrome DevTools Protocol.

## Try it in 60 seconds

**1. Run the server**

```bash
export FCAPTCHA_SECRET="$(openssl rand -hex 32)"
docker run -d -p 127.0.0.1:3000:3000 -e FCAPTCHA_SECRET ghcr.io/webdecoy/fcaptcha:latest
```

The demo page is now at `http://localhost:3000/demo/`.

The same page is hosted at
[`https://webdecoy.com/product/fcaptcha-demo/`](https://webdecoy.com/product/fcaptcha-demo/).
Its optional detection-research contribution is off by default and requires an
explicit opt-in on every page load. Form values are not sent to FCaptcha or
retained with research samples.

**2. Add the widget to a form**
