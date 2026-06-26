---
repo: "connorslade/mslicer"
name: "mslicer"
description: "A high-performance, open-source slicer for MSLA resin printers."
url: "https://github.com/connorslade/mslicer"
homepage: "https://mslicer.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["3d-printing", "resin-3d-printers", "slicer"]
stars: 56
forks: 5
openIssues: 5
closedIssues: 16
watchers: 4
contributors: 2
recentReleases: 1
createdAt: "2024-06-13T19:25:48Z"
lastCommitAt: "2026-06-26T23:41:49Z"
lastReleaseAt: "2026-05-07T22:31:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 54
maintainers: ["connorslade"]
openGraphImageUrl: "https://opengraph.githubassets.com/d48ede070fb27f9e81db1111206d377453662bf016f05004bd4009b9f8168c55/connorslade/mslicer"
---

# mslicer [![Build][actions-badge]][actions] ![][download-badge]

A high-performance, open-source slicer for MSLA resin printers.
Supports the following output formats: Chitu (.ctb), Elegoo (.goo), NanoDLP (.nanodlp), and Vector (.svg).
You can read more about the development of this project on its [project page].
Often 20× to 120× faster than competing slicers, see the [benchmark results].

![][hero-image]

## Installation

You can download stable builds for Linux or Windows from the GitHub [Releases] page.
Stable Linux builds are also available on [Flathub][flathub] and [Nixpkgs][nixpkgs].
You can find the latest development builds for Windows, Linux, and Mac OS on [Github Actions][actions-success], just open the latest workflow run and download the correct artifact for your system.

If you would rather build from source, just have the latest stable version of the [Rust toolchain][rust] installed and build the binaries you want (mslicer, slicer) as shown below.

```sh
git clone https://github.com/connorslade/mslicer
cd mslicer
cargo b -r -p mslicer
```

## Demo Video

Here is a demo video showing mslicer being used to slice and print [Treefrog] by [Morena Protti].
The video is…
