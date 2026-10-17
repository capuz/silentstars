---
repo: "meyfa/ts-node-test"
name: "ts-node-test"
description: "Use the Node.js test runner, but with TypeScript via ts-node"
readmeQualityOk: true
url: "https://github.com/meyfa/ts-node-test"
homepage: "https://www.npmjs.com/package/ts-node-test"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 17
forks: 3
openIssues: 5
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2022-07-29T13:58:51Z"
lastCommitAt: "2026-10-17T07:59:41Z"
lastReleaseAt: "2026-07-14T10:34:43Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 58
undervaluedScore: 30
maintainers: ["renovate[bot]", "github-actions[bot]", "meyfa"]
openGraphImageUrl: "https://opengraph.githubassets.com/0cf11b1c3d5345ff8d4ecb2e39b17a23b7b426d28781a5146e9f13ae8b18336d/meyfa/ts-node-test"
---

# ts-node-test

Use the [Node.js test runner](https://nodejs.org/dist/latest-v18.x/docs/api/test.html), but with TypeScript via ts-node.
You need to have `typescript` installed as a (dev) dependency and must be using Node version 18.7.0 or later.

Imagine it like `ts-node --test`, if that command existed.

## Usage

Install as a dev dependency:

```
npm i -D ts-node-test
```

Then add a script to your `package.json`:

```
{
  "scripts": {
    "test": "ts-node-test test-file1.ts foo/test-file2.ts another-dir/"
  }
}
```

The command syntax is similar to `node --test`. Multiple paths can be passed. Directories will be searched recursively
for any files with supported extensions (currently: `.js`, `.mjs`, `.cjs`; `.ts`, `.mts`, `.cts`).
Then, Node's test runner will be started on all files that were found in this process.

### Extensions

You can override the list of extensions by setting an environment variable (`TEST_EXTENSIONS`). This list will then be
used instead of the default extensions. For example:

```
TEST_EXTENSIONS=.test.ts,.test.js ts-node-test test/
```

The above will recursively look for files in the `test/` directory ending in `.test.ts` or `.test.js`.

### CLI…
