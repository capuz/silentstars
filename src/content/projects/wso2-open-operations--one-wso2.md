---
repo: "wso2-open-operations/one-wso2"
name: "one-wso2"
description: "Contains source code for the One WSO2 web application"
readmeQualityOk: true
url: "https://github.com/wso2-open-operations/one-wso2"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["internal-apps"]
stars: 25
forks: 31
openIssues: 10
closedIssues: 28
watchers: 0
contributors: 29
recentReleases: 0
createdAt: "2026-07-03T06:24:53Z"
lastCommitAt: "2026-10-08T10:51:57Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 94
undervaluedScore: 52
maintainers: ["v15a1", "ajirthan", "Dumindu-Kanchana"]
openGraphImageUrl: "https://opengraph.githubassets.com/8569000ae34337b40317b8a8e2de47558507b609a03a23cfd10474bef5a13eaf/wso2-open-operations/one-wso2"
---

# One WSO2

**One** is WSO2's unified internal web experience: a single sign-in and a single app where an
employee's role loads the right *perspective* — Me, People Ops, Finance, Sales, Marketing Ops,
Security and Compliance, and more — instead of a separate app per team.

It is a React single-page app over independent backends, each joined by the same Asgardeo sign-in.

## Repository layout

| Path | What it is |
|---|---|
| [`webapp/`](https://github.com/wso2-open-operations/one-wso2/blob/HEAD/webapp/) | The One WSO2 web app — React 19, TypeScript, Vite, Oxygen UI. Start with [`webapp/README.md`](https://github.com/wso2-open-operations/one-wso2/blob/HEAD/webapp/README.md). |
| [`docs/One-Experience-Vision.md`](https://github.com/wso2-open-operations/one-wso2/blob/HEAD/docs/One-Experience-Vision.md) | The product vision: the Perspectives model, information architecture, the assistant, and phasing. |
| [`docs/conventions.md`](https://github.com/wso2-open-operations/one-wso2/blob/HEAD/docs/conventions.md) | Rules every feature follows: configuration, access gates, routing, data fetching, errors, time. |

## Quick start

```bash
cd webapp
npm install
cp public/config.js.example…
