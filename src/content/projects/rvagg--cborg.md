---
repo: "rvagg/cborg"
name: "cborg"
description: "fast CBOR with a focus on strictness"
readmeQualityOk: true
url: "https://github.com/rvagg/cborg"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [96]
topics: ["cbor", "nodejs"]
stars: 65
forks: 22
openIssues: 2
closedIssues: 18
watchers: 1
contributors: 10
recentReleases: 0
createdAt: "2020-10-10T11:40:01Z"
lastCommitAt: "2026-07-29T06:16:53Z"
lastReleaseAt: "2021-08-23T05:56:01Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 88
undervaluedScore: 45
maintainers: ["semantic-release-bot", "dependabot[bot]", "rvagg"]
openGraphImageUrl: "https://opengraph.githubassets.com/818d7d2ebef3ab36850044d58ae9ab7ae5d86bd62980153770269093d2c8052c/rvagg/cborg"
---

# cborg - fast CBOR with a focus on strictness

[CBOR](https://cbor.io/) is "Concise Binary Object Representation", defined by [RFC 8949](https://tools.ietf.org/html/rfc8949). Like JSON, but binary, more compact, and supporting a much broader range of data types.

**cborg** focuses on strictness and deterministic data representations. CBORs flexibility leads to problems where determinism matters, such as in content-addressed data where your data encoding should converge on same-bytes for same-data. **cborg** helps aleviate these challenges.

**cborg** is also fast, and is suitable for the browser (is `Uint8Array` native) and Node.js.

* [Example](#example)
* [CLI](#cli)
  * [`cborg bin2diag [binary input]`](#cborg-bin2diag-binary-input)
  * [`cborg bin2hex [binary string]`](#cborg-bin2hex-binary-string)
  * [`cborg bin2json [--pretty] [binary input]`](#cborg-bin2json---pretty-binary-input)
  * [`cborg diag2bin [diagnostic string]`](#cborg-diag2bin-diagnostic-string)
  * [`cborg diag2hex [diagnostic string]`](#cborg-diag2hex-diagnostic-string)
  * [`cborg diag2json [--pretty] [diagnostic string]`](#cborg-diag2json---pretty-diagnostic-string)
  * [`cborg hex2bin [hex…
