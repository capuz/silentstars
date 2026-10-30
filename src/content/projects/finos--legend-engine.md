---
repo: "finos/legend-engine"
name: "legend-engine"
description: "Legend Engine module"
readmeQualityOk: true
url: "https://github.com/finos/legend-engine"
homepage: "https://legend.finos.org"
language: "Java"
languages: ["Java"]
languagePcts: [97]
topics: ["legend", "modeling"]
stars: 114
forks: 266
openIssues: 3
closedIssues: 88
watchers: 12
contributors: 166
recentReleases: 0
createdAt: "2020-08-12T12:15:54Z"
lastCommitAt: "2026-10-30T11:03:02Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 99
undervaluedScore: 56
maintainers: ["gs-jp1", "gs-rpant1729", "aziemchawdhary-gs"]
openGraphImageUrl: "https://opengraph.githubassets.com/97eb67171138d9f7d4b134535666424b55dd2e8d3eb9a04fca47af09b00fbab2/finos/legend-engine"
---

# legend-engine

Execution engine for Legend. It provides:
- A Pure parser and compiler.
- An execution engine, generating and/or executing execution plans when provided with a Pure function, a Mapping and a Runtime.
- Access point for model transformers written using the Pure language (soon to come).

## Development setup

- This application uses Maven 3.6+ and JDK 17. Run `mvn install` to compile.
- To start the server, please use the `Main` class `org.finos.legend.engine.server.Server` with the parameters: `server legend-engine-config/legend-engine-server/legend-engine-server-http-server/src/test/resources/org/finos/legend/engine/server/test/userTestConfig.json`.
- You can test by trying http://127.0.0.1:6300 on a web browser. The swagger page can be accessed at http://127.0.0.1:6300/api/swagger

> Given the size of the project, developers should consider using parallelism to speed up build times, given enough RAM is provided.
> In IntelliJ IDEA, this can be done by setting `Thread Count` (in `Preferences > Build, Execution, Deployment > Build Tools > Maven`) and `Shared build process heap size (Mbytes)` (in `Preferences > Build, Execution, Deployment > Compiler > Java…
