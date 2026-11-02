---
repo: "Bassman2/MediaDevices"
name: "MediaDevices"
description: "MTP Library"
readmeQualityOk: true
url: "https://github.com/Bassman2/MediaDevices"
language: "C#"
languages: ["C#"]
languagePcts: [100]
stars: 134
forks: 40
openIssues: 3
closedIssues: 75
watchers: 7
contributors: 3
recentReleases: 3
createdAt: "2017-11-06T20:49:49Z"
lastCommitAt: "2026-11-02T11:37:50Z"
lastReleaseAt: "2026-08-20T16:09:44Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 97
undervaluedScore: 51
maintainers: ["Bassman2", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/af8d310e71b26caeb46b182d0228d50f5dab0210138ff53b30c26eddc1f7b7f0/Bassman2/MediaDevices"
---

# MediaDevices

Media Devices is a API to interact with MTP (Media Transfer Protocol), PTP (Picture Transport Protocol) and MSC (Mass Storage Class) devices like cell phones, tablets and cameras.

Version 2 has been completely rewritten to support the following features:

* Thread-safe: The library can now be used across multiple threads.

* Trimmable

* AOT-compatible

* Uses generated COM and LibraryImport

* Async support

Older .NET versions prior to 8.0 are no longer supported, as they do not support these new features.

## Future Development

I currently see two directions for further development.

1. Implementation of manufacturer-specific features, such as camera control.

2. Support for Linux and MacOS. This would mean implementing a custom MTP/PTP stack for Linux and MacOS.

According to my current research, using a custom MTP/PTP stack under Windows is not possible because Windows Portable Devices block access to the USB MTP interface.

Please give me feedback on which of the two options you prefer.

If anyone knows of a way to use the COM interface, please let me know.
I don't want to use tools like Zadig or external libraries.

## Download

[NuGet…
