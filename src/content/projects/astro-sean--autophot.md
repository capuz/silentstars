---
repo: "Astro-Sean/autophot"
name: "autophot"
description: "The AUTOmated Photometry Of Transients (AutoPhOT) is a novel automated pipeline that is designed for rapid, publication-quality photometry of transients."
readmeQualityOk: true
url: "https://github.com/Astro-Sean/autophot"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 41
forks: 7
openIssues: 0
closedIssues: 34
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2021-11-06T14:49:56Z"
lastCommitAt: "2026-11-06T13:20:19Z"
lastReleaseAt: "2022-01-09T12:58:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 57
maintainers: ["Astro-Sean"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/425269613/54745364-e4fb-4f63-990d-0e279c8f6e38"
discussionCount: 3
---

**Point it at your FITS frames, give it a target, get back a calibrated light curve.**

[Conda package](https://anaconda.org/astro-sean/autophot) · [Paper](https://ui.adsabs.harvard.edu/abs/2022A%26A...667A..62B) · [Report an issue](https://github.com/Astro-Sean/autophot/issues)

---

AutoPhOT is a photometry pipeline for transients and variable sources, built on [Photutils](https://photutils.readthedocs.io/) and [Astropy](https://www.astropy.org/). Feed it FITS images from any telescope, filter, or pixel scale and it will find your target in each frame, do the photometry, calibrate it against survey catalogs, and hand you one clean light curve.

It has been used in 83 papers so far (updated: 06-11-2026) - [see them on SciX](https://scixplorer.org/search?q=citations%28bibcode%3A2022A%26A...667A..62B%29&sort=date%20desc).

> [!NOTE]
> AutoPhOT is developed and maintained by one person only. If you hit a problem, please open an issue on GitHub and I will get to it as soon as I can.

1. Sorts your frames by telescope, instrument, and filter, then checks or re-solves the WCS with astrometry.net and Gaia DR3. SIP and TPV distortion are handled.
2. Cleans each image: cosmic-ray…
