---
repo: "MohammadRaziei/pygixml"
name: "pygixml"
description: "PyGiXML (Python Giant XML Framework): A high-performance Cython library bridging pugixml and yxml. It offers a faster, constant-memory alternative to lxml and xmltodict, providing full XPath, objectify, and streaming capabilities for massive datasets."
readmeQualityOk: true
url: "https://github.com/MohammadRaziei/pygixml"
homepage: "https://mohammadraziei.github.io/pygixml/"
language: "Cython"
languages: ["Cython", "Python"]
languagePcts: [54, 40]
topics: ["cython", "pugixml", "xml", "xml-parser", "xpath", "python", "big-data", "json", "lxml", "streaming"]
stars: 41
forks: 3
openIssues: 0
closedIssues: 5
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2024-01-28T15:43:10Z"
lastCommitAt: "2026-11-02T11:36:10Z"
lastReleaseAt: "2026-04-09T08:45:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 57
maintainers: ["MohammadRaziei", "RobertWu-TomTom"]
openGraphImageUrl: "https://opengraph.githubassets.com/edfb2b90e56d41978d1122309f100d4396c266797720f026cdfc661b6ad77107/MohammadRaziei/pygixml"
---

# pygixml: Python Giant XML

**pygixml** (*Python Giant XML*) is a Cython framework built on two
specialized C++ engines: [pugixml](https://pugixml.org/) for its
in-memory DOM parser (XPath, `objectify`, `dictify`), and an inlined
[yxml](https://dev.yorhel.nl/yxml) push parser for true constant-memory
streaming. Between the two, pygixml covers everything
[lxml](https://lxml.de/) and [xmltodict](https://github.com/martinblech/xmltodict)
do: dotted `objectify` navigation, XPath 1.0, and an
xmltodict-compatible `dictify`, plus a streaming layer neither of them
has, which is what makes pygixml the package of choice for **big XML**
and big-data pipelines.

📚 **[View Full Documentation](https://mohammadraziei.github.io/pygixml/)**

---

## Why pygixml?

**Speed, memory, and size.** pygixml brings pugixml's battle-tested C++
parser directly to Python.

Every parsing/conversion layer pygixml ships (raw DOM, `dictify`,
`objectify`, `jsonify`) is measured against lxml, ElementTree,
xmltodict, and xmljson in a full, reproducible benchmark suite (see
[`benchmarks/`](https://github.com/MohammadRaziei/pygixml/blob/HEAD/benchmarks/)), not summarized here as a handful of
numbers that inevitably…
