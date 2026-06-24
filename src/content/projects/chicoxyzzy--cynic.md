---
repo: "chicoxyzzy/cynic"
name: "cynic"
description: "A strict-only ECMAScript engine, written from scratch."
url: "https://github.com/chicoxyzzy/cynic"
homepage: "https://sergey.works/cynic/"
language: "Zig"
languages: ["Zig"]
languagePcts: [98]
topics: ["ecmascript", "javascript-engine", "zig", "compiler", "gc", "interpreter", "jit", "webassembly", "webassembly-runtime"]
stars: 18
forks: 0
openIssues: 0
closedIssues: 14
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-05-05T19:36:26Z"
lastCommitAt: "2026-06-24T23:37:05Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 48
maintainers: ["chicoxyzzy", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a04374340172fd45fd0d613c99afb2c633710e043cd5edb9a452f63e6ac0cce3/chicoxyzzy/cynic"
---

# Cynic

A strict-only ECMAScript and WebAssembly engine, written from scratch
in Zig.

**[Try it in your browser →](https://chicoxyzzy.github.io/cynic/playground/)** — run JavaScript in Cynic, no install.

Security-hardened by default, it declines JavaScript's legacy
web-compatibility surfaces on purpose — strict-only and SES-by-default
as a thesis, not a deployment side effect:

- **No sloppy mode.** Every source is parsed as strict. The strict
  reserved-word set, restricted assignment to `eval` / `arguments`, and
  the absence of `with`, labels, legacy octal, HTML-like comments, and
  Annex B *language* extensions (sloppy-mode-only function-in-block,
  `for-in` initializer, …) are baked in at the language level.
- **No web-compatibility built-ins.** `escape` / `unescape`, the 13
  `String.prototype` HTML wrappers (`anchor`, `bold`, …),
  `Date.prototype.{getYear, setYear, toGMTString}`, and the
  `String.prototype.{substr, trimLeft, trimRight}` aliases aren't
  shipped. The canonical modern names (`trimStart` / `trimEnd`,
  `toUTCString`) are the only spelling.
- **No runtime code construction.** `eval`, `new Function(string)`,
  `new GeneratorFunction(string)`, `new…
