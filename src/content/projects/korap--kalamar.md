---
repo: "KorAP/Kalamar"
name: "Kalamar"
description: ":octopus: Mojolicious-based Frontend for KorAP"
readmeQualityOk: true
url: "https://github.com/KorAP/Kalamar"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [82]
topics: ["korap", "mojolicious"]
stars: 9
forks: 1
openIssues: 130
closedIssues: 131
watchers: 8
contributors: 9
recentReleases: 0
createdAt: "2015-05-21T20:50:29Z"
lastCommitAt: "2026-09-23T08:42:12Z"
lastReleaseAt: "2024-06-04T09:09:07Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero"]
healthScore: 63
undervaluedScore: 61
maintainers: ["hebasta", "Akron", "kupietz"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e1ededd9ee3b9bb8b080d54ccee6ae596925923b7b46ff8b3f1492ffdd0c853/KorAP/Kalamar"
---

Kalamar is a [Mojolicious](http://mojolicio.us/)-based user interface
frontend for the [KorAP Corpus Analysis Platform](http://korap.ids-mannheim.de/).

## Setup

The easiest way to install and run Kalamar is using [Docker](https://www.docker.com/).

```shell
docker pull korap/kalamar
```

Then start Kalamar listening on port `64543`.

```shell
docker run --network host --name kalamar korap/kalamar
```

Kalamar will be available at `http://localhost:64543`.

See the [description on docker hub](https://hub.docker.com/r/korap/kalamar)
regarding further information.

## Setup for Development

To install the latest version of Kalamar, first fetch the resource ...

```shell
git clone https://github.com/KorAP/Kalamar
```

... and follow the steps below.

If you have any problems with installing Kalamar,
see the *Troubleshooting* section.

Windows is not a natively supported environment for development anymore.
Please use [WSL](https://learn.microsoft.com/windows/wsl/install).

### Generate Static Asset Files

To generate the static asset files (scripts, styles, images ...),
you need NodeJS >= 6.0.0.
This will probably need administration
rights, depending on your installation path.…
