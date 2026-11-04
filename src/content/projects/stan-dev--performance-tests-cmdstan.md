---
repo: "stan-dev/performance-tests-cmdstan"
name: "performance-tests-cmdstan"
description: "Performance testing tools for use with CmdStan"
readmeQualityOk: true
url: "https://github.com/stan-dev/performance-tests-cmdstan"
language: "Python"
languages: ["Python", "Stan"]
languagePcts: [57, 31]
stars: 9
forks: 8
openIssues: 4
closedIssues: 11
watchers: 6
contributors: 12
recentReleases: 0
createdAt: "2018-03-30T02:54:05Z"
lastCommitAt: "2026-11-04T11:27:56Z"
lastReleaseAt: "2019-06-13T13:47:28Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 92
undervaluedScore: 77
maintainers: ["stan-buildbot", "WardBrian", "dylex"]
openGraphImageUrl: "https://opengraph.githubassets.com/e036ebbbc10b8ef66e921057f3d6552a8305d485b47c0148cd5f25bcc4537322/stan-dev/performance-tests-cmdstan"
---

# performance-tests-cmdstan
Performance testing tools for use with CmdStan

## "Install"

```
git clone --recursive https://github.com/stan-dev/performance-tests-cmdstan.git
```

## Test performance in current working directory

To test the performance of the current cmdstan et al working directory on, for example, @betanalpha's stat_comp_benchmarks model repo, you can run the following:
```
./runPerformanceTests.py -j8 stat_comp_benchmarks
```

`./runPerformanceTests.py --help` for more options.

## Cleaning
`make clean` will recursively remove all non-checked-in files from all submodules. `make revert` will bring cmdstan and its submodules back to the commit specified by the current commit of the top-level `performance-tests-cmdstan` repo.

## Testing one git commit against another
to test e.g. develop against a branch you've made on cmdstan,
```
./compare-git-hashes.sh "stat_comp_benchmarks -j8 --runs 10 <other options to runPerformanceTests.py>" <Baseline CmdStan hash/branch/PR-???> <CmdStan hash for comparison run> <Stan hash for comparison run> <Math hash for comparison run>
```

All of these take pull request numbers, so to test stan-dev/math#1244 against develop (for…
