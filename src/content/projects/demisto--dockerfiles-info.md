---
repo: "demisto/dockerfiles-info"
name: "dockerfiles-info"
description: "Info about docker images used in the demisto org"
url: "https://github.com/demisto/dockerfiles-info"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [79, 21]
topics: ["xsoar-content", "active-repository", "docker"]
stars: 12
forks: 4
openIssues: 0
closedIssues: 0
watchers: 14
contributors: 101
recentReleases: 0
createdAt: "2021-04-21T17:24:13Z"
lastCommitAt: "2026-06-24T06:39:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "community_watch"]
healthScore: 89
undervaluedScore: 54
maintainers: ["content-bot", "kobymeir"]
openGraphImageUrl: "https://opengraph.githubassets.com/758ea56ebf001f6ec87c2acb08887a38c208649a378af8867de9a5c2690a015b/demisto/dockerfiles-info"
---

# Demisto's Docker Repository Information

This README contains package and os information about each docker image available via Demisto's Docker Hub repositories at:  https://hub.docker.com/u/demisto/ .

Source files for the docker images are available at: https://github.com/demisto/dockerfiles

Each information file is maintained as a markdown file in its relevant folder. The last available tag of each docker image is kept in a file named `last.md` in a folder named as the docker image. The listing and information is automatically generated on a nightly basis.

If you are searching for a specific package and want to see if it is available in a published docker image, you can use the [used_packages.csv](used_packages.csv) file which contains a listing of packages and all docker images using that package.

If you are searching for metadata of a docker image, you can find it in [docker_images_metadata.json](docker_images_metadata.json) file which contains for each docker image metadata file.

docker_images_metadata.json example:
```
{
   "docker_images":{
      "dockerimage1":{
         "3.10.12.66339":{
            "python_version":"3.10.12"
         },
         "3.9.5.21272":{…
