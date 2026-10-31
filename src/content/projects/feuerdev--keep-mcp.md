---
repo: "feuerdev/keep-mcp"
name: "keep-mcp"
description: "MCP server for Google Keep"
readmeQualityOk: true
url: "https://github.com/feuerdev/keep-mcp"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 110
forks: 33
openIssues: 0
closedIssues: 3
watchers: 2
contributors: 5
recentReleases: 7
createdAt: "2025-03-31T23:22:45Z"
lastCommitAt: "2026-10-31T19:02:51Z"
lastReleaseAt: "2026-10-31T19:01:49Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 83
undervaluedScore: 39
maintainers: ["feuerdev", "justerlex", "jwarrenbc"]
openGraphImageUrl: "https://opengraph.githubassets.com/3b0e2dad80bbbfa515e9bf5928ddedf9f5a6ec630595ad4fa589db0656c9be35/feuerdev/keep-mcp"
---

# keep-mcp

MCP server for Google Keep

See [CONTRIBUTING.md](https://github.com/feuerdev/keep-mcp/blob/HEAD/CONTRIBUTING.md) for contribution guidelines and required visual evidence.

## How to use

1. Add the MCP server to your MCP servers:

```json
  "mcpServers": {
    "keep-mcp-pipx": {
      "command": "pipx",
      "args": [
        "run",
        "keep-mcp"
      ],
      "env": {
        "GOOGLE_EMAIL": "Your Google Email",
        "GOOGLE_MASTER_TOKEN": "Your Google Master Token - see README.md"
      }
    }
  }
```

Or with `uvx`:

```json
  "mcpServers": {
    "keep-mcp": {
      "command": "uvx",
      "args": [
        "keep-mcp"
      ],
      "env": {
        "GOOGLE_EMAIL": "Your Google Email",
        "GOOGLE_MASTER_TOKEN": "Your Google Master Token - see README.md"
      }
    }
  }
```

2. Add your credentials:

* `GOOGLE_EMAIL`: Your Google account email address
* `GOOGLE_MASTER_TOKEN`: Your Google account master token

### Obtain a Google master token

`keep-mcp` uses [gkeepapi](https://gkeepapi.readthedocs.io/), which connects to Google Keep through an unofficial private API. A Google master token has full access to your account. Treat it like a password…
