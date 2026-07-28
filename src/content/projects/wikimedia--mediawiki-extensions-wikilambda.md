---
repo: "wikimedia/mediawiki-extensions-WikiLambda"
name: "mediawiki-extensions-WikiLambda"
description: "Mirror from https://gerrit.wikimedia.org/g/mediawiki/extensions/WikiLambda. See https://www.mediawiki.org/wiki/Developer_account for contributing."
readmeQualityOk: true
url: "https://github.com/wikimedia/mediawiki-extensions-WikiLambda"
homepage: "https://mediawiki.org/wiki/Extension:WikiLambda"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [83]
stars: 12
forks: 2
openIssues: 0
closedIssues: 0
watchers: 18
contributors: 84
recentReleases: 0
createdAt: "2021-02-16T17:57:25Z"
lastCommitAt: "2026-07-28T14:58:09Z"
status: "thriving"
tags: ["legacy_hero", "community_watch"]
healthScore: 79
undervaluedScore: 58
maintainers: ["jdforrester", "translatewiki", "gracepedia"]
openGraphImageUrl: "https://opengraph.githubassets.com/76c1d431d786d257ae2faf8b76ce1b839055fe49ce4936f80f62729f81ff3e82/wikimedia/mediawiki-extensions-WikiLambda"
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
