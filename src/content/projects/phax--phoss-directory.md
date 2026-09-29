---
repo: "phax/phoss-directory"
name: "phoss-directory"
description: "The official Peppol Directory software"
readmeQualityOk: true
url: "https://github.com/phax/phoss-directory"
language: "Java"
languages: ["Java"]
languagePcts: [95]
topics: ["peppol", "openpeppol", "directory", "yellow-pages"]
stars: 34
forks: 8
openIssues: 9
closedIssues: 70
watchers: 10
contributors: 3
recentReleases: 0
createdAt: "2015-08-31T10:20:01Z"
lastCommitAt: "2026-09-29T08:10:34Z"
lastReleaseAt: "2020-02-16T20:38:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 97
undervaluedScore: 56
maintainers: ["phax", "aksamit"]
openGraphImageUrl: "https://opengraph.githubassets.com/bea6ded79e8c5a3256a4246b9cc8eb9b499467fed60bcb89370408b465422dfb/phax/phoss-directory"
---

# phoss-directory

> If this project saved you some time or made your day a little easier, a star would mean a lot — it helps others find it too.

The official Peppol Directory (PD; https://directory.peppol.eu).

This project is part of my Peppol solution stack. See https://github.com/phax/peppol for other components and libraries in that area.
 
This project is split into the following sub-projects:
* `phoss-directory-indexer` - the PD indexer part (requires Java 25 since v0.17.0)
* `phoss-directory-publisher` - the PD publisher web application (requires Java 25 since v0.17.0)

The Java client libraries for the Directory live in https://github.com/phax/peppol-directory-client - see
  [PD Client and PD Search Client](#pd-client-and-pd-search-client) for the changed Maven coordinates

Previous modules:
* `phoss-directory-businesscard` - the common Business Card API - until v0.12.3; then moved to com.helger.peppol:peppol-directory-businesscard in https://github.com/phax/peppol-commons 
* `phoss-directory-client` - a client library to be added to SMP servers to force indexing in the PD - until v0.19.1; then moved to com.helger.peppol.directory:peppol-directory-client in…
