---
repo: "blueconic/node-oom-heapdump"
name: "node-oom-heapdump"
description: "Create a V8 heap snapshot right before an \"Out of Memory\" error occurs, or create a heap snapshot or CPU profile on request."
url: "https://github.com/blueconic/node-oom-heapdump"
language: "JavaScript"
languages: ["JavaScript", "C++"]
languagePcts: [76, 23]
topics: ["nodejs", "memory-leak", "out-of-memory", "heap-dump", "memory-snapshot", "heap-size", "devtools-protocol", "memory", "cpu-profiling", "cpu-profile"]
stars: 108
forks: 11
openIssues: 0
closedIssues: 20
watchers: 3
contributors: 14
recentReleases: 0
createdAt: "2017-09-29T18:57:07Z"
lastCommitAt: "2026-06-24T06:39:21Z"
lastReleaseAt: "2017-11-21T11:58:36Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 81
undervaluedScore: 26
maintainers: ["paulrutter", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d8742baaf6c4d5b3adc5d0fe0b5d540c67b44cf26b5b847cb2a5fc38abea0f7/blueconic/node-oom-heapdump"
---

# node-oom-heapdump
Node module which will create a V8 heap snapshot right before an "Out of Memory" error occurs.

It can also create heapdumps and CPU profiles on request like 'v8-profiler', but does this off-process so it doesn't interfere with execution of the main process.

Tested on Node.js 10.x, 11.x, 12.x, 13.x, 14.x, 15.x, 16.x, 17.x, 18.x, 20.x, 22.x and 24.x.
No support for Node.js < 10.x at the moment in version 3.0.0, use version 2.2.0 for if needed.  

Also comes with prebuilt binaries (hosted on Github releases), thanks to Stuart Miller (https://github.com/spmiller).
From 3.1.0, prebuilt binaries are only shipped for Node.js 16.x and upwards.
From 3.2.3, prebuilt binaries are only shipped for Node.js 18.x and upwards.
In 3.7.0, prebuilt binaries for node 24.x were added.

## Node 22.x
Since node 22.x, there is a new CLI flag for generating heapdumps. This one is supplied by V8 (not Node.js) and is more reliant and efficient in creating the heapdumps than Node.js' `--heapsnapshot-near-heap-limit`.
More information: https://github.com/nodejs/node/issues/50711#issuecomment-2149559816

```
node --heap-snapshot-on-oom index.js
```
Since node 22.x we had issues with no…
