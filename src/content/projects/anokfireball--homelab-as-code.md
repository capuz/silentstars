---
repo: "anokfireball/homelab-as-code"
name: "homelab-as-code"
description: "IaC for going from empty disks to running HA homelab cluster managed using GitOps within 2(-ish) clicks"
readmeQualityOk: true
url: "https://github.com/anokfireball/homelab-as-code"
language: "Jinja"
languages: ["Jinja", "Shell"]
languagePcts: [50, 40]
topics: ["ansible", "cloud-init", "devops", "flux", "gitops", "helm", "homelab", "k8s-at-home", "kubernetes", "netboot"]
stars: 9
forks: 2
openIssues: 5
closedIssues: 8
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-06-29T09:24:54Z"
lastCommitAt: "2026-09-26T08:48:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 71
maintainers: ["dependencysherpa[bot]", "anokfireball"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e83344ccfab3f4724663d23e023a327206dbe1cfbd076c3a1fb8299d112c90a/anokfireball/homelab-as-code"
---

<h3>Bootstrap and GitOps sources to get my baremetal homelab set up consistently.</h3>

</div>

# 🏡 Homelab-as-Code (HaC™)

This repository was born out of the need to better manage an ever-growing homelab environment.
After starting with a simple single-node Docker Compose setup, the increasing number of services began to make maintenance and updates more challenging.

As the complexity grew, it became clear that a more structured, Infrastructure-as-Code approach was needed to:
- keep configurations versioned and thus better documented
- make deployments more consistently repeatable and reliable
- simplify the process of adding new services without losing track of the overall state
- enable easier backup and disaster recovery that is centrally managed
- provide better scalability and resilience beyond a single node

I decided to take this opportunity to properly learn Kubernetes hands-on, embracing the complexity and "feeling the pain" that comes with it rather than _just_ having the theoretical knowledge.
This repo serves as both documentation of my setup as well as a real-world learning experience in managing infrastructure that I rely upon as code.

PS: This setup is mature…
