---
repo: "kaelzhang/node-comment-json"
name: "node-comment-json"
description: "Parse and stringify JSON with comments. It will retain comments even when after saved!"
readmeQualityOk: true
url: "https://github.com/kaelzhang/node-comment-json"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [94]
topics: ["comment-json", "json", "json-stringify", "json-parse"]
stars: 178
forks: 16
openIssues: 2
closedIssues: 44
watchers: 3
contributors: 9
recentReleases: 0
createdAt: "2014-06-17T08:22:19Z"
lastCommitAt: "2026-11-09T11:59:27Z"
lastReleaseAt: "2026-04-12T06:33:17Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 99
undervaluedScore: 23
maintainers: ["kaelzhang", "spokodev"]
openGraphImageUrl: "https://opengraph.githubassets.com/d89aae4f0040741c961eb433ea74ecedd063ceb0d113f4212003e5bc959acc4f/kaelzhang/node-comment-json"
---

# comment-json

Parse and stringify JSON with comments. It will retain comments even after saved!

- [Parse](#parse) JSON strings with comments into JavaScript objects and MAINTAIN comments
  - supports comments everywhere, yes, **EVERYWHERE** in a JSON file, eventually 😆
  - fixes the known issue about comments inside arrays.
- [Stringify](#stringify) the objects into JSON strings with comments if there are

The usage of `comment-json` is exactly the same as the vanilla [`JSON`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) object.

## Table of Contents

- [Why](#why) and [How](#how)
- [Usage and examples](#usage)
- API reference
  - [parse](#parse)
  - [stringify](#stringify)
  - [assign](#assigntarget-object-source-object-keys-array)
  - [moveComments](#movecommentssource-object-target-object-from-object-to-object-override-boolean)
  - [removeComments](#removecommentstarget-object-location-object)
  - [removeBlankLines](#removeblanklinestarget-object-location-object)
  - [CommentArray](#commentarray)
- [Change Logs](https://github.com/kaelzhang/node-comment-json/releases)

## Why?

There are many other libraries that can deal with JSON…
