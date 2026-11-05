---
repo: "acrion/zelph"
name: "zelph"
description: "A semantic network and reasoning engine in which rules, facts and numbers are nodes of one graph, so a statement is itself a node. Importing the statements of the 1.7 TB Wikidata dump builds 983 million nodes on a single machine, and reasoning over them has surfaced thousands of consistency violations in the Wikidata ontology."
readmeQualityOk: true
url: "https://github.com/acrion/zelph"
homepage: "https://zelph.org"
language: "C++"
languages: ["C++"]
languagePcts: [94]
topics: ["contradiction-detection", "cpp-library", "inference-engine", "knowledge-graph", "knowledge-representation", "logical-reasoning", "memory-optimization", "semantic-network", "semantic-web", "wikidata"]
stars: 17
forks: 7
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 3
recentReleases: 1
createdAt: "2025-03-04T22:47:30Z"
lastCommitAt: "2026-11-05T14:05:26Z"
lastReleaseAt: "2026-09-02T21:16:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 76
maintainers: ["zipproth"]
openGraphImageUrl: "https://opengraph.githubassets.com/670d41a59fcb313af0358a976b18dc7f237ef1ec76a3a76596f1b61c7af9ff38/acrion/zelph"
fundingLinks: ["GITHUB:https://github.com/acrion", "LIBERAPAY:https://liberapay.com/acrion", "BUY_ME_A_COFFEE:https://buymeacoffee.com/acrion", "PATREON:https://patreon.com/acriondev"]
discussionCount: 3
---

# zelph

**zelph** is an innovative semantic network system and reasoning engine written in C++ with an embedded Janet scripting layer. It treats logic, rules, and mathematics not as external code, but as **homoiconic structures within the graph itself**.

By blending the flexibility of semantic webs (like Wikidata) with logic programming concepts (deep unification, constructive rules, negation as failure), zelph effectively transforms a static knowledge base into an **executable graph**.

Four lines are the entire concept:

```
zelph> "is part of" ~ "transitive relation"
zelph> (R ~ "transitive relation", X R Y, Y R Z) => (X R Z)
zelph> Canada "is part of" "American continent"
zelph> "American continent" "is part of" "Earth's surface"
(Canada "is part of" "Earth's surface") ⇐ {(Canada "is part of" "American continent") ("is part of" ~ "transitive relation") ("American continent" "is part of" "Earth's surface")}
```

The rule never mentions `is part of`. It quantifies over the relation itself, and the first line – an ordinary fact of the kind any dataset can carry – is what makes it apply here. Wikidata carries exactly this one, so this single rule covers every relation that…
