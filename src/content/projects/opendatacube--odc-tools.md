---
repo: "opendatacube/odc-tools"
name: "odc-tools"
description: "Useful tools and libraries for working with Open Data Cube"
readmeQualityOk: true
url: "https://github.com/opendatacube/odc-tools"
language: "Python"
languages: ["Python", "Jupyter Notebook"]
languagePcts: [71, 26]
topics: ["opendatacube", "python3"]
stars: 64
forks: 32
openIssues: 36
closedIssues: 91
watchers: 18
contributors: 38
recentReleases: 0
createdAt: "2018-10-11T22:46:28Z"
lastCommitAt: "2026-08-26T04:15:29Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 34
maintainers: ["dependabot[bot]", "pre-commit-ci[bot]", "SpacemanPaul"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b0e411aa56ed0dfa532a7e8a967b006b3459f850234e010f6e23c9399a28914/opendatacube/odc-tools"
---

DEA Prototype Code
==================

This repository provides developmental [libraries](https://github.com/opendatacube/odc-tools/tree/develop/libs)
and [CLI tools](https://github.com/opendatacube/odc-tools/tree/develop/apps) for Open Datacube.

- AWS S3 tools
- CLIs for using ODC data from AWS S3 and SQS 
- Utilities for data visualizations in notebooks
- Experiments on optimising Rasterio usage on AWS S3 

Full list of libraries, and install instructions:

- `odc.ui` tools for data visualization in notebook/lab
- `odc.io` common IO utilities, used by apps mainly
- `odc-cloud[ASYNC,AZURE,THREDDS]` cloud crawling support package
  - `odc.aws` AWS/S3 utilities, used by apps mainly
  - `odc.aio` faster concurrent fetching from S3 with async, used by apps `odc-cloud[ASYNC]`
  - `odc.{thredds,azure}` internal libs for cloud IO `odc-cloud[THREDDS,AZURE]`

## Promoted to their own repositories 
- `odc.stats` large scale processing framework (Moved to [odc-stats](http://github.com/opendatacube/odc-stats))
- `odc.stac` STAC to ODC conversion tools (Moved to [odc-stac](https://github.com/opendatacube/odc-stac))
- `odc.dscache` experimental key-value store where `key=UUID`,…
