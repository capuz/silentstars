---
repo: "gattjoe/OCSPChecker"
name: "OCSPChecker"
description: "OCSPChecker provides an automated means to check the OCSP revocation status for a x509 digital certificate."
readmeQualityOk: true
url: "https://github.com/gattjoe/OCSPChecker"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ocsp", "ssl", "tls", "python", "security"]
stars: 41
forks: 6
openIssues: 1
closedIssues: 1
watchers: 7
contributors: 7
recentReleases: 0
createdAt: "2020-07-21T12:32:27Z"
lastCommitAt: "2026-10-06T10:43:24Z"
lastReleaseAt: "2021-07-09T05:21:43Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 80
undervaluedScore: 46
maintainers: ["gattjoe", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/01cfe4b7aae8568b7ef054a578dd6c82506460a7563a8d27d11f075c5edde081/gattjoe/OCSPChecker"
---

# OCSPChecker

## Overview

OCSPChecker is a python package based on Alban Diquet's [nassl](https://github.com/nabla-c0d3/nassl) wrapper and the Python Cryptographic Authority's [cryptography](https://github.com/pyca/cryptography) package. Relying on a web browser to check the revocation status of a x509 digital certificate [has](https://www.imperialviolet.org/2014/04/19/revchecking.html) [been](https://www.imperialviolet.org/2014/04/29/revocationagain.html) [broken](https://scotthelme.co.uk/revocation-is-broken/) from the beginning, and validating certificates outside of the web browser is a manual process. OCSP-Checker aims to solve this by providing an automated means to check the [OCSP](https://en.wikipedia.org/wiki/Online_Certificate_Status_Protocol) revocation status for a x509 digital certificate.

## Pre-requisites

__Python__ - Python 3.10 (64-bit) and above.

## Installation

It is strongly recommended to run ocsp-checker in a virtual environment.

```
python -m venv ocsp-checker
cd ocsp-checker && source bin/activate
pip install ocsp-checker
```

## Usage

```
>>> from ocspchecker import ocspchecker
>>> ocsp_request = ocspchecker.get_ocsp_status("github.com")
```

##…
