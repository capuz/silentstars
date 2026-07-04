---
repo: "tox-dev/turbohtml"
name: "turbohtml"
description: "A fast, fully typed HTML toolkit for Python. Escape, unescape, parse, select, and serialize HTML from one library, powered by a C-accelerated core."
url: "https://github.com/tox-dev/turbohtml"
homepage: "https://turbohtml.readthedocs.io"
language: "C"
languages: ["C", "Python"]
languagePcts: [66, 34]
stars: 6
forks: 2
openIssues: 1
closedIssues: 222
watchers: 0
contributors: 10
recentReleases: 4
createdAt: "2026-06-08T17:35:13Z"
lastCommitAt: "2026-07-04T19:20:53Z"
lastReleaseAt: "2026-06-16T18:53:15Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 100
undervaluedScore: 72
maintainers: ["gaborbernat", "dependabot[bot]", "pre-commit-ci[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3b9da83cfc2fa6b58599cac3d5093e15cfa325a889788c3a80a34d18c37edfe4/tox-dev/turbohtml"
fundingLinks: ["GITHUB:https://github.com/gaborbernat", "THANKS_DEV:https://thanks.dev/u/gh/gaborbernat"]
discussionCount: 0
---

# turbohtml

A fast, fully typed HTML toolkit for Python with a C-accelerated core: tokenize, parse, query, edit, serialize, and
extract HTML several times faster than the pure-Python alternatives, with free-threading support. The hot path is C; a
thin typed facade is the only Python you touch. It is not a drop-in for the libraries it replaces.

## Install

```console
$ pip install turbohtml
```

Wheels ship per interpreter for CPython 3.10–3.15 (including free-threading), so there is nothing to compile.

## Quickstart

Parse a document, query it with a CSS selector, and serialize a node back to HTML with the escaping you choose:

```python
import turbohtml
from turbohtml import Formatter, Html

doc = turbohtml.parse("<article><h1>Tea</h1><p class=note>café &amp; cake</p></article>")
print([h.text for h in doc.find_all("h1")])  # ['Tea']
print(doc.select_one("p.note").text)  # café & cake
print(doc.select_one("p").serialize(Html(formatter=Formatter.NAMED_ENTITIES)))
# <p class="note">caf&eacute; &amp; cake</p>
```

Each renderer takes one configuration object — `Html` for `serialize`/`encode`, `Markdown` for `to_markdown`, and
`PlainText` for `to_text`/`to_annotated_text` —…
