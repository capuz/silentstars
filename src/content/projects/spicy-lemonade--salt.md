---
repo: "spicy-lemonade/salt"
name: "salt"
description: "Salt encrypts your agent's files and database memories before they leave your machine."
readmeQualityOk: true
url: "https://github.com/spicy-lemonade/salt"
homepage: "https://huggingface.co/spicy-lemonade"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["agent-memory", "cli", "encryption-decryption", "hashing"]
stars: 10
forks: 1
openIssues: 6
closedIssues: 26
watchers: 0
contributors: 2
recentReleases: 5
createdAt: "2026-09-29T11:00:13Z"
lastCommitAt: "2026-10-09T10:51:03Z"
lastReleaseAt: "2026-09-29T22:05:09Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 60
maintainers: ["obrienciaran", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/80e460667611ba8769056a7571aeeef100b2fe9f2d95210502d3216638dcaaa6/spicy-lemonade/salt"
discussionCount: 0
---

# 🧂 Salt

Salt encrypts your agent's files and database memories before they leave your machine.

## 🤔 Why Salt

AI agents remember things about you. They keep notes like `USER.md`, `MEMORY.md` and `SOUL.md`, plus memory databases like SQLite or Postgres. If you back these up to GitHub, anyone who gets into that repo can read them.

Salt encrypts your files before they reach GitHub. Anyone who looks inside only sees scrambled data. Even the file names are hidden, because a name like `job_search_new_york.md` can say a lot on its own.

Your agent's files on your laptop stay as they are. Only the backup copy is encrypted, since that's the part that could leak. We still recommend a private repo, with Salt as an extra layer on top of GitHub's access controls.

## 📦 Install

```bash
brew install spicy-lemonade/tap/salt
```

Use the full name. A plain `brew install salt` installs a different tool called SaltStack.

You can also install Salt with Go.

```bash
go install github.com/spicy-lemonade/salt/cmd/salt@latest
```

## 🚀 Get started

Set up Salt in your backup repo. This is any git repo you push your backups to.

```bash
salt init ~/my-backup-repo
```

Salt creates your key,…
