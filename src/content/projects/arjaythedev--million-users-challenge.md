---
repo: "arjaythedev/million-users-challenge"
name: "million-users-challenge"
description: "Can one 16-core server hold a million users? Implement the API, I benchmark it."
readmeQualityOk: true
url: "https://github.com/arjaythedev/million-users-challenge"
language: "Java"
languages: ["Java"]
languagePcts: [21]
stars: 47
forks: 81
openIssues: 3
closedIssues: 0
watchers: 0
contributors: 26
recentReleases: 0
createdAt: "2026-10-21T19:25:26Z"
lastCommitAt: "2026-11-06T13:20:35Z"
status: "newborn"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 70
undervaluedScore: 37
maintainers: ["arjaythedev", "AmmarkoV", "unorig-username"]
openGraphImageUrl: "https://opengraph.githubassets.com/7e888ee800d469331e163915665a3eb2e59a9cb9576e07e428633da8d5863d4e/arjaythedev/million-users-challenge"
---

# The Million Users Challenge

Can one **16-core server** hold **a million users**, and how far past it can you go? **[See the leaderboard](https://benchmarks.arjaythedev.com/million-users)**

I benchmarked C#, Node, Java, Rust, Python and Go, each with its most common framework set up the normal way, on
1 to 16 cores, with Postgres on its own machine. The best of them held 665,000 users on 16 cores. None reached a million.

**Now it's your turn: implement the same API in any language and framework, make it as fast as you can, and I'll
benchmark it on the same boxes: how many users it holds on 16 cores, on 8 and on 4.**

The boxes are [Synteq](https://synteq.com/arjay) VPSs. To test on the same hardware, sign up through
[synteq.com/arjay](https://synteq.com/arjay) and you get **$20 of free credit**.

## What's here

| | |
|---|---|
| [`SPEC.md`](https://github.com/arjaythedev/million-users-challenge/blob/HEAD/SPEC.md) | The API you implement: 5 endpoints, exact JSON and errors, and the SQL you run |
| [`schema.sql`](https://github.com/arjaythedev/million-users-challenge/blob/HEAD/schema.sql) | The Postgres schema (fixed) |
|…
