---
repo: "GiuseppeScottoLavina/crossbus"
name: "crossbus"
description: "Unified messaging for browser applications"
readmeQualityOk: true
url: "https://github.com/GiuseppeScottoLavina/crossbus"
homepage: "https://giuseppescottolavina.github.io/crossbus/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [95]
topics: ["ai-agents", "broadcast-channel", "browser", "cross-origin", "event-emitter", "iframe", "javascript", "messaging", "micro-frontends", "postmessage"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-02-02T09:37:32Z"
lastCommitAt: "2026-11-14T10:42:11Z"
lastReleaseAt: "2026-11-14T10:35:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 58
maintainers: ["GiuseppeScottoLavina", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/aaa932010c6b05be6a03f6a3fc994b1ba47d61ed436d2d7f40b981375ab363a9/GiuseppeScottoLavina/crossbus"
---

# CrossBus

Signals and request/response messaging for browser windows, iframes, workers, tabs and native WebViews. The npm package has no runtime dependencies and includes ESM, CommonJS and TypeScript declarations.

[API](https://github.com/GiuseppeScottoLavina/crossbus/blob/HEAD/docs/API.md) · [Getting started](https://github.com/GiuseppeScottoLavina/crossbus/blob/HEAD/docs/GETTING_STARTED.md) · [Benchmarks](https://github.com/GiuseppeScottoLavina/crossbus/blob/HEAD/docs/BENCHMARKS.md) · [Competitor study](https://github.com/GiuseppeScottoLavina/crossbus/blob/HEAD/docs/COMPETITOR_ANALYSIS.md) · [Native bridges](https://github.com/GiuseppeScottoLavina/crossbus/blob/HEAD/native/README.md) · [Security](https://github.com/GiuseppeScottoLavina/crossbus/blob/HEAD/SECURITY.md)

## Run your first request

Prerequisite: Node.js 18 or newer. Create a project and install the published package:

```sh
mkdir crossbus-demo
cd crossbus-demo
npm init -y
npm install crossbus
```

Save the following as `rpc.mjs`. It connects two endpoints through a real MessageChannel in one Node process; it does not open a browser or contact a remote service.

```js
import { CrossBus } from 'crossbus';
const {…
