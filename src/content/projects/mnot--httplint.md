---
repo: "mnot/httplint"
name: "httplint"
description: "Python library to lint HTTP messages"
readmeQualityOk: true
url: "https://github.com/mnot/httplint"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["python"]
stars: 21
forks: 1
openIssues: 16
closedIssues: 198
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2023-01-19T10:23:03Z"
lastCommitAt: "2026-10-26T03:03:17Z"
lastReleaseAt: "2023-12-09T01:34:56Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 62
maintainers: ["mnot"]
openGraphImageUrl: "https://opengraph.githubassets.com/30eeb9a6550ac8a0f15d1274fa38ffbf35a980388fe4fbf6bbf3f078dd6a1ac1/mnot/httplint"
---

# httplint

This Python library _lints_ HTTP messages; it checks them for correctness and reports any issues it finds. httplint can report on 326 different aspects of your HTTP message, including checks against 199 header fields.

It performs all message-level checks for [REDbot](https://redbot.org/), but does not perform any 'active' checks by making requests to the network, and it does not have a Web user interface.

## Using httplint as a Library

httplint exposes two classes for linting: `HttpRequestLinter` and `HttpResponseLinter`. They expose the following methods for telling the linter about the HTTP message:

* As appropriate:
  * `process_request_topline`, which takes three `bytes` arguments: `method`, `uri`, and `version`
  * `process_response_topline`, which takes three `bytes` arguments: `version`, `status_code`, and `status_phrase`
* `process_headers` for the headers, taking a list of (`name`, `value`) tuples (both `bytes`)
* `feed_content` for the body (which can be called zero to many times), taking an `inbytes` argument
* `finish_content` when done, which has two arguments; a `bool` indicating whether the response was complete, and an optional list of tuples for…
