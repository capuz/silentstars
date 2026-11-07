---
repo: "titpetric/task-ui"
name: "task-ui"
description: "Task UI - a web based CI/CD runner, ssh gateway, integrating Bezsel and Claude"
readmeQualityOk: true
url: "https://github.com/titpetric/task-ui"
language: "Go"
languages: ["Go", "Go Template"]
languagePcts: [42, 25]
topics: ["automation", "deployments", "deploys", "docker", "golang", "make", "makefile", "task", "taskfile", "terminal"]
stars: 97
forks: 9
openIssues: 1
closedIssues: 7
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2023-07-01T18:44:29Z"
lastCommitAt: "2026-11-07T10:36:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 97
undervaluedScore: 46
maintainers: ["titpetric"]
openGraphImageUrl: "https://opengraph.githubassets.com/ecf824a8b0713c4c771bdc95ac72729b62d14bdae86dfaaaf9c1a48b4758aebb/titpetric/task-ui"
fundingLinks: ["GITHUB:https://github.com/titpetric"]
discussionCount: 0
---

# Task UI

Run what your source trees declare, from the browser, and watch it run. Task UI looks at each folder under a root, detects the conventions it follows, and lists their targets as jobs: atkins pipelines, Taskfiles, Makefile targets, package.json and composer.json scripts, and a `scripts/` folder. A job runs as a session on the server: a process on a terminal that anyone allowed can attach to, from any window, for as long as it runs.

Projects live in workspaces: a directory with a home, the checkout of shared tooling that the workspace's runs get as `HOME`, its checkouts side by side under `src`, its own secrets and SSH keys, and an export that moves it, keys and all, to another instance. A project's Files panel browses its checkout like a file manager: a file opens in a preview window. Every folder and directory has the git state of its checkout and one Jobs table of what runs there: its targets, the files that run, the jobs of each atkins skill that applies, and, for an admin, a shell and Claude Code in a terminal in that directory.

Claude works beside the jobs. A prompt asks Claude Code in a folder, a directory, about a run, from the header on any page, or at the end…
