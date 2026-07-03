---
repo: "smartsheet/smartsheet-javascript-sdk"
name: "smartsheet-javascript-sdk"
description: "Library that uses Node.js and JavaScript to connect to Smartsheet services. "
url: "https://github.com/smartsheet/smartsheet-javascript-sdk"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
stars: 21
forks: 23
openIssues: 42
closedIssues: 23
watchers: 10
contributors: 36
recentReleases: 0
createdAt: "2022-10-25T12:56:59Z"
lastCommitAt: "2026-07-03T12:40:51Z"
lastReleaseAt: "2025-02-04T21:47:25Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 80
undervaluedScore: 63
maintainers: ["ggoranov-smar", "astrinski-smartsheet", "zgeorgiev-smartsheet"]
openGraphImageUrl: "https://opengraph.githubassets.com/2d3835a37a40209c2bf1713967080938a6c28d6e9653e85bb3a203cc0e0c0722/smartsheet/smartsheet-javascript-sdk"
---

# Smartsheet SDK for JavaScript
 [](https://coveralls.io/github/smartsheet/smartsheet-javascript-sdk?branch=mainline) [](https://badge.fury.io/js/smartsheet)

This is a client SDK for connecting to the [Smartsheet API](https://developers.smartsheet.com/api/smartsheet/) from Node.js applications.

## System Requirements

The SDK is compatible with [actively supported](https://github.com/nodejs/release#release-schedule) Node.js versions 14.x or later.

## Installation

To install this SDK run the following command in a terminal window:

```bash
npm install smartsheet
```

## Example Usage

To call the API you must have an access token. You can generate an access token in Smartsheet UI under Account > Personal Settings > API Access.

The following is a brief sample using promises that shows you how to:

* Initialize the client
* List all sheets
* Load one sheet

```javascript
// Initialize the client
const client = require('smartsheet');
const smartsheet = client.createClient({
  accessToken: '<access_token>', // Replace <access_token> with your API token
  logLevel: 'info'
});

// The `smartsheet` variable now contains access to all of the APIs

// Set queryParameters for `include`…
