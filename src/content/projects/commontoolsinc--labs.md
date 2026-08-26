---
repo: "commontoolsinc/labs"
name: "labs"
description: "The Common Fabric runtime."
readmeQualityOk: true
url: "https://github.com/commontoolsinc/labs"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 37
forks: 13
openIssues: 60
closedIssues: 381
watchers: 5
contributors: 23
recentReleases: 2
createdAt: "2024-05-10T02:20:07Z"
lastCommitAt: "2026-08-26T04:16:39Z"
lastReleaseAt: "2026-08-06T00:13:02Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 62
maintainers: ["mpsalisbury", "Hixie", "mathpirate"]
openGraphImageUrl: "https://opengraph.githubassets.com/ff81f0f210522e9098a36fcf3ac3438239142caf352e473f6f270b54ddf236e0/commontoolsinc/labs"
---

# Common Fabric Platform

**Common Labs** is where the Common Fabric platform is built in the open. This
is early, fast-moving work: interfaces change often, and there is no API
stability yet. You are welcome to explore the code, run and write patterns, and
contribute.

## What is Common Fabric?

Common Fabric is a nascent distributed computing platform that provides both a
runtime and storage layer. The design allows instrumentation of all information
flow in the system, enabling safe & private collaboration at scale.

All networked software today runs on one rule: hand your data to the software,
and trust the software. This runtime inverts it. The software is untrusted, and
safety attaches to the data — every datum carries its own policies, anything
derived from it carries them too, and code that cannot prove it honors those
policies does not compile.

Three ways in, depending on how much you want:

- [**Why**](https://github.com/commontoolsinc/labs/blob/HEAD/docs/why.md) — what that rule has cost, and why it is worth
  replacing. Prose, five minutes.
- [**How it works**](https://github.com/commontoolsinc/labs/blob/HEAD/docs/how.md) — the same argument as code: a real pattern,…
