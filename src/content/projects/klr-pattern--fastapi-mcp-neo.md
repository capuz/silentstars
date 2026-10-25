---
repo: "KLR-Pattern/fastapi-mcp-neo"
name: "fastapi-mcp-neo"
description: "Transform your FastAPI routes to agent-friendly, context-efficient MCP"
readmeQualityOk: true
url: "https://github.com/KLR-Pattern/fastapi-mcp-neo"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai", "authorization", "fastapi", "llm", "mcp", "mcp-server", "graphql"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-03T02:47:33Z"
lastCommitAt: "2026-10-25T02:47:37Z"
lastReleaseAt: "2026-10-10T08:51:34Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 62
maintainers: ["allmonday"]
openGraphImageUrl: "https://opengraph.githubassets.com/4d796335932c14743bd1622e61b8968224d88dc372fccadfacce3e03129cc76d/KLR-Pattern/fastapi-mcp-neo"
---

# fastapi-mcp-neo

The **agent access layer for FastAPI** — agents call one `graphql_query`
tool with full composition and per-caller credentials, instead of one tool
per endpoint. The GraphQL layer + MCP server are derived from your existing
app: zero decorators, zero model changes.

```python
from fastapi import FastAPI
from fastapi_mcp_neo import FastAPIMCP

app = FastAPI()

# ... your existing routes ...

mcp = FastAPIMCP(
    app,
    name="my-app",
    mode="graphql",  # or "progressive" / "tools" — the three shapes below
)
mcp.run()  # HTTP MCP server: get_schema + graphql_query + graphql_mutation
```

**Three modes, one engine** — pick how agents talk to your app
([full comparison](#modes)):

| mode | what the agent does |
|---|---|
| `graphql` (default) | reads the schema once, then one query composes any routes — projection, aliases, one round trip |
| `progressive` | the same queries, discovery served in fragments grouped by your route **tags** (tags = "domains" in the schema) — for large apps (constant ~1.5k-token catalog at any size) |
| `tools` | one typed tool per route — plain arguments, no GraphQL to write; clients gate each tool individually |

**Contents** —…
