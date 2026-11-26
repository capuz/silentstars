---
repo: "mideind/Netskrafl"
name: "Netskrafl"
description: "Icelandic crossword game website"
readmeQualityOk: true
url: "https://github.com/mideind/Netskrafl"
homepage: "https://netskrafl.is"
language: "Python"
languages: ["Python"]
languagePcts: [78]
topics: ["game-website", "python", "scrabble", "dawg", "crossword-game", "flask", "gae"]
stars: 44
forks: 16
openIssues: 19
closedIssues: 46
watchers: 2
contributors: 19
recentReleases: 0
createdAt: "2014-11-12T18:16:46Z"
lastCommitAt: "2026-11-26T15:27:12Z"
lastReleaseAt: "2019-11-26T00:02:13Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 92
undervaluedScore: 58
maintainers: ["vthorsteinsson"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a195de4b24e885958f97961479a30cee41db97a782c8f3344a5cdc14564ab32/mideind/Netskrafl"
---

## Netskrafl - an Icelandic crossword game website

### English summary

This repository contains the implementation of an Icelandic crossword game
in the genre of SCRABBLE®. The game, which is free-to-play, is accessible
on the web at [https://malstadur.mideind.is/netskrafl](https://malstadur.mideind.is/netskrafl).

The game backend is implemented in Python 3.11 with Flask. It runs in a
container, with a PostgreSQL database, and uses Firebase for real-time
notifications. It ran on Google App Engine with Cloud Datastore until
November 2026.

This repository holds the backend, a Flask-based web server with a JSON API.
The clients that players use are maintained elsewhere: Netskrafl's web client
is embedded in Málstaður, and Explo is a mobile app. The repository also
contains a tablet- and smartphone-friendly single-page web client in
TypeScript (```static/src/```), which is kept as a development client: the
server offers it only where the ```SINGLE_PAGE``` environment variable is set
to ```TRUE``` (on the staging app and on local development servers).
