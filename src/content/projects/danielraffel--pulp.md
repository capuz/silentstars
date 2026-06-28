---
repo: "danielraffel/pulp"
name: "pulp"
description: "Cross-platform audio plugin and application framework (in alpha). MIT licensed."
url: "https://github.com/danielraffel/pulp"
homepage: "https://www.generouscorp.com/pulp/"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [68, 20]
stars: 10
forks: 1
openIssues: 744
closedIssues: 1124
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-04-06T18:23:42Z"
lastCommitAt: "2026-06-28T02:01:09Z"
lastReleaseAt: "2026-04-18T03:53:16Z"
status: "thriving"
tags: ["needs_contributors", "release_machine"]
healthScore: 92
undervaluedScore: 57
maintainers: ["shipyard-local[bot]", "danielraffel"]
openGraphImageUrl: "https://opengraph.githubassets.com/73072f8e29c03c1757b2f4913bdef2ced5ed3ba73a8ef3569998ccd6a73502ab/danielraffel/pulp"
---

# Pulp

A cross-platform audio plugin and application framework. MIT licensed, C++20 core, Swift on Apple, JS-scripted GPU UIs.

## Install

```bash
curl -fsSL https://www.generouscorp.com/pulp/install.sh | sh
```

Then:

```bash
pulp create my-plugin && cd my-plugin && pulp run
```

Three commands from zero to a working native plugin for your platform.

The CLI works great with any AI coding agent (Claude, Codex, Cursor). If you use **Claude Code**, you can additionally install the [Pulp plugin](docs/agent-integrations.md#claude-code-with-the-optional-plugin) for slash-command shortcuts (`/build`, `/test`, `/ship`) and a native MCP server:

```bash
claude plugin marketplace add danielraffel/pulp && claude plugin install pulp
```

> **Install the CLI first.** The plugin's MCP server is `pulp-mcp`, which
> ships with the CLI tarball (above) into `~/.pulp/bin/`. The plugin itself
> contains no binaries — it locates `pulp-mcp` on `$PATH`. If you install
> the plugin before running `install.sh`, `/mcp` will report `pulp-mcp:
> cannot locate binary`. Run `pulp doctor` to confirm `pulp-mcp` is found
> and matches your CLI version.
>
> (Building from a source checkout instead? The repo's…
