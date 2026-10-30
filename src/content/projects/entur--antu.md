---
repo: "entur/antu"
name: "antu"
description: "Validation of NeTEx datasets"
readmeQualityOk: true
url: "https://github.com/entur/antu"
language: "Java"
languages: ["Java"]
languagePcts: [98]
topics: ["ror", "java-17", "spring-boot"]
stars: 6
forks: 2
openIssues: 12
closedIssues: 9
watchers: 16
contributors: 13
recentReleases: 0
createdAt: "2021-11-11T10:09:57Z"
lastCommitAt: "2026-10-30T11:02:55Z"
status: "watched"
tags: ["community_watch"]
healthScore: 86
undervaluedScore: 60
maintainers: ["GunnarAtEgde", "henrik242", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/aa254564243328532231788dc04fb434e77633131a1dd48d2288c18870f0fba6/entur/antu"
---

# Antu

Validate NeTEx datasets against
the [Nordic NeTEx Profile](https://enturas.atlassian.net/wiki/spaces/PUBLIC/pages/728891481/Nordic+NeTEx+Profile).

# Data flow

Antu receives NeTEx validation requests from [Marduk](https://github.com/entur/marduk).
The request refers to a given NeTEx codespace and a NeTEx dataset (zip archive) stored in a Google Cloud Storage
bucket.  
Antu extracts the individual PublicationDelivery files from the NeTEx archive and register a validation job for each of
them in a PubSub topic.  
The resulting workload is then split among the running Antu Kubernetes pods, processed asynchronously and in parallel.
Each validation job produces a JSON-serialized ValidationReport object.  
When all validation jobs are complete, the individual ValidationReports are combined in a single object and stored in
GCS under a unique report ID.  
Antu sends a message to a PubSub topic to notify Marduk that the validation is complete.

# Validation rules

Antu uses the [NeTEx validator library](https://github.com/entur/netex-validator-java) to execute a set of validation
rules on the NeTEx dataset.  
In addition to the default rules present in this library, Antu defines a…
