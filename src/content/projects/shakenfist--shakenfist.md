---
repo: "shakenfist/shakenfist"
name: "shakenfist"
description: "Old man shakes fist at cloud"
readmeQualityOk: true
url: "https://github.com/shakenfist/shakenfist"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 35
forks: 13
openIssues: 144
closedIssues: 1314
watchers: 2
contributors: 13
recentReleases: 0
createdAt: "2019-12-26T03:03:21Z"
lastCommitAt: "2026-10-30T08:12:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 98
undervaluedScore: 60
maintainers: ["mikalstill", "shakenfist-bot", "sfconductor"]
openGraphImageUrl: "https://opengraph.githubassets.com/241b938b742bc66d0b71bce597cf931d0c5296a427998602c03530f88d9e895a/shakenfist/shakenfist"
---

# Shaken Fist: Opinionated to the point of being impolite

**Documentation:** https://shakenfist.com/
**Source Code:** https://github.com/shakenfist/shakenfist

## Deployment

Shaken Fist is deployed with the `shakenfist.shakenfist` Ansible collection
(which lives in [`shakenfist/deploy/collection/`](https://github.com/shakenfist/shakenfist/tree/develop/shakenfist/deploy/collection)
in this repository and is published to Ansible Galaxy). You write an inventory
describing your machines, set a handful of variables, and run a playbook.
Ready-to-use examples ship in [`examples/`](https://github.com/shakenfist/shakenfist/tree/develop/examples) —
`examples/single-node/` is the recommended quickstart. See
[`docs/operator_guide/installation.md`](https://github.com/shakenfist/shakenfist/blob/develop/docs/operator_guide/installation.md)
for the full walkthrough.

## Prerequisites

Shaken Fist requires an operator-provided MariaDB 10.11.0+ server (the
`INET4` column type it uses arrived in 10.10, and 10.11 is the oldest
in-support LTS above that, so this is a hard requirement rather than a
preference). Before deploying, provision a MariaDB instance and apply
the bootstrap snippet…
