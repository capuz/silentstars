---
repo: "tls-inspector/tls-inspector"
name: "tls-inspector"
description: "Easily view and inspect X.509 certificates on your iOS device."
readmeQualityOk: true
url: "https://github.com/tls-inspector/tls-inspector"
homepage: "https://tlsinspector.com/"
language: "Swift"
languages: ["Swift"]
languagePcts: [87]
topics: ["ios-app", "security", "tls", "https", "x509", "gplv3", "ssl", "ssl-certificates", "tls-inspector"]
stars: 197
forks: 32
openIssues: 3
closedIssues: 240
watchers: 13
contributors: 7
recentReleases: 0
createdAt: "2016-03-30T19:31:42Z"
lastCommitAt: "2026-10-21T23:36:25Z"
lastReleaseAt: "2017-04-25T03:14:36Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 88
undervaluedScore: 28
maintainers: ["ecnepsnai", "marcinmajsc", "nmhuy"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/55091570/b8a54400-8948-11e9-9e60-2e546d054331"
fundingLinks: ["GITHUB:https://github.com/ecnepsnai"]
discussionCount: 2
---

# TLS Inspector

TLS Inspector is a free & open-source iOS app that enables you to inspect, analyze, and troubleshoot TLS connections.  
**[Learn More about TLS Inspector »](https://tlsinspector.com/)**

## Project Structure

This is the Git repository for the TLS Inspector application. The code of the app and its associated extension are structured into subdirectories:

- `tls-inspector/` - This directory contains code and user interface that is specific to the app itself, for example the input view, recent inspections, about and option view.
- `inspect-website/` - This directory contains a minimal set of code for the show certificate share extension.
- `tlsui/` - This directory contains nearly all of the user interface and supporting systems for it, as well as all of the localization code and strings. As the user interface for the app is shared between both the app and the extension, a local swift package is used.
- `tlskit/` - This directory contains all of the logic that performs TLS connection and certificate inspection.

This project also depends on [DNSKit](https://github.com/dns-inspector/dnskit), [external pre-compiled copies of libcurl and…
