---
repo: "dunyuliu/consilium"
name: "consilium"
description: "An AI specialist team for Claude Code to accelerate scientific innovation: from idea and proposal to methods, audits, peer review and release."
readmeQualityOk: true
url: "https://github.com/dunyuliu/consilium"
language: "Shell"
languages: ["Shell"]
languagePcts: [84]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-04-29T17:19:41Z"
lastCommitAt: "2026-10-21T08:48:40Z"
lastReleaseAt: "2026-09-16T16:10:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 62
maintainers: ["dunyuliu"]
openGraphImageUrl: "https://opengraph.githubassets.com/558626f8ce4f6dcfe9ed1a0d8965a763e263ed9ccae864d8de1ede4861a3c3be/dunyuliu/consilium"
---

# Consilium

> An AI specialist team to accelerate scientific innovation. Named
> specialists take research from idea to result: proposals, new methods,
> ports, audits, peer review, releases and publication, with gates and
> checks that measure whether they actually did.

Specialists organised into three teams and a quality bench, each with a
name, a CV, and a thing they refuse to let slide. Runs on Claude Code;
installs by symlink and follows you across machines.

## Install

```bash
git clone https://github.com/dunyuliu/consilium.git ~/consilium
bash ~/consilium/install.sh
```

Idempotent symlinks; safe to re-run after `git pull`. Each subagent loads
its prompt from `~/.claude/agents/<name>.md` and each slash command from
`~/.claude/commands/<name>.md`, both symlinked from this repo. Use
`--force` to re-link when targets have moved — without it, a symlink
pointing elsewhere or a real file is reported and skipped, never clobbered.

## Quick start

```bash
bash ~/consilium/tests/check.sh
```

This is the install check: it is pure bash with no dependencies, and a
green run confirms your clone is wired correctly. Then, inside a Claude
Code session anywhere on your machine:

```…
