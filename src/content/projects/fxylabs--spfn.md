---
repo: "fxylabs/spfn"
name: "spfn"
description: "Take your AI-built app from prototype to production. A TypeScript full-stack framework for Next.js apps built with AI coding agents: every feature is one fixed vertical slice — entity, repository, route, router — so an agent cannot invent a different shape each time. Auth, storage, jobs and MCP ship as packages."
readmeQualityOk: true
url: "https://github.com/fxylabs/spfn"
homepage: "https://superfunction.xyz"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["backend", "drizzle", "framework", "hono", "rest-api", "typebox", "typescript", "fullstack", "nextjs", "postgresql"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 92
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-10-12T08:42:50Z"
lastCommitAt: "2026-11-17T14:41:44Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 83
maintainers: ["inflike-rayim", "tonite31"]
openGraphImageUrl: "https://opengraph.githubassets.com/b27411562258d8aa6c422a38499e2629d7b27d91795ea808951f86ddbd70f35b/fxylabs/spfn"
discussionCount: 1
---

# Superfunction (SPFN)

> **Take your AI-built app from prototype to production**

📖 **[superfunction.xyz](https://superfunction.xyz)** — docs, package guides, and a full-stack tutorial.

`spfn create --mode full` wires the baseline into one application — **core** (server,
database, routes, codegen, typed client), **auth** (sessions, social login,
authorization), **i18n** (translation catalogs), and **ops** (your own operations, run
from the terminal with `spfn ops`, instead of an admin dashboard). Everything else is
installed only when you reach for it.

## What is SPFN?

SPFN (Superfunction) is a TypeScript full-stack framework for products built with AI
coding agents. A Next.js app handles the frontend; an SPFN backend — built on Hono,
PostgreSQL and Drizzle ORM — handles the server side, either as its own long-lived
process or as serverless functions on the same origin. Requests are validated with
TypeBox and reach the browser through a typed client, so a route's input and output
types are the same object on both sides.

What makes it different from a stack you assemble yourself is that the shape is fixed.
Every feature is one vertical slice with the same four parts in the…
