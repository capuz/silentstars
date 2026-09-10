---
repo: "Blockether/vis"
name: "vis"
description: "Vis is a coding agent that combines tools into Python programs. It can chain operations, run them in parallel, and inspect results before deciding what belongs in the conversation."
readmeQualityOk: true
url: "https://github.com/Blockether/vis"
homepage: "https://vis.blockether.com/"
language: "Clojure"
languages: ["Clojure", "TypeScript"]
languagePcts: [72, 20]
topics: ["vis", "agent", "anthropic", "openai", "coding-agent", "sandbox"]
stars: 12
forks: 3
openIssues: 2
closedIssues: 174
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-04-10T21:53:51Z"
lastCommitAt: "2026-09-10T08:19:38Z"
lastReleaseAt: "2026-07-27T09:59:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 63
maintainers: ["kwojcik-blockether"]
openGraphImageUrl: "https://opengraph.githubassets.com/d923fc732d108cf2762b65f01a339f390b92cdc0143eb9e9815936773118e569/Blockether/vis"
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="logo.png">
  </picture>
</p>

  <h2>
    </a>
  </h2>
</div>

# Vis

Vis is a coding agent that combines tools into Python programs. It can chain operations, run them in parallel, and inspect results before deciding what belongs in the conversation.

## Install

Install the `vis-agent` command:

```bash
curl -fsSL https://github.com/Blockether/vis/releases/download/installer/install-vis-agent | bash
vis-agent help
```

```bash
vis-agent update                 # latest complete native release (default)
vis-agent update --track beta    # native beta from green main CI
vis-agent update --track dev     # newest main source, always JVM
```

**Clojure library:**

```clojure
;; deps.edn
{:deps {com.blockether/vis {:mvn/version "0.1.44"}}}
```

## Quick start

```bash
vis-agent tui                                      # interactive terminal UI
vis-agent gateway start --host 10.0.0.5 --pair       # phone app gateway; prints a pairing QR
```

`vis-agent tui` opens the terminal UI and starts a local gateway if needed.
Release and beta use native binaries; dev uses the managed main checkout on the JVM.
Every plain `vis-agent…
