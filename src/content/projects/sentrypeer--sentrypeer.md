---
repo: "SentryPeer/SentryPeer"
name: "SentryPeer"
description: "Protect your SIP Servers from bad actors at https://sentrypeer.org"
readmeQualityOk: true
url: "https://github.com/SentryPeer/SentryPeer"
homepage: "https://sentrypeer.org"
language: "C"
languages: ["C", "Rust"]
languagePcts: [60, 24]
topics: ["sip", "voip", "security-tools", "honeypot", "peer-to-peer", "p2p", "machine-learning", "fraud-detection", "fraud", "fraud-prevention"]
stars: 212
forks: 28
openIssues: 1
closedIssues: 29
watchers: 9
contributors: 8
recentReleases: 0
createdAt: "2021-01-31T23:08:36Z"
lastCommitAt: "2026-10-21T20:00:39Z"
lastReleaseAt: "2022-05-08T19:12:08Z"
status: "thriving"
tags: ["legacy_hero", "funded", "community_hub"]
healthScore: 96
undervaluedScore: 43
maintainers: ["dependabot[bot]", "ghenry", "Copilot"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/334776528/20d0686e-f268-4c66-96c6-77699c730b86"
fundingLinks: ["LIBERAPAY:https://liberapay.com/sentrypeer"]
discussionCount: 21
---

## Protect your SIP Servers from bad actors

Special thanks to [Deutsche Telekom Security GmbH](https://github.com/telekom-security) for sponsoring us in 2024.

_Why not give us a star and follow us on [Twitter](https://twitter.com/sentrypeer)!_  

## Table of Contents
* [Introduction](#introduction)
* [Overview](#overview)
* [Features](#construction-features)
* [Talks](#talks)
* [Adoption](#adoption)
* [Design](#design)
* [Docker](#docker)
  * [Environment Variables](#environment-variables)
* [Installation](#installation)
  * [Homebrew (macOS or Linux)](#homebrew-macos-or-linux)
  * [Alpine Linux](#alpine-linux)
  * [Ubuntu Package](#ubuntu-package)
  * [Building from source](#building-from-source)
* [Running SentryPeer](#running-sentrypeer)
* [WebHook](#webhook)
* [RESTful API](#restful-api)
  * [Endpoint /health-check](#endpoint-health-check)
  * [Endpoint /ip-addresses](#endpoint-ip-addresses)
  * [Endpoint /ip-addressss/{ip-address}](#endpoint-ip-addressip-address)
  * [Endpoint /numbers](#endpoint-numbers)
  * [Endpoint /numbers/{phone-number}](#endpoint-numbersphone-number)
* [Syslog and Fail2ban](#syslog-and-fail2ban)
* [JSON Log Format](#json-log-format) 
* [Command Line…
