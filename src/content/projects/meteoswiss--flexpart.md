---
repo: "MeteoSwiss/flexpart"
name: "flexpart"
description: "Lagrangian transport and dispersion model"
readmeQualityOk: true
url: "https://github.com/MeteoSwiss/flexpart"
homepage: "https://www.flexpart.eu"
language: "Fortran"
languages: ["Fortran"]
languagePcts: [92]
topics: ["emergency-response", "nwp", "atmospheric-modelling", "dispersion-model", "numericalweatherpredictions"]
stars: 9
forks: 3
openIssues: 1
closedIssues: 0
watchers: 6
contributors: 17
recentReleases: 0
createdAt: "2022-11-11T15:06:55Z"
lastCommitAt: "2026-10-23T09:32:36Z"
lastReleaseAt: "2026-06-03T13:50:48Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 73
undervaluedScore: 62
maintainers: ["janvt", "pirmink", "victoria-cherkas"]
openGraphImageUrl: "https://opengraph.githubassets.com/ff92984d7f34c0fed28cb7e8a84c87492d74f0ef048f5b622917cfb38dae6b57/MeteoSwiss/flexpart"
---

# README #

This repository contains the Lagrangian particle dispersion model FLEXPART.

### Dependencies

 * Jasper and grib_api or ECCodes
 * NetCDF (optional)

### Compilation

To compile for MeteoSwiss read [README.meteoswiss.md](https://github.com/MeteoSwiss/flexpart/blob/HEAD/README.meteoswiss.md).

Otherwise edit the `makefile` to adapt the paths to the libraries and the include files, then:

```
> cd src
> make 
```

### Deployment instructions 

FLEXPART is a standalone executable. Run it with

    ./src/FLEXPART
    
in the main directory.

For more information about FLEXPART version 10, see [www.flexpart.eu](https://www.flexpart.eu)
