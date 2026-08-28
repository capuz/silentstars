---
repo: "Ozozuz/DesperateFuzzer"
name: "DesperateFuzzer"
description: "Burp extension for when you have no more ideas and still want errors."
readmeQualityOk: true
url: "https://github.com/Ozozuz/DesperateFuzzer"
language: "Java"
languages: ["Java"]
languagePcts: [99]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-05-13T14:47:39Z"
lastCommitAt: "2026-08-28T14:37:15Z"
lastReleaseAt: "2026-06-04T10:40:48Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 65
undervaluedScore: 21
maintainers: ["Ozozuz", "jakbadwolf"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd2a37015733c9b95bd2fea0d7ee667c06caca4fbb49a47585e32df73bb33de7/Ozozuz/DesperateFuzzer"
---

# DesperateFuzzer

Burp Suite extension for the noble moment when the methodology reaches:

```text
E mo che posso fare?
Non ho altre idee.
```

So you fuzz the thing and hope the application explains itself by breaking.

## What It Does

- Turns "I have no more ideas" into hundreds of requests and a mild sense of purpose.
- Sends raw, encoded, chained-encoded, or mutation-based payloads into whatever parameter looks guilty.
- Lets you stack encodings until the backend starts questioning its career choices.
- Highlights weird results, because apparently reading 256 almost-identical rows is a personality flaw.
- Keeps the full request/response around, so your future self can still pretend this was a controlled experiment.
- Mutation mode starts from something valid and makes it worse with confidence.
- Fuzzes HTTP requests and WebSocket text or binary messages.
- Adapts concurrency and pacing when the target slows down or starts failing.
- Accepts HTTP requests directly from Proxy interception/history or Repeater through Burp's context menu.

Encoding chains are intentionally stackable:

```text
empty pipeline = plain/raw
url -> url
base64 -> url
```

## Adaptive Speed Profiles…
