---
repo: "wr/airwriter"
name: "airwriter"
description: "A fun little device that adds AirPrint and AppleTalk to the Apple ImageWriter II"
readmeQualityOk: true
url: "https://github.com/wr/airwriter"
language: "C"
languages: ["C", "Python"]
languagePcts: [65, 25]
topics: ["airprint", "appletalk", "esp32", "imagewriter", "ipp-everywhere", "localtalk", "open-hardware", "vintage-mac"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-10-16T01:39:28Z"
lastCommitAt: "2026-10-25T02:47:26Z"
lastReleaseAt: "2026-10-17T18:35:35Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 80
undervaluedScore: 55
maintainers: ["wr"]
openGraphImageUrl: "https://opengraph.githubassets.com/eda0bdfd52f7b3e982e2385e0489f16a1b03022f37d588a691dabdd8032c5477/wr/airwriter"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/wellsworkshop"]
---

# AirWriter

Add AirPrint to your Apple ImageWriter or LaserWriter. AirWriter plugs into the printer, joins
your Wi-Fi, and your printers show up on your phone and computer like any other printer. Nothing
to install.

Vintage Macs can print to the same printers over AppleTalk, from a LocalTalk cable, your network,
Basilisk II or Infinite Mac. That part runs on Tashtari's
[TashTalk](https://github.com/lampmerchant/tashtalk).

Rev A boards print from iPhones, Macs and vintage Macs to an ImageWriter II, in color with Apple's
color ribbon, and to a Personal LaserWriter NTR. Assembled boards are at
[Wells Workshop](https://shop.wells.ee/products/airwriter).

## Using it

The [wiki](https://github.com/wr/airwriter/blob/HEAD/../../wiki) has setup, printers, the status lights, settings and troubleshooting.

You need:

- **A printer.** An ImageWriter II, ImageWriter LQ or ImageWriter, or a PostScript LaserWriter.
- **For an ImageWriter, a crossover cable.** An 8-pin mini-DIN cable wired like Apple's 590-0552.
  Straight-through cables won't work. The original ImageWriter needs the 25-pin Mac cable.
- **For a LaserWriter, a connection.** LocalTalk cabling to AirWriter's AppleTalk port, or…
