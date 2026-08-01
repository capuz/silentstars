---
repo: "fieldpapers/fp-web"
name: "fp-web"
description: "Field Papers web app"
readmeQualityOk: true
url: "https://github.com/fieldpapers/fp-web"
homepage: "https://fieldpapers.org"
language: "Ruby"
languages: ["Ruby", "HTML"]
languagePcts: [46, 25]
topics: ["hacktoberfest", "fieldpapers", "openstreetmap", "ruby"]
stars: 22
forks: 22
openIssues: 0
closedIssues: 3
watchers: 14
contributors: 17
recentReleases: 0
createdAt: "2015-02-11T23:51:30Z"
lastCommitAt: "2026-08-01T06:11:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 93
undervaluedScore: 53
maintainers: ["jake-low"]
openGraphImageUrl: "https://opengraph.githubassets.com/c19fcaa046d8a87de8e6c264c1b008320b2b5e2f2a37cbd8b0ef792033797829/fieldpapers/fp-web"
fundingLinks: ["GITHUB:https://github.com/osmus"]
---

# Field Papers

## Quick links
- [🔗 fieldpapers.org](https://fieldpapers.org)
- [📋 Project overview](https://github.com/fieldpapers)
- [🐞 Issues and bug reports](https://github.com/fieldpapers/fieldpapers/issues)
- [🌐 Translations](https://explore.transifex.com/fieldpapers/fieldpapers/)
- [🤝 Code of Conduct](https://wiki.openstreetmap.org/wiki/Foundation/Local_Chapters/United_States/Code_of_Conduct_Committee/OSM_US_Code_of_Conduct)

## Development

### Setting environment variables

The following is required to run Field Papers, whether locally or via Docker / `docker-compose`:

```bash
cp sample.env .env
# provide some AWS credentials, etc.
open -t .env
```

In the opened text editor, add variables per [Environment Variables](https://github.com/fieldpapers/fp-web#environment-variables). Contact another Field Papers contributor for any required values not present in `sample.env`.

### Using docker-compose

[compose](https://docs.docker.com/compose/) is
a [Docker](https://www.docker.com/)-based tool for orchestrating development
environments. Rather than using `foreman` to manage multiple processes locally,
`compose` runs each component process in a separate container, built…
