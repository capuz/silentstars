---
repo: "appandflow/stim"
name: "stim"
description: "Fast, isolated, local React Native and Expo environments for coding agents. Shared build caches, parallel worktrees, owned devices, and safe cleanup."
readmeQualityOk: true
url: "https://github.com/appandflow/stim"
homepage: "https://stim.appandflow.com/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [72]
topics: ["ai-agents", "android", "build-cache", "cli", "coding-agents", "developer-tools", "emulator", "expo", "git-worktrees", "ios"]
stars: 82
forks: 7
openIssues: 98
closedIssues: 1727
watchers: 0
contributors: 14
recentReleases: 10
createdAt: "2026-04-27T22:58:25Z"
lastCommitAt: "2026-10-14T08:51:05Z"
lastReleaseAt: "2026-09-03T07:58:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 41
maintainers: ["janicduplessis"]
openGraphImageUrl: "https://opengraph.githubassets.com/0a458aa1c305577cd365ba8c3678588725506f46964d2e40dea9379f0993052d/appandflow/stim"
---

# Stim

Fast, isolated local React Native environments for coding agents.

Stim gives each project or git worktree its own Metro port and owned simulator
or emulator. It shares native artifacts, Xcode compilation data, Gradle output,
and Metro transforms across worktrees. Agents can work in parallel without
sharing live resources, then clean up every resource Stim created.

Stim supports React Native Community CLI and Expo projects. Builds run locally
by default; `--eas-profile` uses completed EAS development builds.
Apps can launch on owned simulators and emulators, connected physical devices,
or configured remote devices.

## Install

The `stim` npm package installs the `stim` command. It needs Node 22.12 or
later and runs on macOS, Linux and Windows: Android everywhere, iOS locally on
macOS or through EAS from any host. See
[requirements](https://stim.appandflow.com/docs/requirements). If you
previously installed `stim-cli` globally, run `npm uninstall --global stim-cli`
first.

```bash
npm install --global stim
npx skills add appandflow/stim
```

Run without a global install when needed:

```bash
npx stim <command>
```

Then ask your coding agent to build and run the app. The…
