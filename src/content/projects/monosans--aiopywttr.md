---
repo: "monosans/aiopywttr"
name: "aiopywttr"
description: "Asynchronous wrapper for wttr.in weather forecast."
readmeQualityOk: true
url: "https://github.com/monosans/aiopywttr"
homepage: "https://monosans.github.io/aiopywttr/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2021-12-12T17:16:04Z"
lastCommitAt: "2026-07-22T06:09:18Z"
lastReleaseAt: "2022-11-26T19:58:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 83
maintainers: ["renovate[bot]", "monosans"]
openGraphImageUrl: "https://opengraph.githubassets.com/34a34d5ce3a0ad4182ccc79511ef3eba8ac390e05be1651c565ae2235f8d60ab/monosans/aiopywttr"
---

# aiopywttr

Asynchronous wrapper for [wttr.in](https://wttr.in) weather API.

Synchronous version [here](https://github.com/monosans/pywttr).

## Installation

```bash
pip install -U aiopywttr pywttr-models
```

## Documentation

<https://monosans.github.io/aiopywttr>

## Simple example

```python
async with aiopywttr.Wttr() as wttr:
    weather = await wttr.weather("Paris", language=aiopywttr.Language.EN)
print(weather.weather[0].avgtemp_c)
```

## License

[MIT](https://github.com/monosans/aiopywttr/blob/main/LICENSE)
