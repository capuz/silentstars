---
repo: "glim-sh/cuttle"
name: "cuttle"
description: "cuttle is a browser for your agent. Websites do not block it. It keeps your logins. When a website asks for a person, you can take control. It works with playwright-cli, agent-browser and browser-use."
readmeQualityOk: true
url: "https://github.com/glim-sh/cuttle"
language: "Go"
languages: ["Go"]
languagePcts: [82]
topics: ["cdp", "chrome-devtools-protocol", "chromium", "docker", "playwright", "stealth-browser", "agent-browser", "ai-agents", "browser-automation", "browser-use"]
stars: 6
forks: 0
openIssues: 5
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-07-09T14:21:58Z"
lastCommitAt: "2026-08-27T14:27:20Z"
lastReleaseAt: "2026-07-21T20:56:53Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 82
undervaluedScore: 48
maintainers: ["tenequm", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/45cc44a0492acaf877953709d7019d7cc44de992c17c84158b5a7658e45b48a8/glim-sh/cuttle"
---

# cuttle

Your agent's stock browser fails on the real web. Sites show captchas,
Cloudflare walls and "verify you are human" pages. The browser forgets every
login when the process ends. You cannot see what the agent sees. cuttle is a
browser for your agent that fixes these three problems:

- **Not blocked.** The browser is a patched Chromium build that looks like a
  normal person's browser, with one consistent identity: fingerprint, proxy,
  IP location, locale and timezone.
- **Stays signed in.** Sign in once through the viewer. The login persists
  across agent sessions and across restarts.
- **You can step in.** A built-in viewer shows the live browser. When a site
  wants a human, you solve the captcha or 2FA yourself and the agent continues.

It works with playwright-cli, agent-browser and browser-use.

## Why not Claude in Chrome or ChatGPT?

They overlap a lot: all three use a real browser, keep your logins, pass bot
walls, and read pages fast. The difference is control. As of 2026-08:

| | cuttle | Claude in Chrome | ChatGPT |
|---|---|---|---|
| Banking, tax, government, work accounts | your call | discouraged by policy | gated, auto-pauses |
| Cookies, response bodies,…
