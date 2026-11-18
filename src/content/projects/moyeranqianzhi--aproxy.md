---
repo: "MoYeRanqianzhi/aProxy"
name: "aProxy"
description: "Local API proxy with infinite retries for agent workloads"
originalDescription: "Local API proxy with infinite retries for agent workloads"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/MoYeRanqianzhi/aProxy"
language: "Rust"
languages: ["Rust"]
languagePcts: [77]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-10T12:27:35Z"
lastCommitAt: "2026-11-18T12:04:55Z"
lastReleaseAt: "2026-09-21T13:34:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 68
undervaluedScore: 57
maintainers: ["MoYeRanqianzhi"]
openGraphImageUrl: "https://opengraph.githubassets.com/dd06da91200069d0fcc94dd737cbc65caf9be0986ecc52ee86a5de6ceaf4e401/MoYeRanqianzhi/aProxy"
---

# aProxy

> A whirlwind does not last a whole morning, nor a downpour a whole day. — *Tao Te Ching*

**A local API proxy that stands guard over every request from agent software.**

Upstream rate limits, dropped connections, timeouts, and once-in-five-hundred-years jitters: aProxy catches each request locally and carries it through. Failures are **retried indefinitely** (exponential backoff, with a configurable cap). Streaming requests (where `Accept` contains `text/event-stream` or the request body has `"stream": true`) get SSE heartbeats injected during the stream to keep it alive, and after success the original bytes are replayed. Clients notice nothing: the request they think they sent was just a bit slow. (There are two explicit exceptions. `delivery = "forward"` mode explicitly gives up the retry guarantee in exchange for true streaming passthrough. Requests matched by `[[retry.rules]]` that reach `max_attempts` pass the real response through, and streaming requests whose response headers were already committed by keep-alive heartbeats end with a terminal SSE error event. See 'Configuration file'.)

[English](https://github.com/MoYeRanqianzhi/aProxy/blob/HEAD/README_EN.md)
