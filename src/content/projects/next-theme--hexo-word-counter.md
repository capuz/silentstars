---
repo: "next-theme/hexo-word-counter"
name: "hexo-word-counter"
description: ":hourglass_flowing_sand: Word count and time to read of articles for Hexo, written in Rust"
readmeQualityOk: true
url: "https://github.com/next-theme/hexo-word-counter"
homepage: "https://www.npmjs.com/package/hexo-word-counter"
language: "JavaScript"
languages: ["JavaScript", "Shell"]
languagePcts: [73, 21]
topics: ["hexo", "hexo-plugin", "word-count"]
stars: 37
forks: 6
openIssues: 1
closedIssues: 8
watchers: 1
contributors: 11
recentReleases: 0
createdAt: "2020-05-09T11:09:25Z"
lastCommitAt: "2026-07-29T06:12:40Z"
lastReleaseAt: "2025-06-05T04:09:01Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 86
undervaluedScore: 40
maintainers: ["renovate[bot]", "stevenjoezhang", "qzi"]
openGraphImageUrl: "https://opengraph.githubassets.com/7c61270704110da65bb749e9ba7147fb4a8da492d32b2e06a53ca669766d27c5/next-theme/hexo-word-counter"
---

# Hexo Word Counter

Word count and time to read for articles in Hexo blog.

The word count is based on [Unicode® Standard Annex #29](https://www.unicode.org/reports/tr29/). Thus, when multiple languages are present in the post content, the total word count can be accurately counted.

With the power of Rust, this plugin is faster than almost all other Hexo plugins that offer similar functionality. See the [benchmark](#Benchmark) below.

## Installation

![size-image]

```bash
npm install hexo-word-counter
hexo clean
```

## Usage

You can set options of hexo-word-counter in the **Hexo's `_config.yml`** (which locates in the root dir of your blog):

```yml
symbols_count_time:
  symbols: true
  time: true
  total_symbols: true
  total_time: true
  exclude_codeblock: false
  wpm: 275
  suffix: "mins."
```

If `symbols_count_time` option is not specified, the default parameters will be used.

### Parameters

* `wpm` – Words Per Minute. Default: `275`. You can check this [here](https://wordcounter.net).
  * Slow &asymp; `200`
  * Normal &asymp; `275`
  * Fast &asymp; `350`
* `suffix` – If time to read less then 60 minutes, added suffix as string parameter.\
  If not defined, `mins.`…
