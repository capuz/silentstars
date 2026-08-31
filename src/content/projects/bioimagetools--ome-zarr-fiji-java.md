---
repo: "BioImageTools/ome-zarr-fiji-java"
name: "ome-zarr-fiji-java"
description: "A drag-and-drop gateway of OME-Zarrs into Fiji."
readmeQualityOk: true
url: "https://github.com/BioImageTools/ome-zarr-fiji-java"
language: "Java"
languages: ["Java"]
languagePcts: [100]
stars: 5
forks: 2
openIssues: 12
closedIssues: 25
watchers: 12
contributors: 10
recentReleases: 2
createdAt: "2025-01-16T12:13:37Z"
lastCommitAt: "2026-08-31T10:00:23Z"
lastReleaseAt: "2026-08-26T09:59:03Z"
status: "watched"
tags: ["solo_builder", "community_watch"]
healthScore: 92
undervaluedScore: 72
maintainers: ["stefanhahmann", "xulman"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/917660609/0b5b61cb-7d75-461a-9c7c-4aa45b3796a3"
---

# About

This repo is currently primarily a Fiji Drag & Drop / Copy & Paste / FIJI links handler for OME-Zarrs.

If the dropped / pasted / linked target is not recognized as a **OME-Zarr v0.3 - v0.5** resource, it does nothing.

# Features

### Drag & Drop of local OME-Zarr folders and URIs

There are several options for what Fiji can do after drag & drop / copy & paste:

Users can select the **default opening behavior** via
`Plugins -> OME-Zarr -> Settings -> Opening behavior settings`

The options are:

* Open the highest available single-resolution image in ImageJ.
* Open a matching single-resolution image in ImageJ (**initial default**). Users can preset a maximum image width, and
  Fiji will open the highest available single-resolution image that is not larger than the preset width. This is useful
  for avoiding the loading and opening of excessively large images. Fiji simply chooses an appropriately sized level
  from the resolution pyramids (multiscales) of the dropped OME-Zarr.
* Open as a multi-resolution source in BigDataViewer. This is useful for large OME-Zarrs. Channel names, colors,
  contrast limits, and the time point are automatically extracted from the OME-Zarr…
