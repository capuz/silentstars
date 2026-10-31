---
repo: "dpranke/pyjson5"
name: "pyjson5"
description: "A Python implementation of the JSON5 data format"
readmeQualityOk: true
url: "https://github.com/dpranke/pyjson5"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 284
forks: 49
openIssues: 5
closedIssues: 67
watchers: 13
contributors: 26
recentReleases: 0
createdAt: "2015-03-26T01:36:09Z"
lastCommitAt: "2026-10-31T15:59:35Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 84
undervaluedScore: 39
maintainers: ["dpranke", "iefa-m", "spicysharkco"]
openGraphImageUrl: "https://opengraph.githubassets.com/070a5e0742e0f7bff538cabbe0775052d74cfe94b7189ef14a422e4fdf36642f/dpranke/pyjson5"
---

# pyjson5

A Python implementation of the JSON5 data format.

[JSON5](https://json5.org) extends the
[JSON](http://www.json.org) data interchange format to make it
slightly more usable as a configuration language:

* JavaScript-style comments (both single and multi-line) are legal.

* Object keys may be unquoted if they are legal ECMAScript identifiers

* Objects and arrays may end with trailing commas.

* Strings can be single-quoted, and multi-line string literals are allowed.

There are a few other more minor extensions to JSON; see the above page for
the full details.

This project implements a reader and writer implementation for Python;
where possible, it mirrors the
[standard Python JSON API](https://docs.python.org/library/json.html)
package for ease of use.

There is one notable difference from the JSON api: the `load()` and
`loads()` methods support optionally checking for (and rejecting) duplicate
object keys; pass `allow_duplicate_keys=False` to do so (duplicates are
allowed by default).

This is an early release. It has been reasonably well-tested, but it is
**SLOW**. It can be 1000-6000x slower than the C-optimized JSON module,
and is 200x slower (or more) than the…
