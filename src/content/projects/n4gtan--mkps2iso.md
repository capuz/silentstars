---
repo: "N4gtan/mkps2iso"
name: "mkps2iso"
description: "PlayStation 2 ISO/UDF disc image builder & dumper"
url: "https://github.com/N4gtan/mkps2iso"
language: "C++"
languages: ["C++"]
languagePcts: [99]
topics: ["build", "cdvdgen", "dump", "extract", "iso", "maker", "packer", "playstation-2", "playstation2", "ps2"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-02-27T01:08:56Z"
lastCommitAt: "2026-07-04T06:06:39Z"
lastReleaseAt: "2026-03-31T18:55:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 72
undervaluedScore: 12
maintainers: ["N4gtan"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b44c9093ad275aa5b4e243e60ad23b87522ed615d490b84edf95b32d13c07ae/N4gtan/mkps2iso"
---

# MKPS2ISO

`mkps2iso` builds PlayStation 2 DVD images from an XML document.

`dumps2iso` dumps PlayStation 2 DVD images to files and documents the precise structure into a `mkps2iso` compatible XML document.

`mkps2iso` was built with the goal in mind to be the sibling of [mkpsxiso](https://github.com/Lameguy64/mkpsxiso), stripping away CD-ROM mechanics to focus entirely on the UDF file system required by the PlayStation 2.\
`mkps2iso` is meant to provide a faster, cross-platform, modern replacement for Sony's official CDVDGEN development tool. Other ISO creation tools such as MKISOFS do not allow controlling the precise order of files (necessary for optimizing access times).\
`mkps2iso` outputs a standard `.iso` ready to burn to DVD or use in an emulator! The hope is that `mkps2iso` tools ease PlayStation 2 homebrew development and ROM hacking and reverse engineer efforts.

## Features

**Almost all images can be rebuilt 1:1.**

### MKPS2ISO
* Uses XML for scripting ISO/UDF projects.
* Outputs DVD-5/9 images directly to `.iso` format.
* Injects and encrypts boot logo into image.
* Controls file LBA based on file order, allowing for file seek optimization (just…
