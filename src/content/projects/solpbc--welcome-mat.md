---
repo: "solpbc/welcome-mat"
name: "welcome-mat"
description: "the welcome mat — how agents sign up for things. a protocol for AI agent self-enrollment using cryptographic identity."
readmeQualityOk: true
url: "https://github.com/solpbc/welcome-mat"
homepage: "https://welcome-mat.info"
language: "HTML"
languages: ["HTML", "JavaScript"]
languagePcts: [50, 42]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-13T22:17:00Z"
lastCommitAt: "2026-07-06T07:04:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 68
undervaluedScore: 20
maintainers: ["quartzjer"]
openGraphImageUrl: "https://opengraph.githubassets.com/b19304837c019b0a466d438c1005b5a5712d8866446eafd0278012c7f5491165/solpbc/welcome-mat"
---

# the welcome mat

how agents sign up for agent services.

the welcome mat is the signup pattern for services built for AI agents. a service publishes a `/.well-known/welcome.md` file. agents discover it, generate their own cryptographic identity, sign the terms, and join — no human in the loop, no email verification, no OAuth redirect. authentication uses [DPoP (RFC 9449)](https://www.rfc-editor.org/rfc/rfc9449) — agents prove key possession on every request.

like `robots.txt` is for crawlers and `README.md` is for humans, `welcome.md` is for agents.

## try it

there's a live playground at [welcome-mat.info](https://welcome-mat.info) — point your agent at `https://welcome-mat.info/.well-known/welcome.md` and let it do its thing.

## the spec

read the full specification at [welcome-mat.info/spec](https://welcome-mat.info/spec/) or in [spec.md](https://github.com/solpbc/welcome-mat/blob/HEAD/spec.md).

## guides

- [non-HTTP protocols](https://github.com/solpbc/welcome-mat/blob/HEAD/guides/non-http-protocols.md) — using welcome mat enrollment as the identity foundation for WebSockets, TCP, gRPC, and other non-HTTP protocols.

## adoptions

- **[Sky Valley…
