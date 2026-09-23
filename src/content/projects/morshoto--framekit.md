---
repo: "morshoto/framekit"
name: "framekit"
description: "MCP for agentic video editing"
readmeQualityOk: true
url: "https://github.com/morshoto/framekit"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
stars: 10
forks: 2
openIssues: 12
closedIssues: 133
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-15T08:56:28Z"
lastCommitAt: "2026-09-23T08:46:29Z"
lastReleaseAt: "2026-09-14T00:33:08Z"
status: "thriving"
tags: ["solo_builder", "funded", "release_machine", "under_pressure"]
healthScore: 98
undervaluedScore: 59
maintainers: ["morshoto", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f1a1bdcb59123add8d760a565b84dd86ee14ea4d0084bed9271111ef3fbc8cc4/morshoto/framekit"
fundingLinks: ["GITHUB:https://github.com/morshoto"]
---

</div>

</p>

# Framekit

Agentic video editing runtime and MCP server for Final Cut Pro.

## Get started

For repository development, you need:

- Node.js 20 or newer;
- pnpm 12.3.4;
- Xcode 16.4 and the macOS 15.5 SDK for native Final Cut work.

The Xcode requirement is only needed for the native Workflow Extension. For the
pinned Node and shell toolchain, enter the optional Nix shell first:

```sh
nix develop ./nix
```

From the repository root, install dependencies and run the deterministic checks:

```sh
pnpm install --frozen-lockfile
pnpm run hooks:install
pnpm run build
pnpm run test
pnpm run check:boundaries
```

## Try the local MCP server

The local MCP server uses a deterministic in-memory fixture and communicates over
stdio. Start it from the repository root and connect it to an MCP client:

```sh
pnpm run mcp
```

See the [MCP tools](https://github.com/morshoto/framekit/blob/HEAD/docs/mcp/tools.md) and [MCP documentation](https://github.com/morshoto/framekit/blob/HEAD/docs/mcp/README.md)
for the tool inventory and live-backend setup.

## Connect Codex to Final Cut

The Codex plugin provides the MCP integration; the Final Cut Workflow Extension
is installed separately.…
