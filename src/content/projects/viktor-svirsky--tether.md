---
repo: "viktor-svirsky/tether"
name: "tether"
description: "Share your iPhone's internet with an iPad, Mac or travel router over WireGuard, even when your plan blocks hotspot"
readmeQualityOk: true
url: "https://github.com/viktor-svirsky/tether"
homepage: "https://viktor-svirsky.github.io/tether/add/"
language: "Swift"
languages: ["Swift", "Go"]
languagePcts: [65, 29]
topics: ["altstore", "hotspot", "ios", "iphone", "sideloading", "sidestore", "swift", "tethering", "wireguard"]
stars: 33
forks: 5
openIssues: 12
closedIssues: 23
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-10-27T19:47:58Z"
lastCommitAt: "2026-10-31T15:54:46Z"
lastReleaseAt: "2026-10-30T17:31:24Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 93
undervaluedScore: 44
maintainers: ["viktor-svirsky", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f2d9bf68b5f7d3b6367030e52168f35679553f6621c83fb38ce2dec4d4068674/viktor-svirsky/tether"
discussionCount: 0
---

# Tether

Share your iPhone's internet with your iPad, Mac or travel router, even when your cellular plan blocks or slows down Personal Hotspot.

**Each device needs a WireGuard client.** The free WireGuard app works on an iPad, iPhone or Mac, and most travel routers (GL.iNet, UniFi Travel Router) have one built in. A device without WireGuard can still join the hotspot, but its traffic goes straight out as hotspot traffic and Tether doesn't help it.

## Quick start

1. [Install Tether on your iPhone](#install-tether-on-your-iphone) with SideStore or AltStore, or build it on a Mac. Already have SideStore or AltStore? [Add Tether in one tap](https://viktor-svirsky.github.io/tether/add/) from your iPhone.
2. Turn on Personal Hotspot and open Tether. It shows a QR code.
3. On the iPad or Mac, install the free WireGuard app and [add the tunnel](#connect-a-device-with-wireguard) from that code. Join the hotspot and turn the tunnel on.

That's it. The device shows up in Tether as connected, and its traffic leaves as the iPhone's own.

## Why this works

Carriers can tell when traffic comes from a device that's connected to your hotspot, and some plans block it or slow it to a crawl.…
