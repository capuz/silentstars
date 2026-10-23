---
repo: "Steinbeck-Lab/Orthonym"
name: "Orthonym"
description: "Deterministic structure-to-IUPAC-name generator. Names are checked by an OPSIN round trip, the engine declines rather than guess, and --provenance says how each name was checked."
readmeQualityOk: true
url: "https://github.com/Steinbeck-Lab/Orthonym"
homepage: "https://orthonym.decimer.ai"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["chemical-names", "cheminformatics", "chemistry", "iupac", "iupac-nomenclature", "nomenclature", "opsin", "preferred-iupac-name", "python", "rdkit"]
stars: 10
forks: 3
openIssues: 1
closedIssues: 7
watchers: 1
contributors: 5
recentReleases: 9
createdAt: "2026-09-29T16:13:20Z"
lastCommitAt: "2026-10-23T09:33:04Z"
lastReleaseAt: "2026-10-15T15:29:13Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 63
maintainers: ["Kohulan"]
openGraphImageUrl: "https://opengraph.githubassets.com/733d6bc7b200c522a95d07248c28f759f9e7bf6312f8e1942ccffb3a5319633a/Steinbeck-Lab/Orthonym"
discussionCount: 1
---

**A SMILES string goes in. A verified IUPAC name comes out, or a clear "no". Never a guess.**

## How names are checked

**Deterministic.** Orthonym builds its names from the nomenclature rules of the IUPAC 2013
recommendations, the "Blue Book". Where those rules do not yet reach a molecule, a wider tier
(`--emit-tier`) can give a general systematic name, a retained name from a table or a
natural-product name instead, labelled as not the preferred name. The default tier declines these
names; [Output tiers](#output-tiers) lists its exceptions. There is no neural network and no
sampling: the same input always gives the same output.

**Checked.** A name is handed to [OPSIN](https://github.com/dan2097/opsin), which never saw your
structure, and parsed back. The structure OPSIN reads must match yours in constitution, charge and
stereo, so a name that leaves out or adds an atom cannot pass. The default tier makes a few
exceptions for names OPSIN cannot read in full: names from exact-match lists (metal-complex and
natural-product parent names), a few name forms that OPSIN's grammar lacks or misreads (a phane
name ships only when the engine's own phane builder turns the name back into…
