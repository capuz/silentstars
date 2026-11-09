---
repo: "greenbone/openvas-smb"
name: "openvas-smb"
description: "SMB module for OpenVAS Scanner"
readmeQualityOk: true
url: "https://github.com/greenbone/openvas-smb"
language: "C"
languages: ["C"]
languagePcts: [92]
topics: ["openvas", "vulnerability", "vulnerability-detection", "greenbone", "smb", "samba", "c", "base", "techops"]
stars: 51
forks: 49
openIssues: 7
closedIssues: 12
watchers: 11
contributors: 43
recentReleases: 0
createdAt: "2018-01-22T07:55:59Z"
lastCommitAt: "2026-11-09T11:58:54Z"
lastReleaseAt: "2023-10-17T15:58:54Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 82
undervaluedScore: 47
maintainers: ["dependabot[bot]", "tehforsch", "tsurai"]
openGraphImageUrl: "https://opengraph.githubassets.com/1d9d9934e829fc48fc27d4dfd80803c654fca77f9ebb4dd8719be3c9ef3a952a/greenbone/openvas-smb"
---

# openvas-smb

This is the `smb` module for the OpenVAS Scanner. It includes the
openvas-wmiclient library to interface with Microsoft Windows
Systems through the Windows Management Instrumentation API and a `wmic`
binary to execute queries remotely on that system.

## Installation

This module can be configured, built and installed with following commands:

    cmake .
    make install

For detailed installation requirements and instructions, please see the file
[INSTALL.md](https://github.com/greenbone/openvas-smb/blob/HEAD/INSTALL.md).

If you are not familiar or comfortable building from source code, we recommend
that you use the Greenbone Enterprise TRIAL, a prepared virtual machine with a
readily available setup. Information regarding the virtual machine
is available at <https://www.greenbone.net/en/testnow>.

## Support

For any question on the usage of `openvas-smb` please use the [Greenbone
Community Forum](https://forum.greenbone.net/). If you found a problem with the
software, please [create an issue](https://github.com/greenbone/openvas-smb/issues)
on GitHub. If you are a Greenbone customer you may alternatively or additionally
forward your issue to the Greenbone…
