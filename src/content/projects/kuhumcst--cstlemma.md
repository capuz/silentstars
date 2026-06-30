---
repo: "kuhumcst/cstlemma"
name: "cstlemma"
description: "Lemmatiser for Danish, Dutch, English, German, Polish, Romanian, Russian and tens of other languages, that uses affix rules (affix: prefix, infix, suffix, circumfix). Rules are obtained by supervised learning from a full form - lemma list."
url: "https://github.com/kuhumcst/cstlemma"
language: "C++"
languages: ["C++"]
languagePcts: [96]
topics: ["lemmatizer", "lemmatiser", "affix", "infix", "prefix", "suffix", "dutch", "german"]
stars: 37
forks: 7
openIssues: 0
closedIssues: 9
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2012-10-08T07:43:33Z"
lastCommitAt: "2026-06-30T06:50:06Z"
lastReleaseAt: "2021-05-21T12:15:21Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 99
undervaluedScore: 35
maintainers: ["BartJongejan"]
openGraphImageUrl: "https://opengraph.githubassets.com/c9524850184d6c0518540b37f2ba9408e111ca2f7b86a481580bdbaa9c8f9a05/kuhumcst/cstlemma"
---

# CSTLEMMA - the CST Lemmatiser

**This distribution contains the following directories and files:**

* doc
    * This directory contains documentation of the program.
* src
    * This directory contains source code and a Makefile.
    * You also need to clone source code from the following repositories to `lib/parsesgml`, `lib/letterfunc` and `lib/hashmap` respectively:
        * https://github.com/kuhumcst/parsesgml
        * https://github.com/kuhumcst/letterfunc
        * https://github.com/kuhumcst/hashmap
    * NOTE: Fetching libraries and compiling the code can be done automatically by running `makecstlemma.bash`.
    * ALTERNATIVELY: Place the three included source directories in the same root directory that the `cstlemma` directory is in and then run `make` inside `cstlemma/src`.
* Changelog
    * A document describing changes between versions.
* COPYING
    * The full text of the GNU public licence.
* README.md
    * This file.

**CSTLEMMA has been compiled and run on the following platforms:**
<table>
<thead><td>
Platform</td><td>Compiler(s)</td></thead>
<tr><td>
Windows</td><td>Borland C++ 5 and Microsoft Visual C++ 6.0 and later</td></tr><tr><td>
Linux</td><td>GNU C++…
