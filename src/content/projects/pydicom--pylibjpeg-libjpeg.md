---
repo: "pydicom/pylibjpeg-libjpeg"
name: "pylibjpeg-libjpeg"
description: "A JPEG, JPEG-LS and JPEG XT plugin for pylibjpeg"
readmeQualityOk: true
url: "https://github.com/pydicom/pylibjpeg-libjpeg"
language: "Python"
languages: ["Python", "C++"]
languagePcts: [70, 27]
topics: ["jpeg", "libjpeg", "python", "pylibjpeg", "jpeg-ls", "decoding", "pydicom", "dicom", "jpeg-xt"]
stars: 17
forks: 8
openIssues: 3
closedIssues: 22
watchers: 3
contributors: 8
recentReleases: 0
createdAt: "2020-03-07T23:34:11Z"
lastCommitAt: "2026-11-02T17:58:21Z"
lastReleaseAt: "2024-01-20T00:34:22Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 95
undervaluedScore: 45
maintainers: ["dependabot[bot]", "mrbean-bremen", "jdotc1"]
openGraphImageUrl: "https://opengraph.githubassets.com/7aee93fa1fcf5f6e5baa1b2ddc1da4b8f08275cdf4ab30ca67adfa4ba1766c80/pydicom/pylibjpeg-libjpeg"
---

## pylibjpeg-libjpeg

A Python 3.8+ wrapper for Thomas Richter's
[libjpeg](https://github.com/thorfdbg/libjpeg), with a focus on use as a
plugin for [pylibjpeg](http://github.com/pydicom/pylibjpeg).

Linux, MacOS and Windows are all supported.

### Installation
#### Dependencies
[NumPy](http://numpy.org)

#### Installing the current release
```bash
pip install pylibjpeg-libjpeg
```
#### Installing the development version

Make sure [Python](https://www.python.org/) and [Git](https://git-scm.com/) are installed. For Windows, you also need to install
[Microsoft's C++ Build Tools](https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=BuildTools&rel=16).
```bash
git clone --recurse-submodules https://github.com/pydicom/pylibjpeg-libjpeg
python -m pip install pylibjpeg-libjpeg
```

### Supported JPEG Formats
#### Decoding

| ISO/IEC Standard | ITU Equivalent | JPEG Format |
| --- | --- | --- |
| [10918](https://www.iso.org/standard/18902.html) | [T.81](https://www.itu.int/rec/T-REC-T.81/en) | [JPEG](https://jpeg.org/jpeg/index.html)    |
| [14495](https://www.iso.org/standard/22397.html)   | [T.87](https://www.itu.int/rec/T-REC-T.87/en) |…
