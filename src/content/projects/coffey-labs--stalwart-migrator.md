---
repo: "Coffey-Labs/stalwart-migrator"
name: "stalwart-migrator"
description: "In-place Upgrade tooling for Stalwart 0.15.x to latest."
readmeQualityOk: true
url: "https://github.com/Coffey-Labs/stalwart-migrator"
homepage: "https://linuxexpert.org"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["inplace-upgrade", "migration", "stalwart", "stalwart-mail"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-23T01:17:21Z"
lastCommitAt: "2026-09-05T07:49:42Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 55
maintainers: ["LINUXexpert-org"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1343279756/289384aa-c0fe-4721-8be7-e3dc38a6e13a"
fundingLinks: ["GITHUB:https://github.com/LINUXexpert-org"]
---

# stalwart-migrator

In-place upgrade tool for Stalwart Mail Server, 0.15.5 → latest: no data
loss, a checkpoint at every step so an interrupted run resumes instead of
restarting, and automated validation that the server still works afterwards.

**Recovery from a failed migration is your own snapshot or backup — this
tool does not undo a migration.** See [Recovery is your
job](#recovery-is-your-job) before using it on anything you care about.

Go, standard library only — no external dependencies.

A companion to [**ihasmail**](https://github.com/Coffey-Labs/ihasmail),
a JMAP-first webmail client for Stalwart. That one is what you read your
mail in; this one is what gets the server underneath it onto a version that
speaks the protocol it needs.

**This has been used to migrate a production mail server.** On 2026-08-25 it
took a live server — nine domains, six accounts, a 2.4 GB RocksDB store —
from 0.15.5 to 0.16.19 with **8 seconds** of downtime, every phase green
including post-cutover validation, mail flowing before and after. That run
was preceded by a full dress rehearsal on a clone of the same server, which
is the practice this project most recommends copying: see [Rehearse…
