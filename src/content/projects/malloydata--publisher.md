---
repo: "malloydata/publisher"
name: "publisher"
description: "Publisher is the open-source analytics engine for Malloy. It lets you define data models once — and use them everywhere."
readmeQualityOk: true
url: "https://github.com/malloydata/publisher"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
topics: ["analytics", "business-intelligence", "data", "data-modeling", "data-transformation", "data-visualization", "database", "semantic-modeling", "transformation", "ai-governance"]
stars: 130
forks: 32
openIssues: 115
closedIssues: 81
watchers: 4
contributors: 27
recentReleases: 0
createdAt: "2024-09-16T18:29:09Z"
lastCommitAt: "2026-11-06T02:43:58Z"
lastReleaseAt: "2026-04-26T21:17:21Z"
status: "thriving"
tags: []
healthScore: 87
undervaluedScore: 41
maintainers: ["kylenesbit", "sagarswamirao", "housejester"]
openGraphImageUrl: "https://opengraph.githubassets.com/42d1408255fe782defa3c2a6c55acccefbff06d068516ab047b85ea47201a0ad/malloydata/publisher"
---

One data model, served over MCP and REST to AI agents, applications, and BI tools.</p>

It covers starting the server, connecting over MCP, the bundled skills, and the package format. Fetch the raw file, not a summary of this page.<br>
To learn the skills with nothing installed, read <code>https://unpkg.com/@malloy-publisher/skills@latest/skills/malloy-getting-started/SKILL.md</code>. With a shell, <code>npx -y @malloy-publisher/skills@latest install</code> copies them all into this project.</sub></p>

Modeling, a query engine, materialization, access control, and an API — the pieces you used to assemble
from five projects — ship as one server, built assuming the first builder or consumer is an
agent.

Write down what your data means, in [Malloy](https://malloydata.dev): the sources, the joins, the
measures, who may see what. The open-source Malloy [skills](https://github.com/malloydata/publisher/blob/HEAD/skills/) ship alongside, so an agent can do
the writing — build the model, then the reports and data apps on top of it.

Publisher serves that model to every surface — over MCP to Claude, Cursor, Codex, or an agent you
build; over REST to applications and BI tools. Agents…
