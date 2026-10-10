---
repo: "JoshuaKGoldberg/console-fail-test"
name: "console-fail-test"
description: "Gently fails test runs if the console was used during them. 📢"
readmeQualityOk: true
url: "https://github.com/JoshuaKGoldberg/console-fail-test"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["test", "warn", "console", "info", "jest", "karma", "mocha", "jasmine"]
stars: 23
forks: 6
openIssues: 1
closedIssues: 51
watchers: 9
contributors: 7
recentReleases: 2
createdAt: "2019-02-28T16:54:42Z"
lastCommitAt: "2026-10-10T10:04:05Z"
lastReleaseAt: "2026-09-20T19:41:49Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 99
undervaluedScore: 66
maintainers: ["renovate[bot]", "JoshuaKGoldberg"]
openGraphImageUrl: "https://opengraph.githubassets.com/b92b982965ff894959ecb999d5ad5a7be11b74eb54d337a4e4393f55c46f0506/JoshuaKGoldberg/console-fail-test"
fundingLinks: ["GITHUB:https://github.com/JoshuaKGoldberg"]
---

Gently fails test runs if the console was used during them.
	📢

	
	

	

## Why?

Logging to the console during tests can be a sign of:

- 🚫 warnings from third-party libraries such as React for improper usage
- 🤕 temporary code that shouldn't be checked into your project
- 📢 unnecessary spam in your tests window

This little library throws an error after each test if a console method was called during it.
It's got some nifty features:

- 📊 Summary of which methods are called with calling arguments
- 🛫 Failures are thrown _after_ tests finish, so your tests will fail normally if they should

```plaintext
stdout | src/index.test.ts > index > example test that console.logs
Whoops!

 ❯ src/index.test.ts (4)
   ❯ index (4)
     × example test that console.logs
       ⠙ [ afterEach ]
     ✓ example test that does not console.log

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯- Failed Tests 1 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯-

 FAIL  src/index.test.ts > index > example test that console.logs
Error: Oh no! Your test called the following console method:
  * log (1 call)
    > Call 0: "Whoops!"
```

## Usage

`console-fail-test` is meant to support any _(test framework)_ & _(spy library)_ combination.
It will auto-detect your…
