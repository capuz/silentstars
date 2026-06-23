---
repo: "marrink-lab/polyply_1.0"
name: "polyply_1.0"
description: "Generate input parameters and coordinates for atomistic and coarse-grained simulations of polymers, ssDNA, and carbohydrates"
url: "https://github.com/marrink-lab/polyply_1.0"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["macromolecules", "martini", "polymers", "md", "coarse-graining", "dna", "carbohydrates", "atomistic-simulations", "hacktoberfest"]
stars: 191
forks: 37
openIssues: 46
closedIssues: 168
watchers: 6
contributors: 16
recentReleases: 0
createdAt: "2020-04-05T14:18:52Z"
lastCommitAt: "2026-06-23T23:30:18Z"
lastReleaseAt: "2023-10-20T12:00:58Z"
status: "thriving"
tags: ["legacy_hero", "community_hub"]
healthScore: 84
undervaluedScore: 37
maintainers: ["fgrunewald", "ricalessandri", "hannaomi"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/253252088/3e2b22e0-98d9-493d-8a11-296cf267ad6d"
discussionCount: 56
---

# polyply

![license](https://img.shields.io/github/license/marrink-lab/polyply_1.0)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/marrink-lab/polyply_1.0/pypi_deploy.yml)

## Functionality
Polyply is a python suite designed to facilitate the generation of input files and system coordinates for simulating
(bio)macromolecules such as synthetic polymers or polysaccharides. Input files can be generated either from user
specified building blocks or by using the polymers available in the library. The library currently includes polymer
definitions for the GROMOS (2016H66 & 53A6), OPLS, Parmbsc1, and Martini (2 & 3) force-fields. Coordinates are generated
by a multiscale random-walk protocol that is able to generate condensed phase systems at target density, as well as
more heterogeneous systems such as aqueous two phase systems. In addition, polyply allows to tailor initial chain
conformations by providing a build file. For example, the persistence length can be used to control the initial chain
dimensions. The [quick start](https://github.com/marrink-lab/polyply_1.0/wiki/Quick-Start) section in the wiki gives
an overview of the most important commands.…
