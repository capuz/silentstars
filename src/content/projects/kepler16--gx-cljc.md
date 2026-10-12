---
repo: "kepler16/gx.cljc"
name: "gx.cljc"
description: "Graph Computation"
readmeQualityOk: true
url: "https://github.com/kepler16/gx.cljc"
homepage: "https://gx.kepler16.com"
language: "Clojure"
languages: ["Clojure"]
languagePcts: [100]
stars: 17
forks: 5
openIssues: 0
closedIssues: 1
watchers: 6
contributors: 8
recentReleases: 0
createdAt: "2021-11-04T14:11:50Z"
lastCommitAt: "2026-10-12T11:14:34Z"
lastReleaseAt: "2022-06-09T17:11:35Z"
status: "thriving"
tags: []
healthScore: 100
undervaluedScore: 41
maintainers: ["armed"]
openGraphImageUrl: "https://opengraph.githubassets.com/d28c8270b2f54250d604492a6f4c0e9ae4ed351663af2e2f72239d323ddd1301/kepler16/gx.cljc"
---

A data-oriented Clojure library for defining and executing directed acyclic graph's of state machines.

## Reference

- **[About](#about)**
- **[Quick Start](#quick-start)**
- **[Concepts](#concepts)**
  - **[Refs](#refs)**
  - **[Components](#components)**
  - **[Signal Processing](#signal-processing)**
- **[Validation](#validation)**
  - **[Malli Support](https://github.com/kepler16/gx.cljc/blob/HEAD/docs/malli.md)**
- **[Components as Data](#components-as-data)**

## About

Initially designed as an alternative to component systems such as [Integrant](https://github.com/weavejester/integrant),
[Component](https://github.com/stuartsierra/component) or [Mount](https://github.com/tolitius/mount).

## Quick Start

```clojure
(ns app.example
  (:require
   [org.httpkit.server :as http]))

(def server-component
  {:signals {:start (fn start-server [_ {:keys [system port]}]
                      (http/run-server (create-router system)
                                       {:port port}))
             :stop (fn stop-server [server _]
                     (.close server))}})

(def graph
  {:config {:db-path "./data/db"
            :http-port 8080}

   :db (gx/with-refs [db-name (gx/ref…
