---
repo: "shamazmazum/cl-beads"
name: "cl-beads"
description: "Editing tool for schemes of beaded crochet rope"
readmeQualityOk: true
url: "https://github.com/shamazmazum/cl-beads"
language: "Common Lisp"
languages: ["Common Lisp"]
languagePcts: [100]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-04-22T15:56:39Z"
lastCommitAt: "2026-08-01T06:13:29Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 34
maintainers: ["shamazmazum"]
openGraphImageUrl: "https://opengraph.githubassets.com/742287b19841483cc33fb9714fb9c941f9f8d3620a8e9adc498579640c874de6/shamazmazum/cl-beads"
---

# cl-beads

## What is it?

**cl-beads** is a program for editing schemes for beaded crochet ropes. It is
portable and uses GTK3 as a UI toolkit. File format used in **cl-beads** is
compatible with JBead program. The purpose of this program is to write a program
which works natively in Wayland environment. Currently it lacks many features
present in JBead (most noticeable, simulation view and report).

## Building

You need some implementation of Common Lisp language (I recommend SBCL) and GTK3
library. Then make sure you have Quicklisp and Ultralisp system repositories and
execute in REPL:

``` lisp
(ql:quickload :cl-beads)
(asdf:make :cl-beads/application)
```

Then run a produced binary.

## Screenshots

## TODO list

* ~~Simulation view~~
* Some report maybe?
* ~~Quit confirmation~~
* ~~Changing color for a range of beads~~ (Implemented as draw free line tool).
* Edit history
* ~~Change color for outline of a bead~~
* Add support for DB-Bead format.
