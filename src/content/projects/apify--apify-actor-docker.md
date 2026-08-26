---
repo: "apify/apify-actor-docker"
name: "apify-actor-docker"
description: "Base Docker images for Apify actors."
readmeQualityOk: true
url: "https://github.com/apify/apify-actor-docker"
homepage: "https://hub.docker.com/u/apify"
language: "Dockerfile"
languages: ["Dockerfile"]
languagePcts: [54]
stars: 96
forks: 33
openIssues: 9
closedIssues: 46
watchers: 9
contributors: 37
recentReleases: 0
createdAt: "2017-05-22T15:21:31Z"
lastCommitAt: "2026-08-26T04:16:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 96
undervaluedScore: 50
maintainers: ["apify-service-account", "vladfrangu", "apify-deps[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c695ac8563a0789e89542afe6965caa1ebc01bfc46aa9e268f613d85fb5517a0/apify/apify-actor-docker"
---

# Apify base Docker images

Public Docker images for Apify Actor serverless platform (https://docs.apify.com/actor)

The sources for the images are present in subdirectories that are named as the corresponding
Docker image. For example, the `node` directory corresponds to the
[apify/actor-node](https://hub.docker.com/r/apify/actor-node/) Docker image.

The images are using the following tags:

| Tag      | Description                                  |
| -------- | -------------------------------------------- |
| `latest` | Well-tested production version of the image. |
| `beta`   | Development version of the image.            |

## Maintenance

The process of building and publishing new images is automated using GitHub Actions, and a set of scripts that are stored in `.github/actions/version-matrix`. We recommend reading the [`README.md`](https://github.com/apify/apify-actor-docker/blob/HEAD/.github/actions/version-matrix/README.md) in that directory to understand how the scripts work.

Manual releases can also be done by triggering the specified workflows manually. At minimum, you **must** specify the `release_tag` input, which is the tag for the image. Every other variable is…
