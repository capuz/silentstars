---
repo: "mattwynne/yaks"
name: "yaks"
description: "Shared Discovery Trees in the CLI for teams of humans and robots"
readmeQualityOk: true
url: "https://github.com/mattwynne/yaks"
language: "Rust"
languages: ["Rust"]
languagePcts: [83]
topics: ["agents", "coding", "collaboration", "project-management", "todo-list", "discovery-tree"]
stars: 61
forks: 8
openIssues: 2
closedIssues: 10
watchers: 1
contributors: 5
recentReleases: 7
createdAt: "2026-01-25T09:03:31Z"
lastCommitAt: "2026-11-05T00:10:31Z"
lastReleaseAt: "2026-11-02T17:10:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 46
maintainers: ["mattwynne", "jessitron"]
openGraphImageUrl: "https://opengraph.githubassets.com/3285381b892a43bd56d9400d69acbe23d7edb7c7ae52e9f4b9b97b3cc162d363/mattwynne/yaks"
---

# Yaks (`yx`)

> It is in the doing of the work that we discover the work that we must do
>
> -- Woody Zuill, https://agilemaxims.com

Yaks is a tiny, fast discovery tree for software teams: a command-line way to capture and manage the work you discover while doing the work.

A discovery tree is a tree of nested goals. Put prerequisites underneath the larger goal they unlock, and the tree shows what can happen now, what can happen in parallel, and what is still blocked.

Yaks is built around three values:

- **Simple**: everything is a yak. No separate epics, stories, tasks, bugs, or chores. Just multi-word names, optional context, tags, and fields when your team needs them. The workflow state is only `todo` → `wip` → `done`; readiness is derived from blockers, hierarchy, and state when work is explicitly waiting.
- **Collaborative**: yaks sync through git with conflict-free event merging. Multiple people and coding agents can update the same discovery tree from different branches, clones, and worktrees without coordinating edits.
- **Delightful**: the CLI should feel instant (<100ms for everyday operations), forgiving, and pleasant: fuzzy matching, tab completion, multi-word…
