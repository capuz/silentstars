---
repo: "SAP/abap-to-json"
name: "abap-to-json"
description: "ABAP to JSON serializer and deserializer"
readmeQualityOk: true
url: "https://github.com/SAP/abap-to-json"
language: "ABAP"
languages: ["ABAP"]
languagePcts: [100]
topics: ["abap", "deserializer", "json", "json-formatting", "parser", "serializer", "json-pretty-print"]
stars: 91
forks: 17
openIssues: 0
closedIssues: 9
watchers: 6
contributors: 668
recentReleases: 0
createdAt: "2023-04-18T15:48:21Z"
lastCommitAt: "2026-09-18T14:03:34Z"
lastReleaseAt: "2025-06-02T12:56:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 30
maintainers: ["alexey-arseniev"]
openGraphImageUrl: "https://opengraph.githubassets.com/de6f7ff97129a44c1e4378879fa0c8589e1acfbdd72e60e8a30f0cec840f69a7/SAP/abap-to-json"
discussionCount: 4
---

# ABAP to JSON serializer and deserializer

## About this project

This is an Open-source version of the standard /UI2/CL_JSON class, and its public documentation was previously available on the SCN wiki as "One more ABAP to JSON Serializer and Deserializer" in 2013.
The official delivery of /UI2/CL_JSON will continue. The Open Source version (Z_UI2_JSON) is your way to contribute and get updates sooner using ABAP Git infrastructure. 

### Why
There are a lot of other implementations of the **ABAP to JSON Serializer and Deserializer** in SDN. Still, I found all implementations unsuitable for my needs for different reasons. From SAP_BASIS 7.40, there is also **a simple transformation** available for converting **ABAP to JSON** and **JSON to ABAP**. It is the best choice if you need maximal performance and do not care about **serialization format**, but it fits badly for properly handling ABAP types and name **pretty-printing**. 

So, I have written my **ABAP JSON serializer** and **ABAP JSON deserializer**, which have some key differences from other implementations.

Here, you can find an Open-Source version of the standard /UI2/CL_JSON class in the form of a Z* class that you can…
