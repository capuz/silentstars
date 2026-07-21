---
repo: "mrazauskas/pretty-ansi"
name: "pretty-ansi"
description: "Convert ANSI escape sequences to human readable text."
readmeQualityOk: true
url: "https://github.com/mrazauskas/pretty-ansi"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
topics: ["ansi", "escape", "pretty", "sequences", "testing"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2024-02-19T06:20:34Z"
lastCommitAt: "2026-07-21T03:11:41Z"
lastReleaseAt: "2026-03-30T15:53:53Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 78
undervaluedScore: 46
maintainers: ["renovate[bot]", "mrazauskas"]
openGraphImageUrl: "https://opengraph.githubassets.com/b4636cf927ef6a8d89851ab4ea528b3209b987eaeac67795106966f7b95928e4/mrazauskas/pretty-ansi"
fundingLinks: ["GITHUB:https://github.com/mrazauskas"]
---

# pretty-ansi

Convert ANSI escape sequences to human readable text.

---

This utility converts [ANSI escape sequences](https://ansi.tools/lookup) to human readable text. It supports color, style and cursor control escapes and works with vanilla sequences as well as the output from libraries like `chalk`, `colors`, `ansi-escapes`, `ansi-styles` or `terminal-kit`.

## Install

```bash
npm add -D pretty-ansi
```

## Usage

For example, it can be useful to test the output of a command line tool:

```js
import assert from "node:assert";
import test from "node:test";
import prettyAnsi from "pretty-ansi";

test("command output", () => {
  const commandOutput = "\u001b[3;32mSuccess!\u001b[0m";

  assert.strictEqual(prettyAnsi(commandOutput), "<italic, green>Success!</>");
});
```

## Notes

Currently only 16 colors are all supported.

Keep in mind that the escape sequences are not validated. Unrecognized sequence will print as `<ESC>[a1b2c3`, or as `<?>` in case this is a color or style sequence.

## License

[MIT][license-url]

[version-badge]: https://badgen.net/npm/v/pretty-ansi
[version-url]: https://npmjs.com/package/pretty-ansi
[license-badge]:…
