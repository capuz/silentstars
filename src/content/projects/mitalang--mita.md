---
repo: "mitalang/mita"
name: "mita"
description: "Machine Instruction for Teyvat Automaton"
readmeQualityOk: true
url: "https://github.com/mitalang/mita"
homepage: "https://mitalang.org"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["mihoyo"]
stars: 47
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2023-02-02T08:59:00Z"
lastCommitAt: "2026-11-15T11:17:45Z"
lastReleaseAt: "2023-05-23T03:51:31Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 33
maintainers: ["mengzhuo"]
openGraphImageUrl: "https://opengraph.githubassets.com/65a67def016e7fedfa8b5e4834c337dea14a9670916e19a1e7747a86625e4ecf/mitalang/mita"
discussionCount: 0
---

# The MITA Programming Language 

🥩 dada!

MITA (Machine Instruction for Teyvat Automaton) is a programming language that hilichurls use for control Khaenri'ah automaton.
Ella Musk found this source code specification in a remarkable chest and transcripted into English for non-Teyvat people to study.

MITA looks like LISP programming language on Earth, here is an example.

```lisp
(upa 'olah 'odomu)
```
which returns `(olah . odomu)` meaning "hello friend"

Other dada example:
```
(lalalakukucha '((1 2) (3 4) ((5 6)) (7 8)))
```
which returns `5` (derived from [CADR function from lisp](http://clhs.lisp.se/Body/f_car_c.htm))

### Getting start

#### Binary Download
Download the latest binary from Github releases
https://github.com/mitalang/mita/releases/

#### Install from Source
```bash
cargo install --path .
mita
```

You can load library like
```bash
mita odomu.mita
```

### Specification
In the MITA language, all data are in the form of symbolic expressions usually referred to as S-expressions. S-expressions are of indefinite length and have a branching tree type of structure, so that significant subexpressions can be readily isolated. [1](#1)
The most elementary type of…
