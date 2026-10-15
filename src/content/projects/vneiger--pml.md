---
repo: "vneiger/pml"
name: "pml"
description: "Polynomial Matrix Library. Additions to NTL and FLINT libraries, with a focus on univariate polynomial matrices, structured matrices, and their applications."
readmeQualityOk: true
url: "https://github.com/vneiger/pml"
language: "C++"
languages: ["C++", "C"]
languagePcts: [57, 37]
stars: 28
forks: 7
openIssues: 7
closedIssues: 5
watchers: 4
contributors: 6
recentReleases: 0
createdAt: "2019-01-25T23:55:35Z"
lastCommitAt: "2026-10-15T08:32:22Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 87
undervaluedScore: 54
maintainers: ["vneiger", "gilvillard"]
openGraphImageUrl: "https://opengraph.githubassets.com/bcf878871cdba819c6ebd329774365b0cbd45d2d8ffff360b1c8088fa5fbdc8c/vneiger/pml"
---

# PML (Polynomial Matrix Library)

Additions to the NTL and FLINT libraries, with a focus on univariate polynomial
matrices, structured matrices, and their applications.

Version 0.5

Warning: the FLINT-based part of PML (flint-extras folder) is work in progress.
Currently, it requires the current development version of FLINT.
 
## Authors

Current maintainers:

 - Vincent Neiger
 - Eric Schost
 - Gilles Villard 

Contributors:

 - Seung Gyu Hyun
 - Kevin Tran

## Licensing

PML v0.5 is distributed under the GNU General Public License version 2.0
(GPL-2.0-or-later). This applies to all files in the directory of this README
as well as in all subdirectories. See the file COPYING for a copy of the
license.

PML v0.5 is heavily based on [NTL](https://libntl.org/) and
[FLINT](https://flintlib.org/). See the file `ntl-extras/COPYING_NTL` for
NTL's copyright notice. FLINT is distributed under LGPL 3.0 (GNU Lesser General
Public License), see `flint-extras/COPYING_FLINT` for the license.

## Citing PML

```
@inproceedings{HyunNeigerSchost2019,
  author = {Hyun, S. G. and Neiger, V. and Schost, {\'E}.},
  title = {Implementations of Efficient Univariate Polynomial Matrix Algorithms and…
