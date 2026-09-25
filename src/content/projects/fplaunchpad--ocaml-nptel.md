---
repo: "fplaunchpad/ocaml_nptel"
name: "ocaml_nptel"
description: "\"Functional Programming in OCaml\" course materials for NPTEL"
readmeQualityOk: true
url: "https://github.com/fplaunchpad/ocaml_nptel"
homepage: "https://fplaunchpad.org/ocaml_nptel/"
language: "OCaml"
languages: ["OCaml", "Shell"]
languagePcts: [30, 20]
stars: 14
forks: 9
openIssues: 12
closedIssues: 60
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-18T18:44:11Z"
lastCommitAt: "2026-09-25T09:02:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure", "fork_magnet"]
healthScore: 73
undervaluedScore: 42
maintainers: ["kayceesrk"]
openGraphImageUrl: "https://opengraph.githubassets.com/904e8f943d74a4f442185c5fb35be5d09838feb45b9b52c91767fd67824492ec/fplaunchpad/ocaml_nptel"
---

# OCaml NPTEL course

Source repository for **Functional Programming with OCaml**, a 12-week
NPTEL MOOC taught by KC Sivaramakrishnan at IIT Madras. The first
eight modules cover functional programming in OCaml; the final four
turn to secure systems software (testing, memory safety, OxCaml's
type-level safety extensions, and unikernels with MirageOS). All
twelve modules are now authored.

Course launches on SWAYAM/NPTEL in **July 2026**.

Live preview: <https://fplaunchpad.github.io/ocaml_nptel/>.

## What's in here

80 lecture files: 73 non-practice chapters and 7 practice worksheets.
Module file counts (M01-M12): 5, 6, 7, 6, 7, 7, 10, 8, 8, 5, 7, 4.

Regenerate these counts from lecture metadata with
`python3 tools/course-inventory.py --write`.

```
lectures/
  M01-L01-course-intro.md          One .md per lecture: M<module>-L<lecture>-<slug>.md.
  M01-L02-why-fp.md                M01-M12, including practice worksheets.
  ...
  M12-L04-suresh-the-stationmaster.md
  modules.txt                      Module titles used in sidebar + landing page.
  dune                             Version-gated ocaml-mdx validation stanzas.

tools/
  nptel-build/                     OCaml binary: .md…
