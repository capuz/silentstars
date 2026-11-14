---
repo: "alhassy/org-special-block-extras"
name: "org-special-block-extras"
description: "Write once in Org, export everywhere: Org markup in any block; display maths with colours & calculational proofs; Org lists drawn as Graphviz graphs; folds, tooltips, glossaries, callouts; and org-defblock to make your own ^_^"
readmeQualityOk: true
url: "https://github.com/alhassy/org-special-block-extras"
homepage: "https://alhassy.com/org-special-block-extras-blocks-and-links"
language: "Emacs Lisp"
languages: ["Emacs Lisp"]
languagePcts: [99]
topics: ["emacs", "lisp", "org-mode", "html", "css", "pdf", "extension", "melpa", "shields", "badges"]
stars: 240
forks: 17
openIssues: 1
closedIssues: 44
watchers: 9
contributors: 7
recentReleases: 0
createdAt: "2020-04-16T21:36:44Z"
lastCommitAt: "2026-11-14T21:59:43Z"
lastReleaseAt: "2020-12-22T12:29:35Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 95
undervaluedScore: 42
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/26034233871d40e7ebc96b67ae4c023b5f044ec6c9a34f4191949400e634318b/alhassy/org-special-block-extras"
---

# 🧙‍♂️ *Write Once, Export Everywhere*: Say Hello to `org-special-block-extras`

One Org file ---a tiny Lisp function, a peek at its values, a picture of its loop, and a proof of what it computes---
exported to PDF (left), as written in Emacs (middle), and exported to HTML (right). Click it for the
**[live HTML export](https://alhassy.com/org-special-block-extras-mwe)**, where we hover the tooltips, unfold the
`details`, and click the proof's hints.

```org
#+title: Summing odd numbers

* A tiny function

We sum the first =n= [[tooltip:odd][An integer 2i - 1, for some i ≥ 1]] numbers by doc:cl-loop; place the
cursor after the last parenthesis and press kbd:C-x_C-e to define it.
#+begin_src emacs-lisp
(defun sum-odds (n)
  "Return 1 + 3 + ⋯ + (2n - 1)."
  (cl-loop for i from 1 to n sum (- (* 2 i) 1)))
#+end_src

#+begin_details Peek: the first few values :let (N 4)
=(sum-odds N)= is the sum of the first N odd numbers. In order:
| =n=            | 1 | 2 | 3 |  4 |
| =(sum-odds n)= | 1 | 4 | 9 | 16 |
These are red:squares! <<squares>> We [[*Why squares?][prove it below]].
#+end_details

* How the loop accumulates

Each step adds the next odd number to the running sum:
#+begin_graph…
