---
repo: "NCCE/teachcomputing.org"
name: "teachcomputing.org"
description: "The website for the National Centre for Computing Education"
readmeQualityOk: true
url: "https://github.com/NCCE/teachcomputing.org"
homepage: "https://www.teachcomputing.org"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [73]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 20
recentReleases: 0
createdAt: "2018-11-06T16:22:55Z"
lastCommitAt: "2026-10-29T10:36:53Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 87
undervaluedScore: 72
maintainers: ["A-Wheeto", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f5a53bfb705bd8d8c2a131a3a2b580d9a2b862994b8af8e5a3f43ff53c36dacc/NCCE/teachcomputing.org"
---

# NCCE

## Behaviour

[Partners API integration](https://github.com/NCCE/teachcomputing.org/blob/HEAD/doc/partners_api_integration.md)

## Important notes

We do not enforce unique constraints on emails. This is valid due to our SSO
only setup. While we should try to resolve any duplicate emails introduced
into our database. It makes sense to allow this as we are mirroring the profile
of users from STEM rather than taking an initial set of data, and then letting
users deviate from their profile.

## Development

IMPORTANT: Checkout this branch to a folder named `teachcomputing` with `git clone git@github.com:NCCE/teachcomputing.org.git teachcomputing` (one or two scripts right now expect the docker project name to be `teachcomputing`, so for now this is the easiest approach)

### Dependencies

- [Homebrew](https://brew.sh/)
- Docker (incl. Docker Compose, which already part of Docker for Mac and Docker Toolbox) > v4.0 (with support for `docker compose`)
- Python 2.7 (not 3.x yet)

### Setup

Stop any other web servers running on port 80.

To stop puma-dev with homebrew's lunchy comand
```
lunchy stop io.puma.dev
```

This script builds the docker image, sets up environment…
