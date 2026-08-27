---
repo: "cri-o/packaging"
name: "packaging"
description: "CRI-O deb and rpm packages."
readmeQualityOk: true
url: "https://github.com/cri-o/packaging"
homepage: "https://cri-o.io"
language: "Shell"
languages: ["Shell"]
languagePcts: [94]
topics: ["cri-o", "deb", "rpm"]
stars: 49
forks: 16
openIssues: 2
closedIssues: 31
watchers: 5
contributors: 27
recentReleases: 0
createdAt: "2023-09-18T18:34:08Z"
lastCommitAt: "2026-08-27T14:29:40Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 58
maintainers: ["openshift-merge-bot[bot]", "dependabot[bot]", "saschagrunert"]
openGraphImageUrl: "https://opengraph.githubassets.com/a0b936d74b1e9ee07a85d4f9e0f65d6d992ca3c796b121a71e1b4f173e4eeaa3/cri-o/packaging"
---

# CRI-O Packaging

The intention of this project is to encapsulate CRI-O's packaging efforts into a
dedicated repository, following official Kubernetes guidelines by using the
[openSUSE Build Service (OBS)](https://build.opensuse.org).

- [Project Layout](#project-layout)
  - [Stable Versions](#stable-versions)
  - [Prereleases](#prereleases)
- [Usage](#usage)
  - [Available Streams](#available-streams)
    - [Stable](#stable)
    - [Prerelease](#prerelease)
    - [Define the Kubernetes version and used CRI-O stream](#define-the-kubernetes-version-and-used-cri-o-stream)
  - [Distributions using <code>rpm</code> packages](#distributions-using-rpm-packages)
    - [Add the Kubernetes repository](#add-the-kubernetes-repository)
    - [Add the CRI-O repository](#add-the-cri-o-repository)
    - [Install package dependencies from the official repositories](#install-package-dependencies-from-the-official-repositories)
    - [Install the packages](#install-the-packages)
  - [Distributions using <code>deb</code> packages](#distributions-using-deb-packages)
    - [Install the dependencies for adding repositories](#install-the-dependencies-for-adding-repositories)
    - [Add the Kubernetes…
