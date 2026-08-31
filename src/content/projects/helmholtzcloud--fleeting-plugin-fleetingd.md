---
repo: "helmholtzcloud/fleeting-plugin-fleetingd"
name: "fleeting-plugin-fleetingd"
description: "Run disposable VMs for executing GitLab CI tasks"
readmeQualityOk: true
url: "https://github.com/helmholtzcloud/fleeting-plugin-fleetingd"
language: "Go"
languages: ["Go"]
languagePcts: [90]
topics: ["cloud-hypervisor", "fleeting", "fleeting-plugin", "gitlab", "gitlab-ci", "gitlab-runner"]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-09-22T17:45:22Z"
lastCommitAt: "2026-08-31T10:00:50Z"
lastReleaseAt: "2026-05-18T13:48:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 57
maintainers: ["dependabot[bot]", "lukaslangrock"]
openGraphImageUrl: "https://opengraph.githubassets.com/467740a7e6b72142714578580496eb94108966681e29c10e1d6d1326eec503fb/helmholtzcloud/fleeting-plugin-fleetingd"
---

# fleeting-plugin-fleetingd - Ephemeral VMs for GitLab CI

This is a [fleeting plugin](https://docs.gitlab.com/runner/fleet_scaling/fleeting/) for running a pool of customizable disposable VMs for executing GitLab CI tasks. Whereas other plugins maintain a pool on a cloud provider's platform you can bring your own (rental) bare-metal hardware here.
The original motivation was to provide users with a simple way to build container images, but it can be used to run anything else you would run in VMs or where VM-level isolation is desired for GitLab builds. Users receive a new Ubuntu machine with passwordless sudo for each build and a selection of software of your choice preinstalled (e.g. Podman). Altenatively, you can switch it to `docker-autoscaler` and execute builds and services running in containers in the VMs.

Note that there are [rootless alternatives](https://docs.gitlab.com/ci/docker/using_docker_build/#docker-alternatives) for building images but you might not always be able to configure the environment to accommodate them.

## Is it good?

While the basic use case works and has been tested in multiple projects, this software should be considered early-stage. There are…
