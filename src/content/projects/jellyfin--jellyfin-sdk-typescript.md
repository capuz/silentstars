---
repo: "jellyfin/jellyfin-sdk-typescript"
name: "jellyfin-sdk-typescript"
description: "TypeScript SDK for Jellyfin"
readmeQualityOk: true
url: "https://github.com/jellyfin/jellyfin-sdk-typescript"
homepage: "https://typescript-sdk.jellyfin.org"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["jellyfin", "typescript"]
stars: 128
forks: 47
openIssues: 8
closedIssues: 28
watchers: 5
contributors: 52
recentReleases: 0
createdAt: "2021-08-29T04:51:00Z"
lastCommitAt: "2026-10-23T12:04:49Z"
lastReleaseAt: "2022-09-16T16:02:38Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 92
undervaluedScore: 45
maintainers: ["thornbill", "renovate[bot]", "jellyfin-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c3bfb846381b77a5c8dd3a03609c3401e19fbe56e139ab4487aeddb5dda9112/jellyfin/jellyfin-sdk-typescript"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/jellyfin"]
---

---

A TypeScript SDK for Jellyfin.

## Install

```sh
npm i --save @jellyfin/sdk
```

or

```sh
yarn add @jellyfin/sdk
```

### Supported Jellyfin Versions

|  SDK Version  | Jellyfin Version |
|:-------------:|:----------------:|
|     1.0.x     |       12.x       |
|    0.13.0     |     10.11.x      |
|    0.12.0     |     10.11.x      |
|    0.11.0     |     10.10.x      |
|    0.10.0     |      10.9.x      |
|     0.9.0     |      10.9.x      |
| 0.8.2 - 0.7.0 | 10.8.1 - 10.8.13 |

### React Native

The generated Axios client used in this library depends on `URL` and `URLSearchParams` to be available on the global scope.
React Native only includes incomplete implementations for these classes, so a polyfill is required.
[React Native URL Polyfill](https://github.com/charpeni/react-native-url-polyfill) seems like a good solution for this.

## Usage

```js
// Create a new instance of the SDK
const jellyfin = new Jellyfin({
    clientInfo: {
        name: 'My Client Application',
        version: '1.0.0'
    },
    deviceInfo: {
        name: 'Device Name',
        id: 'unique-device-id',
        languages: ['en-US']
    }
});

// Find a valid server by trying to connect using…
