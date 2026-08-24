---
repo: "oxy-hq/airlayer"
name: "airlayer"
description: "In-process semantic engine that compiles YAML schemas into dialect-specific SQL. Built to be embedded, scripted, or called by agents."
readmeQualityOk: true
url: "https://github.com/oxy-hq/airlayer"
homepage: "https://airlayer.sh"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
stars: 26
forks: 4
openIssues: 6
closedIssues: 2
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2026-03-21T01:01:26Z"
lastCommitAt: "2026-08-24T04:22:21Z"
lastReleaseAt: "2026-05-20T23:10:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 37
maintainers: ["haitrr", "rsyi", "hotay"]
openGraphImageUrl: "https://opengraph.githubassets.com/aa8a0f2a018e0ba3647eac6d183d1af009d2cd117e66a75044d98e57ad0c8c75/oxy-hq/airlayer"
discussionCount: 2
---

# airlayer

An in-process semantic engine that compiles `.view.yml` definitions into dialect-specific SQL — and optionally executes queries against real databases. Built in Rust as both a library and CLI tool.

## Quick start

```bash
bash <(curl -sSfL https://raw.githubusercontent.com/oxy-hq/airlayer/main/install_airlayer.sh)
```

Then initialize a project within an empty directory:

```bash
mkdir my-project && cd my-project
airlayer init
```

This connects to your database, discovers your schema, and generates `config.yml`, `.view.yml` files, and [Claude Code](https://docs.anthropic.com/en/docs/claude-code) sub-agents for querying and building your semantic layer.

## Example

Given an `orders.view.yml`:

```yaml
name: orders
table: public.orders
dialect: postgres

dimensions:
  - name: status
    type: string
    expr: status

measures:
  - name: total_revenue
    type: sum
    expr: amount
```

You can query it with the CLI as follows:

```bash
# add -x to execute against the database
airlayer query \
  --dimension orders.status \
  --measure orders.total_revenue \
  --filter orders.status:equals:active \
  --limit 10
```

Which will compile to the following SQL, returned to…
