---
repo: "cgwire/kitsu-docker"
name: "kitsu-docker"
description: "Dockerfile used to build the trial image of Kitsu"
readmeQualityOk: true
url: "https://github.com/cgwire/kitsu-docker"
homepage: "https://hub.docker.com/r/cgwire/cgwire/"
language: "Just"
languages: ["Just", "Dockerfile"]
languagePcts: [63, 27]
topics: ["animation", "project-management", "review", "vfx"]
stars: 60
forks: 36
openIssues: 2
closedIssues: 16
watchers: 5
contributors: 12
recentReleases: 0
createdAt: "2017-11-10T11:23:22Z"
lastCommitAt: "2026-11-04T13:04:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 95
undervaluedScore: 59
maintainers: ["github-actions[bot]", "frankrousseau", "nledez"]
openGraphImageUrl: "https://opengraph.githubassets.com/0b4823ed092ec320b0b35c688ebb2b4ae54b5dd5a0daa3e01e75ea95e17df78d/cgwire/kitsu-docker"
---

# Kitsu Docker

Docker container for [Kitsu](https://kitsu.cg-wire.com/).

If you like the project, please add a star to the [Kitsu repository](https://github.com/cgwire/kitsu).

It is not recommended to use this image in production. It is intended for Kitsu
testing.

For this purpose, to simplify email testing, we include an email catch-all
application to intercept all emails sent by Kitsu. These can be viewed in an
included webmail.

### Usage

```bash
docker build --build-arg KITSU_VERSION=1.0.17 --build-arg ZOU_VERSION=1.0.18 -t cgwire/cgwire .
docker run --init -ti --rm -p 80:80 -p 1080:1080 --name cgwire cgwire/cgwire
```

The container generates a temporary `SECRET_KEY` at startup. Pass
`-e SECRET_KEY=<your-secret>` to keep sessions valid across container restarts.

In order to enable data persistence, use a named volume for the database and thumbnails:

```bash
docker run --init -ti --rm -p 80:80 -p 1080:1080 --name cgwire \
  -v zou-storage:/var/lib/postgresql \
  -v zou-storage:/opt/zou/previews \
  cgwire/cgwire
```

To run the image as a daemon, add the `-d` flag:

```bash
docker run --init -d --rm -p 80:80 -p 1080:1080 --name cgwire cgwire/cgwire
```

Kitsu…
