---
repo: "projectbluefin/utah"
name: "utah"
description: "Bluefin built with Fedora Hummingbird technology"
readmeQualityOk: true
url: "https://github.com/projectbluefin/utah"
language: "Python"
languages: ["Python"]
languagePcts: [75]
stars: 24
forks: 22
openIssues: 17
closedIssues: 340
watchers: 1
contributors: 23
recentReleases: 0
createdAt: "2026-08-26T20:20:21Z"
lastCommitAt: "2026-11-09T00:53:22Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 53
maintainers: ["mergeraptor[bot]", "hanthor", "hivecommons-hive[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2319f13e8398cd486b5b66737e07aad2df498da90f810183dd68a3a385795975/projectbluefin/utah"
---

# Utahraptor

*LUKS ISO test passed for commit `df81798f2661`. [CI run](https://github.com/projectbluefin/utah/actions/runs/41063306779) also runs independent desktop tests that do not gate this record; the LUKS and production ISO jobs passed; [screenshots and provenance](https://github.com/projectbluefin/utah/blob/HEAD/docs/verification/README.md).*

†Utahraptor ostrommaysi

Bluefin built on Fedora Hummingbird. The more ... civilized murder machine.

> Your day keeps getting worse. Why are there more.

**Experimental pre-alpha** — the image builds, boots, and installs end to
end in local QEMU validation: the live ISO's bootc-installer creates a
LUKS2-encrypted disk from the ISO's embedded container store with no
network, and the installed system boots on its own to GDM and a GNOME
session (verified record: [docs/verification](https://github.com/projectbluefin/utah/blob/HEAD/docs/verification/README.md)).
Testing container images and live ISOs are available for hardware testing,
but nothing here is ready to run on a machine you care about yet. [Filing
issues](https://github.com/projectbluefin/utah/issues) is the whole point.

## What it is

[Bluefin](https://projectbluefin.io)…
