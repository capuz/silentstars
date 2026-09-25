---
repo: "wso2/msf4j"
name: "msf4j"
description: "WSO2 Microservices Framework for Java (MSF4J)"
readmeQualityOk: true
url: "https://github.com/wso2/msf4j"
homepage: "http://wso2.com/products/microservices-framework-for-java/"
language: "Java"
languages: ["Java"]
languagePcts: [96]
stars: 413
forks: 347
openIssues: 75
closedIssues: 76
watchers: 273
contributors: 136
recentReleases: 0
createdAt: "2015-09-21T06:19:29Z"
lastCommitAt: "2026-09-25T09:01:57Z"
lastReleaseAt: "2016-11-24T08:44:27Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 73
undervaluedScore: 22
maintainers: ["gayaldassanayake", "wso2-jenkins-bot", "NipunaMadhushan"]
openGraphImageUrl: "https://opengraph.githubassets.com/baefcbe0d5b8a178ed5290e4957a4ed6a3c7d6496bbceaa7f3354a7ef3fbbe95/wso2/msf4j"
---

[Build status:](https://wso2.org/jenkins/job/products/job/msf4j/) 

# WSO2 Microservices Framework for Java (MSF4J)

WSO2 Microservices Framework for Java (MSF4J) is a lightweight high performance framework for developing
& running microservices.

WSO2 MSF4J is one of the highest performing lightweight Java microservices frameworks. The following graphs show the 
throughput, memory consumption & latency characteristics of MSF4J against other microservices frameworks.
 
 

An echo service which accepts a 1KB request & echoes it back directly and using a temp file was developed for the respective 
frameworks, and requests were sent for different concurrency values. The test was repeated for each concurrency value for each 
framework and the average throughput was calculated. 
Tests were run out of the box without any tuning on 32 core 64GB server in JVM v1.8.0_60 with default configuration.

Memory usage for each framework was observed after running the 1KB payload echo microservice on each framework & 
sending a number of requests at different concurrency levels to each service. 
The graph above shows the averaged out values after several runs for each framework.
 
Latency results…
