---
repo: "velt-lang/velt"
name: "velt"
description: "Your TypeScript, compiled to a native executable. Rust-class speed, every core, no runtime."
readmeQualityOk: true
url: "https://github.com/velt-lang/velt"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [75, 22]
topics: ["async", "compiler", "llvm", "native", "performance", "programming-language", "rust", "typescript", "web-server"]
stars: 12
forks: 1
openIssues: 465
closedIssues: 505
watchers: 0
contributors: 2
recentReleases: 6
createdAt: "2026-10-01T08:41:41Z"
lastCommitAt: "2026-10-24T07:05:14Z"
lastReleaseAt: "2026-10-20T16:22:18Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "release_machine", "under_pressure"]
healthScore: 90
undervaluedScore: 50
maintainers: ["andtii"]
openGraphImageUrl: "https://opengraph.githubassets.com/485e8a787a15383a632b37e3e5a203e5ab5a11c27c61dda9ee36fadae575bf73/velt-lang/velt"
---

# Velt

**Your TypeScript, compiled to a native executable. Rust-class speed, every core, no runtime.**

[Install](#get-started) · [VS Code extension](https://marketplace.visualstudio.com/items?itemName=andtii.velt)
(with F5 debugging) · [Getting started](https://github.com/velt-lang/velt/blob/HEAD/docs/book/getting-started.md) · [Tour](https://github.com/velt-lang/velt/blob/HEAD/docs/book/tour.md) ·
[Docs](https://github.com/velt-lang/velt/blob/HEAD/docs/README.md)

Velt compiles TypeScript ahead of time to machine code through LLVM. It is not a JavaScript
engine and doesn't wrap one: there is no interpreter, no JIT warm-up, no garbage collector and no
single-threaded event loop. Your program is a native binary that uses every core of the machine.

```ts
// server.ts: run it with `velt run server.ts`
import { serve } from "velt:http";

interface User {
  id: string;
  name: string;
}

async function main() {
  const users = new Map<string, User>();
  users.set("42", { id: "42", name: "Ada" });

  await serve({ port: 8080 }, async (req: Request): Promise<Response> => {
    const id = new URL(req.url).searchParams.get("id") ?? "";
    const user = users.get(id);
    if (user ===…
