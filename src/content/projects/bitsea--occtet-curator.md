---
repo: "Bitsea/Occtet-Curator"
name: "Occtet-Curator"
description: "Bitsea part of the Occtet Toolchain"
url: "https://github.com/Bitsea/Occtet-Curator"
homepage: "https://occtet.eu"
language: "Java"
languages: ["Java"]
languagePcts: [96]
topics: ["cra", "foss", "sbom", "vex", "vulnerabilities", "occtet"]
stars: 10
forks: 2
openIssues: 14
closedIssues: 88
watchers: 1
contributors: 8
recentReleases: 1
createdAt: "2025-10-10T14:57:53Z"
lastCommitAt: "2026-06-29T07:23:20Z"
lastReleaseAt: "2026-03-31T13:51:37Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 96
undervaluedScore: 65
maintainers: ["upost", "Lelalue", "PatrickGroegerBS"]
openGraphImageUrl: "https://opengraph.githubassets.com/6ca095f6ee73a847c93e7f9ded7221f8e825c97e6dc7415dc04cff64834ab124/Bitsea/Occtet-Curator"
---

# Occtet-Curator

This repository contains two project trees: 

* occtet-frontend (a gradle project)
* occtet-nats (a maven project with several modules).

The whole project is meant to be run docker-based.

## Deployment Overview 
To get the system running in a live/dockerized enviroment:
1. Configure your enviroment in the `.env` file (see `occtet-nats/.env.example`)
2. Build the common libraries in occtet-nats (mvn install).
3. Build the frontend Docker image in occtet-frontend.
4. Build the microservice Docker images in occtet-nats.
5. Deploy using docker-compose up -d from the occtet-nats directory.

<small>Detailed instructions are available in the respective subdirectories.</small>

# Funding

OCCTET project has received funding from the Digital Europe Programme (DIGITAL), under grant agreement number: 101190474.
