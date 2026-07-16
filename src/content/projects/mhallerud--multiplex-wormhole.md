---
repo: "mhallerud/multiplex_wormhole"
name: "multiplex_wormhole"
description: "In silico optimization for multiplex PCR primer design for targeted sequencing applications."
readmeQualityOk: true
url: "https://github.com/mhallerud/multiplex_wormhole"
homepage: "https://mhallerud.github.io/multiplex_wormhole/"
language: "Python"
languages: ["Python"]
languagePcts: [86]
stars: 7
forks: 2
openIssues: 1
closedIssues: 9
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-08-01T17:04:28Z"
lastCommitAt: "2026-07-16T06:00:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 83
maintainers: ["mhallerud"]
openGraphImageUrl: "https://opengraph.githubassets.com/91e33b24238514be03c830212d225b9eff9c2752508055c3a77a57006731aa28/mhallerud/multiplex_wormhole"
---

# multiplex_wormhole
*In silico* optimization for multiplex PCR assays that minimized predicted primer dimer loads. The pipeline was developed for genotyping by amplicon sequencing (i.e., reduced SNP panel) applications, however, the process is transferable to any multiplex PCR targeted sequencing approach. The impetus for multiplex_wormhole was genotyping noninvasive wildlife genetic samples. Default primer design settings are therefore conservative and tailored towards amplifying low concentration and degraded DNA such as that found in fecal and hair samples. 

Full documentation: [https://mhallerud.github.io/multiplex_wormhole](https://mhallerud.github.io/multiplex_wormhole/)

## Installation
### Set up a virtual environment
multiplex_wormhole was built and tested on MacOS with Python v3.9.13 in the Spyder IDE managed under Anaconda-Navigator. For those new to Python or with existing python packages, [Anaconda](https://www.anaconda.com/products/navigator) is the recommended virtual environment manager. For a conda virtual environment within your working directory:
```
conda create -n py39 python=3.9 #create new virtual env w/ python v3.9
conda activate py39 #enter virtual env…
