---
repo: "deftai/directive"
name: "directive"
description: "Best practices and guidelines for AI agents in software development"
readmeQualityOk: true
url: "https://github.com/deftai/directive"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
stars: 28
forks: 11
openIssues: 525
closedIssues: 1068
watchers: 3
contributors: 23
recentReleases: 0
createdAt: "2025-12-31T20:55:45Z"
lastCommitAt: "2026-07-22T06:10:02Z"
lastReleaseAt: "2026-01-29T00:41:42Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 43
maintainers: ["MScottAdams", "dependabot[bot]", "dbcall2"]
openGraphImageUrl: "https://opengraph.githubassets.com/0d61bc6d69b780d52ba16c935043f2f1546a70b952e3a056ce163a25e96194be/deftai/directive"
discussionCount: 9
---

> ## ⚡ Cold-start bootstrap (read this first)
>
> **New clone, or `deft` / `directive` won't run?** Directive runs from an npm-installed engine — there is no committed shell shim, so *you* (agent or human) are the interpreter. Work the **global-first ladder** below top-down and stop at the first rung that yields a working `directive`. The version to install is always the one pinned in the project's committed `package.json`.
>
> 1. **Already installed?** Run `directive doctor` (or the `deft` alias). If it runs, you're bootstrapped — skip the rest and follow its `Next command:`.
> 2. **Local engine.** If `.deft/.cli/<platform>` holds an intact engine at or above the `package.json` pin, use it.
> 3. **Global install (canonical).** `npm i -g @deftai/directive` (Node ≥ 20), then re-run `directive doctor`. Using pnpm? `pnpm add -g @deftai/directive` (same package, same registry) — make sure `PNPM_HOME` is on your `PATH` (`pnpm setup` if not).
> 4. **Sandbox install.** If the global npm prefix isn't writable (sandboxed environment), install into the project instead: `npm install --prefix .deft/.cli/<platform> @deftai/directive@<pinned>`. (This internal `.deft/.cli/` layout is always…
