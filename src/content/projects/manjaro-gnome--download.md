---
repo: "manjaro-gnome/download"
name: "download"
description: "Download Manjaro Gnome Edition - Developer Builds "
readmeQualityOk: true
url: "https://github.com/manjaro-gnome/download"
language: "HTML"
languages: ["HTML"]
languagePcts: [100]
stars: 30
forks: 10
openIssues: 0
closedIssues: 15
watchers: 7
contributors: 6
recentReleases: 0
createdAt: "2021-01-28T13:06:21Z"
lastCommitAt: "2026-08-10T05:05:28Z"
lastReleaseAt: "2021-01-30T18:33:26Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 100
undervaluedScore: 61
maintainers: ["mjrghbot", "yochananmarqos", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/81ea15d35ae94244a933ba0d5b4eef4a36c8ba5f371231eb49163d7bff89052f/manjaro-gnome/download"
---

# Manjaro Gnome Editions

## description

Development branch for Gnome Edition of Manjaro Linux. These are daily builds for testing purposes and not fit for production.

## where can I download an iso?

Images are build and uploaded in a relatively regular interval to [github releases](https://github.com/manjaro-gnome/download/releases)

## sources

- [iso profile](https://github.com/manjaro-gnome/iso-profiles/tree/master/manjaro/gnome)
- [desktop settings](https://gitlab.manjaro.org/profiles-and-settings/manjaro-gnome-settings)

## building

1. check out the iso profile
2. `buildiso -p gnome`

## credentials

```
user: manjaro
password: manjaro
```
## Extracting
The isos bigger than certain threshold are provided in multipart zip files because of the filesize restriction of github. To extract the iso, download all the zipped parts, and open the zip file with file-roller, engrampa or 7z. This should automatically extract the iso from all the files.
