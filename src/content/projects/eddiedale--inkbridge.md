---
repo: "eddiedale/inkbridge"
name: "inkbridge"
description: "Use a reMarkable as a pressure-sensitive drawing tablet on macOS"
readmeQualityOk: true
url: "https://github.com/eddiedale/inkbridge"
language: "Swift"
languages: ["Swift"]
languagePcts: [96]
stars: 12
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-10-05T18:20:28Z"
lastCommitAt: "2026-10-07T10:30:56Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 37
maintainers: ["eddiedale"]
openGraphImageUrl: "https://opengraph.githubassets.com/05acbf0caef76e1b0f46a5b2ad1494288715673f61d3eb0de247a587ee6e67e7/eddiedale/inkbridge"
---

# inkbridge

Use a reMarkable as a pressure-sensitive drawing tablet on macOS.

https://github.com/user-attachments/assets/3615dec1-4eb6-47ed-9bff-25e82229a9c6

(Early video shown above. Might not use correct build command as we go along. Read below on how to use the tool)

inkbridge runs on the Mac, reads the pen over SSH and posts native macOS
tablet events, so Photoshop and other apps see pressure, tilt, hover and the
eraser end. Nothing is installed on the tablet.

> Status: early, but usable for drawing. Developed and tested on a
> reMarkable Pure (firmware 3.28) over USB with Photoshop on Apple Silicon.
> Reported working on a reMarkable Paper Pro too. Other models may need
> different device names; see below.

## What works

- Pressure (4096 levels), tilt, hover and the eraser end
- Landscape or portrait mapping onto the main display
- Pen and touch are grabbed while running, so the tablet UI does not react to
  drawing or finger gestures; released again on exit
- Around 500 reports per second over USB, with under 1 ms added by the link

Known limits:

- Hover lags a little. The pen firmware filters positions and delivers them
  in batches on a ~16 ms cycle, before…
