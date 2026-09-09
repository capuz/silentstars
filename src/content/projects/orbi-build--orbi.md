---
repo: "orbi-build/orbi"
name: "orbi"
description: "Orbi — the factory that builds and operates AI software factories. GitHub Issues in, releases and runnable system out"
readmeQualityOk: true
url: "https://github.com/orbi-build/orbi"
homepage: "https://orbi.build"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 87
forks: 9
openIssues: 64
closedIssues: 282
watchers: 0
contributors: 1
recentReleases: 9
createdAt: "2026-08-24T16:08:33Z"
lastCommitAt: "2026-09-09T08:18:03Z"
lastReleaseAt: "2026-09-08T16:26:31Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "release_machine", "under_pressure"]
healthScore: 96
undervaluedScore: 39
maintainers: ["xqliu"]
openGraphImageUrl: "https://opengraph.githubassets.com/4183607a0a9f4bbd5de119074d0baba4d5a5cd5040e916122d24c3a14ab92ccb/orbi-build/orbi"
discussionCount: 9
---

English | [简体中文](https://github.com/orbi-build/orbi/blob/HEAD/README.zh-CN.md)

# Orbi

Orbi is a local AI development Worker: put work in a GitHub Issue, and it automatically claims the Issue, starts Pi in an isolated worktree to develop and test it, creates a PR, and then passes it through independent review and merge gates. GitHub Issues and labels are the only state store—there is no database, queue, or daemon.

- Website <https://orbi.build> ｜ Documentation <https://docs.orbi.build/> (the repository's [`docs/`](https://github.com/orbi-build/orbi/blob/HEAD/docs/) is the single source of truth; the Chinese entry point is [`docs/zh/`](https://github.com/orbi-build/orbi/blob/HEAD/docs/zh/)) ｜ Updates [@xqliu](https://x.com/xqliu)
- **[Join the first group of contributors](https://orbi.build/apply)**: if you are stuck on the environment, model integration, or workflow, we can help you run your first Issue. The problems you encounter become Issues to prioritize.

## Why Orbi

- **GitHub Issues are the task pool**: the `ai-ready` label dispatches work, and the delivery record (comments, PRs, and CI) is complete by default, with no second task system;
- **Fully automated**: a systemd…
