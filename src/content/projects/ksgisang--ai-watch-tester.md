---
repo: "ksgisang/AI-Watch-Tester"
name: "AI-Watch-Tester"
description: "AI-powered automated E2E testing. Just enter a URL — AI generates and runs test scenarios."
readmeQualityOk: true
url: "https://github.com/ksgisang/AI-Watch-Tester"
homepage: "https://ai-watch-tester.vercel.app"
language: "Python"
languages: ["Python"]
languagePcts: [82]
topics: ["ai-qa", "ai-testing", "e2e-testing", "no-code-testing", "open-source", "playwright", "test-automation", "claude-code", "cursor", "devqa"]
stars: 7
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-02-11T09:55:45Z"
lastCommitAt: "2026-09-19T02:48:07Z"
lastReleaseAt: "2026-03-23T07:11:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 57
undervaluedScore: 32
maintainers: ["ksgisang"]
openGraphImageUrl: "https://opengraph.githubassets.com/2c6cfc07d73ae94b2f3fc71ef744a79cbc5c870ecbc71cbfe868c97932c83fbe/ksgisang/AI-Watch-Tester"
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/assets/logo-dark.png">
    <source media="(prefers-color-scheme: light)" srcset="docs/assets/logo-light.png">
  </picture>
  <br/>
  <strong>AWT — AI Watch Tester</strong>
  <br/>
  <em>I got tired of writing E2E tests. So I built something that writes and fixes them for me.</em>
  <br/><br/>
</p>

---

  </a>
  <br/>
  <sub><em>30-second demo: install → run test → AI self-heals failure</em></sub>
</p>

---

## Why I built this

I was building a Flutter web app. Every time the UI changed, my Playwright tests broke. Fixing selectors, re-recording flows, updating assertions — it ate hours every week.

So I started hacking on a tool that could look at a page, write its own tests, and when those tests broke, figure out why and fix itself.

That became AWT.

It's not perfect. OCR-based matching can be flaky on certain fonts. The self-healing loop sometimes needs a nudge. But for my day-to-day QA work — especially on Canvas and Flutter Web apps that Cypress can't even touch — it works well enough that I stopped writing test code entirely.

I'm sharing it because I suspect I'm not the only one who got fed up. **If…
