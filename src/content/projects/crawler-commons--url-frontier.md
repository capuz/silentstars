---
repo: "crawler-commons/url-frontier"
name: "url-frontier"
description: "API definition, resources and reference implementation of URL Frontiers"
readmeQualityOk: true
url: "https://github.com/crawler-commons/url-frontier"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["url-frontier", "web-crawlers", "webcrawling", "grpc", "urlfrontier"]
stars: 64
forks: 13
openIssues: 12
closedIssues: 61
watchers: 7
contributors: 11
recentReleases: 0
createdAt: "2019-09-15T16:44:36Z"
lastCommitAt: "2026-07-28T14:56:18Z"
lastReleaseAt: "2025-10-23T12:16:49Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 91
undervaluedScore: 50
maintainers: ["jnioche", "dpol1", "klockla"]
openGraphImageUrl: "https://opengraph.githubassets.com/e69a96955a14ca7f75d5e06223c69ae20119f03b8fde509b88f013f7b9496b37/crawler-commons/url-frontier"
discussionCount: 14
---

Discovering content on the web is possible thanks to web crawlers, luckily there are many excellent open-source solutions for this; however, most of them have their own way of storing and accessing the information about the URLs.

The aim of the *URL Frontier* project is to develop a crawler/language-neutral API for the operations that web crawlers do when communicating with a web frontier e.g. get the next URLs to crawl, update the information about  URLs already processed, change the crawl rate for a particular hostname, get the list of active hosts, get statistics, etc... Such an API can used by a variety of web crawlers, regardless of whether they are implemented in Java like [StormCrawler](http://stormcrawler.net) and [Heritrix](https://github.com/internetarchive/heritrix3) or in Python like [Scrapy](https://scrapy.org/).

The outcomes of the project are to:
- design an **[API](https://github.com/crawler-commons/url-frontier/blob/HEAD/API/README.md)** with [gRPC](http://grpc.io), provide a Java stubs for the API and instructions on how to achieve the same for other languages
- deliver a robust reference implementation of the URL Frontier…
