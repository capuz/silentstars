---
repo: "KCL-BMEIS/niftyreg"
name: "niftyreg"
description: "This project contains command line tools to perform rigid, affine and non-linear registration of nifti or analyse images as well as utilities"
readmeQualityOk: true
url: "https://github.com/KCL-BMEIS/niftyreg"
language: "C"
languages: ["C", "C++"]
languagePcts: [57, 36]
topics: ["medical-image-registration"]
stars: 193
forks: 51
openIssues: 29
closedIssues: 87
watchers: 8
contributors: 20
recentReleases: 0
createdAt: "2018-05-21T16:34:44Z"
lastCommitAt: "2026-09-16T08:47:46Z"
lastReleaseAt: "2025-11-21T10:39:06Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 89
undervaluedScore: 30
maintainers: ["mmodat", "onurulgen"]
openGraphImageUrl: "https://opengraph.githubassets.com/91d3726330e4dcef216330b3fc5e6e3cd6eca09e704aff8e469c33155329a24e/KCL-BMEIS/niftyreg"
---

# NiftyReg

### WHAT DOES THE PACKAGE CONTAIN?

The code contains programs to perform rigid, affine and non-linear registration
of 2D and 3D images stored as Nifti or Analyze (nii or hdr/img).

The rigid and affine registration are performed using an algorithm initially
presented by Ourselin et al.[1]. The symmetric versions of the rigid and
affine registration have been presented in Modat et al.[2].
The non-linear registration is based on the work is based on the work initially
presented by Rueckert et al.[3]. The current implementation has been presented
in Modat et al.[4].

Ourselin et al.[1] presented an algorithm called Aladin, which is based on
a block-matching approach and a Trimmed Least Square (TLS) scheme. Firstly,
the block matching provides a set of corresponding points between a reference
and a warped floating image. Secondly, using this set of corresponding points,
the best rigid or affine transformation is evaluated. This two-step loop is
repeated until convergence to the best transformation.
In our implementation, we used the normalised cross-correlation between the
reference and warped floating blocks to extract the best correspondence. The
block width is constant…
