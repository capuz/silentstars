---
repo: "clercjs/clerc"
name: "clerc"
description: "🖖🏻 Clerc: The full-featured cli library."
readmeQualityOk: true
url: "https://github.com/clercjs/clerc"
homepage: "https://clerc.so1ve.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["cli", "arguments", "argv", "argument-parser", "argument-parsing", "cli-framework", "commandline", "command-line", "clerc"]
stars: 225
forks: 3
openIssues: 1
closedIssues: 23
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2022-09-04T07:43:32Z"
lastCommitAt: "2026-11-27T12:38:54Z"
lastReleaseAt: "2022-11-15T04:25:50Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 83
undervaluedScore: 40
maintainers: ["so1ve", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/674a7079c9cc484024b54828ed89e770f274fb5d8d9a032dc86334ee7c3e0b5d/clercjs/clerc"
discussionCount: 1
---

> **Note**
>
> ESM-only, targeting Node.js >= 24.

## Why Clerc

- **Signature-driven TypeScript types** - Write `"deploy <env> [region] -- [extra...]"` and get `ctx.args` inferred as `{ env: string; region: string | undefined; extra: string[] }` without `as const`. Typos in `args` or `flags` option keys fail at compile time.
- **Pure functional combinators & narrowed constraints** - Compose CLIs from plain values with `cli`, `command`, `middleware`, `group`, and `use`. Flag constraint combinators (`oneOf`, `exclusive`, `together`, `atLeastOne`) narrow `ctx.flags` as TypeScript discriminated unions.
- **Standard Schema v1 everywhere** - Pass Zod, Valibot, ArkType, or built-in `Types.Enum` / `Types.Integer` / `Types.Number` / `Types.String` / `Types.Regex` directly to `type`. One schema drives runtime validation, TypeScript output types, `--help` placeholders, shell completion candidates, and MCP JSON Schemas.
