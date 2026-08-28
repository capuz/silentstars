---
repo: "JvanKatwijk/qt-1090"
name: "qt-1090"
description: "1090 software being rewritten in C++ and extended with a (kind of) GUI"
readmeQualityOk: true
url: "https://github.com/JvanKatwijk/qt-1090"
language: "C++"
languages: ["C++", "C"]
languagePcts: [70, 25]
stars: 23
forks: 9
openIssues: 3
closedIssues: 0
watchers: 5
contributors: 1
recentReleases: 1
createdAt: "2018-05-09T17:00:15Z"
lastCommitAt: "2026-08-28T12:23:01Z"
lastReleaseAt: "2026-08-21T17:28:38Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 77
undervaluedScore: 29
maintainers: ["JvanKatwijk"]
openGraphImageUrl: "https://opengraph.githubassets.com/aa0f4598dc1e291f056197d64977ec65a85453861337e603507aff2217b46f9e/JvanKatwijk/qt-1090"
---

**qt-1090**

---------------------------------------------------------------------------
NEW: entry for sdrconnect
----------------------------------------------------------------------------

A new version of qt-1090 contains improved http handling and an
entry to use the program as "backend" for sdrconnect.

----------------------------------------------------------------------------

**qt-1090** is a variant of the popular Dump1090 program. The latter was
designed  as a command line utility for RTLSDR devices. 
The qt-1090 version was created to allow the use of SDRplay devices,
but it supports SDRplay devices, RTLSDR devices, HACKRF One, Lime devoces,
the Adalm Pluto and the sdrConnect framework.
It is equipped  with a simple GUI.

The display shows the frequency spectrum of the region of 1090 MHz.

The top line of the GUI shows some selectors

 * the selector with text **streaming** selects the way the output is presented on the command window. In **streaming mode** the decoded incoming messages are shown, in **plane list** mode, details of the recognized places are shown. 

 *  **http output**, when touched shows a webbrowser with the planes on it. It is evident that some…
