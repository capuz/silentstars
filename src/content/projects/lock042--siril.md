---
repo: "lock042/siril"
name: "siril"
description: "This is a mirror, please report bugs to"
readmeQualityOk: true
url: "https://github.com/lock042/siril"
homepage: "https://gitlab.com/free-astro/siril"
language: "C"
languages: ["C"]
languagePcts: [87]
stars: 15
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 97
recentReleases: 0
createdAt: "2020-06-30T22:09:18Z"
lastCommitAt: "2026-10-08T10:51:04Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 78
undervaluedScore: 65
maintainers: ["lock042", "ajeb78", "Vincent-FA"]
openGraphImageUrl: "https://opengraph.githubassets.com/9d33a972c2fa825b980518a4be3e1bd2cbbcda14909cf124d51391f679870b9a/lock042/siril"
---

# Siril

> Copyright &copy; 2012-2023, Team free-astro
> <<https://free-astro.org/index.php/Siril>>
> <<https://www.siril.org>>

## Summary

Siril is an astronomical image processing tool.

It is specially tailored for noise reduction and improving the signal/noise
ratio of an image from multiple captures, as required in astronomy.
Siril can align automatically or manually, stack and enhance pictures from various file formats,
even image sequence files (films and SER files).
It works well with limited system resources, like in embedded platforms, but is
also very fast when run on more powerful computers.

Contributors are welcome. Programming language is C, with parts in C++.
Main development is done with most recent versions of libraries.

If you use Siril in your work, please cite this software using the following information:
C. Richard et al., Journal of Open Source Software, 2024, 9(102), 7242. DOI:

## Requirements

For compilation, these tools are needed in addition to the base development packages:
- **meson**
- **ninja**
- **cmake**

Then, mandatory build dependencies:
- **glib-2.0** (>= 2.56.0) Glib Convenience Library
- **lcms2** for color space management
- **cfitsio**…
