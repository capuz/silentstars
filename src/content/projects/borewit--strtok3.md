---
repo: "Borewit/strtok3"
name: "strtok3"
description: "Promise based streaming tokenizer"
readmeQualityOk: true
url: "https://github.com/Borewit/strtok3"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["stream", "tokenizer", "streaming-tokenizer", "binary", "decoder", "encoding", "decoding", "encoder"]
stars: 51
forks: 15
openIssues: 1
closedIssues: 43
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2017-06-18T10:06:00Z"
lastCommitAt: "2026-10-11T10:16:21Z"
lastReleaseAt: "2017-08-11T19:05:37Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 99
undervaluedScore: 34
maintainers: ["Borewit"]
openGraphImageUrl: "https://opengraph.githubassets.com/be19506a93acc864ba79dd2024ab8aab96b36a657ba4cc916fc11dcaa3a7a04d/Borewit/strtok3"
fundingLinks: ["GITHUB:https://github.com/Borewit", "BUY_ME_A_COFFEE:https://buymeacoffee.com/borewit"]
---

# strtok3

A promise-based streaming [*tokenizer*](#tokenizer-object) for [Node.js](https://nodejs.org) and browsers.

The `strtok3` module provides several methods for creating a [*tokenizer*](#tokenizer-object) from various input sources. 
Designed for:
* Seamless support in streaming environments.
* Efficiently decode binary data, strings, and numbers.
* Reading [predefined](https://github.com/Borewit/token-types) or custom tokens.
* Offering [*tokenizers*](#tokenizer-object) for reading from [files](#fromfile-function), [streams](#fromstream-function) or [Uint8Arrays](#frombuffer-function).

### Features
`strtok3` can read from:
* Files, using a file path as input.
* Node.js [streams](https://nodejs.org/api/stream.html).
* WHATWG [ReadableStream](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream) objects containing `Uint8Array` chunks.
* [Buffer](https://nodejs.org/api/buffer.html) or [Uint8Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array).
* [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) or [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects.
* HTTP chunked transfer provided by…
