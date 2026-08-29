---
repo: "connorslade/mslicer"
name: "mslicer"
description: "A high-performance, open-source slicer for MSLA resin printers."
readmeQualityOk: true
url: "https://github.com/connorslade/mslicer"
homepage: "https://mslicer.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["3d-printing", "resin-3d-printers", "slicer", "msla", "resin-printing"]
stars: 75
forks: 4
openIssues: 3
closedIssues: 21
watchers: 5
contributors: 2
recentReleases: 0
createdAt: "2024-06-13T19:25:48Z"
lastCommitAt: "2026-08-29T17:28:46Z"
lastReleaseAt: "2026-05-07T22:31:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 97
undervaluedScore: 50
maintainers: ["connorslade"]
openGraphImageUrl: "https://opengraph.githubassets.com/2047c24d2fa1a9e866c2560c8b813d4e1bef1f3da0146c67f94aab6271b935be/connorslade/mslicer"
fundingLinks: ["GITHUB:https://github.com/connorslade"]
---

# mslicer [][actions] 

A high-performance, open-source slicer for MSLA resin printers.
Supports the following output formats: Chitu (.ctb), Elegoo (.goo), NanoDLP (.nanodlp), and Vector (.svg).
Often 20× to 120× faster than competing slicers, see the [benchmark results].

## Installation

You can download stable builds for Linux, Windows, or MacOS from the GitHub [Releases] page.
Stable Linux builds are also available on [Flathub][flathub] and [Nixpkgs][nixpkgs].
You can find the latest development builds on [Github Actions][actions-success], just open the latest workflow run and download the correct artifact for your system.

If you would rather build from source, just have the latest stable version of the [Rust toolchain][rust] installed and build the binaries you want (mslicer, slicer) as shown below.

```sh
git clone https://github.com/connorslade/mslicer
cd mslicer
cargo b -r -p mslicer
```

## Demo Video

Here is a demo video showing mslicer being used to slice and print [Treefrog] by [Morena Protti].
The video is also hosted on YouTube ([here][demo-yt]) if the one below doesn't play.
Note that this video is a little dated now (two years old).…
