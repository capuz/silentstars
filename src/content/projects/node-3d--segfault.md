---
repo: "node-3d/segfault"
name: "segfault"
description: "Catches SIGSEGV and prints diagnostic information"
url: "https://github.com/node-3d/segfault"
homepage: "https://github.com/node-3d/node-3d"
language: "C++"
languages: ["C++", "TypeScript"]
languagePcts: [67, 31]
topics: ["addon", "native", "segfault", "sigsegv", "debug", "node-3d"]
stars: 7
forks: 4
openIssues: 0
closedIssues: 7
watchers: 0
contributors: 16
recentReleases: 0
createdAt: "2019-09-17T06:03:48Z"
lastCommitAt: "2026-07-04T19:18:42Z"
lastReleaseAt: "2023-01-06T08:31:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 58
maintainers: ["raub"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/208971527/888ecd14-39ad-4cc8-b3e0-a4a0729b9128"
---

# Segfault handler for Node.js

This is a part of [Node3D](https://github.com/node-3d) project.

```
npm install @node-3d/segfault
```

This module report debug information on process crash (and some other events).
It doesn't affect the performance while the program is running normally.

The module prints to both
**STDERR** and to the **"segfault.log"** file (if it exists inside **"working directory"**).
If there is no such file, it
**won't be created**, so it is up to you if the log-file is needed.

> Note: this **addon uses N-API**, and therefore is ABI-compatible across different
Node.js versions. Addon binaries are precompiled and **there is no compilation**
step during the `npm install` command.

A zero-setup is available: just import the module and it comes pre-equipped with several
signal listeners enabled by default.

```js
import '@node-3d/segfault';
```

> Note: if your project tree contains multiple versions of this module, the first one imported
will seize `global['@node-3d/segfault']`. The rest of them will only re-export `global['@node-3d/segfault']`
and **WILL NOT** import their own **binaries**.

---

If you want to use a custom location instead of…
