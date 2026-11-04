---
repo: "epam/mriviewer"
name: "mriviewer"
description: "MRI Viewer is a high performance web tool for advanced 2-D and 3-D medical visualizations."
readmeQualityOk: true
url: "https://github.com/epam/mriviewer"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [79]
stars: 370
forks: 105
openIssues: 14
closedIssues: 37
watchers: 25
contributors: 49
recentReleases: 0
createdAt: "2017-12-11T09:06:58Z"
lastCommitAt: "2026-11-04T13:04:48Z"
lastReleaseAt: "2023-12-20T07:07:15Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 86
undervaluedScore: 37
maintainers: ["dependabot[bot]", "DtechLabs", "AlexanderTarvid"]
openGraphImageUrl: "https://opengraph.githubassets.com/abf13b5c5417ececf2031d89ef24c463ec75bec09ee8d5eaf4a9db213026d15c/epam/mriviewer"
discussionCount: 0
---

# MRI Viewer: Medical image 2D/3D web viewer.

MRI Viewer is a high performance web tool for advanced visualization (both in 2D and 3D modes)
medical volumetric data, provided in popular file formats: DICOM, NIfTI, KTX<sup>™</sup>, HDR.

## Description

MRI Viewer can read local data from files/folders and from predefined web locations.

The [demonstration project](https://epa.ms/mri) shows both (local data / remote data) usage types.

## Motivation

MRI Viewer can be used in a medical center with diagnostic equipment.

- ⚡️ MRI and CT scanning results can be viewed in any computer (inside the medical office and in the client home)
- 💡 Qualified medical personnel can provide diagnosis or conclusion based on provided visualization.
- :globe_with_meridians: App can be used as a web application as a part of large websites and services
- :mortar_board: Can be used by research institutes
due to NIfTI, HDR, etc. file standards support
- :hospital: Medical centers can create their clients database, based on this viewer.

## Repository Structure

This is a monorepo. Sub-projects are organized as follows:

```
mriviewer/
├── web/          # React web application (HTML5 viewer)
├──…
