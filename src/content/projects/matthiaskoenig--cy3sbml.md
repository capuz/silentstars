---
repo: "matthiaskoenig/cy3sbml"
name: "cy3sbml"
description: "cy3sbml: SBML for Cytoscape 3"
readmeQualityOk: true
url: "https://github.com/matthiaskoenig/cy3sbml"
homepage: "http://matthiaskoenig.github.io/cy3sbml/"
language: "Java"
languages: ["Java"]
languagePcts: [93]
topics: ["sbml", "cytoscape", "systems-biology", "visualization", "graphs"]
stars: 16
forks: 4
openIssues: 0
closedIssues: 348
watchers: 3
contributors: 6
recentReleases: 0
createdAt: "2015-04-22T21:12:06Z"
lastCommitAt: "2026-10-26T09:17:01Z"
lastReleaseAt: "2016-07-11T10:07:05Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 98
undervaluedScore: 72
maintainers: ["matthiaskoenig", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a60ff1a67b404dd8d0e900f06810cd99ac8802fb60c9c904081b9f3126efd8f0/matthiaskoenig/cy3sbml"
---

#  cy3sbml - SBML for Cytoscape

`cy3sbml` is a [Cytoscape 3](https://cytoscape.org) app that imports SBML models as networks. It
uses [JSBML](https://github.com/sbmlteam/jsbml) to read all SBML levels and versions, with the
`qual`, `fbc` (versions 1 to 3), `comp`, `groups`, `distrib` and `layout` packages. Every SBML object becomes a node,
the relations between the objects become edges, and every layout of the `layout` package becomes a
network with the drawn positions. A panel next to the network shows the SBML information and the
annotations of the selected object, with links to [BioModels](https://www.biomodels.org),
[identifiers.org](https://identifiers.org/) and the [Ontology Lookup Service](https://www.ebi.ac.uk/ols4/index).
One click opens the model of a network in [sbml4humans](https://sbml4humans.de), a human readable
report of the model.
Models are imported from SBML files, from COMBINE archives (OMEX), or searched and imported from
the BioModels database. Commands in the Cytoscape REST API (CyREST) automate the import, the access
to the SBML of the networks and the mapping of data onto the nodes, for example from Python
([Automation and REST…
