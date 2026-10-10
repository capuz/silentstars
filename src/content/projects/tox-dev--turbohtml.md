---
repo: "tox-dev/turbohtml"
name: "turbohtml"
description: "A fast, fully typed HTML toolkit for Python. Escape, unescape, parse, select, and serialize HTML from one library, powered by a C-accelerated core."
readmeQualityOk: true
url: "https://github.com/tox-dev/turbohtml"
homepage: "https://turbohtml.readthedocs.io"
language: "C"
languages: ["C", "Python"]
languagePcts: [55, 43]
topics: ["c-extension", "css-selectors", "encoding-detection", "free-threading", "html", "html-parser", "html5", "markdown", "minifier", "python"]
stars: 20
forks: 3
openIssues: 0
closedIssues: 383
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-06-08T17:35:13Z"
lastCommitAt: "2026-10-10T10:05:07Z"
lastReleaseAt: "2026-07-10T18:28:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 100
undervaluedScore: 49
maintainers: ["gaborbernat", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bafdc554d1ce49d1132ec64e28002f5690df4c50755b174587d0406a4a32f419/tox-dev/turbohtml"
fundingLinks: ["GITHUB:https://github.com/gaborbernat", "THANKS_DEV:https://thanks.dev/u/gh/gaborbernat"]
discussionCount: 1
---

# turbohtml

A fast, fully typed HTML toolkit for Python with a C-accelerated core: tokenize, parse, query, edit, serialize, and
extract HTML several times faster than the pure-Python alternatives, with free-threading support. The hot path is C; a
thin typed facade is the only Python you touch. It is not a drop-in for the libraries it replaces.

## Install

```console
$ pip install turbohtml
```

Wheels ship per interpreter for CPython 3.11–3.15 (including free-threading), so there is nothing to compile.

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
