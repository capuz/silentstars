---
repo: "acdh-oeaw/apis-core-rdf"
name: "apis-core-rdf"
description: "Austrian Prosopographical Information System (APIS)"
readmeQualityOk: true
url: "https://github.com/acdh-oeaw/apis-core-rdf"
homepage: "https://acdh-oeaw.github.io/apis-core-rdf/"
language: "Python"
languages: ["Python"]
languagePcts: [82]
topics: ["apis-app", "apis-rdf", "apis-instance"]
stars: 5
forks: 3
openIssues: 47
closedIssues: 716
watchers: 6
contributors: 27
recentReleases: 0
createdAt: "2022-09-07T09:59:55Z"
lastCommitAt: "2026-07-06T07:08:27Z"
lastReleaseAt: "2023-10-20T08:54:30Z"
status: "thriving"
tags: []
healthScore: 95
undervaluedScore: 84
maintainers: ["b1rger", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b325a0d50086697c347a54a3fd749d95ab95858532359b6cc538aae33a44d468/acdh-oeaw/apis-core-rdf"
discussionCount: 8
---

APIS
====

The *Austrian Prosophographical Information System* is a
[Django](https://www.djangoproject.com/) based prosopography framework. It
allows to create web applications to manage both entities and relations between
entities. It provides API access to the data in various formats and creates
swagger defintions. A swagger-ui allows for comfortable access to the data.

Data can also be imported from remote resources described in
[RDF](https://en.wikipedia.org/wiki/Resource_Description_Framework).

In addition to this configurable import of data via RDF, there is also an
configurable serialization of data. The generic RestAPI of APIS provides data
either in the internal JSON format, TEI or RDF (serialized with *CIDOC CRM*). 

APIS comes with a built in system of autocompletes that allows researchers to
import meta-data of entities with just a single click. Out of the box APIS
supports Stanbol as a backend for the autocompletes, but the system is rather
easy to adapt to any Restfull API. APIS also supports the parsing of RDFs
describing entities into an entity. The parsing is configured in a settings
file.

*Entities*

*Relations*

Licensing
---------

All code unless otherwise…
