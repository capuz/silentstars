---
repo: "communitiesuk/epb-home-energy-model"
name: "epb-home-energy-model"
description: "Rust implementation of HEM calculation"
readmeQualityOk: true
url: "https://github.com/communitiesuk/epb-home-energy-model"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 33
forks: 17
openIssues: 0
closedIssues: 0
watchers: 9
contributors: 15
recentReleases: 0
createdAt: "2023-06-30T18:58:29Z"
lastCommitAt: "2026-11-27T16:25:32Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 89
undervaluedScore: 56
maintainers: ["shieldo", "Hard-Luck", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d650641ba6d0058eca094b924b41335d88c7b516d00167e33f2db1c5a80e9973/communitiesuk/epb-home-energy-model"
---

# Home Energy Model (HEM) engine written in Rust

## Overview

The [Home Energy Model (HEM)](https://www.gov.uk/government/publications/home-energy-model-technical-documentation) is a
methodology for calculating the energy performance of buildings that is currently under development under
instruction from the UK Department for Energy Security and Net Zero (DESNZ).

This project constitutes a port into Rust of
the [calculation engine](https://dev.azure.com/Sustenic/Home%20Energy%20Model%20Reference/_git/Home%20Energy%20Model)
written in Python produced as
a candidate specification of the Home Energy Model.

Its purpose is to provide a library that is significantly more performant than the Python specification code, as well as
providing other properties to support its running as part of a live service, including well-defined errors and
instrumentation for observability.

The project is as yet functionally incomplete, but we have begun working on a test harness that will (in time) be able
to demonstrate complete 1:1 behavioural parity with the specification code.
