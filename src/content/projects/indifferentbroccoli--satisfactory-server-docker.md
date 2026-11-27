---
repo: "indifferentbroccoli/satisfactory-server-docker"
name: "satisfactory-server-docker"
description: "This is a Dockerized version of the Satisfactory dedicated server."
readmeQualityOk: true
url: "https://github.com/indifferentbroccoli/satisfactory-server-docker"
homepage: "https://indifferentbroccoli.com/satisfactory-server-hosting"
language: "Shell"
languages: ["Shell", "Dockerfile"]
languagePcts: [74, 26]
topics: ["docker", "gameserver", "indifferentbroccoli", "satisfactory", "steamcmd", "satisfactory-server"]
stars: 43
forks: 4
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2024-09-04T07:36:31Z"
lastCommitAt: "2026-11-27T16:23:39Z"
lastReleaseAt: "2026-10-09T19:49:48Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 78
undervaluedScore: 38
maintainers: ["indifferentchicken"]
openGraphImageUrl: "https://opengraph.githubassets.com/bca24444cfaa46fa2a939002844ff0ef709405347ba9771d381fe8b244301bd8/indifferentbroccoli/satisfactory-server-docker"
---

Game server hosting

Fast RAM, high-speed internet

Eat lag for breakfast

[Try our Satisfactory Server hosting free for 2 days!](https://indifferentbroccoli.com/satisfactory-server-hosting)

# Satisfactory Server Docker

## Server Requirements

| Resource | Minimum                                                                 | Recommended |
|----------|-------------------------------------------------------------------------|-------------|
| CPU      | Recent (comparable to the Ryzen 5 3600 AMD or better) x86/64 processor. | n.a.        |
| RAM      | 12GB                                                                    | 16GB        |
| Storage  | 25GB                                                                    | 25GB        |

## How to use

Copy the .env.example file to a new file called .env file. Then use either `docker compose` or `docker run`

> **Important**
>
> The server runs as user and group 1000, not root. The folders you mount must be owned by that user, for example `sudo chown -R 1000:1000 ./satisfactory`.
> To use a different id, set `user: "1001:1001"` in docker compose or `--user 1001:1001` with docker run, and give your folders to that id instead.
