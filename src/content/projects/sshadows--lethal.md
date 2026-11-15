---
repo: "SShadowS/LethAL"
name: "LethAL"
description: "Mutation testing for Microsoft Dynamics 365 Business Central AL"
readmeQualityOk: true
url: "https://github.com/SShadowS/LethAL"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
stars: 11
forks: 1
openIssues: 1
closedIssues: 48
watchers: 0
contributors: 5
recentReleases: 1
createdAt: "2026-07-28T10:07:21Z"
lastCommitAt: "2026-11-15T11:23:57Z"
lastReleaseAt: "2026-08-17T21:21:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 53
maintainers: ["SShadowS"]
openGraphImageUrl: "https://opengraph.githubassets.com/e166709544b4013abf4a42f8ce0105ea8a8b9ed1b37f60e23f09dfd46611ff13/SShadowS/LethAL"
---

# LethAL

Mutation testing for Microsoft Dynamics 365 Business Central AL code. It tells you which of your AL tests actually catch bugs.

> **Alpha.** The tool is honest about its limits rather than complete. See [Limits](#limits) before
> quoting a score. Read [`CHANGELOG.md`](https://github.com/SShadowS/LethAL/blob/HEAD/CHANGELOG.md) for what shipped and what did not.

## What it does

LethAL makes small, deliberate breakages in your AL code (flips a `<` to `<=`, empties a block, drops a `TestField`, changes a return value), then runs your tests against each one. A test suite that stays green while the code is broken is not protecting you.

The technique is called **mutation testing**, and it is long established outside the BC world; what
is new here is the AL implementation, not the idea. It answers a question a coverage report cannot:
coverage tells you a line **ran**, mutation tells you a line is **checked**. If the line's behaviour
can change and every test still passes, running it proved less than the coverage number suggested.

LethAL calls each deliberate change a **mutant**. A mutant is **killed** when one of your tests
fails. Your suite caught it, which is the good…
