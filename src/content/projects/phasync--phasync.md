---
repo: "phasync/phasync"
name: "phasync"
description: "Micro framework for ultra high performance PHP websites with non-blocking IO."
readmeQualityOk: true
url: "https://github.com/phasync/phasync"
language: "PHP"
languages: ["PHP"]
languagePcts: [99]
stars: 244
forks: 10
openIssues: 7
closedIssues: 103
watchers: 8
contributors: 7
recentReleases: 2
createdAt: "2024-04-18T08:19:50Z"
lastCommitAt: "2026-10-28T09:57:15Z"
lastReleaseAt: "2026-10-19T15:19:02Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 42
maintainers: ["frodeborli", "Boulea7"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/788340115/8838bda2-8f6b-4976-86d5-e56d368e37f1"
discussionCount: 5
---

# phasync: High-concurrency PHP

**Async PHP that is still just PHP.** phasync runs thousands of coroutines in one PHP process,
on PHP's own fibers. No promises, no `->then()`, no special runtime to install: a function
that waits on the network reads top to bottom, returns a value and throws exceptions like any
other. Use it in one function of an existing PHP-FPM application, or as the engine of a
server that holds tens of thousands of connections.

```php
// In any controller, under PHP-FPM or anywhere else: three HTTP calls at once, not one after another
[$user, $orders, $recommendations] = phasync::run(fn () => array_map(phasync::await(...), [
    phasync::go(fn () => fetch("https://api.example.com/users/$id")),
    phasync::go(fn () => fetch("https://api.example.com/users/$id/orders")),
    phasync::go(fn () => fetch("https://api.example.com/users/$id/recommendations")),
]));
```

The request takes as long as the slowest of the three calls, not their sum. `fetch()` is an
ordinary function (below); nothing else in the application changes.

## Why phasync

- **No colored functions.** A coroutine is a plain closure. Code that waits looks exactly like
  code that doesn't, so async…
