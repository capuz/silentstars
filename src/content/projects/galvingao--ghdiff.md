---
repo: "GalvinGao/ghdiff"
name: "ghdiff"
description: "Blazing-fast PR reviewer"
readmeQualityOk: true
url: "https://github.com/GalvinGao/ghdiff"
homepage: "https://ghdiff.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
stars: 27
forks: 9
openIssues: 4
closedIssues: 1
watchers: 0
contributors: 9
recentReleases: 1
createdAt: "2026-08-25T06:01:57Z"
lastCommitAt: "2026-09-30T09:56:08Z"
lastReleaseAt: "2026-09-03T09:15:06Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 41
maintainers: ["GalvinGao", "AlisaAkiron", "myot233"]
openGraphImageUrl: "https://opengraph.githubassets.com/3cbdf88ec928ff863e8e1b33e8a620e92657a3f17c6e663a01635b0aaac211f5/GalvinGao/ghdiff"
---

# ghdiff

A code review surface built on [`@pierre/diffs`](https://diffs.com) and
`@pierre/trees`, served at [ghdiff.com](https://ghdiff.com).

ghdiff shows one diff at a time: a GitHub pull request, commit, or compare
range. It filters the file list by preset path rules, and a line comment on a
pull request goes back to GitHub.

Every review URL mirrors github.com's own path, so swapping the host is the
whole instruction:

```diff
- github.com/owner/repo/pull/123
+ ghdiff.com/owner/repo/pull/123
```

## A diff that is still on your machine

Work that is uncommitted, unpushed, or in a repository with no GitHub remote is
invisible to the site. The `ghdiff` command is the same review surface over
`git diff`, served from `127.0.0.1` by a process you start and stop:

```bash
npx ghdiff              # uncommitted work, in a browser
ghdiff --staged         # what is about to be committed
ghdiff main             # this branch against its base
ghdiff main..feature    # any two revisions
ghdiff --commit         # the last commit
ghdiff --commit abc123  # one commit
```

It reads the repository you run it in and nothing else, never writes to it, and
uploads nothing anywhere. `cli/README.md`…
