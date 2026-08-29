---
repo: "ralforion/orionbelt-ontology-builder"
name: "orionbelt-ontology-builder"
description: "Browser-based ontology workbench for OWL ontologies and SKOS vocabularies. Streamlit + rdflib, no Java, no Protégé. Bulk operations, OWL-RL reasoning, gist upper-ontology starters, merge-aware imports, interactive vis-network graph."
readmeQualityOk: true
url: "https://github.com/ralforion/orionbelt-ontology-builder"
homepage: "https://orionbelt.streamlit.app/"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["knowledge-graph", "ontology", "owl", "owl-rl", "rdf", "rdf-graph", "rdflib", "semantic-web", "skos", "sparql"]
stars: 136
forks: 14
openIssues: 11
closedIssues: 103
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2025-11-25T22:45:40Z"
lastCommitAt: "2026-08-29T17:27:56Z"
lastReleaseAt: "2026-04-24T16:11:39Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 39
maintainers: ["ralfbecher", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ebca169358bba17255bef293a189eb01a2f3890b6ee5f0ed5fe4a629b6d82db0/ralforion/orionbelt-ontology-builder"
discussionCount: 1
---

</p>

<h1 align="center">OrionBelt Ontology Builder</h1>

  Build and explore OWL ontologies directly in your browser.
</p>

  ✔ Visual graph editor<br>
  ✔ OWL RL reasoning &amp; consistency checks<br>
  ✔ OWL + SKOS in one workbench<br>
  ✔ RDF/OWL import &amp; export<br>
  ✔ Pure Python
</p>

**Try it now:** [orionbelt.streamlit.app](https://orionbelt.streamlit.app/)

</p>

---

## What is this?

OrionBelt lets you build, edit, and maintain OWL ontologies and SKOS vocabularies in your browser. No Java, no desktop install - just `pip install` and go.

It works with **OWL ontologies** (classes as `owl:Class`, properties as `owl:ObjectProperty` / `owl:DatatypeProperty`). Pure RDFS vocabularies like schema.org that use `rdfs:Class` and `rdf:Property` are not currently surfaced in the Classes / Properties panels.

It's not trying to be Protégé. It's meant for people who want something lighter: a workbench that's easy to pick up, hard to break things with, and good enough for real ontology work.

## What it's good at

**Not losing your work.** Every change creates an undo checkpoint. Deletes show you what will break before you confirm. Imports show a diff so you can review before…
