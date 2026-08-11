---
repo: "aodn/aodn_cloud_optimised"
name: "aodn_cloud_optimised"
description: "Cloud optimised data formats"
readmeQualityOk: true
url: "https://github.com/aodn/aodn_cloud_optimised"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 5
forks: 4
openIssues: 30
closedIssues: 15
watchers: 4
contributors: 36
recentReleases: 0
createdAt: "2024-04-30T01:44:29Z"
lastCommitAt: "2026-08-11T04:50:27Z"
lastReleaseAt: "2024-07-11T08:52:38Z"
status: "thriving"
tags: []
healthScore: 86
undervaluedScore: 76
maintainers: ["mphemming", "lbesnard", "thommodin"]
openGraphImageUrl: "https://opengraph.githubassets.com/15fbfa3f556d270e19da96d477914ed4eb708c52e36b90905bbec3c751c3506a/aodn/aodn_cloud_optimised"
---

# AODN (Australian Ocean Data Network) Cloud Optimised library

AODN Cloud Optimised library allows to convert oceanographic datasets from [IMOS (Integrated Marine Observing System)](https://imos.org.au/) / [AODN (Australian Ocean Data Network)](https://portal.aodn.org.au/) into cloud-optimised formats such as [Zarr](https://zarr.readthedocs.io/) (for gridded multidimensional data) and [Parquet](https://parquet.apache.org/docs/) (for tabular data).

## Documentation

Visit the documentation on [ReadTheDocs](https://aodn-cloud-optimised.readthedocs.io/en/latest/) for detailed information.

## Key Features

### Data Conversion

- Convert **CSV** or **NetCDF** (single or multidimensional) to **Zarr** or **Parquet**.
- **Dataset configuration:** YAML-based configuration with inheritance, allowing similar datasets to share settings.
  Example: [Radar ACORN](https://github.com/aodn/aodn_cloud_optimised/tree/main/aodn_cloud_optimised/config/dataset), [GHRSST](https://www.ghrsst.org/).
- Semi-automatic creation of dataset configuration: [ReadTheDocs guide](https://aodn-cloud-optimised.readthedocs.io/en/latest/how-to/dataset-configuration.html#create-dataset-configuration-semi-automatic).…
