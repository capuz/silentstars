---
repo: "linuxserver/docker-ci"
name: "docker-ci"
description: "Container for running basic sanity checks on containers post build and before upload"
readmeQualityOk: true
url: "https://github.com/linuxserver/docker-ci"
language: "Python"
languages: ["Python"]
languagePcts: [79]
topics: ["hacktoberfest"]
stars: 8
forks: 7
openIssues: 1
closedIssues: 13
watchers: 7
contributors: 18
recentReleases: 0
createdAt: "2018-07-09T04:25:40Z"
lastCommitAt: "2026-07-19T06:11:37Z"
lastReleaseAt: "2018-09-11T00:16:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 96
undervaluedScore: 58
maintainers: ["LinuxServer-CI", "thespad", "GilbN"]
openGraphImageUrl: "https://opengraph.githubassets.com/801aafa1aca35e6c74d22eaedf5eb702f239f2f066623fa64670853dc5c7ce17/linuxserver/docker-ci"
fundingLinks: ["GITHUB:https://github.com/linuxserver", "OPEN_COLLECTIVE:https://opencollective.com/linuxserver"]
---

[linuxserverurl]: https://linuxserver.io
[forumurl]: https://discourse.linuxserver.io
[huburl]: https://hub.docker.com/r/linuxserver/ci/
[pipelineurl]: https://github.com/linuxserver/pipeline-triggers

## Contact information:-

| Type | Address/Details |
| :---: | --- |
| Discord | [Discord](https://discord.gg/linuxserver) |
| Forum | [Linuserver.io forum][forumurl] |

# [linuxserver/ci][huburl]

## What is this?

This container is an automated testing tool for Docker images. It's designed to perform a series of checks to ensure a container is healthy and functional before it's released. Here's what it does:

1.  **Spins up the container:** It runs the target Docker image with a specified tag.
2.  **Checks for successful startup:** It tails the container's logs, waiting for the `[services.d] done.` message, which confirms the init system has finished and the services are running.
3.  **Generates an SBOM:** It uses `syft` to create a Software Bill of Materials, providing a complete list of all packages inside the image.
4.  **Tests the Web UI (optional):** If the container runs a web service, it attempts to connect to the UI and take a screenshot to verify it's accessible and…
