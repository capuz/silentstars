---
repo: "lisachenko/immutable-object"
name: "immutable-object"
description: ":lock: Immutable object library for PHP"
readmeQualityOk: true
url: "https://github.com/lisachenko/immutable-object"
language: "PHP"
languages: ["PHP"]
languagePcts: [94]
topics: ["php", "immutable", "object", "z-engine", "ffi"]
stars: 96
forks: 3
openIssues: 1
closedIssues: 1
watchers: 7
contributors: 3
recentReleases: 1
createdAt: "2019-05-02T15:49:57Z"
lastCommitAt: "2026-11-21T13:33:38Z"
lastReleaseAt: "2026-11-21T13:34:57Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded"]
healthScore: 72
undervaluedScore: 24
maintainers: ["lisachenko", "claude", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/30b295325a50bfe58b2287d86e93fc81d2cf8e175526478dc578b0efa105bfb2/lisachenko/immutable-object"
fundingLinks: ["GITHUB:https://github.com/lisachenko"]
---

Immutable objects in PHP
-----------------
This library provides native immutable objects for PHP 8.4, 8.5 and 8.6

Rationale
------------
How many times have you thought it would be nice to have immutable objects in PHP? How many errors could be avoided if
the objects could warn about attempts to change them outside the constructor? Unfortunately, 
[Immutability RFC](https://wiki.php.net/rfc/immutability) has never been implemented.

What to do? 
Of course, there is [psalm-immutable](https://psalm.dev/docs/annotating_code/supported_annotations/#psalm-immutable) 
annotation which can help us find errors when running static analysis. But during the development of the code itself, 
we will not see any errors when trying to change a property in such an object.

However, with the advent of [FFI](https://www.php.net/manual/en/book.ffi.php) and the 
[Z-Engine](https://github.com/lisachenko/z-engine) library, it became possible to use PHP to expand the capabilities
of the PHP itself.
