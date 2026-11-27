---
repo: "noirbizarre/git-wipe"
name: "git-wipe"
description: "Easily synchronize your local branches and worktrees"
readmeQualityOk: true
url: "https://github.com/noirbizarre/git-wipe"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 6
forks: 0
openIssues: 5
closedIssues: 18
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-03-16T21:45:37Z"
lastCommitAt: "2026-11-27T11:59:29Z"
lastReleaseAt: "2026-11-07T10:52:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 65
maintainers: ["noirbizarre", "dependabot[bot]", "noirbizbot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1183700352/1bff9c55-aabe-4f40-bc79-03cf638a2813"
---

---

# git-wipe

`git-wipe` provides the `git wipe` command: it detects branches merged
into your main branch(es) and offers to delete them -- both locally and on
configured remotes. It also handles orphaned worktree cleanup.

## Features

- Delete local and remote branches that have been merged
- Read-only inventory of branches and worktrees (`git wipe status`) -- no fetch, no prompts, no changes
- Worktree cleanup: unified prompt for branches with worktrees and orphaned worktrees
- Respects locked worktrees: skips removal with an informational message --
  unless the lock reason embeds a pid that is no longer running, in which
  case the stale lock is cleared automatically
- Min-age guard (`--min-age`): never removes a worktree changed too recently
- Worktree size reporting and a `--min-size` guard/filter (`--size` shows sizes without filtering)
- Glob pattern support for protected branches (e.g.
