---
repo: "AMSTerUsers/AMSTer_Distribution"
name: "AMSTer_Distribution"
description: "This AMSTer Software is dedicated to automatic SAR/InSAR mass processing for amplitude, coherence or deformation time series. It can also perform single interferometric tasks. It is based on C and C++ software for InSAR processing and MSBAS inversion, wrapped with bash and python scripts for automation. "
readmeQualityOk: true
url: "https://github.com/AMSTerUsers/AMSTer_Distribution"
language: "Shell"
languages: ["Shell"]
languagePcts: [91]
stars: 52
forks: 12
openIssues: 0
closedIssues: 1
watchers: 8
contributors: 30
recentReleases: 0
createdAt: "2022-10-21T08:01:52Z"
lastCommitAt: "2026-10-07T10:30:40Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 85
undervaluedScore: 38
maintainers: ["ndoreye"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e334e9383bb0c0fe941463dd04a0d7c78df34db01f0a03ee1f18d9cd3a05457/AMSTerUsers/AMSTer_Distribution"
discussionCount: 7
---

# AMSTer Software

AMSTer: SAR & InSAR Automated Mass processing Software for Multidimensional Time series. 
"To crunch the SAR & InSAR mass processing"

This repo contains the shell scripts, codes and docs required for installing and 
running AMSTer software (formerly named MasTer). 

AMSTer is mostly based on 3 elements:
- an InSAR processor (AMSTer Engine)
- a time series processor (MSBAS; https://doi.org/10.4095/313749)
- a set of mostly shell (bash) and some python scripts (AMSTer Toolbox)

AMSTer is aiming at processing automatically and incrementally a large number of interferometric pairs and 
feeding and running the MSBAS processor [Samsonov and d’Oreye, 2012, 2017; Samsonov et 
al., 2017, 2020] in order to obtain the desired 2D or 3D deformation maps and time series. 

Of course, AMSTer can also perform individual differential interferograms (for deformation 
measurement or DEM creation purposes). 

AMSTer can also create time series of coherence or amplitude maps coregistered on a Global 
Primary (both in radar geometry or in geographic coordinates), e.g. for land use or geomorphological changes tracking. 

AMSTer is able to process any type of SAR data (ERS1 & 2,…
