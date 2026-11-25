---
repo: "gnufied/treeview-magit"
name: "treeview-magit"
description: "A treeview for magit"
readmeQualityOk: true
url: "https://github.com/gnufied/treeview-magit"
language: "Emacs Lisp"
languages: ["Emacs Lisp"]
languagePcts: [100]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-10T21:26:28Z"
lastCommitAt: "2026-11-25T03:10:20Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 84
undervaluedScore: 24
maintainers: ["gnufied"]
openGraphImageUrl: "https://opengraph.githubassets.com/c8b027ccc2062488489379d6f1511d3e3cb95170740c478c88cd4ff13beba7dd/gnufied/treeview-magit"
---

# treemacs-magit

An Emacs package that displays Git changes as a [Treemacs](https://github.com/Alexander-Miller/treemacs) tree, built on top of [Magit](https://magit.vc/).

## What it does

`treemacs-magit-mode` opens a Treemacs side buffer showing the files that have changed in the current Git repository. It can also show the files changed by a specific commit, the current branch compared with another branch, or all files changed by a GitHub pull request.

Files are grouped into a collapsible directory tree. Changed files are annotated with Nerd Font status icons (configurable):

- `󰈔` — `untracked`: new files not yet tracked by Git
- `󰏫` — `unstaged`: modified files with unstaged changes
- `󰄬` — `staged`: changes added to the index
- `󰏫󰄬` — `both`: files with both staged and unstaged changes
- *(no icon)* — `committed`: files changed by the commit under review

Deep directory chains with a single child are automatically folded into a single `parent/child` node to keep the tree compact (see `treemacs-magit-fold-min-depth`).
