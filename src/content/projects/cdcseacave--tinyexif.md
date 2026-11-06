---
repo: "cdcseacave/TinyEXIF"
name: "TinyEXIF"
description: "Tiny ISO-compliant C++ EXIF and XMP parsing library for JPEG."
readmeQualityOk: true
url: "https://github.com/cdcseacave/TinyEXIF"
language: "C++"
languages: ["C++"]
languagePcts: [87]
topics: ["exif", "exif-metadata", "exif-data-extraction", "exif-reader", "xmp", "xmp-parsing-library"]
stars: 149
forks: 54
openIssues: 0
closedIssues: 13
watchers: 12
contributors: 9
recentReleases: 7
createdAt: "2016-12-15T21:11:04Z"
lastCommitAt: "2026-11-06T12:17:54Z"
lastReleaseAt: "2026-10-01T13:33:34Z"
status: "thriving"
tags: ["legacy_hero", "release_machine"]
healthScore: 99
undervaluedScore: 32
maintainers: ["cdcseacave"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f354221388d11194f4f3315c9fcad9401eca99790bcf60aeb3ca60a8a87e1ac/cdcseacave/TinyEXIF"
---

# TinyEXIF: Tiny ISO-compliant C++ EXIF and XMP parsing library for JPEG

## Introduction

TinyEXIF is a tiny, lightweight C++11 library for parsing the metadata inside JPEG files: EXIF,
XMP, and the Multi-Picture Format index. EXIF parsing needs no third party dependency; XMP
parsing needs the [TinyXML2](https://github.com/leethomason/tinyxml2) library. To use it, copy
the two source files into your project, or build it with CMake, and pass the JPEG data to the
`EXIFInfo` class. Besides the common camera metadata (make and model, resolution, timestamps,
exposure, lens and GPS), it reads drone, spherical panorama and motion photo metadata. It is easy
to extend with any missing EXIF or XMP field.

## Features

- **Inputs**: a `std::istream`, of which only the segments before the image data are read; a
  memory buffer; your own `EXIFStream` implementation; or a lone EXIF or XMP segment.
- **EXIF**: image, camera, exposure, lens and GPS tags from IFD0, the Exif IFD and the GPS IFD, in
  either byte order, on little- and big-endian CPUs alike.
- **XMP** (optional): the `tiff:` image fields; DJI drone metadata (altitude, gimbal angles, flight
  speed, camera calibration, lens…
