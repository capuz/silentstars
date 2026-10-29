---
repo: "Rishi-Bidani/mangaviewer"
name: "mangaviewer"
description: "This app lets you browse manga on your PC on any device on your network and if setup correctly with something like Tailscale you can even access it outside your network"
readmeQualityOk: true
url: "https://github.com/Rishi-Bidani/mangaviewer"
language: "Vue"
languages: ["Vue", "TypeScript"]
languagePcts: [51, 48]
topics: ["manga", "manga-reader", "networking"]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2022-11-23T09:15:27Z"
lastCommitAt: "2026-10-29T12:24:57Z"
lastReleaseAt: "2026-10-29T09:38:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 40
maintainers: ["Rishi-Bidani"]
openGraphImageUrl: "https://opengraph.githubassets.com/0facc11597c3b9ba219eb3f2803dbe2a424f2f16a62c5e78c270d06c5584932a/Rishi-Bidani/mangaviewer"
fundingLinks: ["GITHUB:https://github.com/Rishi-Bidani", "CUSTOM:https://paypal.me/rishibidani?country.x=AU&locale.x=en_AU"]
---

# MangaViewer

MangaViewer is a sleek and customizable manga reading web app for your local collection. Designed for PC and mobile,
it lets you comfortably enjoy your downloaded manga with features tailored for a smooth and flexible reading experience.

## Features ✨

-   [x] Adjustable image width and alignment (left, center, right)
-   [x] Image brightness control
-   [x] Adjustable spacing between images
-   [x] Bookmarking albeit not persistent (localStorage)

Please check the TODO if you wish to contribute

## Note

This project doesn't support downloading manga. It is primarily designed for reading manga that you
have already downloaded. I have manga downloading projects however, they haven't been maintained for a while.

## Getting Started 🚀

### Docker (recommended)

1. Clone the repository:

```bash
git clone https://github.com/Rishi-Bidani/mangaviewer.git
cd mangaviewer
```

2. Copy `.env.example` to `.env` and edit it:

```bash
PORT=8080                                    # port to open the site on
MANGA_DIR=/mnt/manga                         # folder containing one sub-folder per manga
IGNORE_LIST=kenja no mago,mangadownloader    # comma separated folders to hide
```…
