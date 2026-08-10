---
repo: "nroonga/nroonga"
name: "nroonga"
description: "A library for building Groonga powered nodes"
readmeQualityOk: true
url: "https://github.com/nroonga/nroonga"
homepage: "https://nroonga.github.io/"
language: "C++"
languages: ["C++", "JavaScript"]
languagePcts: [50, 44]
stars: 37
forks: 7
openIssues: 2
closedIssues: 3
watchers: 6
contributors: 10
recentReleases: 0
createdAt: "2011-11-14T06:33:34Z"
lastCommitAt: "2026-08-10T05:05:37Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 80
undervaluedScore: 37
maintainers: ["dependabot[bot]", "abetomo"]
openGraphImageUrl: "https://opengraph.githubassets.com/4307b5d6188e67a46b6f5c1df188cfc27fe20ca56eb64cc1aebe309c5f4cac36/nroonga/nroonga"
---

## nroonga

[nroonga](http://nroonga.github.com) is a library for building groonga powered nodes.
You can write your custom full-text search backend on the top of [node.js](http://nodejs.org) and [groonga][].

### Requirements:

* [groonga][]
* [pkg-config][]

  [groonga]:http://groonga.org
  [pkg-config]:http://www.freedesktop.org/wiki/Software/pkg-config

#### For debian and ubuntu users

If you are using debian or ubuntu, the simplest way to install is to use packages. [Install instructions][groonga-install] of groonga is available at the groonga website. Follow one of these:

* [Debian GNU/Linux](http://groonga.org/docs/install/debian.html)
* [Ubuntu](http://groonga.org/docs/install/ubuntu.html)

NOTE: You need to install `libgroonga-dev` package in order to install nroonga.

  [groonga-install]:http://groonga.org/docs/install.html

### To install:

After groonga installed, just do

    % npm install nroonga

### To build and run tests:

    % npm install
    % npm test

You may need to install a plugin to run the test.

For Ubuntu:

    % sudo apt-get install -qq -y groonga-normalizer-mysql groonga-tokenizer-mecab

### To run examples:

Super simple test script:

    % node…
