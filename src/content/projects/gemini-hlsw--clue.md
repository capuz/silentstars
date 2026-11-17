---
repo: "gemini-hlsw/clue"
name: "clue"
description: "GraphQL client for Scala."
readmeQualityOk: true
url: "https://github.com/gemini-hlsw/clue"
language: "Scala"
languages: ["Scala"]
languagePcts: [100]
stars: 21
forks: 5
openIssues: 4
closedIssues: 14
watchers: 3
contributors: 10
recentReleases: 0
createdAt: "2020-02-07T06:13:36Z"
lastCommitAt: "2026-11-17T14:35:42Z"
lastReleaseAt: "2026-05-17T10:33:14Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 94
undervaluedScore: 62
maintainers: ["lucuma-steward[bot]", "mergify[bot]", "rpiaggio"]
openGraphImageUrl: "https://opengraph.githubassets.com/8f2de996cb683a1ae1196a28e19022b9670198ac22dc4dc4ac42c8abccc1e9e4/gemini-hlsw/clue"
---

# clue

Experimental GraphQL client for Scala and Scala.js.

## Usage

### 1) Create a client

Either:

- A `FetchClient[F[_], S]` (supporting queries and mutations), or
- A `StreamingClient[F[_], S]` (supporting queries, mutations and subscriptions).

`S` is a type denoting the schema. It can be any type, even a phantom type. It's only used to type-match clients and operations.

#### Example

```scala
  import clue.*
  import cats.effect.IO

  sealed trait StarWars

  // Scala JVM and Scala.js with http4s Ember client
  import org.http4s.ember.client.EmberClientBuilder

  EmberClientBuilder
    .default[IO]
    .build
    .use: client =>
      given Backend[IO] = Http4sHttpBackend[IO](https://github.com/gemini-hlsw/clue/blob/HEAD/client)
      val fetchClient: FetchClient[IO, StarWars] =
        Http4sHttpClient.of[IO, StarWars](https://github.com/gemini-hlsw/clue/blob/HEAD/"https://starwars.com/graphql")

  // Scala JVM with JDK WS client behind http4s
  import import org.http4s.jdkhttpclient.JdkWSClient

  JdkWSClient
    .simple[IO]
    .use: client =>
      given StreamingBackend[IO] = Http4sWebSocketBackend[IO](https://github.com/gemini-hlsw/clue/blob/HEAD/client)
      val…
