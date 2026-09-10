---
repo: "ssh4net/OpenMeta"
name: "OpenMeta"
description: "OpenMeta - Metadata Processing Library"
readmeQualityOk: true
url: "https://github.com/ssh4net/OpenMeta"
language: "C++"
languages: ["C++"]
languagePcts: [96]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-01-05T06:32:50Z"
lastCommitAt: "2026-09-10T08:09:59Z"
lastReleaseAt: "2026-04-28T08:43:00Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 57
maintainers: ["ssh4net"]
openGraphImageUrl: "https://opengraph.githubassets.com/845ac20006f3c7f940bcc2bf654fcc5b7480e6f7dd3d13cd55331b4e69439b0c/ssh4net/OpenMeta"
---

OpenMeta is a metadata processing library for image files. It does not decode,
decompress, demosaic, or render image pixels.

The current focus is format-agnostic metadata reads: find metadata blocks in
common containers, decode them into a normalized in-memory model, and expose
bounded transfer/edit building blocks for export workflows.

## What OpenMeta Does

- Scan containers to locate metadata blocks in JPEG, PNG, WebP, GIF, TIFF/DNG,
  JP2, JXL, ISO-BMFF (HEIF/AVIF/CR3), CRW/CIFF, RAF, and X3F files.
- Reassemble chunked payloads and optionally decompress supported carriers.
- Decode metadata into a normalized `MetaStore`.
- Create a fresh finalized metadata store from bounded logical portable fields.
- Edit logical portable fields transactionally without mutating the source
  store.
- Export sidecars and previews.
- Prepare, compile, emit, and edit metadata transfers for bounded target
  families.

## Camera RAW Metadata Scope

Camera RAW names do not all identify separate OpenMeta scanners. Many camera
formats share a TIFF/EXIF metadata carrier, while CR3, CRW, RAF, and X3F need
dedicated container handling.

| Read lane | Camera RAW families | Current metadata scope |
|…
