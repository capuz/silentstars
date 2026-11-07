---
repo: "rabbilyasar/envshield"
name: "envshield"
description: "Environment variables, as a version-controlled configuration contract."
readmeQualityOk: true
url: "https://github.com/rabbilyasar/envshield"
homepage: "https://www.envshield.dev"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["cli", "configuration", "devops", "docker", "dotenv", "environment-variables", "kubernetes", "python", "schema", "typescript"]
stars: 9
forks: 0
openIssues: 15
closedIssues: 48
watchers: 1
contributors: 2
recentReleases: 3
createdAt: "2025-06-15T10:31:20Z"
lastCommitAt: "2026-11-07T10:36:08Z"
lastReleaseAt: "2026-08-29T20:43:23Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 94
undervaluedScore: 81
maintainers: ["rabbilyasar"]
openGraphImageUrl: "https://opengraph.githubassets.com/1bab22422b79254a761d69cdb17dff77dfff7b8a7e91f2613f69051c84269526/rabbilyasar/envshield"
discussionCount: 2
---

# EnvShield

**Every service and every deploy gets the configuration it needs, and you find out before something breaks.**

EnvShield checks your code, your local `.env` files and your Docker Compose and Kubernetes manifests against one committed contract, `env.schema.toml`. When code starts reading a variable nobody declared, when a service or a deployment is missing one, or when the contract itself changes, EnvShield tells you: on your machine, in a Git hook, or in CI.

Free, open source (MIT), and fully local. EnvShield never sends your configuration anywhere and never prints a secret value.

[Website](https://www.envshield.dev) · [Documentation](https://docs.envshield.dev) · [GitHub](https://github.com/rabbilyasar/envshield) · [PyPI](https://pypi.org/project/envshield/)

*A coding agent adds a webhook that reads `STRIPE_WEBHOOK_SECRET`. `envshield undeclared` names the file and line. Once the variable is declared for the `api` service, `envshield check` shows that `api`'s `.env` and its Compose container both lack it, while `worker` is unaffected.*

---

## What it catches

**While you develop**

- **A variable the code reads but nobody declared.** `envshield check` names…
