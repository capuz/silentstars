---
repo: "DataDog/malicious-software-packages-dataset"
name: "malicious-software-packages-dataset"
description: "An open-source dataset of malicious software packages found in the wild."
readmeQualityOk: true
url: "https://github.com/DataDog/malicious-software-packages-dataset"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["dataset", "guarddog", "malicious-packages", "software-supply-chain-security"]
stars: 379
forks: 56
openIssues: 2
closedIssues: 8
watchers: 7
contributors: 281
recentReleases: 0
createdAt: "2023-03-20T17:21:59Z"
lastCommitAt: "2026-09-11T08:15:54Z"
status: "thriving"
tags: []
healthScore: 95
undervaluedScore: 36
maintainers: ["dd-octo-sts[bot]", "ikretz", "tesnim5hamdouni"]
openGraphImageUrl: "https://opengraph.githubassets.com/e563292f6b1d4f952a1362c844c435cdf10318911ce0b5997981f275b1b21452/DataDog/malicious-software-packages-dataset"
---

# Malicious Software Packages Dataset

</p>

This repository is an **open-source dataset of <span id="num-samples">28623</span> malicious software packages** (and counting) identified by Datadog, as part of our security research efforts in software supply-chain security. Most of the malicious packages have been identified by [GuardDog](https://github.com/DataDog/guarddog).

Current ecosystems:
- npm
- PyPI
- IDE extensions
- AI Skills

## Usage

Malicious samples are available under the **[samples/](https://github.com/DataDog/malicious-software-packages-dataset/blob/HEAD/samples/)** folder and compressed as an encrypted ZIP file with the password `infected`. The date indicated as part of the file name is the discovery date, not necessarily the package publication date.

You can use the script [extract.sh](https://github.com/DataDog/malicious-software-packages-dataset/blob/HEAD/scripts/extract.sh) to automatically extract selected samples in order to perform local analysis on them. Alternatively, you can extract a single sample using:

```
$ unzip -o -P infected samples/pypi/malicious_intent/pydefender/1.0.0/2023-03-20-pydefender-v1.0.0.zip -d /tmp/
Archive:…
