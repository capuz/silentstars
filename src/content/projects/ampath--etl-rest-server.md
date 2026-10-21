---
repo: "AMPATH/etl-rest-server"
name: "etl-rest-server"
description: "This project hosts scripts to generate flat tables used for reporting purposes."
readmeQualityOk: true
url: "https://github.com/AMPATH/etl-rest-server"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["etl"]
stars: 10
forks: 55
openIssues: 0
closedIssues: 0
watchers: 16
contributors: 36
recentReleases: 0
createdAt: "2015-09-30T06:27:56Z"
lastCommitAt: "2026-10-21T20:01:10Z"
lastReleaseAt: "2023-07-03T10:17:18Z"
status: "thriving"
tags: ["legacy_hero", "community_watch", "fork_magnet"]
healthScore: 86
undervaluedScore: 67
maintainers: ["maikofelix47", "Kipkemoii", "walteronoh"]
openGraphImageUrl: "https://opengraph.githubassets.com/b792ec99d809157cbebf7d2136827a221d89bc100bfaa79a88cbef63acb72fb2/AMPATH/etl-rest-server"
---

# ETL REST Server

This is a node project that uses [hapi](https://github.com/hapijs/hapi) to expose REST endpoints which provide access to data hosted in [ETL](https://en.wikipedia.org/wiki/Extract,_transform,_load) flat tables. These flat tables are flattened derived database tables containing data from OpenMRS. Data generation is done via MySQL stored procedures (found [here](https://github.com/ampath/etl)). This project is currently being battle-tested in production by [AMPATH POC](https://github.com/AMPATH/ng2-amrs).

To setup the project, run:

`$ git clone https://github.com/AMPATH/etl-rest-server.git`

`$ cd etl-rest-server `

`$ npm install`

`$ mkdir conf && cd conf`

Create a config.json file

`$ cat config.json`

With the following content

```json
{
  "openmrs": {
    "host": "The IP or hostname of the OpenMRS server",
    "port": 8080
  },
  "etl": {
    "host": "The IP or hostname of the server running etl-rest-server",
    "port": 8002,
    "key": "path to the private key for tls",
    "cert": "path to the public key for tls",
    "tls": true
  },
  "mysql": {
    "connectionLimit": 10,
    "host": "The IP or hostname of the  mysql server",
    "port": "3306",…
