---
repo: "noseglid/base85"
name: "base85"
description: "JavaScript base85 encoding and decoding"
readmeQualityOk: true
url: "https://github.com/noseglid/base85"
homepage: "https://npmjs.com/base85"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 39
forks: 18
openIssues: 1
closedIssues: 5
watchers: 2
contributors: 9
recentReleases: 0
createdAt: "2014-02-18T19:09:00Z"
lastCommitAt: "2026-10-23T08:48:13Z"
lastReleaseAt: "2021-08-31T09:17:44Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 79
undervaluedScore: 45
maintainers: ["noseglid", "Strnadj", "anupamme"]
openGraphImageUrl: "https://opengraph.githubassets.com/44de3aaa60f64275f1b01ba2ef70f329e55d6f8a4672e560e1eb73381362e3e8/noseglid/base85"
---

# base85

Base85 encoder/decoder written in native javascript.

Where base64 [adds approximately 1/3][Base64], base85 only [adds about
1/4][Base85]. Of course there's a tradeoff. The Base85 alphabet includes
characters that might not be as friendly as the base64 alphabet.  While it's
still only printable characters, the [Ascii85][Base85] specification contains
quotes (`'` and `"`) which needs escaping in many programming languages, and
the [ZeroMQ][Base85ZeroMQ] specification contains `<` and `>` which need
escaping in most (all?) [SGML][SGML] languages.

IPv6 encoding should only be used for encoding IPv6 addresses. When using IPv6,
input for encoding must always be 16 bytes, and input for decoding must always be 20 bytes.

ZeroMQ's version (`z85`) require [according to the specification][Base85ZeroMQ])
string input to be divisible by 5, and binary input to be divisible by 4.
This module includes a `z85pad` version which uses the same alphabet but
does not enforce, or indeed require, this restriction.

The `Ascii85` encoding frames the base85 string between `<~` and `~>`.
Use the alternate `a85` version if you don't want that.

Supported encoding specifications

  *…
