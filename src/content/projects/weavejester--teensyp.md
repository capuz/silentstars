---
repo: "weavejester/teensyp"
name: "teensyp"
description: "A small, zero-dependency Clojure TCP server that uses Java NIO"
readmeQualityOk: true
url: "https://github.com/weavejester/teensyp"
language: "Clojure"
languages: ["Clojure"]
languagePcts: [100]
stars: 43
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-07-09T13:35:54Z"
lastCommitAt: "2026-08-29T17:28:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 48
maintainers: ["weavejester"]
openGraphImageUrl: "https://opengraph.githubassets.com/f47730db6e0bd77cad7f2181ac894f7d11ff70fd16c2a7594d22105a04dd9d25/weavejester/teensyp"
---

# TeensyP [](https://github.com/weavejester/teensyp/actions/workflows/test.yml)

A small, zero-dependency Clojure TCP server that uses Java NIO.

It also supports [Babashka][] 1.13.219 and later.

[babashka]: https://babashka.org/

## Installation

Add the following dependency to your deps.edn file:

    dev.weavejester/teensyp {:mvn/version "0.9.3"}

Or to your Leiningen project file:

    [dev.weavejester/teensyp "0.9.3"]

## Usage

At minimum, TeensyP requires a port to listen on and a handler function:

```clojure
(require '[teensyp.server :as tcp])

(tcp/run-server :handler demo-handler :port 3000)
```

This returns a Closeable server instance.

### Handlers

The handler function has three arities, and defines how the server
behaves.

```clojure
(defn example-handler
  ([socket]
   ;; The 1 argument arity is called when the socket is accepted.
   ;; The return value is the session state.
   {:read-bytes 0})
  ([state socket ^java.nio.ByteBuffer buffer]
   ;; The 3 argument arity is called when the socket receives data from
   ;; the client, contained in a ByteBuffer. The return value is the
   ;; updated session state.
   (let [remaining (.remaining buffer)]
     (.position…
