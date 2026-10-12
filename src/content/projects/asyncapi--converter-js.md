---
repo: "asyncapi/converter-js"
name: "converter-js"
description: "Convert to or migrate between AsyncAPI versions with the converter"
readmeQualityOk: true
url: "https://github.com/asyncapi/converter-js"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["convert", "converter", "nodejs", "get-global-node-release-workflows", "get-global-releaserc"]
stars: 24
forks: 21
openIssues: 2
closedIssues: 29
watchers: 4
contributors: 36
recentReleases: 0
createdAt: "2019-05-11T12:44:23Z"
lastCommitAt: "2026-10-12T11:15:58Z"
lastReleaseAt: "2022-02-18T11:28:09Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 90
undervaluedScore: 50
maintainers: ["dependabot[bot]", "asyncapi-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/098daf151a76a57d7590461c74e0c11feaba683646157a948f3575fb0f43c1b4/asyncapi/converter-js"
fundingLinks: ["GITHUB:https://github.com/asyncapi", "OPEN_COLLECTIVE:https://opencollective.com/asyncapi"]
---

# AsyncAPI Converter

Convert [AsyncAPI](https://asyncapi.com) documents older to newer versions and you can also convert OpenAPI documents to AsyncAPI documents.

- [Installation](#installation)
- [Usage](#usage)
  * [From CLI](#from-cli)
  * [In JS](#in-js)
  * [In TS](#in-ts)
- [Conversion 2.x.x to 3.x.x](#conversion-2xx-to-3xx)
- [Known missing features](#known-missing-features)
- [OpenAPI 3.0 to AsyncAPI 3.0 Conversion](#openapi-30-to-asyncapi-30-conversion)
    + [Limitations](#limitations)
- [Development](#development)
- [Contribution](#contribution)
- [Contributors ✨](#contributors-%E2%9C%A8)

## Installation

```sh
npm i @asyncapi/converter
```

## Usage

### From CLI

To convert an AsyncAPI document in the console needs the official [AsyncAPI CLI](https://github.com/asyncapi/cli).

If you don't have CLI installed, run this command to install the CLI globally on your system:

```sh
npm install -g @asyncapi/cli
```

Minimal usage example with output given:

```sh
asyncapi convert streetlights.yml -o streetlights2.yml

# Result:
asyncapi: '2.0.0'
channels:
...
```

Convert to a specific version:

```sh
asyncapi convert streetlights.yml -o streetlights2.yml -t 2.3.0

#…
