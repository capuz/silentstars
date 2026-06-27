---
repo: "mauricelam/ScrollMaps"
name: "ScrollMaps"
description: "A browser extension that lets you scroll with two fingers on your trackpad within Google Maps"
url: "https://github.com/mauricelam/ScrollMaps"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [64, 29]
topics: ["chrome-extension", "firefox-addon", "extension", "browser-extension", "google-maps", "edge-extension"]
stars: 29
forks: 8
openIssues: 5
closedIssues: 25
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2013-01-20T22:49:39Z"
lastCommitAt: "2026-06-27T06:23:47Z"
lastReleaseAt: "2020-02-05T07:22:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 83
undervaluedScore: 39
maintainers: ["dependabot[bot]", "mauricelam", "google-labs-jules[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0bb860e3a0898425dd68c125705edf33e6f06095ab995ad11e895470e8d57b71/mauricelam/ScrollMaps"
fundingLinks: ["GITHUB:https://github.com/mauricelam"]
discussionCount: 2
---

# ScrollMaps
Lets you scroll with two fingers on your trackpad within online maps

- [Chrome web store link](https://chrome.google.com/webstore/detail/scrollmaps/jifommjndpnefcfplgnbhabocomgdjjg)
- [Firefox Add-ons store link](https://addons.mozilla.org/en-US/firefox/addon/scrollmaps)
- [Microsoft Edge addon link](https://microsoftedge.microsoft.com/addons/detail/scrollmaps/mdhhlgkmnlaiofbbemcmigjleiiefmga)

## Supported map providers

- Google Maps
- MapBox
- Esri ArcGIS
- Apple MapKit JS
- OpenStreetMap
- and a few others

## Building

After checking out the source, initialize the dependencies using `npm install`.

After making changes, build a development version using `gulp --<chrome/firefox/edge>`. This will create an unpacked extension under `gen/plugin-10000-<browser>` that can then be loaded into Chrome as an unpacked extension.

You can also use `gulp watch --<chrome/firefox/edge>` to watch for changes and build new dev versions automatically.

To build the current release version for all browsers, use `gulp release`.

## Unit testing

Unit tests can be run using `gulp unit` or `gulp watchunit`.

A filter can be applied with `gulp unit --filter 'Scrollability'`

##…
