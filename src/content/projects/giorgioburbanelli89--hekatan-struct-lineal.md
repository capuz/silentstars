---
repo: "GiorgioBurbanelli89/hekatan-struct-lineal"
name: "hekatan-struct-lineal"
description: "Hekatan Struct — análisis estructural por elementos finitos en el navegador (pórticos, losas, cimentaciones). Validado contra ETABS, SAP2000 y SAFE."
readmeQualityOk: true
url: "https://github.com/GiorgioBurbanelli89/hekatan-struct-lineal"
homepage: "https://giorgioburbanelli89.github.io/hekatan-struct-lineal/"
language: "JavaScript"
languages: ["JavaScript", "HTML", "C++"]
languagePcts: [38, 24, 21]
topics: ["civil-engineering", "ecuador", "etabs", "fem", "finite-element-method", "sap2000", "structural-analysis", "structural-engineering", "threejs", "webassembly"]
stars: 10
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2026-04-01T00:47:26Z"
lastCommitAt: "2026-09-27T09:28:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 49
maintainers: ["Gcerelly89", "GiorgioBurbanelli89"]
openGraphImageUrl: "https://opengraph.githubassets.com/1f770570bb8ff192c19bd15165e214ce164b7ddb2fc76bf7aadb40ade7f51d5a/GiorgioBurbanelli89/hekatan-struct-lineal"
discussionCount: 1
---

# Hekatan Struct Lineal

**Structural FEM analysis platform that runs entirely in the browser.** No installation, no server — C++/Eigen solver compiled to WebAssembly, Three.js 3D visualization, reactive UI with VanJS + Tweakpane.

**How it started.** [awatif](https://github.com/madil4/awatif) by Mohamed Adil compiled a C++ FEM solver to WebAssembly and ran it in the browser. That was the reason this project began: if a C++ solver could run in a web page, a complete structural analysis program could too. All the credit for that starting point belongs to awatif.

Hekatan Struct Lineal started as a fork of [awatif v2.0.0](https://github.com/madil4/awatif/tree/v2.0.0) by Mohamed Adil (thanks for the original UI framework and viewer, ~10% of the current codebase). Everything else — modal analysis, Winkler springs, native Q4 plane-stress solver, unified Tweakpane workspace, 25+ parametric examples, reactive unit system, modal animation, foundation workflows, CSI membrane, draggable panes, and more — was added for this project.

🌐 **Live:** [https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/)…
