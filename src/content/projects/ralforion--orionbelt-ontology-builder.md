---
repo: "ralforion/orionbelt-ontology-builder"
name: "orionbelt-ontology-builder"
description: "Browser-based ontology workbench for OWL ontologies and SKOS vocabularies. Streamlit + rdflib, no Java, no Protégé. OWL-RL reasoning, 22 SKOS validation checks, read-only SPARQL console, bulk operations, gist upper-ontology starters, merge-aware imports, interactive vis-network graph."
readmeQualityOk: true
url: "https://github.com/ralforion/orionbelt-ontology-builder"
homepage: "https://orionbelt.streamlit.app/"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["knowledge-graph", "ontology", "owl", "owl-rl", "rdf", "rdf-graph", "rdflib", "semantic-web", "skos", "sparql"]
stars: 209
forks: 21
openIssues: 15
closedIssues: 131
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2025-11-25T22:45:40Z"
lastCommitAt: "2026-09-15T08:55:23Z"
lastReleaseAt: "2026-04-24T16:11:39Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 37
maintainers: ["ralfbecher", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/03b64ffe3069c593ed6d4e0ca406fb5cee0d0bb783ae5ecc0df9031107d7a613/ralforion/orionbelt-ontology-builder"
discussionCount: 2
---

</p>

<h1 align="center">OrionBelt Ontology Builder</h1>

  Build and explore OWL ontologies directly in your browser.
</p>

  ✔ Visual graph editor<br>
  ✔ OWL RL reasoning &amp; consistency checks<br>
  ✔ OWL + SKOS in one workbench<br>
  ✔ SKOS mappings, poly-hierarchy, 22 checks<br>
  ✔ Read-only SPARQL console<br>
  ✔ RDF/OWL import &amp; export<br>
  ✔ Pure Python: <a href="https://orionbelt.streamlit.app/">hosted app</a>, browser or desktop
</p>

**Try it now:** [orionbelt.streamlit.app](https://orionbelt.streamlit.app/)

</p>

---

## What is this?

OrionBelt lets you build, edit, and maintain OWL ontologies and SKOS vocabularies in your browser. No Java, no desktop install - just `pip install` and go.

It works with **OWL ontologies** (classes as `owl:Class`, properties as `owl:ObjectProperty` / `owl:DatatypeProperty`). Pure RDFS vocabularies like schema.org that use `rdfs:Class` and `rdf:Property` are not currently surfaced in the Classes / Properties panels.

It's not trying to be Protégé. It's meant for people who want something lighter: a workbench that's easy to pick up, hard to break things with, and good enough for real ontology work.

## What it's good at

**Not…
