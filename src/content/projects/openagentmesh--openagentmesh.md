---
repo: "openagentmesh/openagentmesh"
name: "openagentmesh"
description: "The fabric for multi-agent systems, with the simplicity of a REST endpoint."
readmeQualityOk: true
url: "https://github.com/openagentmesh/openagentmesh"
homepage: "https://openagentmesh.github.io/openagentmesh/"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [77, 22]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-13T21:36:09Z"
lastCommitAt: "2026-08-01T06:15:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 51
maintainers: ["claude", "sushi2all"]
openGraphImageUrl: "https://opengraph.githubassets.com/93e6a2effb7b13c8080915e08e8ca1eae3f946536b94848b252065890c6bc390/openagentmesh/openagentmesh"
---

<br />
  </a>

  <h3 align="center">OpenAgentMesh</h3>

    The fabric for multi-agent systems, with the simplicity of a REST endpoint.
    <br />
  </p>

</div>

Agents register on a shared NATS bus, publish typed contracts, and discover and call each other at runtime — no hardcoded addresses, no cross-team imports. **MCP** connects LLMs to tools. **A2A** federates agents across organizations. **OAM is the fabric inside.**

```python
from openagentmesh import AgentMesh, AgentSpec

mesh = AgentMesh()

@mesh.agent(AgentSpec(name="echo", description="Echoes a message back."))
async def echo(req: str) -> str:
    return f"Echo: {req}"

mesh.run()
```

That is a complete agent: contract, schemas, and streaming capability are inferred from the function shape. Any process on the mesh can now find it (`mesh.catalog()`) and call it (`mesh.call("echo", "hello")`). And any MCP client can too:

```bash
claude mcp add mesh -- oam mcp serve
```

<!-- DEMO VIDEO PLACEHOLDER (Stage 2): embed the ~90s wildfire demo recording here
     once recorded. Suggested format:

## ✨ Highlights

- **Decoupled multi-agent system.** Run agents and tools however you want. Have them talk to each other as if…
