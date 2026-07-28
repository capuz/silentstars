---
repo: "kibertoad/cat-factory"
name: "cat-factory"
description: "Software development agent management platform"
readmeQualityOk: true
url: "https://github.com/kibertoad/cat-factory"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-06-12T14:12:02Z"
lastCommitAt: "2026-07-28T15:03:46Z"
lastReleaseAt: "2026-06-24T17:20:55Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 59
maintainers: ["kibertoad"]
openGraphImageUrl: "https://opengraph.githubassets.com/047bc5effffda7a6488f3ccd40151e782a5acacd846d5f1cd19d141add6ccf39/kibertoad/cat-factory"
---

# cat-factory

Website: [www.catfactory.ai](http://www.catfactory.ai)

**A self-hosted platform for designing software on a visual board and having LLM
agents build it — turning architecture blocks into real, reviewed pull
requests, with the whole pipeline observable in real time.**

You sketch a system as a board of **services → modules → tasks**, attach
requirements (PRDs, RFCs, tracker issues), and run **agent pipelines** against
each block. Coding agents clone the linked repo, implement the work, open a PR,
and push live progress back to the board. Reviewer, tester and acceptance agents
sharpen the result; humans stay in the loop through decision prompts, PR review
and a hard spend cap.

## Table of contents

- [What it is](#what-it-is)
- [What it supports](#what-it-supports)
- [How it works](#how-it-works)
- [Repository layout](#repository-layout)
- [Feature guide](#feature-guide)
- [Documentation index](#documentation-index)
- [Deployment](#deployment)

## What it is

cat-factory is a **software-development agent management platform**. It is
**self-hosted** and runs end-to-end on Cloudflare: a Nuxt single-page app talks
to a Cloudflare Worker (Hono + D1), and the heavy…
