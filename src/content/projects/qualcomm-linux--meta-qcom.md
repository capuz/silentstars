---
repo: "qualcomm-linux/meta-qcom"
name: "meta-qcom"
description: "OpenEmbedded/Yocto Project BSP layer for Qualcomm based platforms"
url: "https://github.com/qualcomm-linux/meta-qcom"
language: "BitBake"
languages: ["BitBake"]
languagePcts: [81]
stars: 138
forks: 296
openIssues: 173
closedIssues: 203
watchers: 20
contributors: 151
recentReleases: 2
createdAt: "2015-07-31T09:21:07Z"
lastCommitAt: "2026-06-28T06:54:36Z"
lastReleaseAt: "2026-06-25T12:37:20Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 90
undervaluedScore: 51
maintainers: ["lumag", "ricardosalveti", "ishnajain-qcom"]
openGraphImageUrl: "https://opengraph.githubassets.com/794520664a8c203bcf52993de1244640e919844d57fbc70d1f9e64252e1bb84f/qualcomm-linux/meta-qcom"
discussionCount: 0
---

# meta-qcom

## Introduction

OpenEmbedded/Yocto Project hardware enablement layer for Qualcomm based platforms.

This layer provides additional recipes and machine configuration files for
Qualcomm platforms.

This layer depends on:

```text
URI: https://github.com/openembedded/openembedded-core.git
layers: meta
branch: master
revision: HEAD
```

This layer has an optional dependency on meta-oe layer:

```text
URI: https://github.com/openembedded/meta-openembedded.git
layers: meta-oe
branch: master
revision: HEAD
```

The dependency is optional, and not strictly required. When meta-oe is enabled
in the build (e.g. it is used in BBLAYERS) then additional recipes from
meta-qcom are added to the metadata. You can refer to meta-qcom/conf/layer.conf
for the implementation details.

## Branches

- **master:** Primary development branch, with focus on upstream support and
  compatibility with the most recent Yocto Project release.
- **wrynose:** LTS branch based on the Yocto Project 6.0 release, used by
  Qualcomm Linux 2.x.
- **all stable branches up until styhead:** Legacy branches maintained by Linaro,
  prior to the migration to [Qualcomm-linux](https://github.com/qualcomm-linux).…
