---
repo: "wikimedia/mediawiki-extensions-WikiLambda"
name: "mediawiki-extensions-WikiLambda"
description: "Mirror from https://gerrit.wikimedia.org/g/mediawiki/extensions/WikiLambda. See https://www.mediawiki.org/wiki/Developer_account for contributing."
readmeQualityOk: true
url: "https://github.com/wikimedia/mediawiki-extensions-WikiLambda"
homepage: "https://mediawiki.org/wiki/Extension:WikiLambda"
language: "PHP"
languages: ["PHP", "JavaScript"]
languagePcts: [47, 41]
stars: 12
forks: 2
openIssues: 0
closedIssues: 0
watchers: 17
contributors: 86
recentReleases: 0
createdAt: "2021-02-16T17:57:25Z"
lastCommitAt: "2026-10-30T10:24:23Z"
status: "thriving"
tags: ["legacy_hero", "community_watch"]
healthScore: 80
undervaluedScore: 59
maintainers: ["jdforrester", "DSmit-WMF", "translatewiki"]
openGraphImageUrl: "https://opengraph.githubassets.com/e0a42df9af6aa0228b3c82f0fc6ac72186c046a24fd3b3020ef8e3b39423e93e/wikimedia/mediawiki-extensions-WikiLambda"
---

# WikiLambda extension for MediaWiki

WikiLambda provides for hosting, and letting users call evaluation, of functions written, managed, and evaluated on a central wiki, Wikifunctions.

## Development instructions

### Setup quick start

From whatever directory you wish to set up your development environment, run:

```bash
git clone "https://gerrit.wikimedia.org/r/mediawiki/core" mediawiki
cd mediawiki
git clone --recurse-submodules --remote-submodules https://gerrit.wikimedia.org/r/mediawiki/extensions/WikiLambda extensions/WikiLambda
cd extensions/WikiLambda
npm run local:setup
```

Note that all of the docker container locations mentioned here and in `docker-compose.override.yml`
have the `mediawiki-` prefix. This is derived from the name of the directory to which
you have cloned the `mediawiki/core` repository.

### Full setup instructions

* Bring up a [development environment](https://www.mediawiki.org/wiki/How_to_become_a_MediaWiki_hacker) for MediaWiki (e.g. [Docker](https://www.mediawiki.org/wiki/MediaWiki-Docker) or [Vagrant](https://www.mediawiki.org/wiki/MediaWiki-Vagrant)). Be sure to install docker compose v2 instead of v1.
* In your `mediawiki/extensions/`…
