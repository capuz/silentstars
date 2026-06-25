---
repo: "allenporter/gcal_sync"
name: "gcal_sync"
description: "A python library for syncing Google Calendar to local storage."
url: "https://github.com/allenporter/gcal_sync"
homepage: "https://allenporter.github.io/gcal_sync/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["google-calendar-api", "rfc5545"]
stars: 14
forks: 9
openIssues: 2
closedIssues: 14
watchers: 1
contributors: 8
recentReleases: 0
createdAt: "2022-04-12T19:12:22Z"
lastCommitAt: "2026-06-24T21:37:08Z"
lastReleaseAt: "2022-04-20T15:15:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 91
undervaluedScore: 79
maintainers: ["renovate[bot]", "allenporter", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/82534f66d8f4a00e341a55c1ebccf83d43bfce9e1d58f483ae70145399255785/allenporter/gcal_sync"
---

An asyncio python library for the [Google Calendar API](https://developers.google.com/calendar/api). This library provides a simplified
Google Calendar API that is lighter weight and more streamlined compared to using
aiogoogle, and increased reliability by supporting efficient sync and reading
from local storage. See the [API Documentation](https://allenporter.github.io/gcal_sync/).

The focus of this API is on making it simple to access the most relevant parts of Google
Calendar, for doing useful things. It may not support everything in the API however it
should be easy to extend to do more as needed.

# Quickstart

In order to use the library, you'll need to do some work yourself to get authentication
credentials. This depends a lot on the context (e.g. redirecting to use OAuth via web)
but should be easy to incorporate using Google's python authentication libraries. See
Google's [Authentication and authorization overview](https://developers.google.com/workspace/guides/auth-overview) for details.

You will implement `gcal_sync.AbstractAuth` to provide an access token. Your implementation
will handle any necessary refreshes. You can invoke the service with your auth…
