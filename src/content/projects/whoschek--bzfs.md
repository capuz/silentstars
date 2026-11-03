---
repo: "whoschek/bzfs"
name: "bzfs"
description: "bzfs is a CLI built for highly reliable and scalable near real-time ZFS snapshot replication with minimal operational complexity. It reliably replicates ZFS datasets in parallel using zfs send/receive and ssh, and can operate at sub-second intervals across large fleets of hosts for safe DR/HA."
readmeQualityOk: true
url: "https://github.com/whoschek/bzfs"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 247
forks: 10
openIssues: 2
closedIssues: 20
watchers: 7
contributors: 1
recentReleases: 0
createdAt: "2024-06-21T17:12:19Z"
lastCommitAt: "2026-11-03T10:32:57Z"
lastReleaseAt: "2024-12-02T12:54:36Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 95
undervaluedScore: 39
maintainers: ["whoschek"]
openGraphImageUrl: "https://opengraph.githubassets.com/d2478a0d7ee55054a1dc62e343b69fdbb5868386820f3b677f3335cb9ebb0056/whoschek/bzfs"
fundingLinks: ["CUSTOM:https://paypal.me/whoschek"]
discussionCount: 11
---

<img
    src="bzfs_docs/logo.svg"
    alt="bzfs logo"
    width="640"
  />

bzfs is a CLI built for highly reliable and scalable near real-time ZFS snapshot replication
with minimal operational complexity. It reliably replicates ZFS datasets in parallel using zfs send/receive
and ssh, and can operate at sub-second intervals across large fleets of hosts. It safely supports disaster
recovery and high availability (DR/HA), scale-out deployments, and protection against data loss or ransomware.
It handles the many edge cases that you will eventually run into over the course of your deployment.

- [Introduction](#Introduction)
- [Periodic Jobs with bzfs_jobrunner](#Periodic-Jobs-with-bzfs_jobrunner)
- [System Overview for New Engineers](https://github.com/whoschek/bzfs/blob/HEAD/bzfs_docs/system_overview.md)
- [Quickstart](#Quickstart)
- [Installation](#Installation)
- [Design Aspects](#Design-Aspects)
- [Continuous Integration Testing](#Continuous-Integration-Testing)
- [End-to-End Testing on the Testbed](#End-to-End-Testing-on-the-Testbed)
- [Testing Locally](#Testing-Locally)
- [Testing all Supported Platforms via GitHub Hosted…
