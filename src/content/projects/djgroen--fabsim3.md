---
repo: "djgroen/FabSim3"
name: "FabSim3"
description: "Python 3 version of FabSim"
readmeQualityOk: true
url: "https://github.com/djgroen/FabSim3"
language: "Python"
languages: ["Python"]
languagePcts: [85]
topics: ["automation", "multiscale-simulation", "workflow-automation", "high-performance-computing", "python3"]
stars: 27
forks: 11
openIssues: 6
closedIssues: 204
watchers: 14
contributors: 42
recentReleases: 0
createdAt: "2017-10-31T06:27:01Z"
lastCommitAt: "2026-10-23T12:04:05Z"
lastReleaseAt: "2020-09-25T10:56:41Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 74
undervaluedScore: 45
maintainers: ["mzrghorbani", "djgroen"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/108954591/78c83680-7c91-11e9-8b5b-9bb984f9aeb2"
---

FabSim
======

**For the full FabSim3 documentation, please visit https://fabsim3.readthedocs.io**

FabSim is a Python-based automation toolkit for scientific simulation and data processing workflows, licensed under the BSD 3-clause license. It aims to enable users to perform remote tasks from a local command-line, and to run applications while curating the environment variables and the input and output data in a systematic manner. To provide that curation, FabSim uses a basic data transfer functionalities such as rsync and ssh. 

FabSim also contains a system for defining machine-specific configurations, including templates to execute jobs through schedulers such as PBSPro, Loadleveller and SGE. These machine-specific configurations are stored in the repository, apply to all applications run on that machine, and can be updated by any contributor who feels that a fix or improvement is required.

FabSim relies strongly on Fabric (http://www.fabfile.org, shown to work with versions 1.5.3 and 1.10.0) and PyYAML. Previous versions of FabSim (most notably FabHemeLB and FabMD) have been used to run simulation workflows on machines such as ARCHER, SuperMUC, BlueJoule, as well as local…
