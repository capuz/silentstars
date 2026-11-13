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
languagePcts: [99]
stars: 130
forks: 8
openIssues: 8
closedIssues: 10
watchers: 1
contributors: 7
recentReleases: 4
createdAt: "2026-11-03T22:07:27Z"
lastCommitAt: "2026-11-13T18:32:21Z"
lastReleaseAt: "2026-11-08T08:59:36Z"
status: "newborn"
tags: []
healthScore: 89
undervaluedScore: 31
maintainers: ["domerawind", "Ashley-QwQ", "dhao2001"]
openGraphImageUrl: "https://opengraph.githubassets.com/5eb414de4ca21946f11cc7c8557b82c14f072ae59b696f7ef2ea2f9b63e80ebb/Ashley-QwQ/disc-probe"
---

# disc-probe

[English](https://github.com/Ashley-QwQ/disc-probe/blob/HEAD/README.en.md) | Simplified Chinese

Let an ordinary optical drive measure a disc's spiral geometry by itself, then burn images onto the data side of a DVD-R or CD-R. The whole process requires no photographing or point-marking.

*Along the River During the Qingming Festival* (《清明上河图》), burned onto a Ritek F1 DVD-R, is the direct output: all of the geometry comes from read timing. This disc was burned only once, with no test burns, photo-based calibration, or scan correction. The photo was taken with a phone, cropped to the disc surface only, downscaled, and the background blurred.

## How it works

Burning an image onto the data side requires knowing which angle on the disc the Nth sector lands at. Each batch of discs has tiny differences in track pitch and bit length, and over tens of thousands of revolutions these accumulate and twist the image into a swirl. The common remedy is to burn a calibration pattern, mark points on a photo, and correct repeatedly.

disc-probe lets the drive do the measuring. When the disc spins at constant speed, the moment a sector finishes reading is the moment it rotates under…
