---
repo: "marketinglior-pixel/agentbill"
name: "agentbill"
description: "See what each AI agent, client and job costs, in dollars at list price, and give any job a spend ceiling: preflight answers approved: false past it, and your code decides. An SDK and an HTTP API, not a proxy."
readmeQualityOk: true
url: "https://github.com/marketinglior-pixel/agentbill"
homepage: "https://agentbill.dev"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [65, 25]
topics: ["python", "ai-agents", "langchain", "preflight", "mcp-server", "agent-billing", "llm-cost-control", "spend-ceiling", "fastify", "openai"]
stars: 7
forks: 2
openIssues: 3
closedIssues: 2
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2026-05-02T16:30:41Z"
lastCommitAt: "2026-09-27T09:27:22Z"
lastReleaseAt: "2026-05-04T16:06:36Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 88
undervaluedScore: 50
maintainers: ["marketinglior-pixel"]
openGraphImageUrl: "https://opengraph.githubassets.com/a60af130d2a901bd624a2315009da798a0e92bf3bdc10e78403d49cf19eefafb/marketinglior-pixel/agentbill"
discussionCount: 0
---

# AgentBill

One spend ceiling for one agent job, consulted before each call. Bound to a `task_ref` you pass, not to a calendar month, a project or an API key.

---

A long agent run is many calls, often across several processes and more than one provider. A cap bound to a project, an organization or a calendar month is measured over that period. A per-call limit only ever sees one call. Neither of them is bound to the job.

AgentBill gives the job its own ceiling. Every call that passes the same `task_ref` draws against that one number, wherever it runs. Before the expensive call your code asks; AgentBill reserves and answers; your code decides what happens next.

It is an SDK and an HTTP API, not a proxy. Nothing sits in your request path.

</div>

That is the whole contract. `preflight()` returns a decision or raises for you to catch, and your `except` block chooses whether to degrade, retry smaller, or return what you already have.

### Not the same as

Other limits are real and they fire. They are bound to something else, and they reach somewhere else.

| Mechanism | Bound to | Reaches |
|---|---|---|
| Wall-clock timeout (a Lambda, a job runner) | One invocation's runtime…
