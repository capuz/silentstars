---
repo: "pydicom/dicom-validator"
name: "dicom-validator"
description: "Simple DICOM validator based on DocBook DICOM specs"
readmeQualityOk: true
url: "https://github.com/pydicom/dicom-validator"
homepage: "https://dicom-validator.readthedocs.io/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["dicom", "python"]
stars: 38
forks: 16
openIssues: 0
closedIssues: 39
watchers: 4
contributors: 10
recentReleases: 0
createdAt: "2016-08-02T18:53:24Z"
lastCommitAt: "2026-10-26T18:06:44Z"
lastReleaseAt: "2024-04-06T06:08:03Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 96
undervaluedScore: 60
maintainers: ["pre-commit-ci[bot]", "mrbean-bremen", "jdotc1"]
openGraphImageUrl: "https://opengraph.githubassets.com/4d6b510201b422cdd3c5c8db266cf6a2ead79d5c1429d3f49c58e8cc239f284d/pydicom/dicom-validator"
discussionCount: 2
---

# dicom-validator

*dicom-validator* provides the command line tool `validate_iods` that
checks a DICOM file for missing or unexpected attributes. The check is done by
comparing the contents of the DICOM file against the modules and
attributes required by the DICOM standard for the SOP class of the given
dataset.

The tool gets its input from the newest version of the DICOM standard (or a
specific version given as command line parameter) as provided by
[ACR NEMA](http://medical.nema.org/) in docbook format.
[pydicom](https://github.com/pydicom/pydicom) is used to read and parse
the DICOM files.

Additionally, the command line tool `dump_dcm_info` is available that displays
the tag values of one or several DICOM files in a readable format. It is
provided as a proof of concept of getting information directly from the
DICOM standard.

*Disclaimer:*
No guarantees are given for the correctness of the results.
This is beta-stage software which is mostly developed as a proof of concept.
Also check the limitations for `validate_iods` described below.

*Note:*
The original name of the package (`dcm-spec-tools`) has been
changed to `dicom-validator` together with the move to the `pydicom`…
