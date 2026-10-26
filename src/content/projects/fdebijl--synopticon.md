---
repo: "fdebijl/synopticon"
name: "synopticon"
description: "A suite of tools to drastically enhance the usability of Synology Photos"
readmeQualityOk: true
url: "https://github.com/fdebijl/synopticon"
homepage: "https://synopticon.nl/"
language: "Python"
languages: ["Python"]
languagePcts: [76]
topics: ["face-detection", "face-recognition", "synology", "synology-dsm", "synology-nas", "synology-photos"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-07-13T11:13:02Z"
lastCommitAt: "2026-10-26T20:59:26Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 78
undervaluedScore: 42
maintainers: ["dependabot[bot]", "fdebijl"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1299197586/cd51d3e3-b240-4e4b-acd3-8f95370ec751"
---

Synopticon is a toolkit to run alongside Synology Photos, consisting of a set of utilities that run over your library and take on the jobs DSM currently does poorly or not at all. It includes enhanced face recognition, robust face grouping, automatic face reassignment, duplicate photo deletion and much more.

**Enhanced face recognition**  
Synology's built-in face detection frequently misses faces, or links photos to the wrong person. Synopticon runs a cutting-edge face detection pipeline over your library, cross-references the results against what Synology already knows, and writes corrections back through Synology Photos' API. Writebacks only occur after your explicit review.

The result is a drastically better hit rate than Synology Photos' baseline face recognition. While Synology Photos often recalls 20% of the faces in a photo, Synopticon hits a ~95% average recall rate.

**QuickMerger**  
Quickly work through unnamed faces in Synology Photos through an ergonomic merge interface, perfect for giving the initial set of faces a name to start working with inside Synopticon.

**Inspect**  
See exactly what Synopticon saw in a single photo: every face it detected, confidence and…
