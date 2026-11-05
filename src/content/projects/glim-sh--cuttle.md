---
repo: "glim-sh/cuttle"
name: "cuttle"
description: "cuttle is a browser for your agent. Websites do not block it. It keeps your logins. When a website asks for a person, you can take control. It works with playwright-cli, agent-browser and browser-use."
readmeQualityOk: true
url: "https://github.com/glim-sh/cuttle"
language: "Go"
languages: ["Go"]
languagePcts: [81]
topics: ["cdp", "chrome-devtools-protocol", "chromium", "docker", "playwright", "stealth-browser", "agent-browser", "ai-agents", "browser-automation", "browser-use"]
stars: 10
forks: 3
openIssues: 19
closedIssues: 4
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-09T14:21:58Z"
lastCommitAt: "2026-11-05T00:21:51Z"
lastReleaseAt: "2026-07-21T20:56:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 80
undervaluedScore: 42
maintainers: ["tenequm"]
openGraphImageUrl: "https://opengraph.githubassets.com/e30f81f06b793d618c431488b6924ca7fe2fb4bd19f8ff144ced7965a7e93cd8/glim-sh/cuttle"
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

It ships with its driver: playwright-cli 0.1.23 is bundled in the image, so
`cuttle pw <args>` drives the browser on any backend with nothing to install and
nothing to attach by hand ([docs/OPERATING.md](https://github.com/glim-sh/cuttle/blob/HEAD/docs/OPERATING.md)). Any other CDP
client can attach to the same browser.

It can also drive itself (**experimental**): `cuttle jev-browse --task '...'`
walks toward a goal one step at a…
