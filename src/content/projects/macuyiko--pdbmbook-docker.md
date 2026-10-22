---
repo: "Macuyiko/pdbmbook-docker"
name: "pdbmbook-docker"
description: "Docker image for pdbmbook.com playground"
readmeQualityOk: true
url: "https://github.com/Macuyiko/pdbmbook-docker"
language: "Shell"
languages: ["Shell", "Dockerfile"]
languagePcts: [53, 47]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2018-03-21T19:07:01Z"
lastCommitAt: "2026-10-22T08:51:44Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 70
undervaluedScore: 40
maintainers: ["Macuyiko"]
openGraphImageUrl: "https://opengraph.githubassets.com/e72e2586eb60ba23e2690783cf1ecab98942cb95a86ee3ca76daa3fac909aa4f/Macuyiko/pdbmbook-docker"
---

# Principles of Database Management
## Playground Environment Dockerfile

This builds a self-contained playground image:

- Ubuntu 26.04
- Apache + PHP 8.5
- MySQL 8.4
- MongoDB 8.2 + `mongosh`
- the bundled HBase 1.3.1 and Cypher shell (Java 8)

The site archive is downloaded at build time from <https://www.pdbmbook.com/static/pdbmbook-docker.tar>.

## Build

```bash
docker build --no-cache -t pdbmbook-playground .
```

## Run

```bash
docker run -d --name pdbmbook-playground -p 8081:80 pdbmbook-playground
```

Open <http://localhost:8081>. Startup takes a minute or so (HBase in particular); follow it with:

```bash
docker logs -f pdbmbook-playground
```

## Notes

- Reserve at least 2 GB of RAM for the container. Apache, MySQL, MongoDB and HBase all run inside it.
- The container-local credentials are `root`/`root` for MySQL and `admin`/`playground` for MongoDB.
- MongoDB has no 26.04 (`resolute`) apt repository yet, so the image uses MongoDB's `noble` 8.2 packages.
- Docker caches remote `RUN` layers by instruction text, not by URL content.
  After the archive is regenerated, rebuild with: `bash docker build --no-cache -t pdbmbook-playground .` or pass `--build-arg…
