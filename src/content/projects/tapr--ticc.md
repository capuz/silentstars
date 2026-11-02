---
repo: "TAPR/TICC"
name: "TICC"
description: "Sub-nanosecond time interval counter"
readmeQualityOk: true
url: "https://github.com/TAPR/TICC"
language: "C++"
languages: ["C++", "Python", "C"]
languagePcts: [37, 32, 29]
topics: ["timenuts", "shield"]
stars: 51
forks: 13
openIssues: 1
closedIssues: 18
watchers: 20
contributors: 4
recentReleases: 0
createdAt: "2016-03-26T14:41:40Z"
lastCommitAt: "2026-11-02T15:18:52Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 30
maintainers: ["n8ur"]
openGraphImageUrl: "https://opengraph.githubassets.com/34bc05a1c58c83e019df2fa8d8905d2102046e6c6a776b521a45069d45308c9a/TAPR/TICC"
---

# TICC
Sub-nanosecond time interval counter built on a shield for the
Arduino Mega 2560.  The TICC is available from 
https://tapr.org/product/tapr-ticc/.

NOTE: Going forward, the "main" brach is the current 
development branch.  Each release is in its own branch 
named with version number.

The TICC is a circuit board mated to an Arduino Mega 2560 
controller that allows very high resolution time interval 
measurements -- down to less than 60 picoseconds (trillionths 
of a second).  

The software in this repo runs on the Mega 2560 and controls 
the shield.  Measurement data is output in ASCII form on the 
Arduino's USB port.  In the latest version, there is also a 
high-speed mode that outputs binary data at nearly double the 
rate of the ASCII output.

Source files are contained in the "TICC" folder which is an 
Arduino sketch folder.

Binary ".hex" files are in the binaries/ folder.  Several upload
tools for Windows, Linux, and Mac are in the bin/ folder.  Instructions 
for using one of them, AVRDUDESS, will be in an appendix to the updated 
User Guide which is in the docs/ folder.

See the CHANGES.md file for more details about versions.  This
is just a short summary:…
