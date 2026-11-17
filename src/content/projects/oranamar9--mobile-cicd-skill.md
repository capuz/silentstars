---
repo: "Oranamar9/mobile-cicd-skill"
name: "mobile-cicd-skill"
description: "Claude skill: complete GitHub Actions CI/CD for Capacitor, Expo and React Native apps, with tag-driven App Store and Google Play releases"
readmeQualityOk: true
url: "https://github.com/Oranamar9/mobile-cicd-skill"
language: "JavaScript"
languages: ["JavaScript", "Shell"]
languagePcts: [61, 25]
topics: ["capacitor", "claude-code-plugin", "claude-skill", "expo", "fastlane", "github-actions", "react-native"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-11-16T15:25:20Z"
lastCommitAt: "2026-11-17T12:19:48Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 14
maintainers: ["Oranamar9"]
openGraphImageUrl: "https://opengraph.githubassets.com/5ded3fddd3ce3807d6171f01465c82991cf156f2a944d7ac3604ad9fb69dc4cf/Oranamar9/mobile-cicd-skill"
---

# mobile-cicd

A [Claude](https://claude.com) skill that gives a mobile app complete CI/CD on GitHub Actions:
push a tag, and the app ships to the **App Store** and **Google Play**.

It detects how the app is built (Capacitor, Expo or React Native) and generates three workflows
plus the fastlane lanes behind them. Then it walks you through every store secret with a script
**you** run, so the values never pass through the chat.

```
push / PR to main      -> ci.yml        lint, types, tests, build
                       -> security.yml  Gitleaks (whole history), dependency audit, Semgrep
tag vX.Y.Z on main     -> mobile-release.yml
                            gate (tag on main, semver)
                            ci + security again
                            next build number = max(App Store, Google Play) + 1
                            iOS (macOS)  -> App Store Connect -> App Review
                            Android      -> Google Play production
```

## Install

As a Claude Code plugin:

```bash
/plugin marketplace add Oranamar9/mobile-cicd-skill
/plugin install mobile-cicd@mobile-cicd-skill
```

Or copy `skills/mobile-cicd/` into `~/.claude/skills/` (all your projects) or…
