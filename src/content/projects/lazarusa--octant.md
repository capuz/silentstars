---
repo: "lazarusA/octant"
name: "octant"
description: "An interactive viewer for n-dimensional datasets with native support for local and cloud object storage, Zarr, and Icechunk. Built in Rust with GPU-accelerated rendering. 🦀"
readmeQualityOk: true
url: "https://github.com/lazarusA/octant"
homepage: "https://lazarusa.github.io/octant/"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["graphics", "icechunk", "visualization", "wgpu", "zarr", "hdf5", "netcdf", "geotiff", "healpix", "ome-zarr"]
stars: 16
forks: 1
openIssues: 11
closedIssues: 15
watchers: 1
contributors: 2
recentReleases: 9
createdAt: "2026-08-04T10:34:36Z"
lastCommitAt: "2026-10-11T10:15:39Z"
lastReleaseAt: "2026-09-03T21:32:18Z"
status: "thriving"
tags: ["solo_builder", "release_machine", "under_pressure"]
healthScore: 90
undervaluedScore: 51
maintainers: ["lazarusA", "aaronspring", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1b911e5709f117da292c54c6eecbe7ffb846ea50fecb7f8ad8a8aa69825c18c2/lazarusA/octant"
---

# octant

[<img alt="github" src="https://img.shields.io/badge/github-lazarusA/octant-8da0cb?logo=github" height="20">](https://github.com/lazarusA/octant)

An interactive viewer for n-dimensional datasets with native support for local and cloud object storage, Zarr, Icechunk, NetCDF, and HDF5. Built in Rust with GPU-accelerated rendering.

## Live Demo

Try Octant directly in your browser without installing anything:

👉 **[Launch Octant Live Demo](https://lazarusa.github.io/octant/)**

Powered by WebAssembly with hardware-accelerated rendering via WebGPU (with WebGL2 fallback).

## Install

In order to use `octant` as a native desktop application, you need to [install rust first](https://rust-lang.org/tools/install/). Then run:

```bash
cargo install octant
```

Running the above command will globally install the **octant** binary.

## Run

```bash
octant
```

## Features

- **Flexible Data Storage**: Seamless access to local filesystems and remote cloud object stores (S3, HTTP, Azure, GCP) via `object_store`, [Zarr](https://zarr.dev/), and [Icechunk](https://icechunk.io/), plus native desktop support for [NetCDF](https://www.unidata.ucar.edu/software/netcdf/) (`.nc`, `.nc4`,…
