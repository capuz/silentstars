---
repo: "Efferent-Health/fo-dicom.Codecs"
name: "fo-dicom.Codecs"
description: "Cross-platform Dicom native codecs for fo-dicom"
readmeQualityOk: true
url: "https://github.com/Efferent-Health/fo-dicom.Codecs"
language: "C"
languages: ["C", "C++"]
languagePcts: [67, 30]
topics: ["dicom", "codec", "fo-dicom", "cross-platform-library", "dotnet"]
stars: 78
forks: 33
openIssues: 8
closedIssues: 96
watchers: 6
contributors: 12
recentReleases: 0
createdAt: "2019-04-09T21:43:51Z"
lastCommitAt: "2026-10-21T21:14:54Z"
lastReleaseAt: "2019-11-06T20:45:53Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 94
undervaluedScore: 52
maintainers: ["cbeltran1306", "dependabot[bot]", "jaime-olivares"]
openGraphImageUrl: "https://opengraph.githubassets.com/71b88c21fbab7a5771e11cc9e5ba0f92720e46a25db974e47216ffae2acaee6c/Efferent-Health/fo-dicom.Codecs"
---

# fo-dicom.Codecs

This is collaborative project mantained by [Fellow Oak Dicom](https://github.com/fo-dicom/fo-dicom) and [Efferent, Inc.](https://efferenthealth.com).
The codecs in this repository are written in pure C/C++ code and wrapped with C# and netstandard2.0. The supported platforms so far are:

|OS|&numsp;&numsp;x64&numsp;&numsp;|Arm64|Tested with|
|:--|:--:|:--:|:--|
|Windows|:white_check_mark:|:white_check_mark:|Windows 10/11|
|Linux|:white_check_mark:|:white_check_mark:|Ubuntu 18/20/22/24|
|MacOS|:white_check_mark:|:white_check_mark:|Ventura/Sonoma/Sequoia/Tahoe|

## Supported CODECs

The following CODECS are implemented:

|Transfer Syntax UID|Description|
|:--|--|
|1.2.840.10008.1.2.5|RLE Lossless|
|1.2.840.10008.1.2.4.50|JPEG Baseline (Process 1): Default Transfer Syntax for Lossy JPEG 8 Bit Image Compression|
|1.2.840.10008.1.2.4.51|JPEG Extended (Process 2 & 4): Default Transfer Syntax for Lossy JPEG 12 Bit Image Compression (Process 4 only)|
|1.2.840.10008.1.2.4.57|JPEG Lossless, Non-Hierarchical (Process 14)|
|1.2.840.10008.1.2.4.70|JPEG Lossless, Non-Hierarchical, First-Order Prediction (Process 14 [Selection Value 1]): Default Transfer Syntax for Lossless…
