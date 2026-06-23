---
repo: "foresterre/imagineer"
name: "imagineer"
description: "🦜 Accessible image processing and conversion from the terminal. Front-end for image-rs/image. Formerly 'sic'"
url: "https://github.com/foresterre/imagineer"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["rust", "cli", "image-processing", "image-converter", "terminal-app", "convert-images", "sic", "image-manipulation", "command-line", "blur"]
stars: 223
forks: 6
openIssues: 30
closedIssues: 195
watchers: 7
contributors: 7
recentReleases: 0
createdAt: "2017-11-12T03:12:00Z"
lastCommitAt: "2026-06-23T06:42:54Z"
lastReleaseAt: "2020-05-06T15:49:38Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero", "funded"]
healthScore: 74
undervaluedScore: 31
maintainers: ["foresterre", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f73021284373151ceffa4989ad6d0b530c48ad9e065ee43d1024db5cc7240c40/foresterre/imagineer"
fundingLinks: ["GITHUB:https://github.com/foresterre", "BUY_ME_A_COFFEE:https://buymeacoffee.com/foresterre", "THANKS_DEV:https://thanks.dev/u/gh/foresterre"]
---

# imagineer image cli

_Convert images, and perform image operations from the command-line._

**`imagineer`** (formerly `sic`) is a CLI front-end for the [image](https://github.com/image-rs/image) and [imageproc](https://github.com/image-rs/imageproc) crates.

Basic usage: `ig --input example.png --output converted.avif` (more at: `ig --help`) 

**The new name**

- Why a rename? 'sic' originally stood for "simple image cli", but if you have two custom parsers, support batch image processing, static and animated images, is it still "simple"?
- A few years ago 'sic' became 'sic image cli', but mostly just for me
- Recently, I decided I like a new name, something fun, something which is closer to the word 'image', and also the name of the crate for which this project is a CLI frontend. Of course, some crate names were already taken, but I found something I liked.
- I present to you: 'imagineer', a pun on the words "image", "engineering" and "imagination"

### Installation

#### Install with cargo:

* run `cargo install imagineer`

#### Install with [Homebrew](https://brew.sh):

* `brew install imagineer`

#### Pre-build binaries

* download from…
