---
repo: "pencil-code/pencil-code"
name: "pencil-code"
description: "A high-order finite-difference code for compressible hydrodynamic flows with magnetic fields and particles"
readmeQualityOk: true
url: "https://github.com/pencil-code/pencil-code"
homepage: "https://pencil-code.org/download.php"
language: "Fortran"
languages: ["Fortran"]
languagePcts: [71]
stars: 244
forks: 111
openIssues: 0
closedIssues: 35
watchers: 92
contributors: 107
recentReleases: 0
createdAt: "2015-04-19T07:26:57Z"
lastCommitAt: "2026-10-29T10:36:41Z"
lastReleaseAt: "2018-11-30T13:33:52Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 100
undervaluedScore: 43
maintainers: ["ToxPuro", "Kishore96in", "PABourdin"]
openGraphImageUrl: "https://opengraph.githubassets.com/34b5492989483400d291ada58a08d17269180cd711ba6c38a62b1a42cafe9264/pencil-code/pencil-code"
---

The Pencil Code
---------------
The Pencil Code is a high-order finite-difference code for compressible hydrodynamic flows with magnetic fields and particles. It is highly modular and can easily be adapted to different types of problems. The code runs efficiently under MPI on massively parallel shared- or distributed-memory computers.

The Pencil Code is available from
[pencil-code.org](https://pencil-code.org/) and is mirrored to
[GitHub](https://github.com/pencil-code/pencil-code).
It was previously hosted at
[Google Code](https://code.google.com/p/pencil-code/).

In order to checkout the code with read-write premissions
[Subversion](https://subversion.apache.org), use the command
```sh
svn checkout https://pencil-code.org/svn/trunk pencil-code --username=<your-username>
```
where `<your-username>` is your GitHub username that you should use identically to register on [account.pencil-code.org](https://account.pencil-code.org/) for write access to the code repository.

For read-only access via SVN, a username is not required:
```sh
svn checkout https://pencil-code.org/svn/trunk pencil-code
```

To get started, run one of the samples:
```sh
unix>  cd pencil-code
unix>  source…
