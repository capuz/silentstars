---
repo: "neon-law/navigator"
name: "navigator"
description: "Agentic Lawyering to Improve Access to Justice"
readmeQualityOk: true
url: "https://github.com/neon-law/navigator"
homepage: "https://www.neonlaw.com/navigator"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-10-23T19:46:41Z"
lastCommitAt: "2026-11-03T19:05:43Z"
lastReleaseAt: "2026-11-01T00:57:45Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 60
maintainers: ["shicholas", "obvious-autobuild[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6236d9318bc9b5fad4b1d01b597709059c3d2ee3f112e703d6f388f26c738ee2/neon-law/navigator"
---

# Neon Law Navigator

Neon Law Navigator is an agentic lawyering system where workflows are triggered around the clock to mise en place legal
judgment for counsel so they can act faster on completing legal projects. Our collective goal to solve as many projects
as possible furthers our goal of doing what we can to improve access to justice.

If you are new, review our workshops for [lawyers](https://www.neonlaw.com/workshops/use-the-navigator), [operators or
firm owners](https://www.neonlaw.com/workshops/deploy-the-navigator), or
[engineers](https://www.neonlaw.com/workshops/contribute-to-the-navigator). Each matter is a Git repository of
declarations that Navigator renders and gates, so an agent edits YAML and Markdown, not application code.

## Supported platforms

Navigator is built for **Macs** and **containers in the cloud**. The CLI ships for Apple silicon macOS (Homebrew or a
`.tar.gz`) and x86_64 Linux, and every service image is `linux/amd64` for GKE. Windows is not supported: there is no
Windows build, release archive, or CI job.

## Run it on your machine

```bash
brew install neon-law/navigator/navigator
navigator quickstart
```

`quickstart` takes no flags. It checks…
