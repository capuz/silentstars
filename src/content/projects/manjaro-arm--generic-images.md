---
repo: "manjaro-arm/generic-images"
name: "generic-images"
description: "Generic Aarch64 Images"
readmeQualityOk: true
url: "https://github.com/manjaro-arm/generic-images"
language: "HTML"
languages: ["HTML"]
languagePcts: [100]
stars: 29
forks: 5
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2022-02-05T20:17:03Z"
lastCommitAt: "2026-11-07T22:50:49Z"
lastReleaseAt: "2022-03-14T02:57:05Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 85
undervaluedScore: 55
maintainers: ["mjrghbot"]
openGraphImageUrl: "https://opengraph.githubassets.com/c8c9f27d48764cfe2178b03460d9126d2a089452f66b9c2bfb3ef5489067b5df/manjaro-arm/generic-images"
---

# Manjaro ARM Generic Aarch64

## description

Development Branch for Manjaro ARM images for Generic Aarch64 images

## where can I download an iso?

Images are build and uploaded in a relatively regular interval to [github releases](https://github.com/manjaro-arm/generic-images/releases)

## sources

- [image profile](https://github.com/manjaro-pinephone/arm-profiles)

## building

1. check out the arm-profiles
2. `sudo buildarmimg -d generic -e $EDITION`

## prerequisites

* Functioning firmware (u-boot or tow-boot) on the boards SPI flash

Tow-boot images for the SPI flash for your board can be downloaded from [the projects github page](https://github.com/Tow-Boot/Tow-Boot/releases)

## tested devices

This image has been tested to be working on the following devices:

* Pine64-LTS (by Dan Johansen)
* Pinephone Community Edition (by Benedikt Wildenhain)
