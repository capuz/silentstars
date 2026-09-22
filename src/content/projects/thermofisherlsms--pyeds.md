---
repo: "thermofisherlsms/pyeds"
name: "pyeds"
description: "Provides easy access to Thermo Discoverer platform results"
readmeQualityOk: true
url: "https://github.com/thermofisherlsms/pyeds"
language: "Python"
languages: ["Python"]
languagePcts: [96]
stars: 20
forks: 5
openIssues: 0
closedIssues: 3
watchers: 5
contributors: 2
recentReleases: 0
createdAt: "2021-04-27T08:58:37Z"
lastCommitAt: "2026-09-22T08:44:37Z"
lastReleaseAt: "2024-01-30T17:25:49Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 100
undervaluedScore: 36
maintainers: ["MartinStrohalm"]
openGraphImageUrl: "https://opengraph.githubassets.com/e5bc30729dad331ce59836dad56dccf984ba442263291a11d5a80abe8f88d34a/thermofisherlsms/pyeds"
---

# PyEDS

The *PyEDS* is a Python library providing collection of utilities to conveniently access and display results from Thermo
Discoverer software like *Compound Discoverer* or *Proteome Discoverer*. Although the data are stored in open format
already (SQLite database), reading complex hierarchies is still not a trivial task and requires certain knowledge of
internal mechanisms. Using *PyEDS*, all the hard work is done automatically, so you can focus more on your research
instead of how to read the data.

The *PyEDS* library provides several tools to read data (*pyeds.EDS*), displaying tables metadata (*pyeds.Summary*) as
well as displaying actual data in nicely formatted tables (*pyeds.Review*). In addition, a set of utilities is now
available to simplify custom scripting nodes (*pyeds.scripting*).

Please see the [examples](https://github.com/thermofisherlsms/pyeds/tree/master/examples) folder to learn more about
available tools and functions.

### Show File Info

```python
import pyeds

# open result file using 'with' statement
with pyeds.Summary("examples/data.cdResult") as summary:
    
    # show full info
    summary.ShowAll()
```

### Reading Individual Tables…
