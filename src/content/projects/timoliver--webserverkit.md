---
repo: "TimOliver/WebServerKit"
name: "WebServerKit"
description: "A fork of the #1 HTTP server for iOS, macOS & tvOS"
readmeQualityOk: true
url: "https://github.com/TimOliver/WebServerKit"
language: "Objective-C"
languages: ["Objective-C"]
languagePcts: [92]
stars: 6
forks: 3
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-04-28T15:10:35Z"
lastCommitAt: "2026-07-31T06:29:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 69
maintainers: ["TimOliver"]
openGraphImageUrl: "https://opengraph.githubassets.com/0fc8cde3480d0e6bdafff4d80a61e8f77507efcf6ec305264bc79377370e9214/TimOliver/WebServerKit"
---

___In January 2023, [GCDWebServer](https://github.com/swisspol/GCDWebServer) was archived by its author. Since I was planning to eventually use this library in my own side projects, I've decided to fork WSKWebServer and continue development of it under a new name. I plan to slowly add updates to this repo as I get the time. -Tim___

Overview
========

WSKWebServer is a modern and lightweight GCD based HTTP 1.1 server designed to be embedded in iOS, macOS & tvOS apps. It was written from scratch with the following goals in mind:
* Elegant and easy to use architecture with only 4 core classes: server, connection, request and response (see "Understanding WSKWebServer's Architecture" below)
* Well designed API with fully documented headers for easy integration and customization
* Entirely built with an event-driven design using [Grand Central Dispatch](http://en.wikipedia.org/wiki/Grand_Central_Dispatch) for best performance and concurrency
* No dependencies on third-party source code
* Available under a friendly [New BSD License](https://github.com/TimOliver/WebServerKit/blob/HEAD/LICENSE)

Extra built-in features:
* Allow implementation of fully asynchronous handlers of incoming…
