---
repo: "spicets/spice-ts"
name: "spice-ts"
description: "TypeScript-native SPICE circuit simulator"
readmeQualityOk: true
url: "https://github.com/spicets/spice-ts"
homepage: "https://spicets.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
stars: 28
forks: 3
openIssues: 72
closedIssues: 806
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-04-08T19:53:19Z"
lastCommitAt: "2026-10-25T22:11:12Z"
lastReleaseAt: "2026-10-17T11:53:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 98
undervaluedScore: 49
maintainers: ["mfiumara"]
openGraphImageUrl: "https://opengraph.githubassets.com/5c4b11b6074ef743aad0648c452de27a8b0f33b791b4cf614f098a7e2a3835ff/spicets/spice-ts"
---

# spice-ts

**The SPICE simulator built for agents.**

TypeScript-native circuit simulation with an MCP server, JSON in and out, and structured errors a model can act on.
It runs in Node, in the browser or inside an agent sandbox, with no ngspice binary to ship.
Accuracy is checked against ngspice on a public, reproducible benchmark, and every outcome is published, failures included.

**[Live showcase](https://spicets.github.io/spice-ts/)** · **[Parity report](https://github.com/spicets/spice-ts/blob/HEAD/benchmarks/AGGREGATE_PARITY.md)** · **[MCP server](https://github.com/spicets/spice-ts/blob/HEAD/packages/mcp/README.md)**

---

### Give your agent a simulator

`@spice-ts/mcp` is not published to npm yet; run it from a clone of this repo.

```sh
pnpm install && pnpm --filter @spice-ts/mcp... build
```

```jsonc
{
  "mcpServers": {
    "spice": {
      "command": "node",
      "args": ["/absolute/path/to/spice-ts/packages/mcp/dist/stdio.js"]
    }
  }
}
```

The agent gets `spice_validate`, `spice_simulate`, `spice_measure` and a streaming job API.
Bad decks come back as typed diagnostics (`FLOATING_NODE`, `NO_DC_PATH_TO_GROUND`, `VOLTAGE_SOURCE_LOOP`)
with node and element ids,…
