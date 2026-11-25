---
repo: "OPALE-dev/DcmSwift"
name: "DcmSwift"
description: "DICOM implementation written in Swift"
readmeQualityOk: true
url: "https://github.com/OPALE-dev/DcmSwift"
homepage: "https://opale-dev.github.io/DcmSwift/documentation/dcmswift/"
language: "C++"
languages: ["C++", "Swift", "C"]
languagePcts: [39, 37, 21]
topics: ["dicom", "swift", "medical-imaging", "medical", "medical-application", "macos", "linux", "ios"]
stars: 15
forks: 17
openIssues: 4
closedIssues: 0
watchers: 4
contributors: 5
recentReleases: 6
createdAt: "2021-12-21T21:10:28Z"
lastCommitAt: "2026-11-25T11:38:59Z"
lastReleaseAt: "2026-11-19T20:59:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 59
undervaluedScore: 75
maintainers: ["nark"]
openGraphImageUrl: "https://opengraph.githubassets.com/e5a22d0a9927eaefef7d44dbc3905f73e70c564c09408c24ac497c9a15ab34d7/OPALE-dev/DcmSwift"
---

# DcmSwift

DcmSwift is a DICOM library and a set of command-line tools written in Swift.
It reads, writes, validates, renders, and exchanges DICOM data on macOS, iOS,
and Linux, and relies mainly on Foundation.

The normative baseline is **DICOM 2026d**. DcmSwift 2.0 is a work in progress:
the binary file format, the codecs, the DICOM Upper Layer and DIMSE services
with TLS, and the DICOM JSON and Native DICOM Model XML representations are
implemented with regression tests, fuzzing, and comparisons with independent
toolkits; rendering and presentation come next.

> **Disclaimer.** DcmSwift is not a medical diagnosis library and must not be
> used as one. Parsing a file does not mean that it conforms to its IOD, and a
> UID in the bundled dictionary does not mean that the corresponding feature is
> implemented.

## Documentation

The documentation is a [DocC catalog](https://github.com/OPALE-dev/DcmSwift/blob/HEAD/Sources/DcmSwift/DcmSwift.docc), built
from the articles below and the `///` comments of the public API.
