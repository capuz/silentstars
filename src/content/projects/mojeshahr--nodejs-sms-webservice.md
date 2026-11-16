---
repo: "Mojeshahr/nodejs-sms-webservice"
name: "nodejs-sms-webservice"
description: "Node.js examples for the Payam Resan SMS web service - one runnable file per API method"
originalDescription: "Node.js examples for the Payam Resan SMS web service - one runnable file per API method"
descriptionLang: "fa"
readmeQualityOk: true
url: "https://github.com/Mojeshahr/nodejs-sms-webservice"
homepage: "https://docs.payam-resan.com"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["iran", "javascript", "nodejs", "payam-resan", "sms", "sms-api", "sms-gateway"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-07-21T11:11:30Z"
lastCommitAt: "2026-11-16T11:54:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 63
undervaluedScore: 44
maintainers: ["payam-resan"]
openGraphImageUrl: "https://opengraph.githubassets.com/1b5f3ed4465767d4c2ba0698ff92d2538df4363ddbf0b7a2e008bad19bed7592/Mojeshahr/nodejs-sms-webservice"
---

Connecting to the web service of <a href="https://payam-resan.com"><b>Payam Resan SMS panel</b></a> with Node.js<br>
One runnable file per service method, with no dependencies

<sub>[github.com/Mojeshahr](https://github.com/Mojeshahr) is the author.</sub>

---

## Quick start

```bash
git clone https://github.com/Mojeshahr/nodejs-sms-webservice.git
cd nodejs-sms-webservice

export PAYAM_RESAN_API_KEY='123456-XXXXXXXXXXXXXXX'
export PAYAM_RESAN_SENDER='30004040'

node examples/v3/account-info.mjs
```

Neither `npm install` nor `package.json` is required. From Node 18 onward, the `fetch` function is built into Node itself, and the examples rely on it.

Start with `account-info.mjs`: it sends nothing and consumes no credit, and if it responds, it means both the key and the connection are working.

## Before sending for real

There is a sandbox server that responds like the production server but does not send SMS messages and consumes no credit. Simply replace `V3` in the URL with `V3SandBox`. The only exception is `TokenList`, which is not implemented on that server.

## Methods

| Example | Method | Purpose |
|---|---|---|
|…
