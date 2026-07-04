---
repo: "ipregistry/ipregistry-javascript"
name: "ipregistry-javascript"
description: "Official Javascript Client for Ipregistry: a Non-Intrusive Solution for IP Geolocation and Threat Data."
readmeQualityOk: true
url: "https://github.com/ipregistry/ipregistry-javascript"
homepage: "https://ipregistry.co"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["ipregistry", "javascript", "ipinfo", "ip2location", "ipdata", "geolocation", "api", "threats", "maxmind", "ip"]
stars: 17
forks: 3
openIssues: 0
closedIssues: 8
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2019-07-16T17:11:08Z"
lastCommitAt: "2026-07-04T22:18:43Z"
lastReleaseAt: "2021-10-26T21:22:53Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 80
undervaluedScore: 52
maintainers: ["laurentpellegrino", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1dc7123cc6e193b0c7604bd9affe3924ae17cfd5099276f41803147c90a45861/ipregistry/ipregistry-javascript"
discussionCount: 0
---

[<img src="https://cdn.ipregistry.co/icons/favicon-96x96.png" alt="Ipregistry" width="64"/>](https://ipregistry.co/)
# Ipregistry Javascript Client Library

This is the official Javascript client library for the [Ipregistry](https://ipregistry.co) IP geolocation and threat data API,
allowing you to lookup your own IP address or specified ones. Responses return multiple data points including carrier, 
company, currency, location, timezone, threat information, and more.

## Getting Started

You'll need an Ipregistry API key, which you can get along with 100,000 free lookups by signing up for a free account at [https://ipregistry.co](https://ipregistry.co).

### Installation

```
$ npm install @ipregistry/client
```

### First example

This is a very simple example. This creates a Ipregistry client and retrieves IP info for a given IP address:

```javascript
const {IpregistryClient} = require('@ipregistry/client');

const client = new IpregistryClient('YOUR_API_KEY');

client.lookupIp('73.2.2.2').then(response => {
    console.log(response.data);
}).catch(error => {
    console.error(error);
})

```

Instead of using promises, you can also use async/await:

```javascript
const…
