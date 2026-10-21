---
repo: "jentic/jentic-openapi-tools"
name: "jentic-openapi-tools"
description: "Python toolkit for parsing, validating and transforming OpenAPI documents. Pluggable Spectral and Redocly validation backends, plus a $ref bundler."
readmeQualityOk: true
url: "https://github.com/jentic/jentic-openapi-tools"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["openapi", "openapi3", "openapi31", "bundler", "parser", "validators", "datamodel", "python", "python3", "api-tooling"]
stars: 10
forks: 1
openIssues: 11
closedIssues: 13
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2025-09-11T08:28:42Z"
lastCommitAt: "2026-10-21T17:30:48Z"
lastReleaseAt: "2025-10-23T07:54:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 55
maintainers: ["dependabot[bot]", "sophie-jentic", "char0n"]
openGraphImageUrl: "https://opengraph.githubassets.com/1c79492cd78cf04f017659d539fb09cbbc90bbf2d7a7a1f68cd2d8ee8749de70/jentic/jentic-openapi-tools"
---

# Jentic OpenAPI Tools

A comprehensive Python toolkit for parsing, validating, and transforming OpenAPI documents with pluggable backend
architecture.

## Features

- **Pluggable Backend Architecture** - Support for multiple parsing, validation, and transformation strategies via entry
  points
- **Type Safety** - Full type hints with comprehensive type checking throughout
- **Multiple Input Formats** - Accept OpenAPI documents from file URIs, JSON/YAML strings, or Python dictionaries
- **Flexible Output Types** - Return results as dictionaries, strings, or custom types
- **Extensible Design** - Easy integration of third-party backends through standard Python entry points
- **Path Security** - Built-in defense against path traversal attacks
- **Production Ready** - Comprehensive test coverage and error handling

## Installation

The recommended way to install is via the meta-package, which includes all packages and backends (parser, validator, transformer, plus the Spectral, Redocly, and SpecLynx backends):

```bash
pip install jentic-openapi-tools
```

This also installs the `jentic-openapi-tools` CLI. If you only need specific functionality, you can install individual packages…
