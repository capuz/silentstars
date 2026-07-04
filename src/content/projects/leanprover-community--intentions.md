---
repo: "leanprover-community/intentions"
name: "intentions"
description: "Coordinate who works on what: claim tasks via GitHub issue comments, with configurable claim expiry (TTL). Reusable GitHub Action."
url: "https://github.com/leanprover-community/intentions"
homepage: "https://leanprover-community.github.io/intentions/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 16
recentReleases: 0
createdAt: "2026-06-22T03:32:51Z"
lastCommitAt: "2026-07-04T06:12:48Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 31
maintainers: ["kim-em"]
openGraphImageUrl: "https://opengraph.githubassets.com/3ce0793c066be58e9d5b5b9d286cb30778503187025c6679819c4907cb6eb711/leanprover-community/intentions"
---

# intentions

Coordinate who works on what. Contributors **claim** tasks by commenting on GitHub issues;
the bot assigns them and moves a card on a Projects v2 board. Claims can carry a
configurable **expiry (TTL)**, so abandoned work is released automatically instead of
blocking everyone forever.

It's up to individual projects to interpret these claims: some may treat them as
merely informational while other may expect that they are carefully respected.

This is a reusable GitHub Action. Projects install it with a **single small workflow file**
described below — there are no GitHub native Project workflows to configure by hand.

## How it works

Comment on an issue that's on the project board:

| Comment | Effect |
|---|---|
| `intention` | Register the task with the project's default TTL. |
| `intention 2w` · `intention 5 hours` · `intention 2026-08-01` | Register with a custom expiry (duration or date). |
| `intention …` (again, as the holder) | Renew / extend your registration. |
| `intention` + following lines | Attach a freeform note (see below). |
| `assign @bob` · `assign @bob 2w` | Register **someone else** on the task (see below). |
| `disclaim` | Release a task you…
