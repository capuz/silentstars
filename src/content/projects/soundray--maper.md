---
repo: "soundray/maper"
name: "maper"
description: "Multi-atlas propagation with enhanced registration "
readmeQualityOk: true
url: "https://github.com/soundray/maper"
homepage: "https://soundray.org/maper"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [59, 36]
stars: 8
forks: 3
openIssues: 2
closedIssues: 3
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2014-10-26T08:19:25Z"
lastCommitAt: "2026-10-09T10:50:02Z"
lastReleaseAt: "2019-10-04T13:37:41Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 78
maintainers: ["claude", "soundray"]
openGraphImageUrl: "https://opengraph.githubassets.com/4c033d615a65b5d0af397b2d5117ade4d951991ad0360fcbde51e8d08a98af3c/soundray/maper"
---

MAPER
=====

This software segments structural magnetic resonance images
automatically into anatomical regions using a database of segmented
images (atlases) as a knowledge base.

MAPER exemplifies ensemble machine learning to approximate solutions
to an ill-posed problem: there is no objective arbiter for drawing a
boundary between anatomical regions in the brain on an _in vivo_
image.  MAPER achieves high consistency and accuracy with
respect to manual reference segmentations.

Robustness is achieved by calculating an initial, coarse
transformation between image-derived tissue probability maps, which is
used as a starting point for registering the intensity images.
Process yields are ca. 99.5% or higher (for example when segmenting
[ADNI](http://adni.loni.usc.edu/) baseline T1-weighted images using
the [Hammers Adult Brain Atlas
Database](https://brain-development.org/brain-atlases/adult-brain-atlases/)).
Segmentation results tend to be plausible even in severe brain atrophy
and other abnormal brain configurations.

### Publication

The rationale and principle are described in detail in the following
paper.

>    Heckemann, R. A., Keihaninejad, S., Aljabar, P., Rueckert, D.,
>…
