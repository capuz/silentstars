---
repo: "bjw-s-labs/container-images"
name: "container-images"
description: "Kubernetes tailored container images for various applications. Mirror of https://git.bjw-s.dev/bjw-s/container-images"
readmeQualityOk: true
url: "https://github.com/bjw-s-labs/container-images"
language: "HCL"
languages: ["HCL", "YAML"]
languagePcts: [25, 20]
topics: ["containers", "docker", "kubernetes"]
stars: 25
forks: 7
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2022-09-06T12:38:37Z"
lastCommitAt: "2026-07-25T06:00:16Z"
lastReleaseAt: "2026-03-02T12:09:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 65
maintainers: ["bjw-s"]
openGraphImageUrl: "https://opengraph.githubassets.com/64a266d7e90c6fc922e01961a7d1e13ffa44c3715ee38a7f62a9dee8c4f02227/bjw-s-labs/container-images"
fundingLinks: ["GITHUB:https://github.com/bjw-s", "KO_FI:https://ko-fi.com/bjw_s", "CUSTOM:https://www.paypal.me/bschorgers"]
---

## Container Images

_A Collection of Container Images Optimized for use in Kubernetes_

</div>

</div>

---

## About

This repo contains a collection of container images which are optimized for use in Kubernetes, and updated automatically to keep up with upstream versions. The images try to adhere to the following principles:

- Images are built upon a [Alpine](https://hub.docker.com/_/alpine) or [Ubuntu](https://hub.docker.com/_/ubuntu) base image.
- The container can be run rootless.
- No use of [s6-overlay](https://github.com/just-containers/s6-overlay).
- Semantic versioning is available to specify exact versions to run.
- The container filesystem must be able to be immutable.

## Available Images

Images can be [browsed on the GitHub Packages page for this repo's packages](https://github.com/orgs/bjw-s-labs/packages?tab=packages&repo_name=container-images).

## Persistent data

For applications that need to have persistent data the container will leverage a `/data` and/or a `/config` volume where these are necessary. These locations are hardcoded and not able to be changed in most cases.

## Deprecations

Containers here can be **deprecated** at any point, this could be for…
