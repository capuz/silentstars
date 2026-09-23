---
repo: "felleslosninger/docs"
name: "docs"
description: "Prosjekt for teknisk dokumentasjon av FEL's fellesløsninger. Publisert via Github Pages og Jekyll på docs.digdir.no"
readmeQualityOk: true
url: "https://github.com/felleslosninger/docs"
language: "JavaScript"
languages: ["JavaScript", "HTML", "CSS"]
languagePcts: [42, 25, 20]
topics: ["documentation"]
stars: 13
forks: 71
openIssues: 9
closedIssues: 29
watchers: 28
contributors: 96
recentReleases: 0
createdAt: "2019-01-08T12:54:58Z"
lastCommitAt: "2026-09-23T08:46:31Z"
status: "watched"
tags: ["hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 92
undervaluedScore: 65
maintainers: ["joergenb", "teedjay", "DanielFylling"]
openGraphImageUrl: "https://opengraph.githubassets.com/2706031fe6cf30fd207da8a6b594c21d5009f5ec400e38514822952920cc7442/felleslosninger/docs"
---

## Teknisk dokumentasjon av Digitaliseringsdirektoratet fellesløsninger

Dette er kildekoden til den tekniske dokumentasjonen for Digitaliseringsdirektoratet fellesløsninger.

Du finner en formatert versjon av denne dokumentasjonen på følgende nettside: https://docs.digdir.no

## Køyre DigDirDocs lokalt

### Docker

Stå i repoet og kjør kommandoen:

```docker run --rm -v $(pwd):/srv/jekyll -p 4000:4000 jekyll/jekyll bash -c "gem install webrick && jekyll serve"```

### Uten docker

Om ein har installert Jekyll så vil det vere nok å køyre følgande kommando i repoet:

```jekyll serve```
