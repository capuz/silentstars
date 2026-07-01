---
repo: "bakdata/kserve-client"
name: "kserve-client"
description: "A Java client for KServe inference services"
url: "https://github.com/bakdata/kserve-client"
language: "Java"
languages: ["Java"]
languagePcts: [100]
stars: 7
forks: 1
openIssues: 1
closedIssues: 0
watchers: 4
contributors: 25
recentReleases: 0
createdAt: "2022-02-07T08:08:36Z"
lastCommitAt: "2026-07-01T06:58:47Z"
lastReleaseAt: "2026-03-09T12:20:44Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 73
undervaluedScore: 38
maintainers: ["dependabot[bot]", "bakdata-bot", "jkbe"]
openGraphImageUrl: "https://opengraph.githubassets.com/1d26fda02581a433e5118c770527102c8d7edba5670db309320e5ffede3ba5b2/bakdata/kserve-client"
---

# kserve-client

A Java client for calling KServe inference services which implement one of [the predict v1 or v2 protocols](https://kserve.github.io/website/modelserving/v1beta1/serving_runtime/). 

It let's you easily configure the endpoint of the inference service which should be called. 
The data shape of both the request and response can be modeled using Java classes. 
The library includes a retry mechanism to automatically retry requests to the inference service in case it's scaled to zero upon the first request.

You can find a [blog post on medium](https://medium.com/bakdata/scalable-machine-learning-with-kafka-streams-and-kserve-85308858d867) where the kserve-client is used in the demo application.

## Getting Started

You can add kserve-client via Maven Central.

#### Gradle
```gradle
compile group: 'com.bakdata.kserve', name: 'kserve-client', version: '1.0.1'
```

#### Maven
```xml
<dependency>
    <groupId>com.bakdata.kserve</groupId>
    <artifactId>kserve-client</artifactId>
    <version>1.0.1</version>
</dependency>
```

For other build tools or versions, refer to the [latest version in…
