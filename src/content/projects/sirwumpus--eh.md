---
repo: "SirWumpus/eh"
name: "eh"
description: "`eh`  is a minimalist version of vi(1) supporting UTF-8 and zero configuration."
readmeQualityOk: true
url: "https://github.com/SirWumpus/eh"
language: "C"
languages: ["C"]
languagePcts: [84]
topics: ["c", "editor", "ioccc", "text-editor", "utf-8", "ioccc28-winner", "ioccc-2024-winner"]
stars: 12
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-12-30T12:35:15Z"
lastCommitAt: "2026-11-04T11:26:47Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 65
maintainers: ["SirWumpus", "r1w1s1"]
openGraphImageUrl: "https://opengraph.githubassets.com/2f516786709b88e6eb5b208d6bf9175ba1bd942dedc4d377ac3edfd989c900ad/SirWumpus/eh"
---

Primary Repository https://codeberg.org/SirWumpus/eh

eh(1)
=====

Name
----

    eh - Edit Here - vi(1) the good parts version

Synopsis
--------

    eh [filename]

Description
-----------

A minimalist version of `vi(1)`.  It is an example of the "Buffer Gap" method outlined in the [The Craft Of Text Editing](http://www.finseth.com/craft/) used by many Emacs style editors.  (Yep I mixed `vi` and `emacs` in the same paragraph; I'm going to hell for that one.)

Create or read a text file to edit.  Text files consists of lines of printable UTF-8 text, tabs, or newline characters.  A physical line can be of arbitrary length and is delimited by either a newline or the end of file.  Tab stops are every eight columns.  The behaviour of non-printable characters may vary depending on the implementation of the Curses library, `stty(1)` settings, or terminal emulator.

Commands
--------

The commands are similar, but not the same as `vi(1)`.  Most commands can be prefixed by a repeat count, eg. `5w`, `123G`, `2dw` (`d2w`), or `2d3w` (`d6w`).  Motion commands, optionally prefixed by a count, are those that move the cursor without modifying the buffer.  Some edit commands can be followed by…
