---
repo: "ThorpeJosh/truenas-zfs-unlock"
name: "truenas-zfs-unlock"
description: "Control your Truenas ZFS encryption keys, unlock datasets remotely, and choose when datasets are unlocked."
url: "https://github.com/ThorpeJosh/truenas-zfs-unlock"
language: "Shell"
languages: ["Shell"]
languagePcts: [93]
stars: 33
forks: 9
openIssues: 4
closedIssues: 5
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2023-10-26T21:39:56Z"
lastCommitAt: "2026-06-23T06:42:35Z"
lastReleaseAt: "2024-07-23T01:56:35Z"
status: "thriving"
tags: []
healthScore: 72
undervaluedScore: 37
maintainers: ["renovate[bot]", "pre-commit-ci[bot]", "ThorpeJosh"]
openGraphImageUrl: "https://opengraph.githubassets.com/6a49f06e6bbf81f9b8140c32ce10c4ba487d9b4174d77cbd864fa92b14829828/ThorpeJosh/truenas-zfs-unlock"
---

# Truenas Encrypted ZFS Unlocking with Self-Managed Keys

This tool grants you full control of your Truenas ZFS encryption keys by enabling offsite key storage, remote dataset unlocking, and automated control over when your datasets are unlocked.

## Why?
ZFS dataset encryption provides a multitude of security benefits, chiefly; the securing of hardware data drives when at rest, in transit, after disposal, and in the event of theft.

Unfortunately, by default Truenas stores ZFS dataset encryption keys on the boot drive. As the boot drive is physically located with all the encrypted drives the benefits of zfs encryption are undermined.

To protect the data on your drives from unauthorised access during transportation or in the event of theft, keys cannot be stored locally on your Truenas server.

## Image variants
### Supported Architectures
![Architecture](https://img.shields.io/badge/architecture-amd64-blue)
![Architecture](https://img.shields.io/badge/architecture-arm64-blue)
![Architecture](https://img.shields.io/badge/architecture-arm/v7-blue)
![Architecture](https://img.shields.io/badge/architecture-arm/v6-blue)…
