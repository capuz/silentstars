---
repo: "femiwiki/docker-mediawiki"
name: "docker-mediawiki"
description: ":whale: Dockerized FemiWiki's MediaWiki server"
originalDescription: ":whale: Dockerized Femiwiki's mediawiki server"
descriptionLang: "ko"
readmeQualityOk: true
url: "https://github.com/femiwiki/docker-mediawiki"
language: "PHP"
languages: ["PHP"]
languagePcts: [72]
topics: ["wiki", "docker-compose", "server", "docker-image"]
stars: 33
forks: 6
openIssues: 37
closedIssues: 276
watchers: 5
contributors: 13
recentReleases: 0
createdAt: "2016-10-16T23:16:08Z"
lastCommitAt: "2026-10-06T10:41:54Z"
lastReleaseAt: "2018-09-28T20:06:27Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero", "funded"]
healthScore: 97
undervaluedScore: 57
maintainers: ["femiwiki-pat-owner[bot]", "lens0021", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/83c0f74ad9788530abb3d94b01689d15e3f4a4e9349dd73419fb99bcffee0a88/femiwiki/docker-mediawiki"
fundingLinks: ["PATREON:https://patreon.com/femiwiki"]
---

# FemiWiki MediaWiki Server [![Container Registry]][container registry link] [![Github checks Status]][github checks link]

> [!IMPORTANT]  
> This docker image is specifically designed for the needs of FemiWiki, contains FemiWiki-specific configurations and includes arbitrary MediaWiki extensions. It is not recommended to use this image for general purposes. We recommend using the [Docker official image for MediaWiki](https://hub.docker.com/_/mediawiki/).

This is a MediaWiki Docker image used by [femiwiki.com], a Korean feminist wiki. It contains various code including Dockerfiles, test Docker Compose files, and more.

## Usage of Docker Image

It is a [PHP-FPM] server for FemiWiki, and you can also run the [Caddy] web server with the same image. Please refer to the example Compose file below. You can see a full example for development available in compose.yaml.

```yml
fastcgi:
  image: ghcr.io/femiwiki/mediawiki
http:
  image: ghcr.io/femiwiki/mediawiki
  command: caddy run
  ports:
    - 80:80
  volumes:
    - ./path/to/Caddyfile:/srv/femiwiki.com/Caddyfile:ro
```

#### MediaWiki

You can set the following environment variables.

- `MEDIAWIKI_SERVER`: Overwrites `$wgServer`.…
