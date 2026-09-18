---
repo: "launchdarkly/python-eventsource"
name: "python-eventsource"
description: "Server-Sent Events client for Python"
readmeQualityOk: true
url: "https://github.com/launchdarkly/python-eventsource"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["eventsource", "launchdarkly", "launchdarkly-sdk-component", "python", "server-sent-events", "managed-by-terraform", "feature-flags", "feature-toggles", "launchdarkly-sdk"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 2
watchers: 30
contributors: 11
recentReleases: 0
createdAt: "2021-12-30T03:34:47Z"
lastCommitAt: "2026-09-18T14:03:48Z"
lastReleaseAt: "2025-06-26T17:20:52Z"
status: "watched"
tags: ["hidden_gem", "community_watch"]
healthScore: 88
undervaluedScore: 48
maintainers: ["jsonbailey", "github-actions[bot]", "keelerm84"]
openGraphImageUrl: "https://opengraph.githubassets.com/1ed1731316ae308a551a56eb75e1ab5d4859ae9ea5b2a264410d4f175fbeffe3/launchdarkly/python-eventsource"
---

# LaunchDarkly SSE Client for Python

## Overview

The `launchdarkly/python-eventsource` package allows Python developers to consume Server-Sent-Events (SSE) from a remote API. The SSE specification is defined here: [https://html.spec.whatwg.org/multipage/server-sent-events.html](https://html.spec.whatwg.org/multipage/server-sent-events.html#server-sent-events)

This package's primary purpose is to support the [LaunchDarkly SDK for Python](https://github.com/launchdarkly/python-server-sdk), but it can be used independently. In its simplest configuration, it emulates the behavior of the EventSource API as defined in the SSE specification, with the addition of exponential backoff behavior for retries. However, it also includes optional features used by LaunchDarkly SDKs that are not part of the core specification, such as:

* Customizing the backoff/jitter behavior.
* Setting read timeouts, custom headers, and other HTTP request properties.
* Specifying that connections should be retried under circumstances where the standard EventSource behavior would not retry them, such as if the server returns an HTTP error status.

The default `SSEClient` is a synchronous implementation which…
