---
repo: "curityio/idsvr-docker"
name: "idsvr-docker"
description: "Docker-related files, resources, and information for the Curity Identity Server"
readmeQualityOk: true
url: "https://github.com/curityio/idsvr-docker"
homepage: "https://curity.io/resources/learn/run-curity-docker/"
language: "Dockerfile"
languages: ["Dockerfile"]
languagePcts: [86]
topics: ["curity", "docker", "deployment"]
stars: 10
forks: 3
openIssues: 0
closedIssues: 5
watchers: 3
contributors: 14
recentReleases: 0
createdAt: "2019-08-21T09:09:38Z"
lastCommitAt: "2026-09-25T09:01:26Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 91
undervaluedScore: 65
maintainers: ["anestos", "pjoshi2023"]
openGraphImageUrl: "https://opengraph.githubassets.com/9dbd91d5a4ecc5863066810c2c2153cccb56b88736fa21c25b879915e661863f/curityio/idsvr-docker"
---

# Docker-related Files and Info

This repository contains Dockerfiles and other resources that can be used to create Docker images of the [Curity Identity Server](https://curity.io). 

# Usage

* Download the linux release from the [Curity Developer portal](https://developer.curity.io/downloads)
* Extract the release in the `<VERSION>` directory of this project
* Run the command `VERSION=X.X.X ./build-images.sh $VERSION`

This will build the images using the Dockerfile(s) of the specific version locally.

# Adding a new version

In order to add a new version, run the following `VERSION=X.X.X ./add-release.sh`

# Image updates 

Since the base OS of the images can regularly be patched, the script `update-multiplatform-images.sh` is run every day to make sure that the images contain the latest security fixes. 

The script downloads the releases from Curity's release API, pulls the latest base OS images and rebuilds all the versions. If there is a change in the OS, the docker cache won't be used and the new images will be pushed to Curity's Azure Container Registry.
  
So, the tag of the form `<version>-<os>` always contains the latest built image.

Also, the tag `<minor>-<os>`, i.e…
