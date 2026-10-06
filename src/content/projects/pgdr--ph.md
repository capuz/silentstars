---
repo: "pgdr/ph"
name: "ph"
description: "ph — the tabular data shell tool"
readmeQualityOk: true
url: "https://github.com/pgdr/ph"
homepage: "https://pypi.org/project/ph/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["tabular-data", "pandas", "plot", "csv", "pipeline", "shell"]
stars: 17
forks: 3
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2020-03-09T10:07:10Z"
lastCommitAt: "2026-10-06T10:42:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 65
undervaluedScore: 36
maintainers: ["pgdr"]
openGraphImageUrl: "https://opengraph.githubassets.com/b1962ab6306c06167b6dea2c71a44b676d618e688734816d427940878df865e7/pgdr/ph"
---

# ph (pronounced _φ_) - the tabular data shell tool 

Spoiler: Working with tabular data (csv) in the command line is difficult.

`ph` makes it easy:

```bash
$ pip install ph
$ cat iris.csv | ph columns
150
4
setosa
versicolor
virginica
$ cat iris.csv | ph columns setosa versicolor | ph head 15 | ph tail 5 | ph show
      setosa    versicolor
--  --------  ------------
 0       1.5           0.2
 1       1.6           0.2
 2       1.4           0.1
 3       1.1           0.1
 4       1.2           0.2
```

```bash
$ cat iris.csv | ph describe
              150           4      setosa  versicolor   virginica
count  150.000000  150.000000  150.000000  150.000000  150.000000
mean     5.843333    3.057333    3.758000    1.199333    1.000000
std      0.828066    0.435866    1.765298    0.762238    0.819232
min      4.300000    2.000000    1.000000    0.100000    0.000000
25%      5.100000    2.800000    1.600000    0.300000    0.000000
50%      5.800000    3.000000    4.350000    1.300000    1.000000
75%      6.400000    3.300000    5.100000    1.800000    2.000000
max      7.900000    4.400000    6.900000    2.500000    2.000000
```

Occasionally you would like to plot a CSV file…
