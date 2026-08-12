---
repo: "divviup/divviup-api"
name: "divviup-api"
description: "Divvi Up Control Plane"
readmeQualityOk: true
url: "https://github.com/divviup/divviup-api"
homepage: "https://divviup.org"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [79, 21]
stars: 10
forks: 5
openIssues: 59
closedIssues: 123
watchers: 3
contributors: 8
recentReleases: 0
createdAt: "2023-02-13T23:49:26Z"
lastCommitAt: "2026-08-12T05:16:07Z"
lastReleaseAt: "2023-06-28T19:24:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 76
maintainers: ["dependabot[bot]", "divergentdave", "jcjones"]
openGraphImageUrl: "https://opengraph.githubassets.com/58fbc4423f147704c6886b4c1bfc41ccd7b8c8c854144167bdc7353574b49f4e/divviup/divviup-api"
---

# Divvi Up API Server and web app

## Badges

* [](https://coveralls.io/github/divviup/divviup-api?branch=main)
* 
* 
* 

## API Specification:
* [production ui](https://app.divviup.org/swagger-ui)
* [staging ui](https://app.staging.divviup.org/swagger-ui)
* [main (yml)](https://github.com/divviup/divviup-api/blob/main/documentation/openapi.yml)

## Configuring and running

### System requirements
* [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/)
* [Rust (current stable or nightly)](https://www.rust-lang.org/tools/install)
* [PostgreSQL](https://www.postgresql.org/)
* Docker
  * On MacOS, ensure your docker VM has sufficient resources, at least 2vCPUs and 8GB of RAM.
* [docker-compose](https://docs.docker.com/compose/) >=v2.27.0
  * On MacOS, [install this through `brew`][brew]. Notice this calls for extra modifications to
    `~/.docker/config.json`.
  * On Linux, install `docker-compose-plugin` from the `docker-ce` repository. See the OS-specific
    [instructions here][linux].
  * Alternatively, for both platforms, you can [install the binary plugin][compose].

Some Rust dependencies require additional system dependencies. These can be installed with your usual…
