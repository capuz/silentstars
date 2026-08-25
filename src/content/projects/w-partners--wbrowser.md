---
repo: "w-partners/Wbrowser"
name: "Wbrowser"
description: "Drive the Chrome you are already logged into - from your terminal or any AI assistant. Cross-platform, MCP-ready."
readmeQualityOk: true
url: "https://github.com/w-partners/Wbrowser"
language: "JavaScript"
languages: ["JavaScript", "Shell"]
languagePcts: [53, 31]
topics: ["ai-agent", "browser-automation", "chrome", "claude", "cli", "mcp"]
stars: 25
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 6
createdAt: "2026-08-23T16:55:49Z"
lastCommitAt: "2026-08-25T04:09:11Z"
lastReleaseAt: "2026-08-25T03:31:15Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 39
maintainers: ["noreply"]
openGraphImageUrl: "https://opengraph.githubassets.com/b5dd3e30270a84506cef245b1e0285a726dcc589c8ed1b2fa6d06f9d6445371b/w-partners/Wbrowser"
---

# 🤖 Wbrowser

**Your AI can't see anything behind a login. This fixes that — on the OS you actually use.**

Your assistant can search the web, but it can't open your inbox, your dashboard, or your
company's internal tool. Everything useful is behind a sign-in it doesn't have.

Wbrowser gives it a seat at **a real Chrome that you sign into once, by hand.**
Not a headless browser and not a copy of your profile — a window you use too. You
watch each click land, in a tab the agent opened for itself, never the one you are
reading.

🔵 To be plain about the setup: Chrome 136+ refuses remote debugging on your default
profile, so this runs a dedicated one and **you sign in there once.** After that the
session persists — one Google sign-in also carried YouTube and two systems that use
"Sign in with Google" on a real profile we measured. It is one setup, not zero.

And it goes the other way: get halfway through something tedious, then hand that
exact tab over — `./wb take 2` — and the agent carries on from the page you built.

**Your password never leaves you.** You log in by hand; Chrome keeps it; Wbrowser only
drives the window that's already open.

Runs on **Windows, macOS, Linux and…
