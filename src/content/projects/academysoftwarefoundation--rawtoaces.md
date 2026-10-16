---
repo: "AcademySoftwareFoundation/rawtoaces"
name: "rawtoaces"
description: "RAW to ACES Utility"
readmeQualityOk: true
url: "https://github.com/AcademySoftwareFoundation/rawtoaces"
language: "C++"
languages: ["C++"]
languagePcts: [89]
topics: ["academy", "color-encoding", "color-management", "image-processing", "camera", "raw"]
stars: 194
forks: 64
openIssues: 10
closedIssues: 89
watchers: 33
contributors: 32
recentReleases: 2
createdAt: "2016-09-12T18:21:28Z"
lastCommitAt: "2026-10-16T08:26:28Z"
lastReleaseAt: "2026-09-25T21:52:32Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 94
undervaluedScore: 45
maintainers: ["antond-weta", "soswow", "thc1006"]
openGraphImageUrl: "https://opengraph.githubassets.com/83735c4b9105f5536440c1b0cbf9d5fe75b4b0fe728bed26e69e163e1c3f235a/AcademySoftwareFoundation/rawtoaces"
---

## Introduction

The RAW to ACES Utility, `rawtoaces`, converts digital camera RAW files to ACES AP0 image data in ACES container files. It provides a command line tool, C++ libraries, and Python bindings.

Conversion can use measured camera spectral sensitivities and illuminant data, matrices in the RAW file's metadata, or the Adobe camera coefficients supplied by LibRaw through OpenImageIO. The output follows the Academy Color Encoding Specification ([SMPTE ST 2065-1](https://pub.smpte.org/pub/st2065-1/st2065-1-2021.pdf)) and ACES Image Container specification ([SMPTE ST 2065-4](https://pub.smpte.org/pub/st2065-4/st2065-4-2023.pdf)).

## Quick start

Install with Homebrew on macOS or Linux:

```sh
brew install rawtoaces
```

For building from source and other installation options, see the [installation guide](https://github.com/AcademySoftwareFoundation/rawtoaces/blob/HEAD/src/docs/getting_started.rst).

Usage example:

```sh
rawtoaces --output-dir "$PWD/output" --create-dirs input.dng
```

The default CLI conversion uses metadata white balance and selects the spectral matrix method when camera data is available, otherwise the metadata matrix method.

## Documentation and source…
