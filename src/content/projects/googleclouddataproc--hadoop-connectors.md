---
repo: "GoogleCloudDataproc/hadoop-connectors"
name: "hadoop-connectors"
description: "Libraries and tools for interoperability between Hadoop-related open-source software and Google Cloud Platform."
readmeQualityOk: true
url: "https://github.com/GoogleCloudDataproc/hadoop-connectors"
language: "Java"
languages: ["Java"]
languagePcts: [100]
stars: 293
forks: 272
openIssues: 53
closedIssues: 185
watchers: 91
contributors: 120
recentReleases: 0
createdAt: "2014-05-12T03:11:55Z"
lastCommitAt: "2026-09-14T09:12:14Z"
lastReleaseAt: "2018-03-30T00:17:12Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 90
undervaluedScore: 37
maintainers: ["animesh-g", "dheerajsngh", "shrutisinghania"]
openGraphImageUrl: "https://opengraph.githubassets.com/ade95bdacb0c9dcf3c9693206742703d956bffe27d8a89235c1df9476dc6f040/GoogleCloudDataproc/hadoop-connectors"
---

# Apache Hadoop Connectors

Libraries and tools for interoperability between Apache Hadoop related
open-source software and Google Cloud Platform.

## Google Cloud Storage connector for Apache Hadoop (HCFS)

The Google Cloud Storage connector for Hadoop enables running MapReduce jobs
directly on data in Google Cloud Storage by implementing the Hadoop FileSystem
interface. For details, see [the README](https://github.com/GoogleCloudDataproc/hadoop-connectors/blob/HEAD/gcs/README.md).

## Building the Cloud Storage connector

> Note that build requires Java 17+ and fails with older Java versions.

To build the connector for specific Hadoop version, run the following commands
from the main directory:

```bash
./mvnw clean package
```

In order to verify test coverage for specific Hadoop version, run the following
commands from the main directory:

```bash
./mvnw -P coverage clean verify
```

The Cloud Storage connector JAR can be found in `gcs/target/` directory.

## Adding the Cloud Storage connector to your build

Maven group ID is `com.google.cloud.bigdataoss` and artifact ID for Cloud
Storage connector is `gcs-connector`.

To add a dependency on Cloud Storage connector using…
