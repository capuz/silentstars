---
repo: "FIRSTIsrael/lems"
name: "lems"
description: "FIRST LEGO League Challenge: Local Event Management System"
readmeQualityOk: true
url: "https://github.com/FIRSTIsrael/lems"
homepage: "https://lems.firstisrael.org.il"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 16
forks: 9
openIssues: 67
closedIssues: 375
watchers: 4
contributors: 26
recentReleases: 0
createdAt: "2023-08-21T17:24:59Z"
lastCommitAt: "2026-09-20T08:45:23Z"
lastReleaseAt: "2024-02-01T14:55:26Z"
status: "thriving"
tags: ["hidden_gem", "community_hub", "fork_magnet"]
healthScore: 90
undervaluedScore: 73
maintainers: ["dependabot[bot]", "johnmeshulam", "CoolGame8"]
openGraphImageUrl: "https://opengraph.githubassets.com/67aabdd3d0c9c6af52eb08a4bfcbd937578b8b4d21b65658fae10a56b5db4ab7/FIRSTIsrael/lems"
discussionCount: 35
---

# _FIRST_ LEGO League Challenge: Local Event Management System

## Contributing

LEMS is fully open source and maintained by volunteers.

💬 Feel free to join the [discussion](https://github.com/FIRSTIsrael/lems/discussions)! Submit ideas, feedback, and share your thoughts.

💻 If you can code, check out the [issues](https://github.com/FIRSTIsrael/lems/issues) tab and pick a task labelled "good first task". Submit a pull request and we will review it

🆕 Stay updated on the latest progress and release schedule from the [LEMS Github Project](https://github.com/orgs/FIRSTIsrael/projects/3).

## Running Locally

### Prerequisites

- Node 26
- Docker

### DB Setup

1. Download [Docker Desktop](https://www.docker.com/products/docker-desktop/)

2. Pull mongodb image with tag 8.x.x
   `docker pull mongo:8`

3. Pull postgres image with tag 17.x.x
   `docker pull postgres:17`

4. Pull redis image with tag 7.x.x
   `docker pull redis:7`

5. Run mongodb with an exposed port
   `docker run -d --name lems-local-mongo -p 27017:27017 mongo:8`

6. Run postgres with an exposed port
   `docker run -d --name lems-local-sql -p 5432:5432 -e POSTGRES_PASSWORD=postgres postgres:17`

7. Run redis with an…
