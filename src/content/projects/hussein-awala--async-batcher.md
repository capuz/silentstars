---
repo: "hussein-awala/async-batcher"
name: "async-batcher"
description: "A service to batch the http requests."
readmeQualityOk: true
url: "https://github.com/hussein-awala/async-batcher"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["asyncio", "batch-processing", "fastapi", "grpc", "python", "http-requests"]
stars: 39
forks: 3
openIssues: 4
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-02-15T23:50:01Z"
lastCommitAt: "2026-11-07T10:38:17Z"
lastReleaseAt: "2025-02-17T21:46:23Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 69
undervaluedScore: 22
maintainers: ["hussein-awala"]
openGraphImageUrl: "https://opengraph.githubassets.com/21ae7dfca4776f8ac1dd6c3dc3ae01724dc8c2fbdb5994a962a65ea51b01379c/hussein-awala/async-batcher"
discussionCount: 2
---

# AsyncBatcher - Asynchronous Batching for Python

## Overview
AsyncBatcher is a generic, asynchronous batch processor for Python that efficiently groups incoming items into batches
and processes them asynchronously. It is designed for scenarios where multiple requests or tasks need to be handled in
batches to improve efficiency and throughput.

## Key Features
- Asynchronous processing: Uses asyncio for non-blocking execution.
- Batching mechanism: Groups items into batches based on size or time constraints.
- Concurrency control: Limits the number of concurrent batch executions.
- Custom processing logic: Users must implement the `process_batch` method to define batch behavior.
- Queue management: Uses an `asyncio.Queue` to manage incoming items.
- Error handling: Ensures robust error reporting and handling.

## How it works

### 1. Receiving Items for Processing
- Users call `process(item)`, which adds the item to an internal queue.
- A `Future` object is returned immediately and the result is awaited asynchronously.

### 2. Queue Management and Batching
- A background task (`run()`) continuously monitors the queue.
- Items are collected into batches based on:
  -…
