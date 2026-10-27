---
repo: "paulbutcher/lean-todomvc-max"
name: "lean-todomvc-max"
description: "Complete production webapp in Lean"
readmeQualityOk: true
url: "https://github.com/paulbutcher/lean-todomvc-max"
language: "Lean"
languages: ["Lean"]
languagePcts: [92]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-17T07:10:49Z"
lastCommitAt: "2026-10-27T09:17:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 48
maintainers: ["paulbutcher"]
openGraphImageUrl: "https://opengraph.githubassets.com/80d4196605daf4da6436c3d254f6b914e18506f229a8b8f2eb9a7ab033913cd4/paulbutcher/lean-todomvc-max"
---

# TodoMVC Max

[TodoMVC](https://todomvc.com) in Lean 4, plus everything a production application needs around it: passwordless sign-in, SQL migrations, telemetry, an LLM assistant panel, an MCP endpoint your own agent can use, and IaC deployment to AWS Lambda.

The UI is HTMX plus a very little JavaScript.

## Why Lean?

Lean is a strongly typed functional language with a built-in theorem prover. This allows us to make some very strong guarantees, including:

- **Totality.** Nothing in this application is `partial` and nothing in it can panic, and the same holds of (almost[^note]) every library in the stack below. A loop that reads until its input runs out carries a bound and a proof that it decreases. `warningAsError` is on, so no unfinished proofs.
- **Security properties are theorems.** A page carries its anti-forgery attribute exactly when it has a token to put in it (`csrfAttrs_nonempty_iff`): never announcing one it lacks, never dropping one it has. A sign-in refusal is proved to speak only about the request and never about who owns the address (`onlySpeaksAboutTheRequest`), stated over the whole outcome type.
- **Markup is typed and formally verified.** A `<div>` inside a…
