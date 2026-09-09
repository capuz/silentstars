---
repo: "sharky5102/fbmatrix"
name: "fbmatrix"
description: "Framebuffer RGB matrix driver for Raspberry pi"
readmeQualityOk: true
url: "https://github.com/sharky5102/fbmatrix"
language: "Python"
languages: ["Python"]
languagePcts: [84]
stars: 15
forks: 5
openIssues: 2
closedIssues: 2
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2020-01-15T20:30:31Z"
lastCommitAt: "2026-09-08T14:10:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 83
undervaluedScore: 55
maintainers: ["sharky5102"]
openGraphImageUrl: "https://opengraph.githubassets.com/1feff661bbd849fd7029a53f894fe1365e1f66aab77ecd11ad224f90e9675b0c/sharky5102/fbmatrix"
---

# FBMatrix: a HUB75 and WS281x driver library for Raspberry Pi 4 and 5

FBMatrix is a library and toolset to drive both HUB75 RGB matrix panels and ws2811 LED strings. FBMatrix first renders the target frame in memory and then drives the necessary outputs to render that frame on the LED device. All output signal processing is done by the V3D core in the raspberry pi, leaving the CPU free to do other things.

This requires the Raspberry Pi full KMS driver and its atomic DRM/KMS API. The
legacy framebuffer driver and FKMS (`vc4-fkms-v3d`) are not supported.

Right now, FBMatrix:
- Supports HUB75(e) RGB matrix displays up to 1920x32@60fps pixels with 12 BCM bitplanes
- Supports WS281x RGB strings, up to 14 strings of 2000 pixels, arbitrary positioning of the LEDs within a 2d field that the image is mapped to

### Features
- Utilizes GPU and V3D framebuffer to form 24 synchronized data streams with clock rate up to 100s of Mhz (but most HUB75 displays are limited to 30Mhz)
- Compatible with easy-to-obtain hardware (ADAFruit RGB bonnet), also for WS281x
- CPU usage relative to changes in the image; no change in image -> no CPU usage
- Rendering either by uploading RGB uint data, or by…
