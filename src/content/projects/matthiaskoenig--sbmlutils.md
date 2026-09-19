---
repo: "matthiaskoenig/sbmlutils"
name: "sbmlutils"
description: "Python utilities for SBML"
readmeQualityOk: true
url: "https://github.com/matthiaskoenig/sbmlutils"
homepage: "https://matthiaskoenig.github.io/sbmlutils"
language: "HTML"
languages: ["HTML"]
languagePcts: [90]
topics: ["python", "sbml"]
stars: 41
forks: 12
openIssues: 13
closedIssues: 334
watchers: 4
contributors: 8
recentReleases: 0
createdAt: "2016-04-11T07:57:54Z"
lastCommitAt: "2026-09-19T01:18:08Z"
lastReleaseAt: "2017-11-12T16:45:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 86
undervaluedScore: 58
maintainers: ["matthiaskoenig", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f0192d9ce7ddbfe1139d373f052c24d8925986afd0c24d2b6161023437204fdc/matthiaskoenig/sbmlutils"
---

# sbmlutils: python utilities for SBML

`sbmlutils` is a collection of python utilities for working with models in the [Systems Biology Markup Language](https://sbml.org) (SBML), built on [libsbml](https://sbml.org/software/libsbml/).

Features include

- **model creation** - a model is a python object, `create_model` writes it as validated SBML, with support for the `comp`, `fbc`, `distrib` and `layout` packages
- **units** written as strings (`mmole/min/l`) and checked for consistency
- **annotations** - MIRIAM annotations and SBO terms, in the model definition or from an annotation spreadsheet
- **notes** written as markdown
- **model composition** - hierarchical models, merging and flattening
- **converters** - SBML to an ODE system (python, R, julia, markdown, latex), XPP to SBML, antimony in both directions

The documentation is available at [https://matthiaskoenig.github.io/sbmlutils](https://matthiaskoenig.github.io/sbmlutils).

If you have any questions or issues please [open an issue](https://github.com/matthiaskoenig/sbmlutils/issues).

## How to cite

If you use `sbmlutils` please cite the archived software on [Zenodo](https://doi.org/10.5281/zenodo.597149):

> König,…
