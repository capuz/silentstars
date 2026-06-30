---
repo: "UKHomeOffice/egar-public-site-ui"
name: "egar-public-site-ui"
description: "Submit a GAR Public Site UI repository"
url: "https://github.com/UKHomeOffice/egar-public-site-ui"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [82]
stars: 7
forks: 2
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 63
recentReleases: 0
createdAt: "2019-02-12T11:15:38Z"
lastCommitAt: "2026-06-30T06:51:30Z"
lastReleaseAt: "2024-01-03T15:46:43Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 98
undervaluedScore: 77
maintainers: ["ndifrekeekottHO", "SaritaMore7", "jamiecarterHO"]
openGraphImageUrl: "https://opengraph.githubassets.com/92b687ec1ccc50671bb4ed3e2783a5f067173b01ebe29b8b0cd39f58ff5f3a78/UKHomeOffice/egar-public-site-ui"
---

## Submit a GAR (sGAR)

## Prerequisites
- Clone the `data-access-api`repo in the same parent folder and set up environment variables as explained in the `data-access-api` README.md.

## Requirements
- docker and docker compose.
- create a `.env.dev` file and input environment variables - ask a developer in the SGAR team for them.

## Run the application

1. Run the following:
```sh
docker compose up -d --build
```

This should build both the `data-access-api` and `egar-public-site-ui`.

- The frontend will now be running on port 3000.
- To see changes on the frontend, reload the page.

## Generate airport codes data (airport_codes.json)

The airport codes used by the app are generated from a CSV file.

- To add or update an airport code: edit `src/common/app_data/airport_codes.csv`.
- Then run the Node script below to regenerate `src/common/app_data/airport_codes.json`.

```sh
# From the project root
node scripts/generate_airport_codes.js
```

Notes:
- Do not manually edit `src/common/app_data/airport_codes.json`; it is derived from the CSV.
- The generator enforces sorting and normalisation and will overwrite the JSON file.
- The resulting JSON includes an additional `value`…
