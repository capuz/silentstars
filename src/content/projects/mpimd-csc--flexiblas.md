---
repo: "mpimd-csc/flexiblas"
name: "flexiblas"
description: "FlexiBLAS - A BLAS and LAPACK wrapper library with runtime exchangeable backends. This is a read-only mirror of https://gitlab.mpi-magdeburg.mpg.de/software/flexiblas-release "
readmeQualityOk: true
url: "https://github.com/mpimd-csc/flexiblas"
homepage: "https://www.mpi-magdeburg.mpg.de/projects/flexiblas"
language: "C"
languages: ["C", "Fortran"]
languagePcts: [73, 22]
topics: ["blas", "lapack", "linear-algebra-library", "linear-algebra"]
stars: 62
forks: 14
openIssues: 10
closedIssues: 65
watchers: 3
contributors: 7
recentReleases: 0
createdAt: "2020-06-29T11:08:16Z"
lastCommitAt: "2026-11-04T13:05:22Z"
lastReleaseAt: "2022-05-17T12:56:33Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 94
undervaluedScore: 54
maintainers: ["mohawk2", "grisuthedragon", "mmuetzel"]
openGraphImageUrl: "https://opengraph.githubassets.com/ad787c68fbb66b41936265574ca89a4ac38c5a687c48d4dc5d512c064e78d22a/mpimd-csc/flexiblas"
discussionCount: 2
---

FlexiBLAS - A BLAS and LAPACK wrapper library with runtime exchangeable backends
================================================================================

**Version 3.5.0** - DOI: 10.5281/zenodo.17431921

**Project Website:** https://www.mpi-magdeburg.mpg.de/projects/flexiblas

**Git Repository:** https://gitlab.mpi-magdeburg.mpg.de/software/flexiblas-release

Copyright 2013-2026 by *Martin Köhler* (ORCID: 0000-0003-2338-9904)
                   and *Jens Saak* (ORCID: 0000-0001-5567-9637)

## Documentation

[This Documentation includes](#documentation):

  * [About FlexiBLAS](#about-flexiblas)
  * [Installing FlexiBLAS](#install)
  * [Linking with FlexiBLAS](#linking-a-program-against-flexiblas)
  * [Setting up FlexiBLAS](#configuration-files)
  * [Runtime usage of FlexiBLAS](#selecting-the-backend-at-runtime)
  * [Usage Examples](#usage-examples)
  * [Environment Variables](#environment-variables)
  * [Profiling with FlexiBLAS](#profiling)
  * [Octave Interface](#octave-interface)
  * [Backend Builder](#backend-builder)

## About Flexiblas

**FlexiBLAS** is a wrapper library that enables the exchange of the
[*BLAS*](https://en.wikipedia.org/wiki/BLAS) (Basic Linear…
