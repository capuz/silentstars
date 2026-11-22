---
repo: "Quartio-Studio/yulius"
name: "yulius"
description: "Yulius: Quartio's Rust coding-agent workspace (independent v2 implementation)"
readmeQualityOk: true
url: "https://github.com/Quartio-Studio/yulius"
language: "Rust"
languages: ["Rust"]
languagePcts: [82]
stars: 12
forks: 2
openIssues: 36
closedIssues: 644
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-10-07T06:14:06Z"
lastCommitAt: "2026-11-22T01:37:06Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 50
maintainers: ["MrFishPL", "BartlomiejNowak04", "yulius-quartio-studio[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc3971fe046dfa10348e46e39b2eb58512b549ebaf473e0566a5409c7326b2a4/Quartio-Studio/yulius"
---

# Yulius

**Your own server where Claude Code agents build software for your team, one task at a time,
with tests, reviews and CI they cannot skip.**

You give Yulius a task ("add a CSV export to the reports page"). It starts a Claude Code session
for it in a contained sandbox, the agent writes a plan, code and tests, gets an independent
review, opens a pull request and merges it into `dev` once Yulius's own CI is green. You watch,
steer and unblock from the browser. Yulius is self-hosted (one Rust binary on one Linux server),
written in Rust and inspired by [Cezar](https://github.com/open-mercato/cezar).

> **Just found Yulius on X/Twitter or [yulius.dev](https://www.yulius.dev/)?** Read
> [the 5-minute path](#from-curious-to-first-task) below. It tells you what you need, what each
> word on the setup screens means and what to click, in order.
>
> **Here to work on Yulius's own code?** Jump to [Developing Yulius](#developing-yulius).
