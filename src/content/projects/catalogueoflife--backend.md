---
repo: "CatalogueOfLife/backend"
name: "backend"
description: "Complete backend of COL ChecklistBank"
url: "https://github.com/CatalogueOfLife/backend"
language: "Java"
languages: ["Java"]
languagePcts: [85]
stars: 18
forks: 11
openIssues: 242
closedIssues: 1214
watchers: 16
contributors: 12
recentReleases: 0
createdAt: "2017-09-13T11:12:00Z"
lastCommitAt: "2026-06-29T07:22:10Z"
lastReleaseAt: "2020-12-08T09:14:45Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 95
undervaluedScore: 63
maintainers: ["mdoering", "gbif-jenkins"]
openGraphImageUrl: "https://opengraph.githubassets.com/dde1437a597001f2997c467aaa9ec4f37fff0f46933884aecbc90b83ed7f333f/CatalogueOfLife/backend"
---

# Catalogue of Life Backend

For source code contributions please see our [developer guide](DEVELOPER-GUIDE.md).
The COL backend is a [Dropwizard](https://www.dropwizard.io/) application, that drives the [COL ChecklistBank API](https://api.checklistbank.org/). 
`webservice` is the maven module that builds the application.

## Prerequisites
1. Java 11 JDK
1. Maven 3.8
1. Postgres 17

## Run the COL WS application locally
1. cd into `webservice`
1. Run `mvn clean install` to build your application
1. create a local [config.yml](webservice/src/main/resources/config.yaml) file
1. On the first run init a new, empty database & search index with `java -jar target/webservice-1.0-SNAPSHOT.jar init --num 4 config.yml`. --num 4 will configure the number of partitions to use for external datasets
1. Start application with `java -jar target/webservice-1.0-SNAPSHOT.jar server config.yml`
1. To check that your application is running enter url `http://localhost:8080`

For development tests you can also run the application straight from your IDE 
by executing the main `WsServer.java` class and passing it the right arguments `server /path/to/config.yml`

In order to avoid real authentication…
