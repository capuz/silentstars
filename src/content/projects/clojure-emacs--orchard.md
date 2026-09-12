---
repo: "clojure-emacs/orchard"
name: "orchard"
description: "A fertile ground for Clojure tooling"
readmeQualityOk: true
url: "https://github.com/clojure-emacs/orchard"
language: "Clojure"
languages: ["Clojure"]
languagePcts: [98]
topics: ["clojure", "cider", "orchard", "tooling"]
stars: 339
forks: 52
openIssues: 18
closedIssues: 96
watchers: 23
contributors: 53
recentReleases: 0
createdAt: "2018-01-04T18:44:56Z"
lastCommitAt: "2026-09-12T08:04:03Z"
lastReleaseAt: "2025-04-08T09:59:38Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "funded"]
healthScore: 89
undervaluedScore: 32
maintainers: ["bbatsov", "alexander-yakushev"]
openGraphImageUrl: "https://opengraph.githubassets.com/fbce308d254e87eff9836025ffc7c91a2716cfa9ca891a5edb90b241cd610db6/clojure-emacs/orchard"
fundingLinks: ["GITHUB:https://github.com/bbatsov", "PATREON:https://patreon.com/bbatsov", "OPEN_COLLECTIVE:https://opencollective.com/cider", "CUSTOM:https://www.paypal.me/bbatsov"]
---

# Orchard

A Clojure library designed to provide common functionality for Clojure
development tools (e.g. Clojure editor plugins and IDEs).

Orchard provides the building blocks that Clojure editors and IDEs need:

### Code Navigation

Jump to definitions and trace how code connects.

```clojure
(require '[orchard.info :as info])
(info/info 'clojure.core 'map)
;; => {:ns clojure.core, :name map, :file "clojure/core.clj", :arglists ([f] [f coll] ...), ...}

(require '[orchard.xref :as xref])
(xref/fn-deps 'my.app/handler)
;; => #{#'ring.util.response/response #'my.app/render-page ...}
```

- Var info and metadata lookup
- Find function dependencies and usages
- Namespace utilities and classpath access

### Documentation

Surface the right docs at the right time.

```clojure
(require '[orchard.eldoc :as eldoc])
(-> (info/info 'clojure.core '+) eldoc/eldoc)
;; => {:ns "clojure.core", :name "+", :type "function", :eldoc [[] ["x"] ["x" "y"] ["x" "y" "&" "more"]], ...}

(require '[orchard.clojuredocs :as clojuredocs])
(clojuredocs/find-doc "clojure.core" "map")
;; => {:examples [...], :see-also [...], :notes [...], ...}
```

- Eldoc (function signature) display
- ClojureDocs integration…
