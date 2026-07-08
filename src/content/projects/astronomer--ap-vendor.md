---
repo: "astronomer/ap-vendor"
name: "ap-vendor"
description: "Astronomer Vendor Images"
readmeQualityOk: true
url: "https://github.com/astronomer/ap-vendor"
language: "Dockerfile"
languages: ["Dockerfile", "Python"]
languagePcts: [40, 31]
topics: ["astronomer-software", "astro-private-cloud"]
stars: 18
forks: 10
openIssues: 0
closedIssues: 0
watchers: 31
contributors: 177
recentReleases: 0
createdAt: "2019-11-12T19:43:47Z"
lastCommitAt: "2026-07-08T05:41:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 89
undervaluedScore: 54
maintainers: ["octo-sts[bot]", "sudarshanrampuria", "Shubham-astro"]
openGraphImageUrl: "https://opengraph.githubassets.com/cbcf9d45f3168dfb2360155790dc5c9fdd860f2ee37bd4fcf75427e4098b806f/astronomer/ap-vendor"
---

# Astronomer Vendor Images

The Astronomer ap-vendor repo is a collection of third party components that we vendor and provide through our own supply chain. This gives us more control over when updates are released, and how the software is distributed to our customers.

## Requirements

Python tooling in this repository is handled by [uv](https://github.com/astral-sh/uv).

## Directory layout

Most directories in this repository hold everything needed to build and test one component. Three of the most common files you can find are Dockerfile, version.txt, and test.yaml.

`Dockerfile` is pretty well known. The way the the docker images are named is by prefixing the docker repo and `ap-` (for Astronomer Platform) to the name of the directory. For instance, the directory `grafana` would become `quay.io/astronomer/ap-grafana`.

`version.txt` gives the docker tag for the component. We use [semver](https://semver.org) for all of our tags. Using this file for versions gives us more control over what we want to use as the version. For instance, if we are building software from source inside of a debian container, and that debian container is updated to fix a security vulnerability but the…
