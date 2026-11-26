---
repo: "appandflow/stim"
name: "stim"
description: "Fast, isolated, local React Native and Expo environments for coding agents. Shared build caches, parallel worktrees, owned devices, and safe cleanup."
readmeQualityOk: true
url: "https://github.com/appandflow/stim"
homepage: "https://stim.appandflow.com/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [76]
topics: ["ai-agents", "android", "build-cache", "cli", "coding-agents", "developer-tools", "emulator", "expo", "git-worktrees", "ios"]
stars: 104
forks: 10
openIssues: 49
closedIssues: 3094
watchers: 0
contributors: 18
recentReleases: 10
createdAt: "2026-04-27T22:58:25Z"
lastCommitAt: "2026-11-26T15:20:25Z"
lastReleaseAt: "2026-09-03T07:58:19Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 100
undervaluedScore: 42
maintainers: ["janicduplessis"]
openGraphImageUrl: "https://opengraph.githubassets.com/e35fe37cd522dd807a5b3893c4e16df21e5ab35d97001358c1c94dc59d33b6e3/appandflow/stim"
---

# Stim

Orchestrate fast builds and devices for coding agents.

Stim builds, launches and cleans up React Native, Expo and native apps for every
agent, locally or across your machines, and shows you what each one
is running.

- **Worktree-based workflow.** One git worktree per task. `stim worktree warm`
  copies in its dependencies, and Stim gives it its own Metro port and device,
  so parallel agents never collide.
- **Builds you only pay for once.** React Native and Expo builds are cached and
  shared across worktrees, so a new one rarely compiles from scratch. Xcode and
  Gradle share their compiler caches too.
- **Every device, every machine.** Simulators, emulators, connected phones,
  other Macs, EAS and CI. Send builds to another machine when this one is busy.
- **See what every agent sees.** [Stim Desktop](https://stim.appandflow.com/docs/desktop)
  shows every workspace, device, build and log. Take control of a device, or
  [share a link](https://stim.appandflow.com/docs/share) to it.
- **Watches the whole machine.** Concurrency limits make builds, devices and
  test runs wait their turn instead of overloading the machine. When disk or
  memory runs low, Stim reclaims it.
