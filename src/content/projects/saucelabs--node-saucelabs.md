---
repo: "saucelabs/node-saucelabs"
name: "node-saucelabs"
description: "A wrapper around Sauce Labs API"
readmeQualityOk: true
url: "https://github.com/saucelabs/node-saucelabs"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [98]
topics: ["saucelabs", "api", "api-client", "rest", "sauce-labs", "sauce-connect", "hacktoberfest"]
stars: 98
forks: 44
openIssues: 6
closedIssues: 70
watchers: 14
contributors: 35
recentReleases: 0
createdAt: "2012-06-01T11:43:00Z"
lastCommitAt: "2026-10-20T08:49:16Z"
lastReleaseAt: "2020-09-01T21:48:02Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero"]
healthScore: 95
undervaluedScore: 49
maintainers: ["dependabot[bot]", "diemol", "oss-sauce-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/b2a90a0cd00bd821bd920a52bd8eae85d0a4a028d4000348f03c06341edba4d1/saucelabs/node-saucelabs"
---

# Node Sauce Labs [](https://github.com/saucelabs/node-saucelabs/actions/workflows/test.yml)

Wrapper around all Sauce Labs REST APIs for [Node.js](http://nodejs.org/) (v22.19.0 or higher) including support for
[Sauce Connect Proxy](https://docs.saucelabs.com/secure-connections/sauce-connect-5/) and TypeScript definitions.

## Install

To install the package run:

```sh
npm install saucelabs
```

## Options

### user

Your Sauce Labs username.

Type: `string`
Default: `process.env.SAUCE_USERNAME`

### key

Your Sauce Labs access key.

Type: `string`
Default: `process.env.SAUCE_ACCESS_KEY`

### region

Your Sauce Labs datacenter region. The following regions are available:

- `us-west-1` (short `us`)
- `eu-central-1` (short `eu`)
- `us-east-4` (real mobile devices only)
- `asia-south-2` (real mobile devices only)

Type: `string`
Default: `us`

### proxy

If you want to tunnel your API request through a proxy please provide your proxy URL.

Type: `string`
Default: `null`

### headers

If you want to set request headers, as example {'User-Agent': 'node-saucelabs'}

Type: `object`<br>
Default: `{'User-Agent': 'saucelabs/<VERSION> (nodejs <PLATFORM>)'}`

## Usage

All accessible API…
