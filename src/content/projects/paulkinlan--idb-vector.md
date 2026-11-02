---
repo: "PaulKinlan/idb-vector"
name: "idb-vector"
description: "A simple vector database built on idb"
readmeQualityOk: true
url: "https://github.com/PaulKinlan/idb-vector"
homepage: "https://www.npmjs.com/package/idb-vector"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [89]
stars: 106
forks: 9
openIssues: 0
closedIssues: 0
watchers: 5
contributors: 2
recentReleases: 0
createdAt: "2023-03-26T18:28:30Z"
lastCommitAt: "2026-11-02T13:38:30Z"
lastReleaseAt: "2023-05-07T20:38:42Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 44
maintainers: ["PaulKinlan"]
openGraphImageUrl: "https://opengraph.githubassets.com/deee4b5c7d3ac3ade6be0fcfc6133543277e00f290c87c51c62070d5c8bb2b24/PaulKinlan/idb-vector"
discussionCount: 1
---

# Vector IDB

IndexedDB as a Vector Database

## Introduction

IndexedDB as a Vector Database is a project that explores the concept of using IndexedDB as a vector database directly in the browser. It provides a simple wrapper over IndexedDB, allowing efficient storage and querying of vector data. This project was inspired by the existence of database companies that specialize in vector search and the usefulness of services like Polymath and Pinecone.

If you're unfamiliar with vector databases and their benefits, you can start by reading the article ["IndexedDB as a Vector Database"](https://paul.kinlan.me/idb-as-a-vector-database/).

## Wikipedia search demo

[Open the demo](https://paulkinlan.github.io/idb-vector/demo/): explicitly load
250 or 2,000 real Wikipedia passages into IndexedDB, type a question, then turn
the network off and search again. The local MiniLM encoder needs no API key;
load, question-encoding and database-search timings are shown separately.
The open page works offline after loading; **reload still needs networking**.
First load downloads about 35–39 MB, including the model and runtime.
See [demo…
