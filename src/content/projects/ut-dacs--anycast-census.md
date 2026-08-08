---
repo: "ut-dacs/anycast-census"
name: "anycast-census"
description: "LACeS: an Open, Fast, Responsible and Efficient Longitudinal Anycast Census System"
readmeQualityOk: true
url: "https://github.com/ut-dacs/anycast-census"
homepage: "https://manycast.net"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["anycast", "internet-measurements"]
stars: 14
forks: 0
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-09-16T13:43:16Z"
lastCommitAt: "2026-08-08T04:35:36Z"
lastReleaseAt: "2025-09-22T07:54:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 64
maintainers: ["rhendriks"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1057999575/1f53e0a9-f4d4-4395-a22e-c3b01ca75f95"
discussionCount: 0
---

# LACeS Anycast Census

[LACeS: an Open, Fast, Responsible and Efficient Longitudinal Anycast Census System](https://doi.org/10.1145/3730567.3764484)

[This repository](https://github.com/ut-dacs/anycast-census) contains the dataset of the Anycast Census (detected /24 Anycast Prefixes), discovered using LACeS.
The repository is updated daily.
Please visit [manycast.net](https://manycast.net) for a user-friendly dashboard to explore the dataset.

Contact [remi.hendriks@utwente.nl](mailto:remi.hendriks@utwente.nl)

## Downloading census data

The parquet files in this repository can be downloaded in alternative formats via the [manycast.net REST API](https://manycast.net/api/docs):

| Format | Example |
|--------|---------|
| `.parquet` | `https://manycast.net/api/v1/export/IPv4-latest.parquet` |
| `.parquet.gz` | `https://manycast.net/api/v1/export/IPv4-latest.parquet.gz` |
| `.csv.gz` | `https://manycast.net/api/v1/export/IPv4-latest.csv.gz` |
| `.json.gz` | `https://manycast.net/api/v1/export/IPv4-latest.json.gz` |

Replace `latest` with a specific date (e.g., `2026-03-22`) to download a historical snapshot.
Both IPv4 and IPv6 are available (`IPv4-` / `IPv6-` prefix).

Example:…
