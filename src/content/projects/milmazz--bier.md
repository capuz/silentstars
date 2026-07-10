---
repo: "milmazz/bier"
name: "bier"
description: "REST in ✌️"
readmeQualityOk: true
url: "https://github.com/milmazz/bier"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [78]
stars: 8
forks: 0
openIssues: 8
closedIssues: 20
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-10-19T00:36:57Z"
lastCommitAt: "2026-07-10T07:00:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 65
maintainers: ["milmazz"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd0656a478b2def01a0b48955fa4b1b29aa1eef05f0014d9b6e55e0a5da53ead/milmazz/bier"
---

# Bier

> **Alpha.** Bier is in its first stage. Expect bugs and possibly security
> flaws — it is **not** ready for production use.

Bier is an Elixir library that serves a RESTful API generated **on the fly** from
PostgreSQL introspection: point it at a database and it inspects the tables,
views, functions, and foreign keys and exposes them over HTTP — no controllers,
no route files, no schema definitions to write. It is heavily inspired by
[PostgREST][], and tracks PostgREST's request/response behavior closely (see
[Conformance](#conformance)).

## How it works, in one paragraph

Each Bier instance is a supervision tree the host application starts. On boot it
opens a [Postgrex][] connection pool, introspects the configured schemas, builds
a [Plug.Router][] module at runtime, and starts a [Bandit][] web server with it.
Every incoming request is resolved to a `{schema, relation}` at request time and
compiled into **one** parameterized SQL statement that returns its result set as
JSON, which is then rendered in the negotiated media type.

## Installation

Not yet published to Hex. Add it as a git dependency:

```elixir
def deps do
  [
    {:bier, github: "milmazz/bier"}
  ]
end…
