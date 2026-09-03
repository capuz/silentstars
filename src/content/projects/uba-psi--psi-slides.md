---
repo: "UBA-PSI/psi-slides"
name: "psi-slides"
description: "Tooling for creating a pragmatic mix of lecture slides and lecture scripts"
readmeQualityOk: true
url: "https://github.com/UBA-PSI/psi-slides"
homepage: "https://uba-psi.github.io/psi-slides/"
language: "HTML"
languages: ["HTML"]
languagePcts: [86]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-04-22T06:53:57Z"
lastCommitAt: "2026-09-03T08:13:35Z"
lastReleaseAt: "2026-07-26T17:45:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 53
maintainers: ["sxxs", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/6bd687fc3c07fe6d73a0526739f22d89bede13102df13608a10ca125a1ec0e97/UBA-PSI/psi-slides"
---

# psi-slides

psi-slides turns one Markdown file into four HTML files: the projection for the room, a presenter cockpit for your own screen, a reading document, and a handout with the spoken notes folded in.

The problem it solves is drift. Most lecturers keep slides and a script as two documents, and after two semesters they disagree with each other. psi-slides makes them one text: the prose you write is the handout, and the *same* prose – abridged by a rule you control – is what the projector shows. Nothing is written twice, so nothing can fall out of sync.

psi-slides is a build script. `node build.js source.md` writes four HTML files next to your source, and each of them carries everything it needs: the styling, the scripts, the images, the typeset maths, and the typefaces – three families ship with the tool and are embedded in each output, so a lecture looks the same on a machine that has none of them installed. Nothing is fetched at run time, from anywhere; open one in a browser with the network unplugged and it is complete. There is no server and no cloud account, and nothing has to be installed on the lectern machine. To give the audience the slides, or the full…
