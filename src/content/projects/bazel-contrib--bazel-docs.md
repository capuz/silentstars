---
repo: "bazel-contrib/bazel-docs"
name: "bazel-docs"
description: "Bazel Documentation Static Site Generator"
readmeQualityOk: true
url: "https://github.com/bazel-contrib/bazel-docs"
language: "MDX"
languages: ["MDX"]
languagePcts: [100]
stars: 7
forks: 12
openIssues: 26
closedIssues: 32
watchers: 2
contributors: 24
recentReleases: 0
createdAt: "2025-07-10T20:34:24Z"
lastCommitAt: "2026-08-04T06:11:44Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "funded", "fork_magnet"]
healthScore: 88
undervaluedScore: 82
maintainers: ["dependabot[bot]", "fweikert", "alan707"]
openGraphImageUrl: "https://opengraph.githubassets.com/f81b3f9be8e22fae9003d482a5ab90b6ae8acac7f4fefc1555582e9afd8fa93e/bazel-contrib/bazel-docs"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/bazel-rules-authors-sig"]
---

# Bazel Docs

This repository contains the source and automated preview generation pipeline
for the https://bazel.build/ website.

## Contributing

**Most changes to https://bazel.build/ should be made in the
[bazelbuild/bazel](https://github.com/bazelbuild/bazel) repository.**

See Bazel's [Docs contribution
workflow](https://bazel.build/contribute/docs-contribution-workflow) for more
information on how to make changes to Bazel's documentation site.

### Build the Bazel site locally

If you haven't already, [install
npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#using-a-node-version-manager-to-install-nodejs-and-npm).

To build the Bazel site and launch a local preview, run the following command
from the root of this repository:

```console
npx mint dev
```

<details>

<summary>Example output</summary>

```console
$ npx mint dev
Need to install the following packages:
mint@4.2.679
Ok to proceed? (y) y
✓ preview ready

  local   → http://localhost:3000
  network → http://192.168.1.4:3000

press ctrl+c to exit the preview
```

</details>

## How it works

Each branch pushed to this repo is automatically deployed by Mintlify at…
