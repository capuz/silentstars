---
repo: "goncalomb/sane-wasm"
name: "sane-wasm"
description: "A WebAssembly port of the SANE API."
readmeQualityOk: true
url: "https://github.com/goncalomb/sane-wasm"
homepage: "https://goncalomb.github.io/sane-wasm/"
language: "TypeScript"
languages: ["TypeScript", "C++"]
languagePcts: [34, 20]
topics: ["libusb", "sane", "sane-backend", "scanning", "wasm", "webassembly", "webusb"]
stars: 83
forks: 3
openIssues: 3
closedIssues: 11
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-04-08T16:06:05Z"
lastCommitAt: "2026-10-26T18:02:28Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 45
maintainers: ["goncalomb", "Shigosag"]
openGraphImageUrl: "https://opengraph.githubassets.com/1b7a833e321d2908cb3b80f0de598d0914fc30dde29fd0459d56830beb0de3b4/goncalomb/sane-wasm"
---

# SANE WebAssembly (sane-wasm)

A project to bring the [SANE API](http://www.sane-project.org/intro.html) to Node.js and the Web using WebAssembly.

It supports USB scanners on browser environments through the [WebUSB API](https://developer.mozilla.org/en-US/docs/Web/API/WebUSB_API) and on Node.js using [node-usb](https://github.com/node-usb/node-usb).

This works by compiling all SANE backends (and required dependencies) to WebAssembly using Emscripten. The other key piece is @RReverser's bridge from libusb to WebUSB ([article](https://web.dev/articles/porting-libusb-to-webusb)/[article](https://web.dev/articles/porting-gphoto2-to-the-web)/[code](https://github.com/libusb/libusb/pull/1057)/[code](https://github.com/libusb/libusb/pull/1339)) for direct USB access.

Right now, it includes [all backends](http://www.sane-project.org/lists/sane-backends-cvs.html) that have support for at least one USB device. No [external backends](http://www.sane-project.org/lists/sane-backends-external.html) are included at the moment.

## WebScan

**Check [webscan.goncalomb.com](https://webscan.goncalomb.com/) ([source](https://github.com/goncalomb/webscan)) for a demo of sane-wasm.** This is a…
