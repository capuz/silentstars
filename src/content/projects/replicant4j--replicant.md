---
repo: "replicant4j/replicant"
name: "replicant"
description: "Client-side state representation infrastructure for GWT"
url: "https://github.com/replicant4j/replicant"
language: "Java"
languages: ["Java"]
languagePcts: [93]
topics: ["entity", "gwt", "java", "network"]
stars: 7
forks: 1
openIssues: 7
closedIssues: 4
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2011-10-22T01:08:17Z"
lastCommitAt: "2026-06-25T02:07:59Z"
lastReleaseAt: "2019-11-29T05:33:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 86
undervaluedScore: 65
maintainers: ["realityforge"]
openGraphImageUrl: "https://opengraph.githubassets.com/4551d75615b54d9c39ad3faa648262975e73fb272a397e92f417f24644424c48/replicant4j/replicant"
---

# Replicant

[<img src="https://img.shields.io/maven-central/v/org.realityforge.replicant/replicant-client.svg?label=latest%20release"/>](http://search.maven.org/#search%7Cga%7C1%7Cg%3A%22org.realityforge.replicant%22%20a%3A%22replicant-client%22)

The replicant library aims to provide infrastructure for replicating a portion of a complex server-side
domain model to zero or more clients who have subscribed to the replication engine. When changes are
applied on the server-side, the changes are batched and transmitted to interested clients. Upon receiving
the changes, the client will atomically apply the changes to a local client-side representation. The
application is then notified of the changes via a local message broker.

The library uses a client-side repository of objects, or replicas, that maintain the state of a subset of
the world. Changes are transmitted from the server to the client and the replicas are dynamically updated.
When the replica's are updated, changes are propagated through to the user interface through the use of events
and a centralized event broker. To avoid the scenario where the UI is updated when the repository is an
inconsistent state, changes are…
