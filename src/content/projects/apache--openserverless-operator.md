---
repo: "apache/openserverless-operator"
name: "openserverless-operator"
description: "Apache openserverless"
readmeQualityOk: true
url: "https://github.com/apache/openserverless-operator"
homepage: "https://openserverless.apache.org/"
language: "Python"
languages: ["Python"]
languagePcts: [95]
stars: 11
forks: 15
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 19
recentReleases: 0
createdAt: "2024-07-02T12:42:49Z"
lastCommitAt: "2026-07-04T23:13:53Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 82
undervaluedScore: 62
maintainers: ["miki3421", "sciabarracom", "luigidematteis"]
openGraphImageUrl: "https://opengraph.githubassets.com/5079962b3fa5e60111e8dc5ebd1a5a749fc7fea1dbcf4ba5ddc817603eb901f0/apache/openserverless-operator"
---

# Apache OpenServerless Operator

In this readme there are information for developers.

We describe how to build and test the operator in our development environment

Please refer to the [website](https://openserverless.apache.org) for user information.

For PR-driven infrastructure tests on GitHub, use a PR label in the form `<test>-<commit-hash>`, for example `k3s-abcdef1`.

## How to build and use an operator image

Ensure you have satisfied the prerequisites below. Most notably, you need to use our development virtual machine and you
need write access to a GitHub repository.

Once you have satisfied the prerequisites, you can build an image you can use in the development machine.

Build an image with:

```shell
task build
```

Please note that it will build the image locally and push in an internal registry, even if it is name is
`ghcr.io/${GITHUB_USER}/openserverless-operator`.

To be able to build, the task `build` will commit and push all your changes and then build the operator from the public
sources in your local k3s.

It will also show the logs for the latest build.

You can then deploy it with:

```shell
task deploy
```

Once you have finished with development you can…
