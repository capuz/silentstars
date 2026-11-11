---
repo: "gulpjs/glob-stream"
name: "glob-stream"
description: "Readable streamx interface over anymatch."
readmeQualityOk: true
url: "https://github.com/gulpjs/glob-stream"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["glob-string", "glob-stream", "javascript", "stream", "streaming", "gulpjs", "glob", "anymatch", "nodejs"]
stars: 181
forks: 51
openIssues: 3
closedIssues: 66
watchers: 14
contributors: 30
recentReleases: 0
createdAt: "2013-07-04T08:29:48Z"
lastCommitAt: "2026-11-11T19:49:31Z"
lastReleaseAt: "2017-02-22T00:36:54Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 93
undervaluedScore: 29
maintainers: ["phated", "FotoVerite", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/252bc25966098bd29239c7dc4cd721c462851145717f6c8183df79026a779af6/gulpjs/glob-stream"
fundingLinks: ["GITHUB:https://github.com/gulpjs", "GITHUB:https://github.com/phated", "GITHUB:https://github.com/yocontra", "TIDELIFT:https://tidelift.com/funding/github/npm/gulp", "OPEN_COLLECTIVE:https://opencollective.com/gulpjs"]
---

# glob-stream

[Readable streamx][streamx-url] interface over [anymatch][anymatch-url].

## Usage

```js
var gs = require("glob-stream");

var readable = gs("./files/**/*.coffee", {/* options */});

var writable =
  /* your WriteableStream */

  readable.pipe(writable);
```

You can pass any combination of glob strings. One caveat is that you cannot **only** pass a negative glob, you must give it at least one positive glob so it knows where to start. If given a non-glob path (also referred to as a singular glob), a maximum of one file will be emitted.

## API

### `globStream(globs, [options])`

Takes a glob string or an array of glob strings as the first argument and an options object as the second. Returns a stream of objects that contain `cwd`, `base` and `path` properties.

#### Options

##### `options.cwd`

The current working directory that the glob is resolved against.

Type: `String`

Default: `process.cwd()`

##### `options.root`

The root path that the glob is resolved against.

Type: `String`

Default: `undefined` (use the filesystem root)

##### `options.base`

The absolute segment of the glob path that isn't a glob. This value is attached to each glob object and is…
