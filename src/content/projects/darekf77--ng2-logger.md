---
repo: "darekf77/ng2-logger"
name: "ng2-logger"
description: "Isomorphic logger for Browser and NodeJS, ( typescript / javascript ) apps"
url: "https://github.com/darekf77/ng2-logger"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [56, 29]
topics: ["logger", "isomorphic", "nodejs-library", "browser", "typescript", "ready-for-angular7", "ready-for-react", "ready-for-vue"]
stars: 60
forks: 17
openIssues: 6
closedIssues: 39
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2016-06-03T08:33:33Z"
lastCommitAt: "2026-06-26T23:41:47Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "legacy_hero"]
healthScore: 91
undervaluedScore: 35
maintainers: ["darekf77"]
openGraphImageUrl: "https://opengraph.githubassets.com/e402a4db808bc7e29d4d48077cb30cf895a1d357b95d37abbe2b6decfcb51dc9/darekf77/ng2-logger"
---

## taon-logger (ng2-logger) ##

- Part of [taon.dev](https://github.com/darekf77/taon)
- Isomorphic Logger for TypeScript and JavaScript apps.
- Purpose:
  + usefull/elegant backend/frontend logger

You can use this logger in your apps with **any**
TS/JS framework.

## ⚠️ Deprecation notes Level.__NOTHING  ⚠️
```ts
// Level.__NOTHING is now gone..⚠️

const log = Log.create('my module or file',Level.__NOTHING); // ❌

// USE INSTEAD

const log = Log.create('my module or file', Level.WARN, Level.ERROR); // ✅

// this will should you important warning and errors for development
// and in production to hide all ng2-logger logs use:

Log.disableAllLogs(); // ✅

```

## How to use ng2-logger 🚀

See what is going on in your app!

Now chrome console logs are full of colors!

See nice server logs:

To install package run:
```bash
npm install ng2-logger --save
```  

First import proper version for your environment:

Nodejs server (or any taon's lib/app):  

```ts
import { Log, Level } from  'ng2-logger/lib'
// commonjs
```

or Browser: 

```ts
import { Log, Level } from  'ng2-logger/browser'  
// esm version for browser

```

## Usage:  

In your file:

```ts
# all logs allowed to be…
