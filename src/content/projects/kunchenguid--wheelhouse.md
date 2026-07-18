---
repo: "kunchenguid/wheelhouse"
name: "wheelhouse"
description: "Wheelhouse - steer your open-source maintenance from one place. A portable IssueOps command center: cross-repo decision cards driven by GitHub Actions, decided by checkbox or plain English."
readmeQualityOk: true
url: "https://github.com/kunchenguid/wheelhouse"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 12
forks: 6
openIssues: 214
closedIssues: 1163
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-28T22:29:48Z"
lastCommitAt: "2026-07-18T05:48:14Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 96
undervaluedScore: 51
maintainers: ["kunchenguid"]
openGraphImageUrl: "https://opengraph.githubassets.com/bfe86f248ddac5f6173bae92f1bbf172cd32420ac8fdb0538e039b02ff068bc4/kunchenguid/wheelhouse"
---

# Wheelhouse

> A ship's **wheelhouse** is where the captain stands to steer. This is your wheelhouse for open-source maintenance: whatever across your repos needs *your* hand surfaces here, and you make the call.

A personal, always-on, cross-repo **"what needs my decision"** command center, built entirely on GitHub Issues + GitHub Actions.
Every issue in this repo is one pending decision about the repositories you maintain - a PR worth merging, a fork-CI run worth approving, an issue worth triaging.
The scheduled scan keeps the queue focused on other people's work: PRs and issues authored by the repo owner, the configured maintainer, or bots stay out of the scan-built worklist, while missing author metadata fails open.
PR-review candidates that GitHub reports as merge-conflicted leave the maintainer worklist until the contributor rebases or merges the base branch and pushes a mergeable head.
If GitHub is still calculating mergeability after a base-branch update, Wheelhouse waits for a conclusive answer without changing that PR's card membership.
You drive cards by ticking a checkbox, replying with a slash-command, or replying in plain English; a workflow executes your call on…
