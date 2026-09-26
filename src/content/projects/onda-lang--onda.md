---
repo: "onda-lang/onda"
name: "onda"
description: "Expressive and performant JIT-compiled audio programming language"
readmeQualityOk: true
url: "https://github.com/onda-lang/onda"
homepage: "https://onda-lang.org/"
language: "Rust"
languages: ["Rust"]
languagePcts: [87]
stars: 9
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-04-04T21:47:01Z"
lastCommitAt: "2026-09-26T08:47:01Z"
lastReleaseAt: "2026-09-23T20:51:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 63
maintainers: ["vitreo12"]
openGraphImageUrl: "https://opengraph.githubassets.com/7b8faefa5a6a14e50a9069261be9b77683b09dd221386223d243a9341aa0e09a/onda-lang/onda"
---

<h1>
</h1>

Onda is an expressive and performant JIT-compiled audio programming language.

Visit the project's [website](https://onda-lang.org) to try the web compiler and get an introduction to the language.

## Code example

Here is a code example for a saw oscillator processed by a resonant filter and an oversampled saturator:

```onda
import std/osc
import std/filter

params:
  freq = 110.0 {20.0, 880.0}
  cutoff = 1200.0 {40.0, 12000.0}
  resonance = 1.0 {0.1, 8.0}
  drive = 1.0 {1.0, 10.0}

def soft_clip(x):
  return tanh(x)

proc Saturator:
  params:
    amount = 1.0

  sample 4:
    out1 = soft_clip(in1 * amount)

init:
  osc = std::osc::Saw()
  filter = std::filter::Svf(cutoff = cutoff, q = resonance)
  saturator = Saturator()

block:
  filter.update_coeffs(cutoff, resonance)

  sample:
    tone = osc(freq = freq)
    out1 = saturator(filter(tone), amount = drive)
```

Take a look at the `examples/` folder for more usage examples.

## Precompiled releases

[GitHub Releases](https://github.com/onda-lang/onda/releases/latest) provides precompiled packages
for Linux x64, macOS arm64, and Windows x64. Each package includes the CLI, an Onda Run application
entry, static and…
