---
repo: "BenHanson/gram_grep"
name: "gram_grep"
description: "Search text using a grammar, lexer, or straight regex. Chain searches for greater refinement."
readmeQualityOk: true
url: "https://github.com/BenHanson/gram_grep"
language: "C++"
languages: ["C++", "GAP"]
languagePcts: [77, 21]
stars: 15
forks: 2
openIssues: 5
closedIssues: 18
watchers: 4
contributors: 2
recentReleases: 0
createdAt: "2019-11-22T18:07:06Z"
lastCommitAt: "2026-09-08T08:17:01Z"
lastReleaseAt: "2025-04-04T21:20:23Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 71
undervaluedScore: 34
maintainers: ["BenHanson"]
openGraphImageUrl: "https://opengraph.githubassets.com/a49c63d2e469cf73f75a2e1afbf35cef472f44818fdf7a3330148c9d2f09f267/BenHanson/gram_grep"
discussionCount: 2
---

# gram_grep
Search text using a grammar, lexer, or straight regex. Chain searches for greater refinement.

See [http://benhanson.net/gram_grep.html](http://benhanson.net/gram_grep.html) for examples.

### Table of Contents

* [Building](#Building)
* [Examples](#Examples)
* [Command Line Switches](#Switches)
* [Scripting Grammar](#Scripting)

### Building

You will need a C++20 compatible compiler.

gram_grep has the following dependencies:

- <a href="https://www.boost.org/releases/latest/">Boost</a>
- <a href="https://github.com/BenHanson/lexertl17">lexertl17</a>
- <a href="https://github.com/BenHanson/parsertl17">parsertl17</a>
- <a href="https://github.com/BenHanson/wildcardtl">wildcardtl</a>

All dependencies are (thankfully) header only which greatly simplifies the build process.

#### Acquiring the Source Dependencies

```shell
git clone https://github.com/BenHanson/gram_grep.git
git clone https://github.com/BenHanson/parsertl17.git
git clone https://github.com/BenHanson/lexertl17.git
git clone https://github.com/BenHanson/wildcardtl.git
```

#### Setting BOOST_ROOT
All platforms now require that you set the BOOST_ROOT environment variable to the root of your boost source…
