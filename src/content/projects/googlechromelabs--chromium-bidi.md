---
repo: "GoogleChromeLabs/chromium-bidi"
name: "chromium-bidi"
description: "Implementation of WebDriver BiDi for Chromium"
readmeQualityOk: true
url: "https://github.com/GoogleChromeLabs/chromium-bidi"
homepage: "https://googlechromelabs.github.io/chromium-bidi/"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [54, 43]
topics: ["chromium", "webdriver-bidi", "chrome"]
stars: 176
forks: 55
openIssues: 0
closedIssues: 416
watchers: 12
contributors: 40
recentReleases: 0
createdAt: "2021-06-16T10:26:51Z"
lastCommitAt: "2026-11-20T12:22:28Z"
lastReleaseAt: "2023-05-30T11:14:32Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 99
undervaluedScore: 46
maintainers: ["sadym-chromium", "OrKoN", "piubellofelipe97"]
openGraphImageUrl: "https://opengraph.githubassets.com/9ab86139bdba6375770b0ca52167eb52f19312df3683898136dcfe303d641389/GoogleChromeLabs/chromium-bidi"
---

> **Note**
>
> If you are viewing this on GitHub, the source was moved to [Chromium](https://chromium.googlesource.com/chromium/src/+/main/third_party/chromium-bidi). Please contribute there and [file issues on `crbug.com`](https://issues.chromium.org/issues/new?component=1608258).

# WebDriver BiDi for Chromium [](https://www.npmjs.com/package/chromium-bidi)

This is an implementation of the
[WebDriver BiDi](https://w3c.github.io/webdriver-bidi/) protocol with some
extensions (**BiDi+**)
for Chromium, implemented as a JavaScript layer translating between BiDi and CDP,
running inside a Chrome tab.

Current status can be checked
at [WPT WebDriver BiDi status](https://wpt.fyi/results/webdriver/tests/bidi).

## Performance Benchmarks

The project continuously monitors the performance and overhead of the WebDriver BiDi implementation.

- **Dashboard:** [Chromium-BiDi Performance Benchmarks](https://googlechromelabs.github.io/chromium-bidi/bench/)
- **Details:** Refer to [docs/benchmark.md](https://github.com/GoogleChromeLabs/chromium-bidi/blob/HEAD/docs/benchmark.md) for detailed information about the benchmarking infrastructure, methodology, and statistical analysis.
