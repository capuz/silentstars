---
repo: "neutralica/hson-live"
name: "hson-live"
description: "HSON (Hypertext Structured Object Notation): a notation that expresses both HTML and JSON  •  hson-live: a web authoring surface built on HSON"
readmeQualityOk: true
url: "https://github.com/neutralica/hson-live"
homepage: "https://terminalgothic.com/hson/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["hson", "html", "json", "typescript", "glue-format"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-07-14T19:27:17Z"
lastCommitAt: "2026-08-13T05:13:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 72
maintainers: ["neutralica"]
openGraphImageUrl: "https://opengraph.githubassets.com/d48bc4621dce697a375a3e48690d3a181dcf83363a929c81231682d78c041a2b/neutralica/hson-live"
---

// readme.md / 29JUL2026

# hson-live

### HSON — a unified notation for HTML and JSON

`hson-live` is a TypeScript system for representing data, documents, browser interfaces, and hosted application state through one canonical node graph.

HSON—Hypertext Structured Object Notation—is the underlying notation. It models the tree structure shared by JSON and markup without reducing either one to the other.

`hson-live` builds four connected systems on that model:

- **hson.transform** converts between HSON, JSON, HTML, XML, SVG, and canonical HSON nodes.
- **LiveMap** operates on HSON as local application state.
- **LiveTree** projects HSON into live browser documents.
- **LiveHost** maintains authoritative HSON state across clients and server runtimes.

The library is experimental. It is working architectural research, not a finished general-purpose web framework.

---

## HSON

JSON and HTML occupy different domains, but both describe hierarchical structure.

JSON expresses structure through objects, arrays, keys, and values:

```json
{
  "profile": {
    "name": "Ada",
    "active": true
  }
}
```

The equivalent data can be expressed in HSON:

```hson
<profile <
  name "Ada"…
