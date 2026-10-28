---
repo: "eried/eucviewer"
name: "eucviewer"
description: "Drag-and-drop web viewer for EUC trip logs (.dbb, .csv, .gpx, .xlsx): a 3D map with terrain, playback, and charts, all client-side"
readmeQualityOk: true
url: "https://github.com/eried/eucviewer"
homepage: "https://eucviewer.ried.no/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [73]
topics: ["euc", "gps-tracker", "inmotion", "unicycle", "v14"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-04-14T12:55:35Z"
lastCommitAt: "2026-10-28T09:25:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 56
maintainers: ["eried"]
openGraphImageUrl: "https://opengraph.githubassets.com/f01a51453385c5cff7d32742758456772b196eebfc943de2a8228b5578d85f0e/eried/eucviewer"
---

# EUC Planet Trip Viewer

Drag-and-drop web viewer for EUC trip logs (`.dbb`, `.csv`, `.gpx`, `.xlsx`): a 3D
map with terrain, playback, and charts, all client-side. No backend, no upload to
anyone's server. Your files are parsed in your browser and never leave it.

Pairs with the [EUC Planet](https://github.com/eried/eucplanet) app, which records
the logs directly, but exports from DarknessBot or euc.world work too.

If it's useful to you, a [PayPal donation](https://www.paypal.com/donate/?hosted_button_id=AEB2RPZHNRTKG) keeps it going.

## Why does this exist?

- I wanted to look at my own rides without uploading them to somebody else's cloud first,
- the trip viewers that exist are mostly dead, ad-stuffed, or want a login,
- a 3D map beats a spreadsheet.

## What it does

**Map and library.** Drop a file, or several. Trips are grouped into a tree, can be
renamed, assigned to a wheel, filtered, and exported back out as `.csv` or `.dbb`.
The trace can be coloured by any metric (speed, PWM, current, torque, …) with a
choice of palettes.

**Trip inspector.** A 3D terrain map with playback, a live dashboard, and a stack of
charts you can reorder, hide, or combine into your own…
