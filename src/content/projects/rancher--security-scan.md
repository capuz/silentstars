---
repo: "rancher/security-scan"
name: "security-scan"
description: "Tests Kubernetes clusters for adherence to security best practices using kube-bench."
readmeQualityOk: true
url: "https://github.com/rancher/security-scan"
language: "Go"
languages: ["Go", "Shell"]
languagePcts: [51, 31]
stars: 44
forks: 59
openIssues: 0
closedIssues: 0
watchers: 28
contributors: 163
recentReleases: 0
createdAt: "2019-05-04T18:19:00Z"
lastCommitAt: "2026-08-11T04:48:05Z"
lastReleaseAt: "2020-03-05T23:18:18Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 87
undervaluedScore: 55
maintainers: ["renovate-rancher[bot]", "andypitcher", "Teja78906"]
openGraphImageUrl: "https://opengraph.githubassets.com/7166716ffcb0834b040c11879327d002cd0a07d7470c0a521a0f5a351de420a8/rancher/security-scan"
---

security-scan
========
Please submit any new inquiries in the [compliance-operator](https://github.com/rancher/compliance-operator) repo.
For the current branch strategy related to the `security-scan`, please refer to  [Branches and Releases](https://github.com/rancher/compliance-operator?tab=readme-ov-file#branches-and-releases)

This repo has all the stuff needed for running compliance scans in Rancher Manager.

Multi-purpose repo:
- Packaging for all the components needed for compliance scans (sonobuoy, kube-bench)
- kube-bench-summarizer
- plugin script for sonobuoy tool (a different script is passed using command)

The corresponding docker image (rancher/security-scan) is used in the system charts.

## Building
`make`

Tag the image to personal docker hub repo

`docker tag rancher/security-scan:<MAKE TAG OUTPUT> <DOCKER_HUB_USER>/security-scan:dev`

Push docker tag

`docker push <DOCKER_HUB_USER>/security-scan:dev`

On Rancher install the Compliance app, changing the Values YAML to point to your image
```
image:
...
    securityScan:
        repository: <DOCKER_HUB_USER>/security-scan
        tag: dev
```

## License
Copyright (c) 2025 SUSE LLC

Licensed under the Apache…
