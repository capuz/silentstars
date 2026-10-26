---
repo: "Tatsh/jxa-lib"
name: "jxa-lib"
description: "General library for AppleScript (JXA)."
readmeQualityOk: true
url: "https://github.com/Tatsh/jxa-lib"
homepage: "https://tatsh.github.io/jxa-lib/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["jxa", "applescript", "typescript", "macos"]
stars: 41
forks: 3
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2018-08-09T19:25:35Z"
lastCommitAt: "2026-10-26T18:06:23Z"
lastReleaseAt: "2026-05-02T20:16:28Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 98
undervaluedScore: 59
maintainers: ["dependabot[bot]", "Tatsh", "pre-commit-ci[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/144194741/5f7a6140-59fe-4a23-87a8-7340989eab0c"
fundingLinks: ["GITHUB:https://github.com/Tatsh", "KO_FI:https://ko-fi.com/tatsh2", "LIBERAPAY:https://liberapay.com/tatsh2", "PATREON:https://patreon.com/tatsh2"]
---

# Library for JXA

This is a helper library for AppleScript in JavaScript that works on macOS 10.10 and above. To
properly use this, a bundler must be used such as Webpack. It is recommended to install
[`jxa-types`](https://www.npmjs.com/package/jxa-types) as well.

This repository also demonstrates how to write tests mocking the JXA environment. See the `*.test.ts`
files in `src`.

## Example use

```typescript
import { FileManager } from 'jxa-lib';

const fm = new FileManager();
let attr;
try {
  attr = fm.attributesOfItem('/some-file');
} catch (e) {
  // Instead of having to pass &error (Ref object) like in Objective-C,
  // an exception is thrown
  console.log('Maybe /some-file does not exist?');
}

// attr type is FileAttributes or undefined, which does not have prefixes removed
if (attr) {
  console.log(attr.NSFileGroupOwnerAccountID); // string
  console.log(attr.NSFileModificationDate); // Date object
}
```

## Example with C functions

You do not have to use `ObjC.import()` because all modules will do this on their own.

```typescript
import { stdlib, string } from 'jxa-lib';

const size = 32;
const buf = stdlib.malloc(size); // returns Ref<number>
string.memset(buf, 0,…
