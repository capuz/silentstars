---
repo: "NatLabRockies/OpenStudio-HPXML"
name: "OpenStudio-HPXML"
description: "Modeling of residential buildings in EnergyPlus using OpenStudio/HPXML."
readmeQualityOk: true
url: "https://github.com/NatLabRockies/OpenStudio-HPXML"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [99]
stars: 70
forks: 30
openIssues: 132
closedIssues: 435
watchers: 19
contributors: 25
recentReleases: 0
createdAt: "2018-11-02T23:02:25Z"
lastCommitAt: "2026-11-05T00:22:24Z"
lastReleaseAt: "2022-05-12T23:56:04Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 93
undervaluedScore: 50
maintainers: ["shorowit", "joseph-robertson", "jmaguire1"]
openGraphImageUrl: "https://opengraph.githubassets.com/b09da52258a098b07c083fc1df158129a9191a8f84b87de2164fc05a00f845dc/NatLabRockies/OpenStudio-HPXML"
---

# OpenStudio®-HPXML

OpenStudio-HPXML allows running residential [EnergyPlus™ simulations](https://energyplus.net/) using an [HPXML file](https://hpxml.nlr.gov/) for the building description.
It is primarily intended to be used by user interfaces or other automated software workflows that automatically produce the HPXML file.

OpenStudio-HPXML can accommodate a wide range of different building technologies and geometries.
End-to-end simulations typically run in 3-10 seconds, depending on complexity, computer platform and speed, etc.

For more information on running simulations, generating HPXML files with the appropriate inputs to run EnergyPlus, etc., please visit the [documentation](https://openstudio-hpxml.readthedocs.io/en/latest).

## Workflows

A simple `run_simulation.rb` script is provided to run a residential EnergyPlus simulation from an HPXML file.
See the [Usage Instructions](https://openstudio-hpxml.readthedocs.io/en/latest/usage_instructions.html) for documentation on running the workflow.

Since [OpenStudio measures](http://natlabrockies.github.io/OpenStudio-user-documentation/getting_started/about_measures/) are used for model generation, additional…
