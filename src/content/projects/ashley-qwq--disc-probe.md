---
repo: "Ashley-QwQ/disc-probe"
name: "disc-probe"
description: "Drive-timing geometry calibration for images burned on the data side of DVD-R (GPL-3.0)"
originalDescription: "Drive-timing geometry calibration for images burned on the data side of DVD-R (GPL-3.0)"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Ashley-QwQ/disc-probe"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 13
forks: 4
openIssues: 3
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-11-03T22:07:27Z"
lastCommitAt: "2026-11-05T14:04:49Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 38
maintainers: ["Ashley-QwQ", "WindowsNoEditor"]
openGraphImageUrl: "https://opengraph.githubassets.com/4021055e200043a43c335fca587ee5718ebe6d87f4183f0c3136dcb24c33cf0b/Ashley-QwQ/disc-probe"
---

# disc-probe

[English](https://github.com/Ashley-QwQ/disc-probe/blob/HEAD/README.en.md) | Simplified Chinese

Let an ordinary optical drive measure a disc's spiral geometry by itself, then burn images onto the data side of a DVD-R or CD-R. The whole process requires no photographing or manual point-marking.

*Along the River During the Qingming Festival*, burned onto a Ritek F1 DVD-R. This is the direct output: all geometry comes from read timing. The disc was burned only once, with no test burns, photo calibration, or scan correction. The photo was taken with a phone, cropped to the disc surface, downscaled, and the background blurred.

## Principle

Burning an image onto the data side requires knowing which angle on the disc sector N lands at. Each batch of discs has slight differences in track pitch and bit length. Over tens of thousands of turns these accumulate and the image twists into a swirl. The common remedy is to burn a calibration pattern, mark points from a photo, and correct repeatedly.

disc-probe lets the drive do the measuring. When the disc spins at constant speed, the moment a sector finishes reading is the moment it rotates under the read head. By reading two…
