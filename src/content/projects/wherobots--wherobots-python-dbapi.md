---
repo: "wherobots/wherobots-python-dbapi"
name: "wherobots-python-dbapi"
description: "Python DB-API implementation for Wherobots DB"
readmeQualityOk: true
url: "https://github.com/wherobots/wherobots-python-dbapi"
homepage: "https://wherobots.com"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["sedonadb", "wherobots", "python-dbapi"]
stars: 5
forks: 5
openIssues: 2
closedIssues: 3
watchers: 6
contributors: 17
recentReleases: 0
createdAt: "2024-03-07T18:53:19Z"
lastCommitAt: "2026-11-09T00:53:39Z"
lastReleaseAt: "2026-01-26T17:51:01Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 86
undervaluedScore: 85
maintainers: ["kcheng486", "sfishel18", "ClayMav"]
openGraphImageUrl: "https://opengraph.githubassets.com/244951728dfdae5f1b239d94225ef8b6bd4ea4ca1b30bf91f2edebf57fa1944c/wherobots/wherobots-python-dbapi"
---

# wherobots-python-dbapi

Python DB-API implementation for Wherobots DB. This package implements a
PEP-0249 compatible driver to programmatically connect to a Wherobots DB
runtime and execute Spatial SQL queries.

## PEP 249 DB-API 2.0 Compliance

This driver implements the [PEP 249](https://peps.python.org/pep-0249/)
Python Database API Specification v2.0. Its module-level globals are
defined in `wherobots.db.driver` and are not re-exported from `wherobots.db`:

| Global | Value | Meaning |
|---|---|---|
| `apilevel` | `"2.0"` | Supports DB-API 2.0 |
| `threadsafety` | `1` | Threads may share the module, but not connections |
| `paramstyle` | `"pyformat"` | Uses `%(name)s` named parameter markers |

### Parameterized queries

Use `%(name)s` markers in your SQL and pass a dictionary of parameter
values. The driver automatically quotes and escapes values based on
their Python type (strings are single-quoted, `None` becomes `NULL`,
booleans become `TRUE`/`FALSE`, and numeric types are passed through
unquoted):

```python
curr.execute(
    "SELECT * FROM places WHERE id = %(id)s AND category = %(cat)s",
    parameters={"id": 42, "cat": "restaurant"},
)
# Produces: ... WHERE id = 42…
