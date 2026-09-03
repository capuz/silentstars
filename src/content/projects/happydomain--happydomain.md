---
repo: "happyDomain/happydomain"
name: "happydomain"
description: "Manage all your domain names in one place (mirror of framagit.org/happyDomain/happydomain)"
readmeQualityOk: true
url: "https://github.com/happyDomain/happydomain"
homepage: "https://www.happydomain.org/"
language: "Go"
languages: ["Go", "Svelte"]
languagePcts: [59, 24]
topics: ["dns", "golang", "self-hosted", "domain-name", "domain-name-system", "go", "svelte", "sveltekit"]
stars: 49
forks: 2
openIssues: 5
closedIssues: 40
watchers: 4
contributors: 8
recentReleases: 0
createdAt: "2021-11-01T09:57:38Z"
lastCommitAt: "2026-09-03T07:13:23Z"
lastReleaseAt: "2026-04-16T10:31:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 55
maintainers: ["nemunaire"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/423415159/94fb0ab7-72d9-4ab6-8538-86244b1b9d99"
discussionCount: 2
---

happyDomain
===========

happyDomain is a free web application that centralizes the management of your domain names from different registrars and hosts.

**Website:** [happydomain.org](https://www.happydomain.org/) | **Demo:** [try.happydomain.org](https://try.happydomain.org/)

It consists of a HTTP REST API written in Golang (primarily based on https://dnscontrol.org/ and https://github.com/miekg/dns) with a nice web interface written with [Svelte](https://svelte.dev/).
It runs as a single stateless Linux binary, backed by a database.

Table of Contents
-----------------

- [Features](#features)
- [Getting Started With Docker](#getting-started-with-docker)
- [Install from binary](#install-from-binary)
- [Configuration](#use-happydomain)
- [Building from source](#building)
- [Development environment](#development-environment)
- [Reporting an issue](#reporting-an-issue)
- [Contributing](#contributing)
- [License](#license)

Features
--------

* An ultra fast web interface without compromise
* Multiple domains management
* Support for 60+ DNS providers (including dynamic DNS, RFC 2136) thanks to [DNSControl](https://dnscontrol.org/)
* Support for the most recents resource records…
