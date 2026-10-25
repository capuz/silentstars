---
repo: "mattsteeldue/vforth-next"
name: "vforth-next"
description: "Z80N Forth system suitable to run on the new ZX Spectrum Next"
readmeQualityOk: true
url: "https://github.com/mattsteeldue/vforth-next"
language: "Forth"
languages: ["Forth", "Assembly"]
languagePcts: [76, 23]
topics: ["forth", "zx-spectrum-next", "zx-spectrum", "z80-assembler", "zxspectrum", "z80n-assembler", "zxnextos", "spectrum-next", "assembler", "next-basic"]
stars: 47
forks: 2
openIssues: 0
closedIssues: 8
watchers: 6
contributors: 4
recentReleases: 0
createdAt: "2020-05-22T21:27:45Z"
lastCommitAt: "2026-10-25T22:11:24Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 85
undervaluedScore: 43
maintainers: ["mattsteeldue"]
openGraphImageUrl: "https://opengraph.githubassets.com/d3536b63a02d5e4850d9c49b9dbcf14e1496d20b00d6505ee8211f28cd950bf8/mattsteeldue/vforth-next"
---

#Forth on Sinclair ZX Spectrum Next

   PDF reference can be found here <https://github.com/mattsteeldue/vforth-next/tree/master/doc>.
   
   To learn Forth Language or for a good reference I suggest the book "Starting FORTH" - Leo Brodie (1981, Forth Inc.).
   PDF hopefully available here <https://www.forth.com/wp-content/uploads/2018/01/Starting-FORTH.pdf>
   The first edition is old enough to stick on 16 bit integers numbers. In this perspective, almost all Forth
   source described in Leo's book are available in Screens from 800 upward.
   

#vForth versions 1.6, 1.7 and 1.8
On January 2023, I published here on GitHub  version 1.6 that represents the fastest up to now, followed by version 1.7 (March 2023) where 
the dictionary is split in two parts: name-space and code-space increasing overall space available.
Version 1.8 has DOES> following the latest standard, released on September 2024.

#vForth1.52

On April 27th 2020, I received my  ZX Spectrum Next  (Accelerated)  and immediately tried to port my Forth to the Next environment. 

The purpose was to make Screens / BLOCKs system available using ZxNextOS APIs and having done it in the past for ZX Microdrive and MGT Disciple…
