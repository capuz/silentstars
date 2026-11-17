---
repo: "arunkumar413/task-force"
name: "task-force"
description: "A task manger app"
readmeQualityOk: true
url: "https://github.com/arunkumar413/task-force"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
topics: ["hacktoberfest", "hacktoberfest2024"]
stars: 9
forks: 4
openIssues: 6
closedIssues: 2
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-08-31T14:07:46Z"
lastCommitAt: "2026-11-17T14:45:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 58
maintainers: ["arunkumar413"]
openGraphImageUrl: "https://opengraph.githubassets.com/4489bdd129918aa46fdf9099ac24ca433a372628b1e36cc4abca4d273b469683/arunkumar413/task-force"
---

# Task Force

Task force is a professional grade task management application focussing the ease of use, simplicity and yet packed with features. We believe that a tool in itself shouldn't be burnden in doing our work in professional lives. Most task managemnt tools such as Jira just reflect the organizational complicance process in the UI. Task force, in contrast lays the emphasis on how the user can effectively manage, document, list down, view, orgaize, convey and configure the tasks uisng an elegant thoughfully crafted UI/UX.

Organizations, employees, departments, resource permissions, and sessions use MongoDB. Account and organization features were adapted from [webpack-react-express-template](https://github.com/arunkumar413/webpack-react-express-template).

## Screenshots

	

## Run locally

Requires Node.js 22 or newer and MongoDB (local or Atlas).

1. Copy `server/.env.example` to `server/.env`. Set `MONGODB_URI` and a random `SESSION_SECRET`.
2. Run `npm install` from the repository root.
3. Run `npm run dev`.

The client runs at http://localhost:3031 and proxies `/api` to the server at http://localhost:3000. The client defaults to a relative API URL; optionally configure…
