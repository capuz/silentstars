---
repo: "AlmaLinux/albs-node"
name: "albs-node"
description: "AlmaLinux Build System build node."
readmeQualityOk: true
url: "https://github.com/AlmaLinux/albs-node"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 12
forks: 13
openIssues: 0
closedIssues: 0
watchers: 9
contributors: 23
recentReleases: 0
createdAt: "2021-05-19T15:36:33Z"
lastCommitAt: "2026-11-06T13:20:35Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 88
undervaluedScore: 53
maintainers: ["anfimovdm", "andrewlukoshko", "ilija-lazoroski"]
openGraphImageUrl: "https://opengraph.githubassets.com/53fdc2a938647e2ff549de710a308d8ff57e55a34d154d9909fc045117578192/AlmaLinux/albs-node"
fundingLinks: ["GITHUB:https://github.com/AlmaLinux", "OPEN_COLLECTIVE:https://opencollective.com/almalinux-os-foundation"]
---

System overview 
--

AlmaLinux Build System Build Node - ALBS Node - is designed for the automated building of rpm packages. It uses docker and docker-compose for local\production deployment. 
Build Node supports several types of architectures: x86_64, aarch64, ppc64le. The support of the architectures is provided by the [packages](https://repo.almalinux.org/build_system/8/) that were built for AlmaLinux Build Node specifically.

Build Node requires this albs-* services:
- [AlmaLinux Build System Web-Server](https://github.com/AlmaLinux/albs-node/blob/HEAD/(https://github.com/AlmaLinux/albs-web-server)) (albs-web-server) -  puts a new build into a queue for Build Node;
- AlmaLinux Build System Build Node (albs-node) - receives and performs a build task, sends the results as artifacts to PULP, informs web-server about results. 

Build Node sends a request to the Web-Server. If there is an idle task (not started), Build Node receives back a build task to build packages. After the task is completed, Build Node uploads artifacts which are build logs and rpm packages to the [Artifact Storage (PULP)](https://build.almalinux.org/pulp/content/builds/AlmaLinux-8-x86_64-22-br/). 

Mentioned…
