---
repo: "JohanVanslembrouck/corolib"
name: "corolib"
description: "A C++ coroutine library for writing asynchronous distributed applications using Boost ASIO, Qt, gRPC,  ROS2, TAO, ..., as communication frameworks"
readmeQualityOk: true
url: "https://github.com/JohanVanslembrouck/corolib"
language: "C++"
languages: ["C++"]
languagePcts: [96]
stars: 47
forks: 7
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 1
recentReleases: 0
createdAt: "2020-06-12T14:17:21Z"
lastCommitAt: "2026-09-22T08:44:21Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 76
undervaluedScore: 42
maintainers: ["JohanVanslembrouck"]
openGraphImageUrl: "https://opengraph.githubassets.com/e55d445dd32ea431d03484cc28ef2381062749d758ed02a55087552669ba404a/JohanVanslembrouck/corolib"
---

# corolib

corolib is a C++ coroutine library for writing asynchronous distributed applications 
using Boost ASIO, Qt, gRPC, ROS2, TAO, ..., as communication frameworks.

## Objectives

corolib has two main objectives:

* Demonstrate that it is possible to write asynchronous distributed applications in a synchronous style using various (open source) asynchronous communication frameworks.

  * Asynchronous operations can be completed on the same thread they are started on (completion functions are called from an event loop) or on another thread.
  * There is no need to make changes to these frameworks or to the corolib library, but sometimes an "adaptation layer" is useful. This layer contains functionality that would otherwise be replicated in the applications.
  
* Learning about and experimenting with coroutines.

  * Directory [corolab](https://github.com/JohanVanslembrouck/corolib/blob/HEAD/studies/corolab) (short for "coroutine laboratory") contains simple stand-alone programs that also include a coroutine definition; the reader just has to open a single file to have access to all source code.
  * Directory…
