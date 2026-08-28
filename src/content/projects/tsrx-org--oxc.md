---
repo: "tsrx-org/oxc"
name: "oxc"
description: "Use TSRX with the full OXC / Vite toolchain"
readmeQualityOk: true
url: "https://github.com/tsrx-org/oxc"
homepage: "https://oxc.tsrx.dev"
language: "Rust"
languages: ["Rust", "JavaScript"]
languagePcts: [52, 32]
stars: 33
forks: 2
openIssues: 3
closedIssues: 3
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-07-18T04:20:40Z"
lastCommitAt: "2026-08-28T14:26:22Z"
lastReleaseAt: "2026-08-27T00:01:26Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 44
maintainers: ["thejackshelton", "github-actions[bot]", "ryansolid"]
openGraphImageUrl: "https://opengraph.githubassets.com/0a33571c645b506181c7d56d8160dc1740a483544658956c36bc6919644b20d2/tsrx-org/oxc"
---

</p>

</p>

The official OXC integration for TSRX. It gives you three tools for `.tsrx`
files:

- a **linter**, which warns you about likely mistakes before you run your code
- a **formatter**, which fixes spacing and punctuation so every file matches
- a **parser**, which reads a file into a form your own tools can work with

A `.tsrx` file is TypeScript with HTML-like markup in it, plus blocks like `@if`
and `@for` for showing something only sometimes, or once per item in a list.
[OXC](https://oxc.rs) is a set of fast tools for JavaScript and TypeScript,
written in Rust. This package teaches them to read `.tsrx` too.

_OXC for TSRX is the official OXC integration maintained by the TSRX project._

[**Docs**](https://compiled.run/oxc-tsrx) &nbsp;·&nbsp; [**Getting started**](https://compiled.run/oxc-tsrx/guide/getting-started)

## Install

```sh
npm install --save-dev @tsrx/oxc@latest
```

That is the whole setup, for the command line and for your editor. There is no
config file to write and no install script to run. [Vite+ needs one more
command](https://compiled.run/oxc-tsrx/guide/getting-started#try-it-with-vite).

You do not need Rust. Installing downloads one ready-built…
