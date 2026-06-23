---
repo: "zuke-build/zuke"
name: "zuke"
description: "A code-first, strongly-typed build automation system for Deno & TypeScript."
url: "https://github.com/zuke-build/zuke"
homepage: "https://zuke.build"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["build-automation", "build-system", "build-tool", "ci-cd", "code-first", "deno", "devops", "fluent-api", "jsr", "type-safe"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-06-02T11:10:02Z"
lastCommitAt: "2026-06-23T06:41:22Z"
lastReleaseAt: "2026-06-15T12:03:16Z"
status: "thriving"
tags: ["funded", "release_machine"]
healthScore: 89
undervaluedScore: 60
maintainers: ["totollygeek", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f48e29b18c9ed4fe31c209c77bf1bcee5366743cf0c6d07154f4e67d85669604/zuke-build/zuke"
fundingLinks: ["GITHUB:https://github.com/totollygeek", "BUY_ME_A_COFFEE:https://buymeacoffee.com/totollygeek", "PATREON:https://patreon.com/totollygeek", "CUSTOM:https://paypal.me/totollygeek"]
---

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github.com/zuke-build/zuke/raw/master/assets/logo-white.png" />
</picture>

> A code-first, strongly-typed build automation system for Deno & TypeScript.

</p>

</p>

> [!NOTE]
> **Built with AI.** Much of Zuke — code, tests, and docs — was written with AI
> assistance, then reviewed, type-checked, and tested in CI. Sharing how it was
> made so you know what you're getting.

Zuke lets you define builds as a **TypeScript class**. Each target is a class
field declared with a fluent API; targets reference each other by `this.x` (not
strings), forming a dependency graph that Zuke resolves and runs in topological
order. Inspired by [NUKE](https://nuke.build/) for .NET.

- **Runtime:** Deno
- **Packages:** `jsr:@zuke/core` plus 30+ typed tool wrappers and a generic
  `jsr:@zuke/cmd` fallback (raw shell via `jsr:@zuke/core/shell`) — see
  [Packages](#packages) for the full matrix with published versions
- **Build file:** `zuke.ts` in your project root
- **Zero runtime dependencies**

```ts
class MyBuild extends Build {
  compile = target()
    .dependsOn(this.clean, this.restore)
    .executes(async () => {…
