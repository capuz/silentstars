---
repo: "Blockether/vis"
name: "vis"
description: "A coding agent that keeps its state in a running program, not in the chat."
readmeQualityOk: true
url: "https://github.com/Blockether/vis"
homepage: "https://blockether.github.io/vis/"
language: "Clojure"
languages: ["Clojure"]
languagePcts: [71]
topics: ["rlm", "vis", "agent", "anthropic", "openai"]
stars: 12
forks: 3
openIssues: 3
closedIssues: 153
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-04-10T21:53:51Z"
lastCommitAt: "2026-08-29T10:22:39Z"
lastReleaseAt: "2026-07-27T09:59:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 63
maintainers: ["kwojcik-blockether"]
openGraphImageUrl: "https://opengraph.githubassets.com/2f0e8d06bfc787e3f04eead29e6a147972982aece7081777e70d286bb6a306ce/Blockether/vis"
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

Vis is a coding agent that writes Python into a sandboxed GraalPy runtime, keeps durable state outside the context window, and inspects/changes the host project through tools.

## Install

One command installs **`vis-agent`** — the only Vis command there is.

```bash
curl -fsSL https://github.com/Blockether/vis/releases/download/installer/install-vis-agent | bash
vis-agent help
```

```bash
vis-agent runtime           # what runs, and where it lives
vis-agent update            # move the command and its runtime to the newest commit
```

**Clojure library:**

```clojure
;; deps.edn
{:deps {com.blockether/vis {:mvn/version "0.1.41"}}}
```

## Quick start

```bash
vis-agent tui --jvm                                 # interactive terminal UI
vis-agent gateway start --host 0.0.0.0 --pair --jvm # gateway for the phone app; prints the pairing QR
```

`--jvm` runs the JVM source runtime — the checkout Vis owns — instead of an installed native binary (`VIS_JVM=1` is the same switch). A gateway bound to a non-loopback `--host` always requires a bearer…
