---
repo: "cloudfoundry/postgres-release"
name: "postgres-release"
description: "BOSH release for PostgreSQL"
readmeQualityOk: true
url: "https://github.com/cloudfoundry/postgres-release"
language: "Go"
languages: ["Go"]
languagePcts: [79]
topics: ["postgres", "bosh"]
stars: 14
forks: 39
openIssues: 0
closedIssues: 39
watchers: 11
contributors: 31
recentReleases: 0
createdAt: "2016-07-19T17:40:32Z"
lastCommitAt: "2026-11-06T02:43:40Z"
lastReleaseAt: "2016-12-15T09:23:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 97
undervaluedScore: 70
maintainers: ["cf-rabbit-bot", "ZPascal", "colins"]
openGraphImageUrl: "https://opengraph.githubassets.com/2e2633f3fdba480169b2485dde9e970962dc3fa3904f383b3d616a47389f4162/cloudfoundry/postgres-release"
---

# postgres-release
---

This is a [BOSH](https://www.bosh.io) release for [PostgreSQL](https://www.postgresql.org/).

## Contents

* [Deploying](#deploying)
* [Customizing](#customizing)
* [Contributing](#contributing)
* [Known Limitation](#known-limitation)
* [Upgrading](#upgrading)
  * [Migrating password authentication from MD5 to SCRAM-SHA-256](#migrating-password-authentication-from-md5-to-scram-sha-256)
* [CI](#ci)

## Deploying

In order to deploy the postgres-release you must follow the standard steps for deploying software with BOSH.

1. Deploy and run a BOSH director.
   Please refer to [BOSH documentation](http://bosh.io/docs) for instructions on how to do that.
   Bosh-lite specific instructions can be found [here](https://github.com/cloudfoundry/bosh-lite).

1. Install the BOSH command line Interface (CLI) v2+.
   Please refer to [BOSH CLI documentation](https://bosh.io/docs/cli-v2.html#install). Use the CLI to target your director.

1. Upload the desired stemcell directly to bosh. [bosh.io](http://bosh.io/stemcells) provides a resource to find and download stemcells.

   ```
   # Example for bosh-lite
   bosh upload-stemcell…
