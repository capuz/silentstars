---
repo: "statnett/image-scanner-operator"
name: "image-scanner-operator"
description: "Kubernetes Operator supporting detection of vulnerabilities in running container images"
readmeQualityOk: true
url: "https://github.com/statnett/image-scanner-operator"
language: "Go"
languages: ["Go"]
languagePcts: [94]
stars: 35
forks: 10
openIssues: 9
closedIssues: 26
watchers: 5
contributors: 15
recentReleases: 0
createdAt: "2023-01-06T14:54:59Z"
lastCommitAt: "2026-11-23T12:22:19Z"
lastReleaseAt: "2023-02-16T09:23:34Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 56
maintainers: ["renovate[bot]", "statnett-bot[bot]", "erikgb"]
openGraphImageUrl: "https://opengraph.githubassets.com/20cc0501d331408aaa3c9de05fd1be288ebfb34b3487b281a980deb25fcd896e/statnett/image-scanner-operator"
discussionCount: 0
---

# Image Scanner Operator

Image Scanner is a Kubernetes Operator supporting detection of vulnerabilities
in running container images.

Kubernetes clusters run containers created from a great diversity of container
images with several origins.
Some images are custom for an in-house application, while others are pulled
from internal/external registries.
It is considered best practice to scan images in container image build
pipelines, to provide developers with early feedback on potential
vulnerabilities.

While this is good, it is not enough:

Software vulnerabilities are typically detected after the software is available
for use, and some applications will typically "just run" in their runtime
environment - with little/no maintenance.
And some users might not use pipelines at all or use pipelines without image
scanning enabled.

Running applications on container images with vulnerabilities _might_ represent
an unacceptable threat.
To mend this, we want **a mechanism to identify vulnerabilities
in running container images**.
This could then be used by developers, system administrators, platform
administrators and security officers
to take action when vulnerabilities are detected.
