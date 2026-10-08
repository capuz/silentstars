---
repo: "dyne/gestalt"
name: "gestalt"
description: "Orchestrated Development Environment (ODE)"
readmeQualityOk: true
url: "https://github.com/dyne/gestalt"
homepage: "https://dyne.org/gestalt"
language: "Shell"
languages: ["Shell", "JavaScript"]
languagePcts: [53, 34]
topics: ["agentic-ai", "codex", "org-mode", "vibe"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 21
watchers: 0
contributors: 21
recentReleases: 0
createdAt: "2025-12-29T08:56:39Z"
lastCommitAt: "2026-10-08T10:52:31Z"
lastReleaseAt: "2026-02-03T17:25:55Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 97
undervaluedScore: 72
maintainers: ["jaromil", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1124578938/08a4edb1-374b-49b8-9df1-47000cda7ab5"
fundingLinks: ["GITHUB:https://github.com/dyne", "PATREON:https://patreon.com/dyneorg"]
---

# Gestalt documentation

The Dyne-styled VitePress documentation hub for Gestalt Agents and Gestalt
Mobile. It includes the onboarding journey, operational guides, copied source
documentation, a one-line installer, and the `gestalt` manager CLI.

```sh
npm ci
npm test
npm run build
```

Use `BASE_PATH=/gestalt/ npm run build` for the intended subpath deployment.

The manager installs a `workspace-git` Codex permission profile for development
sessions. It keeps writes scoped to the workspace (including Git metadata),
adds `/tmp` for test artifacts, grants read-only access to the isolated Codex,
Gestalt runtime, and user skill roots, and permits network access and loopback
listeners needed by local HTTP servers and Playwright.

Pushes to `main` deploy through `.github/workflows/deploy-pages.yml`. In the
GitHub repository settings, set **Pages → Build and deployment → Source** to
**GitHub Actions**. The workflow obtains the repository's actual Pages base
path from `actions/configure-pages`, runs the shell tests, builds VitePress, and
deploys the generated artifact.
