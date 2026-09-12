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
stars: 95
forks: 10
openIssues: 30
closedIssues: 385
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-08-24T16:08:33Z"
lastCommitAt: "2026-09-12T08:05:23Z"
lastReleaseAt: "2026-09-09T17:33:28Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "release_machine"]
healthScore: 98
undervaluedScore: 40
maintainers: ["xqliu"]
openGraphImageUrl: "https://opengraph.githubassets.com/b252ffba51aa020a18d242f7a3d4026b1a56accf2b574827f076f392e5c9d550/orbi-build/orbi"
discussionCount: 11
---

English | [简体中文](https://github.com/orbi-build/orbi/blob/HEAD/README.zh-CN.md)

# Orbi

Orbi is a local AI development Worker: put work in a GitHub Issue, and it automatically claims the Issue, starts Pi in an isolated worktree to develop and test it, creates a PR, and then passes it through independent review and merge gates. GitHub Issues and labels are the only state store—there is no database, queue, or daemon.

- Website <https://orbi.build> ｜ Documentation <https://docs.orbi.build/> (the repository's [`docs/`](https://github.com/orbi-build/orbi/blob/HEAD/docs/) is the single source of truth; the Chinese entry point is [`docs/zh/`](https://github.com/orbi-build/orbi/blob/HEAD/docs/zh/)) ｜ Updates [@xqliu](https://x.com/xqliu)
- **[Join the first group of contributors](https://orbi.build/apply)**: if you are stuck on the environment, model integration, or workflow, we can help you run your first Issue. The problems you encounter become Issues to prioritize.

## Why Orbi

- **GitHub Issues are the task pool**: the `ai-ready` label dispatches work, and the delivery record (comments, PRs, and CI) is complete by default, with no second task system;
- **Fully automated**: a systemd…
