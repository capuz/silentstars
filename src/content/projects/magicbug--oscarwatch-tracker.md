---
repo: "magicbug/OscarWatch-Tracker"
name: "OscarWatch-Tracker"
description: "OscarWatch Multiplatform Satellite Tracking System"
readmeQualityOk: true
url: "https://github.com/magicbug/OscarWatch-Tracker"
homepage: "https://oscarwatch.org/tracker"
language: "C#"
languages: ["C#"]
languagePcts: [95]
topics: ["amateur-radio", "amsat", "ham", "ham-radio", "satelite-tracking", "satellite"]
stars: 70
forks: 18
openIssues: 27
closedIssues: 92
watchers: 2
contributors: 11
recentReleases: 0
createdAt: "2026-05-20T23:58:13Z"
lastCommitAt: "2026-11-05T11:24:17Z"
lastReleaseAt: "2026-05-28T21:02:07Z"
status: "thriving"
tags: ["funded", "community_hub"]
healthScore: 95
undervaluedScore: 37
maintainers: ["magicbug", "g4dpz", "cursoragent"]
openGraphImageUrl: "https://opengraph.githubassets.com/cfb6645f233cb38666a9f9d5dbc91f21921134ddba0bc858dfe09a62e5c7962c/magicbug/OscarWatch-Tracker"
fundingLinks: ["GITHUB:https://github.com/magicbug", "CUSTOM:https://www.paypal.com/paypalme/PGoodhall"]
discussionCount: 22
---

# OscarWatch

Desktop satellite tracking for amateur radio operators. OscarWatch shows where AMSAT spacecraft are, predicts passes over your station, works out Doppler-corrected uplink and downlink frequencies, and can drive your rotator and radio during a pass, all from one map-centred window.

TLEs and the transponder frequency database are published from [tle.oscarwatch.org](https://tle.oscarwatch.org/) ([TLEs](https://tle.oscarwatch.org/), [transponder database](https://tle.oscarwatch.org/satellite_database.json)).

## Who is this for?

Licensed amateurs working **VHF/UHF satellites**: FM cubesats (SO-50, ISS, …), linear transponders (RS-44, FO-29, …), and similar modes. You should already be comfortable with pass times, azimuth, elevation, and Doppler; OscarWatch handles the maths and optional hardware control so you can focus on the contact.

You do **not** need to be a programmer to use published builds.

## What OscarWatch does

- **Map and sky plot**: subpoint, ground track, footprint, and a polar view from your QTH; optional **pass elevation timeline** below the map (upcoming passes as elevation profiles over UTC time — click to focus); optional **DX station** marker and…
