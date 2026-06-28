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
recentReleases: 1
createdAt: "2022-02-17T01:46:49Z"
lastCommitAt: "2026-06-28T07:01:42Z"
lastReleaseAt: "2026-06-28T07:05:18Z"
status: "thriving"
tags: []
healthScore: 72
undervaluedScore: 41
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/d581c44c3fea2f0cf06b209a5d36eec4d4749a0801d1f2d3167bf9fc803516d3/hewm2008/fqcheck"
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
