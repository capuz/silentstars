---
repo: "femiwiki/docker-mediawiki"
name: "docker-mediawiki"
description: ":whale: Dockerized Femiwiki's mediawiki server"
originalDescription: ":whale: Dockerized Femiwiki's mediawiki server"
descriptionLang: "ko"
readmeQualityOk: true
url: "https://github.com/femiwiki/docker-mediawiki"
language: "PHP"
languages: ["PHP"]
languagePcts: [73]
topics: ["wiki", "docker-compose", "server", "docker-image"]
stars: 33
forks: 6
openIssues: 17
closedIssues: 309
watchers: 5
contributors: 13
recentReleases: 0
createdAt: "2016-10-16T23:16:08Z"
lastCommitAt: "2026-11-07T10:37:06Z"
lastReleaseAt: "2018-09-28T20:06:27Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero", "funded"]
healthScore: 99
undervaluedScore: 58
maintainers: ["femiwiki-pat-owner[bot]", "lens0021", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9cc1432301c7bdd6121823828664b29638030abb5dad4e30d39bacc61d49224c/femiwiki/docker-mediawiki"
fundingLinks: ["PATREON:https://patreon.com/femiwiki"]
---

# Femiwiki MediaWiki Server

> [!IMPORTANT]  
> This docker image is specifically designed for the needs of FemiWiki, contains
> FemiWiki-specific configurations and includes arbitrary MediaWiki extensions.
> It is not recommended to use this image for general purposes. We recommend
> using the
> [Docker official image for MediaWiki](https://hub.docker.com/_/mediawiki/).

This is the MediaWiki Docker image used for [femiwiki.com], a feminist wiki in Korea.
It contains various code, including the Dockerfile and a Docker Compose file for testing.

## Usage of Docker Image

This is a [PHP-FPM] server for Femiwiki, and the same image can also be used to run the [Caddy] web server. Please refer to the example Compose file below. You can see a full development example that can be run in compose.yaml.

```yml
fastcgi:
  image: ghcr.io/femiwiki/femiwiki
http:
  image: ghcr.io/femiwiki/femiwiki
  command: caddy run
  ports:
    - 80:80
  volumes:
    - ./path/to/Caddyfile:/srv/femiwiki.com/Caddyfile:ro
```

### MediaWiki

The following environment variables can be set.

- `MEDIAWIKI_SERVER`: Overrides `$wgServer`. Default `'https://femiwiki.com'`.
- `MEDIAWIKI_DEBUG_MODE`: If set, enables…
