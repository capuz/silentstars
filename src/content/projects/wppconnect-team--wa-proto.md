---
repo: "wppconnect-team/wa-proto"
name: "wa-proto"
description: "WhatsApp Web Protocol Buffer schemas with generated protobufjs JavaScript and TypeScript bindings. Encode, decode and inspect message structures; includes automated extraction tooling."
readmeQualityOk: true
url: "https://github.com/wppconnect-team/wa-proto"
homepage: "https://github.com/wppconnect-team/wa-proto#readme"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["wa-proto", "whatsapp-proto-source", "javascript", "message-schema", "protobuf", "protobufjs", "protocol-buffers", "typescript", "whatsapp", "whatsapp-web"]
stars: 51
forks: 16
openIssues: 1
closedIssues: 0
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2024-02-18T21:08:32Z"
lastCommitAt: "2026-11-06T11:23:05Z"
lastReleaseAt: "2025-01-10T23:03:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 80
undervaluedScore: 48
maintainers: ["github-actions[bot]", "renovate[bot]", "joaosouz4dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/163831bd3eaff393ecc2ee5e5493933ebe6aeef95ff478317ee322f950631b36/wppconnect-team/wa-proto"
fundingLinks: ["GITHUB:https://github.com/joaosouz4dev", "GITHUB:https://github.com/manfe", "OPEN_COLLECTIVE:https://opencollective.com/wppconnect"]
---

**English** | [Português (Brasil)](https://github.com/wppconnect-team/wa-proto/blob/HEAD/README.pt-BR.md)

# WPPConnect/WA-Proto

Provide Protocol Buffer definitions extracted from WhatsApp Web.

A project in the WPPConnect ecosystem, maintained by WPPConnect Team.

[Getting started](#getting-started) | [Documentation](#documentation) | [Contributing](#contributing) | [Support WPPConnect](#support-the-project)

## Overview

For Node.js/TypeScript developers working with WhatsApp message structures. The package provides generated protobufjs bindings; it does not connect, authenticate or send messages on its own. Schemas are extracted by the community, not published or endorsed by WhatsApp.

## Features

- WhatsApp Web `.proto` schema and generated JavaScript/TypeScript bindings.
- Message verification, encoding and decoding with protobufjs.
- Automated extraction and package-validation tooling.

## Getting started

Use Node.js and npm.

```sh
npm install @wppconnect/wa-proto
```

Save as `index.cjs` and run `node index.cjs`. The roundtrip is local and does not contact WhatsApp.

```javascript
const { waproto } = require("@wppconnect/wa-proto");
const payload = { conversation:…
