---
repo: "lestrrat-go/helium"
name: "helium"
description: "XML Toolkit for Go (XML/SAX2/XPath 3.1/XSLT 3.0/XInclude/XSD/RelaxNG/Schematron/C14N)"
url: "https://github.com/lestrrat-go/helium"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["relaxng", "schematron", "xinclude", "xml", "xpath", "xsd", "sax2", "xslt", "c14n"]
stars: 39
forks: 4
openIssues: 0
closedIssues: 5
watchers: 2
contributors: 4
recentReleases: 5
createdAt: "2015-12-17T14:15:44Z"
lastCommitAt: "2026-06-23T23:18:20Z"
lastReleaseAt: "2026-06-22T05:07:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded", "release_machine"]
healthScore: 100
undervaluedScore: 63
maintainers: ["lestrrat", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a92ad378dd6159336716d212bf5abbda614d53944ce17e6cd0ce0e044b992775/lestrrat-go/helium"
fundingLinks: ["GITHUB:https://github.com/lestrrat"]
---

# helium

Helium is a fast XML toolkit for Go covering XML parsing, SAX2-style streaming,
XPath 3.1, XSLT 3.0, XInclude, XSD, Relax NG, and Schematron.

The root `helium` package handles parsing, DOM building, and serialization, but
the module is broader than an XML parser. It also includes
[`xpath3`](xpath3/README.md) for XPath 3.1 querying and
[`xslt3`](xslt3/README.md) for XSLT 3.0 transformations, alongside
[`xpath1`](xpath1/README.md) for XPath 1.0 compatibility,
[`xsd`](xsd/README.md), [`relaxng`](relaxng/README.md), and
[`schematron`](schematron/README.md) for validation,
[`xinclude`](xinclude/README.md) for inclusion processing,
[`c14n`](c14n/README.md) for canonicalization,
[`html`](html/README.md) for HTML parsing, and
[`shim`](shim/README.md) for `encoding/xml`-compatible APIs.

It started as an effort to port libxml2-style capabilities to Go, but grew
broader native Go APIs along the way. The goal is to provide a full Go XML
stack for parsing, querying, transforming, and validating documents, with each
major feature area documented in its own package README.

# SYNOPSIS

```go
package examples_test

import (
  "context"
  "fmt"

  "github.com/lestrrat-go/helium"
)…
