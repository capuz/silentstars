---
repo: "device-management-toolkit/wsman-messages"
name: "wsman-messages"
description: "Creates properly formated wsman messages to send to Intel® Active Management Technology (AMT) capable platforms. These libraries provide an easy to use API that when called return an XML string that is ready to be sent to an Intel® AMT device. Supports calls into AMT, IPS, and CIM classes supported by Intel® AMT devices."
readmeQualityOk: true
url: "https://github.com/device-management-toolkit/wsman-messages"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 10
forks: 7
openIssues: 0
closedIssues: 14
watchers: 2
contributors: 54
recentReleases: 0
createdAt: "2021-12-02T22:20:55Z"
lastCommitAt: "2026-07-21T06:12:51Z"
lastReleaseAt: "2022-02-24T21:17:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 81
maintainers: ["dependabot[bot]", "madhavilosetty-intel", "semantic-release-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/fd133c0fed9371d37864c994108b8b6975cf6cd3922bc3e0784c74bb519a2767/device-management-toolkit/wsman-messages"
---

# WSMAN-MESSAGES

Creates properly formatted wsman messages to send to Intel&reg; Active Management Technology (AMT) capable platforms. These libraries provide an easy to use API that when called return an XML string that is ready to be sent to an Intel&reg; AMT device. Supports calls into AMT, IPS, and CIM classes supported by Intel&reg; AMT devices. Full AMT SDK documentation can be found [here](https://software.intel.com/sites/manageability/AMT_Implementation_and_Reference_Guide/default.htm).

<br>

> IMPORTANT: For now, we are continuing to publish both @device-management-toolkit/wsman-messages and @open-amt-cloud-toolkit/wsman-messages npm packages to avoid a breaking change. Please update your package.json at your earliest convenience for when we cease to publish @open-amt-cloud-toolkit/wsman-messages. This is in effort to support the renaming of the toolkit.

## Installation

via NPM

```bash
npm i @device-management-toolkit/wsman-messages
```

## Usage

```typescript
import { AMT } from '@device-management-toolkit/wsman-messages'

const amtClass = new AMT.Message()
const message = this.amtClass.GeneralSettings.Get()
console.log(message)
```
