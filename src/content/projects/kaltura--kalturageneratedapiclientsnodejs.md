---
repo: "kaltura/KalturaGeneratedAPIClientsNodeJS"
name: "KalturaGeneratedAPIClientsNodeJS"
description: "NodeJS auto generated clients libs which will then be built and test by Travis CI"
readmeQualityOk: true
url: "https://github.com/kaltura/KalturaGeneratedAPIClientsNodeJS"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 11
forks: 14
openIssues: 1
closedIssues: 13
watchers: 18
contributors: 20
recentReleases: 0
createdAt: "2015-01-18T18:08:29Z"
lastCommitAt: "2026-07-05T06:32:22Z"
lastReleaseAt: "2019-04-15T14:08:36Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 96
undervaluedScore: 48
maintainers: ["ovp-github-actions"]
openGraphImageUrl: "https://opengraph.githubassets.com/488725cf06d9fbd43614ef78125e53de790e364799afadb45559e1167c74f386/kaltura/KalturaGeneratedAPIClientsNodeJS"
---

## Kaltura node.js API Client Library.
Compatible with Kaltura server version 23.2.0 and above.
This client library replaces the older architecture that presented in previous node.js client library.



You can install this client library using npm with:
```
npm install kaltura-client 
```
## Proxy settings for client
If the Kaltura client has to be used behind a proxy, this can be set in the KalturaConfiguration by setting proxy
to the url of the proxy. For example:

```js
const config = new kaltura.Configuration();
    
const proxyUrl = new URL('http://some.proxy.com');
proxyUrl.username = 'user';
proxyUrl.password = 'pass';
    
config.proxy = proxyUrl.toString();
const client = new kaltura.Client(config);
```

## Sanity Check
- Copy config.template.json to config.json  and set partnerId, secret and serviceUrl
- Run npm test

## Code contributions

We are happy to accept pull requests, please see [contribution guidelines](https://github.com/kaltura/platform-install-packages/blob/master/doc/Contributing-to-the-Kaltura-Platform.md)

The contents of this client are auto generated from https://github.com/kaltura/clients-generator and pull requests…
