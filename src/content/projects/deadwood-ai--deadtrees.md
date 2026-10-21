---
repo: "Deadwood-ai/deadtrees"
name: "deadtrees"
description: "Open-source backend for deadtrees.earth with FastAPI, geospatial processing, and ML pipelines for deadwood and forest cover mapping."
readmeQualityOk: true
url: "https://github.com/Deadwood-ai/deadtrees"
homepage: "https://deadtrees.earth"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [44, 40]
topics: ["forest-monitoring", "geospatial", "machine-learning", "remote-sensing", "research-software", "tree-mortality"]
stars: 6
forks: 4
openIssues: 42
closedIssues: 142
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2024-06-26T13:58:07Z"
lastCommitAt: "2026-10-21T17:32:04Z"
lastReleaseAt: "2024-08-02T12:28:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 90
maintainers: ["JesJehle", "cmosig", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/641ebab1f7bc4e17c755630f7657741f552c3b2e7ffa4b1439e6d42217dc71e6/Deadwood-ai/deadtrees"
discussionCount: 0
---

# DeadTrees: An Open Platform for Automated Deadwood and Forest Cover Mapping from Aerial Imagery

## Overview

DeadTrees is an end-to-end, open-source platform for processing, analyzing, and visualizing high-resolution aerial orthophotos with a focus on deadwood detection and forest cover mapping. The system accepts two types of input data: pre-processed GeoTIFF orthomosaics and raw drone image collections (ZIP archives). Through an automated processing pipeline, each dataset is standardized, enriched with geospatial metadata, and analyzed using deep learning models for semantic segmentation of deadwood and tree cover.

The platform is designed for scalability and reproducibility, supporting community-driven data contribution through a web-based upload interface with chunked file transfer, and providing standardized, analysis-ready outputs including Cloud-Optimized GeoTIFFs (COGs), thumbnails, and vector-based segmentation labels.

## System Architecture

*Figure 1: System architecture of the DeadTrees platform. GeoTIFF orthomosaics and raw drone images are uploaded, standardized, and processed through four parallel stages: COG generation, metadata enrichment (GADM, biome,…
