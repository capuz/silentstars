---
repo: "observerly/astrometry"
name: "astrometry"
description: "observerly’s lightweight, zero-dependency, fully-tree shakeable type-safe astrometry library for TypeScript. Accurately determine the positions of the Sun, Moon, and planets, handle coordinate transformations with ease, calculate transit times for any celestial object and integrate precision astronomy into your projects."
readmeQualityOk: true
url: "https://github.com/observerly/astrometry"
homepage: "https://www.npmjs.com/package/@observerly/astrometry"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["almanac", "astrometry", "astronomy", "conjunction", "eclipses", "ephemeris", "equinoxes", "moon", "planets", "sun"]
stars: 30
forks: 1
openIssues: 2
closedIssues: 9
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-08-13T10:49:52Z"
lastCommitAt: "2026-11-01T10:45:00Z"
lastReleaseAt: "2023-08-24T16:22:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 60
maintainers: ["michealroberts"]
openGraphImageUrl: "https://opengraph.githubassets.com/06b72803ec7823f9bf1b21f2b188e1fa664f63b3692ac31cb42e2bd470c2fe3d/observerly/astrometry"
---

---

## Introduction

🔭 astrometry is observerly's lightweight, zero-dependency\*, type safe astrometry library written in TypeScript. It is aimed to be easy to use, and malleable to your usage, for amateur-astronomers and the general astronomy community to understand how positional astronomy works on a soft high-level.

The key tenants of the library is to use as JavaScript primatives. The notion of the JavaScript `Date` is relied upon heavily and we do not rely on, or enforce reliance on, any third-party datetime or timezone related libraries. This is to ensure that the library can be used in any environment, and that the user can supplement usage with their own datetime libraries of choice, if required.

The second key tenant, is that all coordinates are required to be in degrees for mathematical calculations, and, importantly, in the standard ICRS epoch J2000.

**N.B.** _This project is currently in the early stages of development and is not yet ready for production use._ As it is still in the early stages of development, the API is subject to change.

## Features

It can be used to calculate the horizontal position of the sun, moon, planets, and stars in the sky at a given…
