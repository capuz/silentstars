---
repo: "MTD2A/MTD2A"
name: "MTD2A"
description: "Advanced train control logic functions that is simple to use"
readmeQualityOk: true
url: "https://github.com/MTD2A/MTD2A"
homepage: "https://www.youtube.com/@Jorgen.Bo.Madsen"
language: "C++"
languages: ["C++"]
languagePcts: [98]
topics: ["arduino", "arduino-library", "model-railroad", "model-train", "non-blocking", "parallel-processing", "event-step-process", "model-train-detection-and-action", "mtd2a", "pwm-curves"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2025-03-15T16:48:10Z"
lastCommitAt: "2026-10-17T07:59:21Z"
lastReleaseAt: "2026-08-07T10:24:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 71
maintainers: ["jebmdk"]
openGraphImageUrl: "https://opengraph.githubassets.com/ec1f863fb5495c52ab4461ac75b16dfb77b247c335f1f51de7b07e9d5578d9a8/MTD2A/MTD2A"
---

# 

MTD2A is a collection of user friendly advanced and functional C++ classes - building blocks - for time-controlled handling of input and output. The library is intended for Arduino enthusiasts without much programming experience, who are interested in electronics control and automation, and model trains as a hobby. 

### Common to all building blocks are:
• Build on a state machine system for parallel processing and synchronous timing <br/>
• Support a wide range of input sensors and output devices <br/>
• Are simple to use to build complex solutions with few commands <br/>
• Operate non-blocking, process-oriented and time controlled <br/>
• Offers extensive control and troubleshooting information <br/>
• Thoroughly documented with examples <br/>

### Library Quality Assessment
[Code, documentation and examples](https://github.com/MTD2A/MTD2A/blob/HEAD/doc/quality_assessment.md)

## Mode of operation
MTD2A is a so-called state machine. This means MTD2A objects are quickly traversed in an infinite loop, and each traversal is divided into two phases:
1.	Changing state variables (changing and/or reading and checking)
2.	Execute functionality and control the passage of time.

###…
