---
repo: "webjsdev/webjs"
name: "webjs"
description: "The web framework built for AI agents"
readmeQualityOk: true
url: "https://github.com/webjsdev/webjs"
homepage: "https://webjs.dev"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [82]
stars: 102
forks: 69
openIssues: 6
closedIssues: 395
watchers: 6
contributors: 4
recentReleases: 10
createdAt: "2026-04-15T19:31:48Z"
lastCommitAt: "2026-07-14T05:53:08Z"
lastReleaseAt: "2026-05-21T18:01:52Z"
status: "thriving"
tags: ["solo_builder", "release_machine", "fork_magnet"]
healthScore: 99
undervaluedScore: 45
maintainers: ["vivek7405"]
openGraphImageUrl: "https://opengraph.githubassets.com/ba9e797f627d4bc8210738520093439a8e117d40206786927e2ec2f1c9c9046a/webjsdev/webjs"
discussionCount: 1
---

# WebJs

**AI-first. Web components first.**

Full-stack web framework built on top of Web Components. `cache()` for
queries, HTTP Cache-Control for pages, Session class with SessionStorage,
NextAuth-style auth with providers, WebSocket broadcast, rate limiting.
Swap the in-memory cache store for Redis with a single `setStore()` call
(no config files, no build step in between). Web components first,
TypeScript with zero build step, real SSR with Declarative Shadow DOM.

## Why WebJs

- **AI-first.** Predictable file conventions, one function per file, an explicit `.server.ts` boundary, and an `AGENTS.md` contract. The whole design lets LLMs modify code without loading the entire codebase into context.
- **No build step you run.** `.ts` files served directly. Node 24+ or Bun is the runtime (run a Bun app with `bun --bun run dev` / `start`), and the dev server strips types via Node's built-in `module.stripTypeScriptTypes` (or `amaro` on Bun, byte-identical), position-preserving, no sourcemap, near-zero overhead. TypeScript must be erasable. Non-erasable constructs (enums, value-carrying namespaces, constructor parameter properties, legacy decorators with `emitDecoratorMetadata`)…
