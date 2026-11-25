---
repo: "karnull/gists"
name: "gists"
description: "tools for enhanced terminal functionality"
readmeQualityOk: true
url: "https://github.com/karnull/gists"
language: "Shell"
languages: ["Shell"]
languagePcts: [90]
stars: 6
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-12-11T09:40:04Z"
lastCommitAt: "2026-11-25T03:14:43Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 84
undervaluedScore: 80
maintainers: ["karnull"]
openGraphImageUrl: "https://opengraph.githubassets.com/6bd313b948fe53728ac56f409c1313bee62d0a6a096f693bef342d7a4cd3bde3/karnull/gists"
---

# Gists

A collection of independent shell scripts designed to power up the terminal
experience. Each script solves one specific task with no cross-dependencies -
drop any of them onto `$PATH` and use it on its own.

### `git_fuzzy.sh`

Fuzzy pickers for everyday branch, worktree, stash, staging and restore chores, built on `fzf`. Add or
remove worktrees, switch to, make local, rebase onto or delete branches, each
picked from a list with a preview of its recent log. `worktree_check` and
`branch_check` open a remote branch as a detached checkout, without fetching it
or making a local branch. `stash_pop` and `stash_drop` pick stashes with a
`git stash show` preview. `stage_select` lists every uncommitted change, labelled
staged, modified, deleted or untracked, with the staged ones already picked;
pick or unpick files with tab to stage or unstage them. A partly staged file
gets a staged and a modified entry: pick the first to unstage it, the second to
stage all of it, or neither to leave it be. It needs `fzf` 0.46 or later.
`restore` discards the unstaged changes to the picked files, after a single
confirmation for all of them.
