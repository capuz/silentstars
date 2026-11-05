---
repo: "velt-lang/velt"
name: "velt"
description: "Your TypeScript, compiled to a native executable. Rust-class speed, every core, no runtime."
readmeQualityOk: true
url: "https://github.com/velt-lang/velt"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [67, 29]
topics: ["async", "compiler", "llvm", "native", "performance", "programming-language", "rust", "typescript", "web-server"]
stars: 15
forks: 2
openIssues: 805
closedIssues: 684
watchers: 0
contributors: 2
recentReleases: 8
createdAt: "2026-10-01T08:41:41Z"
lastCommitAt: "2026-11-05T10:33:02Z"
lastReleaseAt: "2026-11-01T22:17:15Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "release_machine", "under_pressure"]
healthScore: 89
undervaluedScore: 48
maintainers: ["andtii"]
openGraphImageUrl: "https://opengraph.githubassets.com/7218dbd4546a09b188bd460642f8e8d56ad5a9916ab45c120f5012e9ccb48c07/velt-lang/velt"
---

# Velt

**Your TypeScript, compiled to a native executable. Rust-class speed, every core, no runtime.**

[Install](#get-started) · [VS Code extension](https://marketplace.visualstudio.com/items?itemName=andtii.velt)
(with F5 debugging) · [Getting started](https://veltlang.com/docs/book/getting-started/) · [Tour](https://veltlang.com/docs/book/tour/) ·
[Docs](https://github.com/velt-lang/velt/blob/HEAD/docs/README.md)

Velt compiles TypeScript ahead of time to machine code through LLVM. It is not a JavaScript
engine and doesn't wrap one: there is no interpreter, no JIT warm-up, no garbage collector and no
single-threaded event loop. Your program is a native binary that uses every core of the machine.

```ts
// src/main.vlt of a package made with `velt new hello --template api`
// (its package.vlt depends on the http-server package): `velt run`
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
  if…
