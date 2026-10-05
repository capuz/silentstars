---
repo: "danielgwilson/humanish"
name: "humanish"
description: "Synthetic users that walk your software before real users do."
readmeQualityOk: true
url: "https://github.com/danielgwilson/humanish"
homepage: "https://humanish.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [75]
topics: ["ai-agents", "cli", "computer-use", "persona-simulation", "synthetic-users", "testing", "accessibility-testing", "e2b", "openai", "usability-testing"]
stars: 11
forks: 2
openIssues: 56
closedIssues: 213
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-06-01T03:10:18Z"
lastCommitAt: "2026-10-05T10:47:32Z"
lastReleaseAt: "2026-09-03T21:38:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 60
maintainers: ["danielgwilson"]
openGraphImageUrl: "https://opengraph.githubassets.com/d57b64c2898fe262d19a05449901400d396a88136b07cb118334e1a5ff796010/danielgwilson/humanish"
---

# humanish

Synthetic user research for apps, CLIs, and agent-facing product flows. AI participants with a persona and a task use your app on real desktops, and each run leaves evidence you can verify: what they did, where they got stuck, and what it cost.

**[Watch a saved run](https://humanish.dev/demo).** Eight synthetic participants joined one
lobby of a multiplayer game on its live deployment, each on its own hosted desktop. The page
replays the real Observer; nothing runs from it.

## Learn how a study works

A study is a YAML file in your project. It names the app under study, the task, the
participants and a spend limit. Each participant has a persona: a file that sets who they are
and traits such as patience and keyboard use.

`humanish run <study>` gives each participant a desktop, either a hosted E2B desktop or a
disposable browser VM on your machine. On the computer-use route a model drives each
participant: every turn it reads a screenshot and answers with mouse and keyboard actions, until
the participant finishes, gets stuck or reaches a limit.

The run writes its evidence to gitignored `.humanish/runs/<run id>/`: screenshots, every
action, each participant's report…
