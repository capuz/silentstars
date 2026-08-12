---
repo: "jpaulm/javafbp-websockets"
name: "javafbp-websockets"
description: "Web Server written in JavaFBP, using WebSockets - demo using simple JavaScript client "
readmeQualityOk: true
url: "https://github.com/jpaulm/javafbp-websockets"
homepage: "https://github.com/jpaulm/javafbp"
language: "Java"
languages: ["Java"]
languagePcts: [60]
topics: ["support-websockets", "javafbp-websockets", "substreams", "javafbp-support"]
stars: 20
forks: 2
openIssues: 1
closedIssues: 6
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2014-09-11T19:21:39Z"
lastCommitAt: "2026-08-12T05:15:34Z"
lastReleaseAt: "2020-08-25T16:03:44Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 78
undervaluedScore: 42
maintainers: ["renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0be72796028fa75af413e52f118b2717a83808a7a3331c1c659f2ba31c6a6a1c/jpaulm/javafbp-websockets"
---

JavaFBP-WebSockets
===

### JavaFBP Support for WebSockets 

This project uses [JavaFBP](https://github.com/jpaulm/javafbp) for the server side, HTML5 and JavaScript for the clients.  It also uses modules from **@tootallnate**'s Java-WebSocket GitHub project - see the [Java-WebSocket](https://github.com/TooTallNate/Java-WebSocket) web page.  Thanks, @tootallnate !

General web site on Flow-Based Programming: https://jpaulm.github.io/fbp/ .

General
---

**Latest release: `javafbp-websockets-1.3.3`** 

The jar file can be obtained from `build/libs/`, Releases and Maven.   The new release should be up on Maven shortly (there is a period when the shield shows the new release number, but it is not yet up on Maven).  The Maven shields are below.

 
 

This project comprises some components which support WebSockets for JavaFBP, plus a test case to illustrate their use.  The components are based on the "AutobahnServerTest" code on the [Java-WebSocket](https://github.com/TooTallNate/Java-WebSocket) web page - split into two JavaFBP components: `WebSocketReceive` and `WebSocketRespond`. 

The key concept here is that of FBP "substreams", where each substream is delimited by special…
