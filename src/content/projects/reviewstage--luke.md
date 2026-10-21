---
repo: "ReviewStage/luke"
name: "luke"
description: "An open-source software factory"
readmeQualityOk: true
url: "https://github.com/ReviewStage/luke"
homepage: "https://tryluke.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
stars: 36
forks: 4
openIssues: 3
closedIssues: 0
watchers: 1
contributors: 5
recentReleases: 10
createdAt: "2026-08-10T22:36:43Z"
lastCommitAt: "2026-10-21T21:10:38Z"
lastReleaseAt: "2026-08-23T22:21:01Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 37
maintainers: ["charleslpan", "dastratakos", "luke-agent[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c221984fc7997a559ccfd0b34c9b32afea12c7872d10dccd2f65a3c448ea337a/ReviewStage/luke"
---

Luke is a macOS app for planning a change by talking it through, then handing
it to coding agents and reviewing what they ship.

You describe the change out loud. Luke reads the repository while you talk,
asks about what you left open, and writes the plan as a design doc during the
call. Press **Start** and a coding agent implements the plan in a cloud
sandbox and opens a pull request. Its questions come back to your Inbox, and
you review the pull request without leaving the app. Or copy the plan into
Claude Code, Codex, or any other agent.

## How it works

1. **Talk.** Create a task on a GitHub repository and start a voice chat, or
   press Call on any of its agents. Luke answers by voice. While you talk he runs
   `grep`, `cat`, and `git log` on a checkout of the repository, and hands
   longer searches to background workers so the call keeps going.
2. **Plan.** A second model writes what the call settles into the task's plan:
   a Markdown document you can edit, comment on, and restore from version
   history. Each section says who last wrote it: you, Luke, a teammate, or an
   agent.
3. **Build.** **Start** hands the plan to a coding agent on the Claude or GPT
   model you…
