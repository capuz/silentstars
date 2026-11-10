---
repo: "szaghi/VTKFortran"
name: "VTKFortran"
description: "pure Fortran VTK (XML) API"
readmeQualityOk: true
url: "https://github.com/szaghi/VTKFortran"
homepage: "https://szaghi.github.io/VTKFortran/"
language: "Fortran"
languages: ["Fortran"]
languagePcts: [95]
topics: ["fortran", "vtk", "oop"]
stars: 160
forks: 59
openIssues: 2
closedIssues: 41
watchers: 21
contributors: 15
recentReleases: 5
createdAt: "2012-04-20T07:15:46Z"
lastCommitAt: "2026-11-10T11:38:49Z"
lastReleaseAt: "2026-11-10T11:39:33Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "release_machine"]
healthScore: 90
undervaluedScore: 51
maintainers: ["szaghi", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2e3186dd506cef3c922a49f15c1f27218f74ba0b00aefad04b19af449588fe95/szaghi/VTKFortran"
---

# VTKFortran

>#### Pure Fortran VTK XML API
>a pure Fortran 2008 OOP library for writing and reading files conforming the [VTK](http://www.vtk.org/) XML standard.

| 📐 **VTK Topologies**<br>Image (`.vti`), Rectilinear (`.vtr`), Structured (`.vts`), and Unstructured (`.vtu`) grids, polygonal data (`.vtp`); composite multi-block (`.vtm`), parallel partitioned (`.pvti`, `.pvtr`, `.pvts`, `.pvtu`, `.pvtp`) datasets, and time series (`.pvd`) | 🗜️ **Output Formats**<br>ASCII, Base64-encoded binary, and raw binary appended; optional zlib compression of binary data; every file read back with `action='read'` | ⚡ **Parallel Writers**<br>MPI ranks write their own files at the same time; OpenMP threads too with ifx or nvfortran (not gfortran: a compiler bug) | 🎨 **OOP Design**<br>Polymorphic `xml_writer` allocated at runtime, `xml_reader` to read back; `vtk_file`, `pvtk_file`, `vtm_file`, `pvd_file` expose a clean type-bound-procedure API |
|:---:|:---:|:---:|:---:|
| 🔢 **All Numeric Kinds**<br>All PENF kinds (`I1P`–`I8P`, `R4P`–`R8P`) and array ranks 1–4 supported in data arrays | ✅ **Error Codes**<br>Every function returns an integer status — zero means success | 🔓…
