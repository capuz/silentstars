---
repo: "leostera/clankwerk"
name: "clankwerk"
description: "typed agentic workflow engine"
readmeQualityOk: true
url: "https://github.com/leostera/clankwerk"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-22T11:22:54Z"
lastCommitAt: "2026-10-08T10:44:31Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 89
undervaluedScore: 53
maintainers: ["leostera"]
openGraphImageUrl: "https://opengraph.githubassets.com/d2609f9d0ed15ecd34b6fa5853c9d9064a877aef1d0c9fe0d555435479dd380b/leostera/clankwerk"
fundingLinks: ["GITHUB:https://github.com/leostera"]
---

# Clankwerk

Typed, code-first agents and durable workflow graphs on Cloudflare. Define Think-backed agents and workflows in TypeScript, then run them in **your own Cloudflare account**.

```text
request → workflow graph → per-run Durable Object → run and audit index
agent definition → independently stateful agent instances
```

Clankwerk runs its own workflow graphs on Workers and Durable Objects; it does not use Cloudflare Workflows. The dashboard is protected by Cloudflare Access, while a separate hostname is reserved for public triggers.

## Define a workflow

Workflow code lives in your project. This task accepts a name and returns a greeting; Clankwerk gives each run its own Durable Object for run state:

```ts
import { Clankwerk, Id, Task } from "@leostera/clankwerk"
import { Effect } from "effect"

const greet = Task.fn({
  id: Id.node("greet"),
  run: (name: string) => Effect.succeed(`Hello, ${name}!`),
})

export default Clankwerk.defineWorkflow({ id: "hello", graph: greet })
```

Agents are defined separately from their instances. A Think-backed `researcher` definition can serve multiple independently stateful named instances:

```ts
import { Think } from…
