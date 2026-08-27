---
repo: "Str4vinci/breos"
name: "breos"
description: "BREOS - Building Renewable Energy Optimization Software"
readmeQualityOk: true
url: "https://github.com/Str4vinci/breos"
homepage: "https://breos.readthedocs.io"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["battery", "buildings", "households", "modelling", "pv", "simulation", "solar", "storage"]
stars: 19
forks: 4
openIssues: 1
closedIssues: 4
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-04-01T23:31:23Z"
lastCommitAt: "2026-08-27T14:13:00Z"
lastReleaseAt: "2026-07-23T13:34:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 55
maintainers: ["Str4vinci"]
openGraphImageUrl: "https://opengraph.githubassets.com/ddb8b97d3eac135495141a8e80aca3cf31769c4a296789dc4162e39a55facf36/Str4vinci/breos"
discussionCount: 2
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/Str4vinci/breos/develop/docs/_static/BREOS.png">
  </picture>
</p>

# BREOS - Building Renewable Energy Optimization Software

BREOS is a Python library for simulating and optimizing PV + battery energy
systems (weather, PV production, battery aging, economics, emissions, and
multi-objective sizing) behind one stable `breos.App` facade, with lower-level
modules for building custom study pipelines. The PV modeling is powered by
[pvlib python](https://pvlib-python.readthedocs.io/), which supplies the solar
position, irradiance, cell-temperature, and single-diode physics BREOS builds
its production pipeline on.

**📖 Full documentation: [breos.readthedocs.io](https://breos.readthedocs.io/)**

## Features

- **Weather** — TMY from PVGIS/NSRDB and historical data from Open-Meteo, at hourly or 15-minute resolution.
- **PV production** — pvlib CEC single-diode model, with a small example module catalog to get started.
- **Multi-array systems** — combine multiple faces/orientations (e.g. an east-west roof) at the DC stage instead of one representative tilt.
- **Battery** — energy balance…
