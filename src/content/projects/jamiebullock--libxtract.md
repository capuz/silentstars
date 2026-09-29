---
repo: "jamiebullock/LibXtract"
name: "LibXtract"
description: "LibXtract is a simple, portable, lightweight library of audio feature extraction functions."
readmeQualityOk: true
url: "https://github.com/jamiebullock/LibXtract"
language: "C"
languages: ["C"]
languagePcts: [79]
stars: 231
forks: 47
openIssues: 2
closedIssues: 91
watchers: 23
contributors: 8
recentReleases: 0
createdAt: "2012-05-31T15:16:08Z"
lastCommitAt: "2026-09-29T10:04:40Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 89
undervaluedScore: 25
maintainers: ["jamiebullock"]
openGraphImageUrl: "https://opengraph.githubassets.com/b57b35c0a2b420b335abc6556db3bc3448ae9d35a2109c12494b9d55360b3800/jamiebullock/LibXtract"
---

# LibXtract

LibXtract is a simple, portable, lightweight library of audio feature extraction functions. The purpose of the library is to provide a relatively exhaustive set of feature extraction primitives that are designed to be 'cascaded' to create extraction hierarchies.

For example, 'variance', 'average deviation', 'skewness' and 'kurtosis', all require the 'mean' of the input vector to be precomputed. However, rather than compute the 'mean' 'inside' each function, it is expected that the 'mean' will be passed in as an argument. This means that if the user wishes to use all of these features, the mean is calculated only once, and then passed to any functions that require it.

This philosophy of 'cascading' features is followed throughout the library, for example with features that operate on the magnitude spectrum of a signal vector (e.g. 'irregularity'), the magnitude spectrum is not calculated 'inside' the respective function, instead, a pointer to the first element in an array containing the magnitude spectrum is passed in as an argument.

Hopefully this not only makes the library more efficient when computing large numbers of features, but also makes it more flexible…
