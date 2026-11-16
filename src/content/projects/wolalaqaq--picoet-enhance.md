---
repo: "WolalaQAQ/PicoET-Enhance"
name: "PicoET-Enhance"
description: "Runtime per-eye gaze enhancement for PICO 4 Pro (Magisk module)"
readmeQualityOk: true
url: "https://github.com/WolalaQAQ/PicoET-Enhance"
language: "C++"
languages: ["C++", "Java", "C"]
languagePcts: [34, 26, 22]
stars: 11
forks: 3
openIssues: 1
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-10-02T03:13:38Z"
lastCommitAt: "2026-11-16T04:25:13Z"
lastReleaseAt: "2026-11-14T16:25:27Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 71
undervaluedScore: 37
maintainers: ["WolalaQAQ"]
openGraphImageUrl: "https://opengraph.githubassets.com/584dd1cd4c60cde020865ad74d28e7d47f6ce1d843f094849a15bdab4afc3ea6/WolalaQAQ/PicoET-Enhance"
---

# PicoET-Enhance

English | [简体中文](https://github.com/WolalaQAQ/PicoET-Enhance/blob/HEAD/README_zh.md)

An eye-tracking enhancement Magisk module for the PICO 4 Pro: it opens the eye-tracking service's per-eye gate for real pupil data, decouples the facial expression model so each eye is processed on its own, and targets 90 Hz for both eye and mouth expressions by default instead of the stock rate of about 24 Hz. Use it with [PicoFacialBridge](https://github.com/WolalaQAQ/PicoFacialBridge) and [UnifiedPicoModule](https://github.com/WolalaQAQ/UnifiedPicoModule).

> v2.5.2 · PICO 4 Pro / PICO OS 5.13.7 · [Changelog](https://github.com/WolalaQAQ/PicoET-Enhance/blob/HEAD/CHANGELOG.md)

## What it does

The PICO 4 Pro firmware tracks each eye, but its facial expression model mixes the two eyes before output, so blink, look direction, wideness and brows for one eye depend on the other eye's inputs. It also updates these expressions only about 24 times a second, although the eye cameras run at 90 Hz. This module changes three things at runtime:

- **Real pupil data**: it opens the per-eye gate inside the eye-tracking service, so real pupil diameter data is written to shared memory.
-…
