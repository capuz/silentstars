---
repo: "shakenfist/shakenfist"
name: "shakenfist"
description: "Old man shakes fist at cloud"
readmeQualityOk: true
url: "https://github.com/shakenfist/shakenfist"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 35
forks: 13
openIssues: 98
closedIssues: 1084
watchers: 2
contributors: 12
recentReleases: 0
createdAt: "2019-12-26T03:03:21Z"
lastCommitAt: "2026-08-29T20:23:17Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 98
undervaluedScore: 60
maintainers: ["mikalstill", "shakenfist-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/bec7d1b90b4632ebcaf973c907bc60ed37d23b6282ea94eaff046390d9f255dd/shakenfist/shakenfist"
---

# Shaken Fist: Opinionated to the point of being impolite

</a>

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
