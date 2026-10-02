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
forks: 28
openIssues: 12
closedIssues: 24
watchers: 0
contributors: 27
recentReleases: 0
createdAt: "2026-07-03T06:24:53Z"
lastCommitAt: "2026-10-02T09:59:29Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 92
undervaluedScore: 51
maintainers: ["madubashinii", "Dumindu-Kanchana", "Siddiha"]
openGraphImageUrl: "https://opengraph.githubassets.com/210154cfa215a8007a996fe3975239e75781d3c5a605cff326c171d7b1fe56bc/wso2-open-operations/one-wso2"
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
