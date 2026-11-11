---
repo: "invarcore/knowledge-fabric"
name: "knowledge-fabric"
description: "MCP-native evidence retrieval platform for AI systems."
readmeQualityOk: true
url: "https://github.com/invarcore/knowledge-fabric"
language: "Python"
languages: ["Python"]
languagePcts: [92]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-07-11T06:21:04Z"
lastCommitAt: "2026-11-11T19:47:16Z"
lastReleaseAt: "2026-11-08T10:53:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 47
maintainers: ["sagarv48"]
openGraphImageUrl: "https://opengraph.githubassets.com/2770bacb8fdde491c07474f88c116b5c4d2bb37ef33cde6ebbde4c9649740e08/invarcore/knowledge-fabric"
---

# Knowledge Fabric

  Native PostgreSQL + pgvector &bull; Hybrid RRF Fusion &bull; Cross-Encoder Reranking &bull; Dual-Mode Multi-Tenancy &bull; MCP-Native

---

## ⚡ 30-Second Quickstart

### 1. Instant Cloud Sandbox (Zero Local Setup)
Click to launch a fully configured browser VS Code workspace with PostgreSQL + `pgvector` and Tika running automatically:

### 2. Connect to Claude Desktop or Cursor (MCP)
Give Claude Desktop or Cursor private, local long-term memory over your enterprise codebase and documents. Add this to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "knowledge-fabric": {
      "command": "docker",
      "args": [
        "run", "-i", "--rm",
        "-e", "DATABASE_URL=postgresql://knowledge_fabric:knowledge_fabric@host.docker.internal:5432/knowledge_fabric",
        "-e", "KF_DEFAULT_TENANT=default",
        "ghcr.io/invarcore/knowledge-fabric:0.1.4",
        "knowledge-fabric-mcp"
      ]
    }
  }
}
```

### 3. Run Locally with Docker Compose (60 Seconds)
```bash
git clone https://github.com/invarcore/knowledge-fabric.git && cd knowledge-fabric
docker compose up -d

# Run the interactive hybrid RRF demonstration
python…
