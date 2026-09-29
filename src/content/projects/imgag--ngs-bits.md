---
repo: "imgag/ngs-bits"
name: "ngs-bits"
description: "Short-read and long-read sequencing tools for diagnostics"
readmeQualityOk: true
url: "https://github.com/imgag/ngs-bits"
language: "C++"
languages: ["C++"]
languagePcts: [94]
stars: 183
forks: 36
openIssues: 30
closedIssues: 359
watchers: 10
contributors: 19
recentReleases: 0
createdAt: "2015-06-25T07:23:55Z"
lastCommitAt: "2026-09-29T08:11:14Z"
lastReleaseAt: "2019-08-02T06:17:21Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 97
undervaluedScore: 42
maintainers: ["marc-sturm", "ubuntolog", "Ott-Alexander"]
openGraphImageUrl: "https://opengraph.githubassets.com/28ef608a07cb0c43b90ae86ba6e414ed566b18249549faded501cd36583c276c/imgag/ngs-bits"
---

# *ngs-bits* - Short-read and long-read sequencing tools for diagnostics

## Downloading ngs-bits

Binaries and Docker containers of *ngs-bits* are available via Bioconda:  

Apptainer/Singularity containers are available for the [megSAP server](https://megsap.de/download/container/ngs-bits.php).

## Installing ngs-bits

*ngs-bits* can also be built from sources.  
Use git to clone the most recent release (the source code package of GitHub does not contains required sub-modules):

	> git clone --recursive https://github.com/imgag/ngs-bits.git
	> cd ngs-bits
	> git checkout 2026_06
	> git submodule update --recursive --init

Depending on your operating system, building instructions vary slightly:

* Building from **sources** for [Linux](https://github.com/imgag/ngs-bits/blob/HEAD/doc/install_unix.md)
* Building from **sources** for [MacOS](https://github.com/imgag/ngs-bits/blob/HEAD/doc/install_mac.md)
* Building from **sources** for [Windows](https://github.com/imgag/ngs-bits/blob/HEAD/doc/install_win.md)

`GSvar` app requires a running server, instructions on how to deploy it on a Linux machine can be found…
