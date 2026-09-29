---
repo: "opengovsg/careersgovsg-jobs-data"
name: "careersgovsg-jobs-data"
description: "Job listings on jobs.careers.gov.sg"
readmeQualityOk: true
url: "https://github.com/opengovsg/careersgovsg-jobs-data"
homepage: "https://jobs.careers.gov.sg"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["flat-data"]
stars: 31
forks: 5
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-02-06T02:39:38Z"
lastCommitAt: "2026-09-29T08:10:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 50
maintainers: ["flat-data"]
openGraphImageUrl: "https://opengraph.githubassets.com/920e885e753c4921109866add6a3425e26e84220d8a702823dcaa3868d974033/opengovsg/careersgovsg-jobs-data"
---

# careersgovsg-jobs-data
Job listings as found on jobs.careers.gov.sg

## Overview
This repository uses GitHub Actions to automatically fetch and update Singapore Government job listings from Careers@Gov public data endpoints.

## Data Files
Most users would be interested in the fetched data, saved in the `data/` directory:
- [`job-listings.json`](https://github.com/opengovsg/careersgovsg-jobs-data/blob/HEAD/data/job-listings.json): Processed job listings
- [`job-listings.csv`](https://github.com/opengovsg/careersgovsg-jobs-data/blob/HEAD/data/job-listings.csv): Processed job listings in CSV format

Information on the structure of the data is described at [job-listings.instructions.md](https://github.com/opengovsg/careersgovsg-jobs-data/blob/HEAD/.github/instructions/job-listings.instructions.md).

## Setup

### Prerequisites
- [Deno](https://deno.land/) installed locally for development

### Environment Variables
The following environment variables are required:
- `CAREERSGOVSG_JOB_HEADER`: URL endpoint for job listings
- `CAREERSGOVSG_JOB_DETAILS`: URL endpoint for job details

For local development:
1. Copy `.env.example` to `.env.local`
2. Fill in the actual endpoint URLs

For…
