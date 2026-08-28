---
repo: "awizemann/harness"
name: "harness"
description: "AI-driven user testing for iOS Simulator, macOS apps, and web apps. Write a goal in plain language; an LLM agent drives the UI and reports friction. macOS 14+, Swift 6."
readmeQualityOk: true
url: "https://github.com/awizemann/harness"
homepage: "https://awizemann.github.io/harness/"
language: "Swift"
languages: ["Swift"]
languagePcts: [94]
topics: ["ai-agents", "ios-testing", "mac", "swift", "swift-ui", "user-testing", "ux-testing", "anthropic", "claude", "developer-tools"]
stars: 342
forks: 21
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 2
recentReleases: 4
createdAt: "2026-05-03T22:10:19Z"
lastCommitAt: "2026-08-28T14:26:45Z"
lastReleaseAt: "2026-08-28T14:26:50Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 97
undervaluedScore: 29
maintainers: ["awizemann"]
openGraphImageUrl: "https://opengraph.githubassets.com/c81137b91b44063c7e300663274eaecda020c6c0aa79d32a2a8ea58f99165d3c/awizemann/harness"
fundingLinks: ["GITHUB:https://github.com/awizemann"]
---

# Harness

  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="site/landing/assets/screenshots/runsession-hero-dark.png">
  </picture>
</p>

  </a>
  <br>
  <sub>macOS 14+ · Apple Silicon &amp; Intel · ~12 MB</sub>
</p>

</p>

> A native macOS developer tool that drives an **iOS Simulator, a macOS app, or a web app** with an AI agent so you can run **user tests** — not scripted UI tests, but real-user simulation.

You write a goal in plain language ("I want to sign up and create my first list", "delete my account", "find a vegetarian restaurant near me and save it") and a persona ("first-time user, never seen this app"). Harness builds (or just launches) your target, and an LLM agent reads screenshots, clicks/types/scrolls, and pursues the goal — narrating what it sees, flagging UX friction (dead ends, ambiguous labels, unresponsive controls), and stopping when it succeeds, fails, or would give up.

Three artifacts come out of every run:

1. **Did the goal complete?** — success / failure / blocked + summary
2. **What was the path?** — replayable sequence of screens + actions
3. **Where was the friction?** — timestamped events the agent flagged as confusing

##…
