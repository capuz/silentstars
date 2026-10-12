---
repo: "Deltares/imod_coupler"
name: "imod_coupler"
description: "Application for coupling hydrological kernels."
readmeQualityOk: true
url: "https://github.com/Deltares/imod_coupler"
homepage: "https://deltares.github.io/iMOD-Documentation/coupler"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 17
forks: 2
openIssues: 40
closedIssues: 50
watchers: 3
contributors: 15
recentReleases: 0
createdAt: "2020-06-22T14:13:08Z"
lastCommitAt: "2026-10-12T11:15:44Z"
lastReleaseAt: "2024-03-22T12:48:59Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 86
undervaluedScore: 59
maintainers: ["deltares-service-account", "Manangka", "JoerivanEngelen"]
openGraphImageUrl: "https://opengraph.githubassets.com/539243445a9365d0101aad992df80e3287bee18b8489eae9473bec0d83354bd0/Deltares/imod_coupler"
---

# iMOD Coupler

`imod_coupler` couples hydrological kernels. It currently focuses on groundwater and supports coupling between MetaSWAP, MODFLOW 6, and Ribasim.

It is a command-line application that can be run via:

```sh
imodc /path/to/imod_coupler.toml
```

For usage information, run:

```sh
imodc --help
```

## Issues

Deltares colleagues can find the issue tracker on [Jira](https://issuetracker.deltares.nl/secure/RapidBoard.jspa?rapidView=469&projectKey=IMOD6&view=planning&selectedIssue=IMOD6-840).

## Contributing

### Setting up your machine

To develop `imod_coupler` locally:

1. Download and install [pixi](https://pixi.sh).
2. Clone the repository and navigate to the project root.
3. Create the development environment:

   ```sh
   pixi install -e dev
   ```

4. Setup the test dependencies:

   ```sh
   pixi run -e dev setup-test-dependencies
   ```

   This command:
   - Downloads the kernel dependencies (MetaSWAP, MODFLOW 6 & Ribasim) and the [regression imod_coupler](https://github.com/Deltares/imod_coupler/releases)
   - Downloads the [MetaSWAP lookup table](https://s3.deltares.nl/metaswap/db/LHM2016_v01vrz/)
   - Generates a `.env` file in the project root with…
