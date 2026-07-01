---
repo: "robertknight/tex-linebreak"
name: "tex-linebreak"
description: "JavaScript implementation of the Knuth-Plass linebreaking algorithm"
url: "https://github.com/robertknight/tex-linebreak"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["javascript", "algorithms"]
stars: 193
forks: 12
openIssues: 3
closedIssues: 7
watchers: 1
contributors: 3
recentReleases: 1
createdAt: "2018-03-30T12:06:54Z"
lastCommitAt: "2026-07-01T07:05:38Z"
lastReleaseAt: "2026-04-22T17:20:24Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 87
undervaluedScore: 41
maintainers: ["robertknight", "dependabot[bot]", "basil"]
openGraphImageUrl: "https://opengraph.githubassets.com/48a7a6b73b8ee6fe78a5a37d8d732a6e3a7a12c3b16c04010a978a1969d48081/robertknight/tex-linebreak"
---

# tex-linebreak

_tex-linebreak_ is a JavaScript library for laying out justified text as you
would find in a newspaper, book or technical paper. It implements the
Knuth-Plass line-breaking algorithm, as used by TeX.

## Introduction

Most text on the web is presented with "ragged-right" margins, as opposed to
the justified text you would find in eg. a scientific paper or newspaper.
Text can be justified in web pages using `text-align: justify`.
However this option alone tends to result in large&nbsp;&nbsp;&nbsp;spaces
&nbsp;&nbsp;&nbsp;between words which is distracting to read. This is due to the
use of "first fit" line-breaking algorithms where the browser considers only the
current line when finding the next breakpoint. Some browsers support hyphenation
via `hyphens: auto` which reduces this effect. However the first-fit approach
can still produce wide lines and it can also produce more hyphenated lines than
necessary.

The Knuth-Plass algorithm on the other hand optimizes the spacing between words
over the whole paragraph, seeking to minimize the overall "badness" of the
layout. This factor depends on the amount by which spaces have been shrunk or
stretched and the number of…
