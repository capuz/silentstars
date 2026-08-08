---
repo: "zym-lang/zym-cli"
name: "zym-cli"
description: "CLI for the Zym programming language."
readmeQualityOk: true
url: "https://github.com/zym-lang/zym-cli"
homepage: "https://zym-lang.org/"
language: "C++"
languages: ["C++"]
languagePcts: [64]
topics: ["cli", "developer-tools", "interpreter", "linux", "programming-language", "repl", "scripting-language", "windows", "vm", "zym"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2026-02-18T03:22:40Z"
lastCommitAt: "2026-08-08T04:32:58Z"
lastReleaseAt: "2026-04-14T07:11:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 48
maintainers: ["anatoli-dp"]
openGraphImageUrl: "https://opengraph.githubassets.com/eb078d04efa609e529b280b8fa72f27aa9934ad4702b98fe1a96bbd573ed53e5/zym-lang/zym-cli"
discussionCount: 1
---

<h1 align="center">Zym</h1>
    A modern, high-performance scripting language designed for both standalone use and seamless embedding.
  </p>
</p>

---

Zym is a compact, systems-oriented scripting language that combines the familiarity of high-level syntax with the control of a systems language. It's built for developers who need the agility of a script with the predictability of a compiled language.

This repository contains the **Zym CLI** — a standalone runtime and toolchain built on top of the embeddable [`zym_core`](https://github.com/zym-lang/zym-cli/blob/HEAD/zym_core/) language library.

Zym itself is the core; the CLI is one host built on it. It does enough to be useful on its own — a native module catalog, capability-gated child VMs, packaging to a standalone binary — and along the way it ends up being a fairly complete picture of what embedding looks like past a hello world, since all of it goes through the same public C API anyone else would use. Its version tracks the core it embeds rather than counting its own releases.

### Familiar Syntax

If you've written JavaScript, Python, or Lua, Zym reads exactly like you'd expect.

```javascript
func fibonacci(n) {
    if…
