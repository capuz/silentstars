---
repo: "gridctl/gridctl"
name: "gridctl"
description: "🔒 MCP gateway with a built-in skill library."
readmeQualityOk: true
url: "https://github.com/gridctl/gridctl"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [71, 27]
topics: ["ai-agents", "automation", "go", "golang", "mcp", "mcp-server", "nodejs", "orchestration", "react", "agents"]
stars: 45
forks: 9
openIssues: 14
closedIssues: 342
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-01-07T02:11:24Z"
lastCommitAt: "2026-10-21T20:01:00Z"
lastReleaseAt: "2026-02-23T14:58:59Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 48
maintainers: ["wcollins", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/856a52acf91f0764c247172e48e0368794b01c94bfc831c130dc3caf22a0b204/gridctl/gridctl"
---

MCP servers, skills, agent definitions, and rules, declared in files you commit.<br>
  Gridctl runs MCP servers behind one gateway; separate projection writes skills, agents, and rules to supported clients.

---

Gridctl defines a stack of [MCP](https://modelcontextprotocol.io/) servers in YAML, starts them, and exposes them through one gateway. Alongside the gateway it keeps a registry of [Agent Skills](https://agentskills.io) and agent definitions, and projects those, your [agents.md](https://agents.md) global-context rules, and the gateway wiring into the clients you select, with lockfile-tracked ownership. A pack imports that set from a git repository.

`gridctl link` writes the gateway endpoint into a client config. It does not install skills, agents, or rules. Those are a separate projection, and each resource reaches only the clients that can read it ([skill channels](https://github.com/gridctl/gridctl/blob/HEAD/docs/skills.md#how-skills-reach-the-model), [context coverage](https://github.com/gridctl/gridctl/blob/HEAD/docs/global-context.md#write-strategies)). Commit the stack file, the pack manifest, and the instruction files. Do not commit variable values, pins, or…
