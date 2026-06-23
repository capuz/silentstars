---
repo: "SpaceParrots/vex"
name: "vex"
description: "CLI tool and MCP server for Vendure Admin API communication"
url: "https://github.com/SpaceParrots/vex"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 8
forks: 4
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 2
createdAt: "2026-04-07T20:37:18Z"
lastCommitAt: "2026-06-23T23:17:13Z"
lastReleaseAt: "2026-05-15T18:45:51Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 55
maintainers: ["kevmtt", "Ryrahul", "Copilot"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1204244147/62de1212-5359-4f5e-8435-181b9dc19aaf"
---

# Vex
![](https://img.shields.io/badge/Node.js-20%2B-brightgreen?style=flat-square) [![npm]](https://www.npmjs.com/package/@spaceparrots/vex)

[npm]: https://img.shields.io/npm/v/%40spaceparrots%2Fvex.svg?style=flat-square

Your **v**endure admin-api graphql query **ex**ecutor. CLI tool and MCP server for the Vendure Admin GraphQL API.

![vex-mascot-banner](https://github.com/user-attachments/assets/52237673-4c6b-4e12-966a-8ab942e95744)

Use `vex` from your terminal to manage products, customers, and orders — or connect it as an MCP server so Claude can do it for you.

## Features

- **Environment management** — add, switch, configure, and health-check multiple Vendure instances
- **Interactive query builder** — pick an operation, prompt for variables (with proper type coercion), choose fields, and run
- **Typed resource commands** — CRUD for customers, products, orders, channels, zones, and tax out of the box
- **Schema-aware** — fetch and cache your Vendure schema (works with custom plugins) and introspect it from the CLI or MCP
- **Reusable building blocks**
  - **Fragments** — named field selections you can reuse across operations
  - **Saved operations** — full…
