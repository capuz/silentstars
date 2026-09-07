---
repo: "Energinet-SimTools/MTB"
name: "MTB"
description: "Energinet's Model Testbench. Automate gridcompliance studies in PSCAD and Powerfactory."
readmeQualityOk: true
url: "https://github.com/Energinet-SimTools/MTB"
homepage: "https://energinet.dk"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["powerfactory", "powersystem-simulation", "powersystems", "pscad", "renewable-energy", "solar-energy", "wind-energy", "gridcompliance", "ptx", "green-transition"]
stars: 68
forks: 21
openIssues: 1
closedIssues: 104
watchers: 9
contributors: 10
recentReleases: 0
createdAt: "2023-01-04T10:35:11Z"
lastCommitAt: "2026-09-07T08:35:42Z"
lastReleaseAt: "2024-09-05T16:19:52Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 55
maintainers: ["PRWenerginet", "JAFPEenerginet", "ZRPedro"]
openGraphImageUrl: "https://opengraph.githubassets.com/3ca3c1856f58ff743ba976709a675fbc7bbe0611d2a7d8278c8ef95490c98ca2/Energinet-SimTools/MTB"
---

# MTB (Model Test Bench)

**MTB** (**M**odel **T**est **B**ench) automates grid compliance simulation studies in both [DIgSILENT PowerFactory](https://www.digsilent.de/en/powerfactory.html) and [PSCAD](https://www.pscad.com/), with external plotting and comparison of RMS and EMT results.

MTB is intended to help facility owners and model providers evaluate simulation model behaviour in the context of Danish grid-code requirements and Energinet simulation model requirements. It includes predefined case sets for RfG, DCC, unit testing, co-located generation/demand cases, and custom user-defined studies.

## MTB Workflow

1. Configure the testcase workbook to test various requirements in e.g. EU 2016/631 with specific relevance to the Danish NC RfG
2. Set up the MTB in PowerFactory and execute the selected simulation cases
3. Set up the MTB in PSCAD and execute the selected simulation cases
4. Plot and compare RMS and EMT results making use of among other things, analytically calculated guide curves, cursor metrics, and visual inspection
5. Determine if the plant models adheres to the applicable grid codes

> [!IMPORTANT]
> Using MTB is not a guarantee of model compliance. The plant…
