---
repo: "jgreener64/Bio3DView.jl"
name: "Bio3DView.jl"
description: "A Julia package to view macromolecular structures in the REPL, in a Jupyter notebook/JupyterLab or in Pluto"
readmeQualityOk: true
url: "https://github.com/jgreener64/Bio3DView.jl"
language: "Julia"
languages: ["Julia"]
languagePcts: [100]
topics: ["protein-structure", "structural-bioinformatics", "jupyter-notebook", "structural-biology", "julia", "bioinformatics", "ijulia", "pluto"]
stars: 36
forks: 7
openIssues: 7
closedIssues: 2
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2017-09-19T13:34:51Z"
lastCommitAt: "2026-11-09T11:59:37Z"
lastReleaseAt: "2024-06-21T14:39:44Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 59
undervaluedScore: 25
maintainers: ["jgreener64", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0eb4fc6d7da8f43f2cfa700f832da81bbe16039b0366aae237f8f27151fc1e4d/jgreener64/Bio3DView.jl"
---

# Bio3DView.jl

Bio3DView.jl provides a viewer for molecular structures in [Julia](https://julialang.org).
It is a wrapper round the excellent [3Dmol.js](http://3dmol.csb.pitt.edu) package [1].
When used from the REPL or a file, the viewer shows in a popup using [Blink.jl](https://github.com/JunoLab/Blink.jl).
When used from [IJulia](https://github.com/JuliaLang/IJulia.jl) running in [Jupyter](http://jupyter.org) or [VS Code](https://code.visualstudio.com), or from [Pluto.jl](https://github.com/fonsp/Pluto.jl), the viewer shows in the output cell.
You can also use Bio3DView.jl to generate standalone HTML, e.g. for use in a web page.

[1] Nicholas Rego and David Koes,
3Dmol.js: molecular visualization with WebGL,
Bioinformatics (2015) 31(8): 1322-1324 - [link](http://doi.org/10.1093/bioinformatics/btu829)

Contributions and bug reports are welcome.

## Installation

Julia 1.0 or later is required, with Julia 1.9 or later required to get the latest version.
Install Bio3DView from the package mode of the Julia REPL (press `]`):

```
add Bio3DView
```

Bio3DView uses package extensions to minimise dependencies so you will also need to install either Blink, IJulia or Pluto to make this…
