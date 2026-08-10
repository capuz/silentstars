---
repo: "camunda/infra-global-github-actions"
name: "infra-global-github-actions"
description: "Small Github Actions maintained by Infra team and used by other teams inside Camunda"
readmeQualityOk: true
url: "https://github.com/camunda/infra-global-github-actions"
homepage: "https://confluence.camunda.com/display/HAN/GitHub+Actions+CI+Platform"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [61, 39]
topics: ["github-actions", "workflow", "team-infrastructure"]
stars: 8
forks: 2
openIssues: 1
closedIssues: 10
watchers: 0
contributors: 55
recentReleases: 0
createdAt: "2022-01-06T09:08:31Z"
lastCommitAt: "2026-08-10T05:06:25Z"
lastReleaseAt: "2026-03-17T07:31:32Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 82
maintainers: ["renovate[bot]", "clementnero", "infra-releases[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9d261b3abd8ee3513b9b4fbaedc9fe622c0cd9041608cc05608ced491b1d7f47/camunda/infra-global-github-actions"
---

# Global Github Actions

This repository contains Github Actions (GHA) maintained by the Infra team. Those actions are intended to be consumed by other teams inside Camunda.

They are **publicly accessible** and thus must not contain any secrets.

## Contributing

### Pre-Commit Hooks

This repository uses [pre-commit](https://pre-commit.com/) to enforce code quality and commit conventions.
To set up pre-commit hooks locally, run:

```shell
pre-commit install --install-hooks -t commit-msg -t pre-commit
```

This installs two types of hooks:
- **pre-commit hooks** (`-t pre-commit`): Run linters (trailing whitespace, shellcheck, actionlint, etc.) before each commit.
- **commit-msg hooks** (`-t commit-msg`): Validate that commit messages follow [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) format (e.g. `feat: ...`, `fix: ...`, `chore: ...`).

### Conventional Commits

This repository enforces [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) to enable automated releases via [release-please](https://github.com/googleapis/release-please).

All commit messages and PR titles must follow the format: `<type>[optional scope]: <description>`…
