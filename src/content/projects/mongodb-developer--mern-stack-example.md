---
repo: "mongodb-developer/mern-stack-example"
name: "mern-stack-example"
description: "Full-stack CRUD app with MongoDB Atlas, Express, React, and Node.js (MERN). Covers REST APIs, MongoDB driver and React Router. "
readmeQualityOk: true
url: "https://github.com/mongodb-developer/mern-stack-example"
homepage: "https://www.mongodb.com/resources/languages/mern-stack-tutorial"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [87]
topics: ["express", "expressjs", "javascript", "mongodb", "nodejs", "react"]
stars: 405
forks: 345
openIssues: 0
closedIssues: 15
watchers: 12
contributors: 12
recentReleases: 0
createdAt: "2021-05-03T13:21:33Z"
lastCommitAt: "2026-09-12T08:04:36Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 85
undervaluedScore: 31
maintainers: ["sis0k0"]
openGraphImageUrl: "https://opengraph.githubassets.com/ee95c4f3817ddb546b4cecdef49829abcb6f47983f171aee3d6438a4162c537b/mongodb-developer/mern-stack-example"
---

# MERN Stack Example: Employee Records App (MongoDB Atlas, Express, React, Node.js)

A full-stack CRUD application built with MongoDB, Express, React, and Node.js (MERN).

Companion code for the [MERN Stack Tutorial](https://www.mongodb.com/languages/mern-stack-tutorial?utm_campaign=devrel&utm_medium=referral&utm_source=github&utm_content=mern.stack.example&utm_term=learning.fuel) and [video walkthrough](https://www.youtube.com/watch?v=4nKWREmCvsE).

## Project Overview

This project demonstrates an employee record tracker:

- Create records
- Read records from MongoDB Atlas
- Update records
- Delete records

The React app in `mern/client` calls an Express API in `mern/server`, and data is stored in MongoDB Atlas.

## MERN Stack Architecture

```
┌─────────────────────┐       REST (JSON)      ┌──────────────────────────┐
│   React (Vite)      │ ─────────────────────► │  Express API             │
│   mern/client       │ ◄───────────────────── │  mern/server             │
│   :5173             │                        │  :5050                   │
└─────────────────────┘                        └───────────┬──────────────┘
                                                           │…
