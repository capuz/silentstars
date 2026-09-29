---
repo: "lchmiel/SGGW-Thesis-LaTeX"
name: "SGGW-Thesis-LaTeX"
description: "Klasa wspierająca redakcję prac dyplomowych w Szkole Głównej Gospodarstwa Wiejskiego w Warszawie - SGGW dla systemu LaTeX, wraz ze wzorcem pracy w formie dokumentu .tex. Obecnie w języku polskim. LaTeX class for writing diploma dissertations at the Warsaw University of Life Sciences - SGGW, now in Polish only. English beta version in my web below."
readmeQualityOk: true
url: "https://github.com/lchmiel/SGGW-Thesis-LaTeX"
homepage: "https://lchmiel.pl/stud.html#ClassLaTeXSGGW"
language: "TeX"
languages: ["TeX"]
languagePcts: [88]
stars: 18
forks: 4
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2021-11-14T10:48:00Z"
lastCommitAt: "2026-09-29T10:05:05Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 56
maintainers: ["lchmiel"]
openGraphImageUrl: "https://opengraph.githubassets.com/c4ed96f0d9a581aef0353f077610e873bb374b3ba3e7e3392a2eb912c1f6309e/lchmiel/SGGW-Thesis-LaTeX"
---

# SGGW-Thesis-Latex
The LaTeX class "SGGW-thesis.cls" together with the thesis "main.tex" written in LaTeX with the use of this class was created by Łukasz Adamczyk as the part of his engineer thesis in 2017. This repository is supposed to provide better versioning and ease of contribution.

The project is continuously maintained by several Authors. For detailed information on changes, which go far beyond the original thesis, see the main.pdf file, subsection "Zmiany" in the Appendix A "Poradnik pisania prac dyplomowych".

The commands provided by the class are named in English (excluding the flags explained below), but the thesis in LaTeX and the whole project is written in Polish. An English version in the early stage of development can be found at https://lchmiel.pl/stud.html#ClassLaTeXSGGW.

This project is also available at https://lchmiel.pl/stud.html#KlasaLaTeXSGGW. 

# Basic instructions
## Changing thesis type header
To change the header containing thesis type, after the 
```latex
\documentclass{SGGW-thesis}
```

set one of the flags to true

```latex
\INZYNIERSKAtrue % set by default
```
```latex
\LICENCJACKAtrue
```
```latex
\MAGISTERSKAtrue
```

## Changing the footer…
