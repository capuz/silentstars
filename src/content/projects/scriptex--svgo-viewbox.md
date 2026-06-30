---
repo: "scriptex/svgo-viewbox"
name: "svgo-viewbox"
description: "Add viewBox attribute to your SVGs and then optimize them with SVGO"
url: "https://github.com/scriptex/svgo-viewbox"
homepage: "https://atanas.info/portfolio/open-source/svgo-viewbox"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["svg-images", "svgo", "svg-optimizer", "viewbox"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 11
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2020-10-26T13:42:24Z"
lastCommitAt: "2026-06-30T06:50:12Z"
lastReleaseAt: "2023-04-25T08:53:51Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded"]
healthScore: 83
undervaluedScore: 49
maintainers: ["renovate[bot]", "scriptex", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/307385706/644f6e00-17a2-11eb-8f96-b8c0a05fd56e"
fundingLinks: ["GITHUB:https://github.com/scriptex", "PATREON:https://patreon.com/atanas", "KO_FI:https://ko-fi.com/scriptex", "LIBERAPAY:https://liberapay.com/scriptex", "ISSUEHUNT:https://issuehunt.io/r/scriptex", "CUSTOM:paypal.me/scriptex", "CUSTOM:revolut.me/scriptex"]
---

# svgo-viewBox

> Add `viewBox` to SVG files using SVGO

Node JS script which uses SVGO and a custom plugin in order to add `viewBox` attribute to all SVG files in a folder or to a single SVG file.

## Dependencies

1. NodeJS
2. NPM or Yarn
3. SVGO installed and configured - you should have a `svgo.config.js` file. If you don't, the default config file will be used.
4. Some SVG files which have `width` and `height` attribute but lack the `viewBox` attribute.

## Usage

```sh
svgo-viewbox --help

#   Usage
#       $ svgo-viewbox --arg1 --arg2
#
#   Options
#       --input, -i         path to folder which contains SVG files or a single svg file, defaults to current working directory
#       --svgo-file, -f     path to SVGO configuration file in JS format (https://github.com/svg/svgo#configuration), defaults to the built-in SVGO configuration
#
#   Examples
#       $ svgo-viewbox --input ./assets/images/svg --svgo-file ./svgo.config.js
#       $ svgo-viewbox -i ./assets/images/svg
#       $ svgo-viewbox -i ./assets/images/svg/file.svg
#       $ svgo-viewbox
```

### As an NPM script

First install the module as a development dependency

```sh
npm i svgo-viewbox --save-dev

# or

yarn…
