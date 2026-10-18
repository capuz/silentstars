---
repo: "medovina/natural_lean"
name: "natural_lean"
description: "A controlled natural language syntax for Lean."
readmeQualityOk: true
url: "https://github.com/medovina/natural_lean"
language: "Lean"
languages: ["Lean"]
languagePcts: [100]
stars: 13
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-07T22:17:04Z"
lastCommitAt: "2026-10-18T08:16:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 40
maintainers: ["medovina"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b9b87fe9714a388508cd768113d98339f8d9488bd44e87e34ef2965ad47b910/medovina/natural_lean"
---

# Natural Lean

Natural Lean is a library that lets you write Lean definitions, theorems, and proofs in a controlled natural language that looks much like ordinary mathematical English.  To use the library, you can simply write `import Natural` at the top of a Lean source file, then write natural-language mathematics freely in the rest of the file.  If you are using an IDE such as Visual Studio Code, Natural Lean will automatically translate your text into native Lean code, which will be checked for correctness.

For a first glimpse of Natural Lean you could look at the example file [`NatNumGame.lean`](https://github.com/medovina/natural_lean/blob/HEAD/examples/Natural/Examples/NatNumGame.lean), which proves all of the theorems from the [Natural Number Game](https://adam.math.hhu.de/#/g/leanprover-community/nng4).  (Actually there are not many  explicit proofs in this file, since Natural Lean's [default tactic](#tactics) can solve most of these problems directly.)  The file [`NatDef.lean`](https://github.com/medovina/natural_lean/blob/HEAD/examples/Natural/Examples/NatDef.lean) is more substantial, and includes a partial development of the natural numbers from first principles in…
