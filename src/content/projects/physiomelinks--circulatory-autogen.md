---
repo: "physiomelinks/circulatory_autogen"
name: "circulatory_autogen"
description: "This project aims to automate the process of combining CellML modules into a system model, then doing parameter identification to calibrate to clinical data. Common use cases include generating coupled neuron models, generating neuron to cardiomyocyte models, generating patient specific 0D blood flow networks and more. "
readmeQualityOk: true
url: "https://github.com/physiomelinks/circulatory_autogen"
language: "Python"
languages: ["Python"]
languagePcts: [94]
stars: 5
forks: 22
openIssues: 88
closedIssues: 211
watchers: 2
contributors: 17
recentReleases: 6
createdAt: "2021-10-18T04:27:26Z"
lastCommitAt: "2026-11-13T18:34:07Z"
lastReleaseAt: "2026-09-04T13:53:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "release_machine", "fork_magnet"]
healthScore: 93
undervaluedScore: 97
maintainers: ["FinbarArgus"]
openGraphImageUrl: "https://opengraph.githubassets.com/93b8db00f59e207a7012e44865c746dcebe319f02453726becdf7fd0d1cfb2b4/physiomelinks/circulatory_autogen"
---

# Overview

This project allows the generation and calibration of cellml (and soon to be more) circulatory system models from an array of module/vessel names and connections.

**The repository is `circulatory_autogen`; the package it installs is `libcuflynx`.** They are the
same project under two names: papers, issues and this repository say *circulatory_autogen*, while
PyPI, `pip install` and every `import` say *libcuflynx*. Searching for either name should find you
this page.

> **Note:** Test results and pass percentage are displayed in the [GitHub Actions workflow summary](https://github.com/physiomelinks/circulatory_autogen/actions/workflows/tests.yml). The badge above shows the overall test status (passing/failing) for `master` of this repository, which is where pull requests are merged. 

# Installing, and what each extra costs

The package is `libcuflynx`. A plain install gives you generation, simulation, calibration,
sensitivity analysis and the built-in (emcee) MCMC:

```
pip install libcuflynx
```

Everything beyond that is an extra, because the optional parts are not small. These are
installed sizes on disk, not wheel sizes — measured by installing into a fresh venv on…
