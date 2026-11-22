---
repo: "velt-lang/velt"
name: "velt"
description: "Familiar as TypeScript. Fast as Rust."
readmeQualityOk: true
url: "https://github.com/velt-lang/velt"
homepage: "https://veltlang.com"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [59, 39]
topics: ["async", "compiler", "llvm", "native", "performance", "programming-language", "rust", "typescript", "web-server"]
stars: 15
forks: 2
openIssues: 1031
closedIssues: 983
watchers: 0
contributors: 2
recentReleases: 9
createdAt: "2026-10-01T08:41:41Z"
lastCommitAt: "2026-11-22T01:42:58Z"
lastReleaseAt: "2026-11-07T19:38:39Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "funded", "release_machine", "under_pressure"]
healthScore: 89
undervaluedScore: 52
maintainers: ["andtii"]
openGraphImageUrl: "https://opengraph.githubassets.com/ae52ce59eaf806fd8ae55b2b7db050fe4ab790289e5dabb66deaffc0ac38e0f3/velt-lang/velt"
fundingLinks: ["GITHUB:https://github.com/andtii"]
discussionCount: 0
---

# Velt

**Familiar as TypeScript. Fast as Rust.**

Velt compiles typed, modern TypeScript (classes, interfaces, generics, `async`/`await`) ahead of
time to one native executable. No interpreter, no garbage collector, every core in use.

**[veltlang.com](https://veltlang.com)** · [Getting started](https://veltlang.com/docs/book/getting-started/) ·
[Tour](https://veltlang.com/docs/book/tour/) · [Docs](https://veltlang.com/docs/) ·
[Benchmarks](https://veltlang.com/benchmarks/) · [VS Code extension](https://marketplace.visualstudio.com/items?itemName=andtii.velt)

```ts
// src/main.velt of a package made with `velt new hello --template api`: `velt run`
import { serve } from "http-server";

interface User {
  id: string;
  name: string;
}

const users = new Map<string, User>();
users.set("42", { id: "42", name: "Ada" });

await serve({ port: 8080 }, async (req: Request): Promise<Response> => {
  const id = new URL(req.url).searchParams.get("id") ?? "";
  const user = users.get(id);
  if (user === undefined) {
    return Response.json({ error: `no user ${id}` }, { status: 404 });
  }
  return Response.json(user);
});
```
