---
repo: "hewm2008/fqcheck"
name: "fqcheck"
description: "fqcheck: A new simple and efficient software to stat base and quality distribution of fq file"
url: "https://github.com/hewm2008/fqcheck"
language: "C++"
languages: ["C++"]
languagePcts: [99]
stars: 8
forks: 3
openIssues: 2
closedIssues: 3
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2022-02-17T01:46:49Z"
lastCommitAt: "2026-06-28T06:55:31Z"
lastReleaseAt: "2023-08-27T04:44:50Z"
status: "thriving"
tags: []
healthScore: 72
undervaluedScore: 39
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/99a0113261008a03514804dbb128ad0ab3caa0c2bb549ba3be22580978e14e91/hewm2008/fqcheck"
---

# fqcheck
<b>fqcheck: A new simple and efficient software to stat base and quality distribution of fq file</b>

###  1) Install
------------
The <b>new version</b> will be updated and maintained in <b>[hewm2008/fqcheck](https://github.com/hewm2008/fqcheck)</b>, please click below Link to download the latest version
</br><p align="center"><b>[hewm2008/fqcheck](https://github.com/hewm2008/fqcheck)</b></p>
<b> [Download](https://github.com/hewm2008/fqcheck/archive/v2.09.tar.gz) </b>

<h3>What's new in v2.09</h3>
<ul>
<li>Bug fixes: added missing <b>pclose()</b> calls in plot module; removed dead code (<i>GetShiftQ</i>, unused variables); fixed header guard in source file</li>
<li><b>cycle_qual</b> array dimension swapped for better cache locality</li>
<li>Simplified q_err initialization (removed redundant pow computations)</li>
<li>Makefile cleanup (removed non-existent include/lib directories)</li>
</ul>

<h3>What's new in v2.08</h3>
<ul>
<li><b>rapidgzip</b> parallel decompression engine — up to <b>20× faster</b> on large gzip files</li>
<li>OpenMP parallel processing for Paired-End mode (both files processed concurrently)</li>
<li>Batch buffered reading for reduced I/O…
