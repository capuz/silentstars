---
repo: "palantir/isofilereader"
name: "isofilereader"
description: "A Java library to natively read ISO-9660 and UDF files"
readmeQualityOk: true
url: "https://github.com/palantir/isofilereader"
language: "Java"
languages: ["Java"]
languagePcts: [97]
topics: ["octo-correct-managed"]
stars: 20
forks: 5
openIssues: 0
closedIssues: 2
watchers: 166
contributors: 39
recentReleases: 1
createdAt: "2023-08-04T22:11:00Z"
lastCommitAt: "2026-09-06T08:04:03Z"
lastReleaseAt: "2026-06-08T14:46:27Z"
status: "watched"
tags: ["community_watch"]
healthScore: 95
undervaluedScore: 37
maintainers: ["svc-excavator-bot", "svc-autorelease"]
openGraphImageUrl: "https://opengraph.githubassets.com/d72e530f55c594583e403601cf952477226887b0dff9c298db0b940f70ea586c/palantir/isofilereader"
---

</p>

# IsoFileReader 💿

IsoFileReader is an implementation of European Computer Manufacturers Association (ECMA) Standard 119. From the standard
 document "ECMA-119 is technically identical with ISO-9660", making this library able to read any ISO image that meets
 ECMA-119/ISO-9660 as well. Later UDF support was added to read images with the newer format. UDF support is less
 thoroughly tested than traditional ECMA-119/ISO-9660 support. Some lower level classes do not have nice Java wrappers,
 they give raw access to the byte arrays; I welcome PRs for improvements.

This library was created to have a pure Java library to read ISO files and extract data that can also read files
Extended Attributes. CentOS and other open source projects have started to ship images with file names over the standard
64 and 128 characters. This means if the Extended Records are not incorporated there are truncated file names. I was using
https://github.com/stephenc/java-iso-tools, but that project was only using some of the enhanced tables for the original
ISO-9660/ECMA-119 format; that project has also been discontinued.

Standards: [ECMA-119/ISO 9660…
