---
repo: "trungdong/prov"
name: "prov"
description: "A Python library for W3C Provenance Data Model (PROV)"
readmeQualityOk: true
url: "https://github.com/trungdong/prov"
homepage: "http://prov.readthedocs.io/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["python", "provenance", "provenance-model", "w3c", "prov", "prov-o", "prov-json", "prov-dm", "json-ld", "prov-jsonld"]
stars: 148
forks: 55
openIssues: 22
closedIssues: 253
watchers: 7
contributors: 17
recentReleases: 0
createdAt: "2012-11-07T10:20:33Z"
lastCommitAt: "2026-11-17T14:40:38Z"
lastReleaseAt: "2017-07-18T23:08:42Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 98
undervaluedScore: 48
maintainers: ["trungdong", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/19adcfb2ef819681a67d220599f6d82267e1ea0cffeadbcc721793bed03c85e6/trungdong/prov"
discussionCount: 1
---

# prov

A Python implementation of the [W3C PROV Data Model](https://www.w3.org/TR/prov-dm/), with
import and export in PROV-N, PROV-JSON, PROV-JSONLD, PROV-XML and PROV-O (RDF). It is
MIT-licensed, needs Python 3.11 or later, and is documented at <https://prov.readthedocs.io/>.

## Install

```bash
pip install prov
```

PROV-JSON, PROV-N and PROV-JSONLD need nothing else; PROV-XML, PROV-O and the graph tools
each need an extra, listed on the [installation page](https://prov.readthedocs.io/en/latest/installation.html).

## Quick start

```python
import prov.model as pm

doc = pm.ProvDocument()
doc.set_default_namespace("https://example.org/")
doc.entity("report")
doc.activity("analysis")
doc.wasGeneratedBy("report", "analysis")
print(doc.get_provn())
doc.serialize("report.json")
```

```provn
document
  default <https://example.org/>

  entity(report)
  activity(analysis, -, -)
  wasGeneratedBy(report, analysis, -)
endDocument
```

The [tutorial](https://prov.readthedocs.io/en/latest/tutorial/getting-started.html) continues from here.

## Features

- In-memory classes for every PROV-DM record type, readable from and printable as
  [PROV-N](https://www.w3.org/TR/prov-n/).
-…
