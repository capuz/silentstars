---
repo: "ikmdev/tinkar-core"
name: "tinkar-core"
description: "Tinkar-core is a java software project that aims to provides a reference implementation for the open-source HL7 Tinkar informational Ballot."
readmeQualityOk: true
url: "https://github.com/ikmdev/tinkar-core"
language: "Java"
languages: ["Java"]
languagePcts: [100]
stars: 6
forks: 26
openIssues: 5
closedIssues: 0
watchers: 7
contributors: 34
recentReleases: 0
createdAt: "2023-04-14T04:21:14Z"
lastCommitAt: "2026-08-21T03:37:54Z"
lastReleaseAt: "2024-03-28T20:54:30Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 78
undervaluedScore: 70
maintainers: ["kec", "emays", "dukke"]
openGraphImageUrl: "https://opengraph.githubassets.com/97023fd118036595cdc3d1d3fe7197dac8e6b146115174f30e0d5257da940a4d/ikmdev/tinkar-core"
---

# tinkar-core

Tinkar core is an essential repository that creates the primitive functionality and data types for Komet. Tinkar core is also responsible for managing caches and I/O (spined-array) of the application. Building `tinkar-core` is a prerequisite to building `komet` on your local machine.

### Team Ownership - Product Owner
Data Team

## Getting Started

Follow the instructions below to set up the local environment for `tinkar-core`:

1. Download and install Open JDK Java 24

2. Download and install Apache Maven 3.9.11 or greater

3. Download and install Git

4. There are dependencies to building `tinkar-core`. Please ensure you have a reliable internet connection when cloning and building to get all dependencies from mvn central.

## Building and Running Tinkar Core

Follow the steps below to build and run `tinkar-core` on your local machine:

1. Clone the [tinkar-core repository](https://github.com/ikmdev/tinkar-core) from GitHub to your local machine

```bash
git clone [Repo URL]
```

2. Change local directory to location to `tinkar-core`

3. Enter the following command to build the application:

```bash
mvn clean install
```

4. To build and run Komet, please refer…
