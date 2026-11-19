---
repo: "metadatacenter/cedar-embeddable-editor"
name: "cedar-embeddable-editor"
description: "CEDAR Embeddable Editor WebComponent"
readmeQualityOk: true
url: "https://github.com/metadatacenter/cedar-embeddable-editor"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [85]
stars: 6
forks: 3
openIssues: 13
closedIssues: 46
watchers: 3
contributors: 7
recentReleases: 10
createdAt: "2020-07-15T00:58:28Z"
lastCommitAt: "2026-11-19T05:07:44Z"
lastReleaseAt: "2026-09-14T17:19:07Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "release_machine"]
healthScore: 95
undervaluedScore: 86
maintainers: ["martinjoconnor"]
openGraphImageUrl: "https://opengraph.githubassets.com/c2da09e3747747337987ab21a6307830783a2ce982c6898728d5d03530f46e7b/metadatacenter/cedar-embeddable-editor"
---

# CEDAR Embeddable Editor (CEE)

The CEDAR Embeddable Editor (CEE) puts a metadata entry form inside a web
application without anyone hand-writing that form. The host page supplies a
template, and the CEE renders the fields the template calls for, checks what the
user enters against the template's constraints, and returns the finished record
as structured metadata in JSON-LD or YAML.

A template describes the metadata to collect, not the interface that collects it.
It names the fields, their types and cardinalities, which of them repeat, and
which draw their values from a controlled vocabulary or from an identifier
authority such as ORCID or ROR. A platform can therefore adopt or revise a
metadata standard by editing a template rather than by rewriting a form. The
record that comes back preserves those bindings, since a controlled term carries
its IRI beside its label and an authority field carries its persistent
identifier.
