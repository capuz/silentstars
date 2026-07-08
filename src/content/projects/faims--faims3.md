---
repo: "FAIMS/FAIMS3"
name: "FAIMS3"
description: "Transforming field research by overcoming the ‘digitisation bottleneck’, and reducing the cost of creating digital and FAIR-compliant data. FAIMS3 is a platform for producing custom electronic notebooks for offline field-data collection. "
readmeQualityOk: true
url: "https://github.com/FAIMS/FAIMS3"
homepage: "https://faims.edu.au"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 25
forks: 11
openIssues: 66
closedIssues: 154
watchers: 10
contributors: 27
recentReleases: 0
createdAt: "2021-02-18T04:07:41Z"
lastCommitAt: "2026-07-08T05:40:15Z"
lastReleaseAt: "2022-12-01T02:39:12Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 93
undervaluedScore: 62
maintainers: ["PeterBaker0", "stevecassidy", "jayenashar"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/339931852/76b5fb00-c2e1-11eb-9f84-2955016af72b"
---

# FAIMS3

FAIMS3 is an open-source tool for offline field data-collection brought to you by the FAIMS Project. The FAIMS Project was funded by the ARDC ([https://dx.doi.org/10.47486/PL110]), Macquarie University, and CSIRO along with our other partners.

## Directory Structure

The repository contains the following:

- /api: contains the conductor
- /app: contains the the web, Android and iOS applications
- /designer: contains designer web application
- /docs: contains the high level documentation for the project
- /infrastucture: contains the AWS CDK deployment scripts
- /library: shared library for the project
- /tests: contains the end-to-end tests for the project

## Local development quick start

### Prerequisites

You'll need Node.js 24 and pnpm installed. We strongly recommend
using [`nvm`](https://github.com/nvm-sh/nvm) (node version manager).

Install and activate Node v24:

```bash
nvm install 24
nvm use 24
```

You will also need Docker and Docker Compose installed.

GeoPackage export requires [GDAL](https://gdal.org/) (`ogr2ogr` on PATH). This is
included in the API Docker image and devcontainer. For native development, `./dev.sh`
warns if GDAL is missing; install…
