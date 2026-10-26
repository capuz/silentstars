---
repo: "indigo-astronomy/indigo"
name: "indigo"
description: "INDIGO is a system of standards and frameworks for multiplatform and distributed astronomy software development designed to scale with your needs."
readmeQualityOk: true
url: "https://github.com/indigo-astronomy/indigo"
homepage: "http://www.indigo-astronomy.org"
language: "C"
languages: ["C"]
languagePcts: [89]
topics: ["astronomy", "astronomy-library", "macos", "macosx", "linux"]
stars: 206
forks: 88
openIssues: 27
closedIssues: 281
watchers: 24
contributors: 38
recentReleases: 0
createdAt: "2016-09-24T12:03:00Z"
lastCommitAt: "2026-10-26T17:43:58Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 98
undervaluedScore: 45
maintainers: ["polakovic", "rumengb"]
openGraphImageUrl: "https://opengraph.githubassets.com/7a8841871933db269913a3aefdd60e35489df8ee2a8b3a5b01bf31a93d7a0266/indigo-astronomy/indigo"
---

# INDIGO is a next generation astronomy software framework, based on layered architecture and software bus.

### INDIGO is not INDI

INDIGO is a separate and independent project. It is not INDI, and it is not a fork, a rewrite
or a branch of it — it was written from the ground up and it is an alternative to INDI.

The two share one thing only, the wire format: INDIGO can fall down to the legacy INDI wire
protocol 1.7, which is what makes INDI drivers and INDI clients usable with INDIGO. Everything
above that line is INDIGO's own. The properties and their items, the API and the architecture
are different: INDIGO is a software bus that drivers, agents and clients attach to, and which
can live in a single process or be distributed over a network, while INDI runs every driver as
a separate process connected by pipes or sockets. INDIGO is designed around scalability,
stability and robustness.

The native client applications of the project are Ain INDIGO Imager on Linux and Windows and
INDIGO A1 on macOS, iOS and iPadOS. Ain is the INDIGO counterpart of what Ekos is in the INDI
world - it is developed by the INDIGO Initiative and shares no code with Ekos.

This is the list of…
