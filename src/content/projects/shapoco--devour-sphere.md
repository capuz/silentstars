---
repo: "shapoco/devour-sphere"
name: "devour-sphere"
description: "Shooting Game"
readmeQualityOk: true
url: "https://github.com/shapoco/devour-sphere"
language: "C++"
languages: ["C++"]
languagePcts: [83]
stars: 9
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 8
createdAt: "2026-09-14T00:57:31Z"
lastCommitAt: "2026-11-07T13:54:06Z"
lastReleaseAt: "2026-09-25T04:00:16Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 67
undervaluedScore: 54
maintainers: ["shapoco"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1369088965/74d20be3-f578-4b05-a919-919ffca48a80"
---

# Devour Sphere

English | [日本語](https://github.com/shapoco/devour-sphere/blob/HEAD/README.ja.md)

https://github.com/user-attachments/assets/b8855ba7-7ce3-45a3-9633-efb35ae5db60

A 3D shooter played above "the Sphere", a cyberspace world: fight the other
entities, devour the fragments they drop and grow huge.
The same core program runs on embedded boards (RP2350 / RP2040 / ESP32S3 /
ESP32-P4) and in the browser (WebAssembly).

The game is a sample application written to show off [ShapoGFX](https://github.com/shapoco/shapo-gfx),
a graphics library for embedded systems. All of the drawing goes through it:
scanline 3D that needs no framebuffer, line and point primitives, 2D drawing
and fonts.

- **Play in the browser:** https://shapoco.github.io/devour-sphere/play/
- **Specifications (Japanese):** [SPEC.md](https://github.com/shapoco/devour-sphere/blob/HEAD/SPEC.md), [core/SPEC.md](https://github.com/shapoco/devour-sphere/blob/HEAD/core/SPEC.md),
  and a SPEC.md in each port's directory (see [Ports](#ports))

## Download

- **M5Stack Tab5/StickS3:** a prebuilt firmware can be flashed straight from
  [M5Burner](https://docs.m5stack.com/en/download) — look for "Devour Sphere"
  in its…
