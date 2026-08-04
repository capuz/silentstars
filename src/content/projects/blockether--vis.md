---
repo: "Blockether/vis"
name: "vis"
description: "A coding agent that keeps its state in a running program, not in the chat."
readmeQualityOk: true
url: "https://github.com/Blockether/vis"
homepage: "https://blockether.github.io/vis/"
language: "Clojure"
languages: ["Clojure"]
languagePcts: [78]
topics: ["rlm", "vis", "agent", "anthropic", "openai"]
stars: 10
forks: 3
openIssues: 0
closedIssues: 100
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-04-10T21:53:51Z"
lastCommitAt: "2026-08-04T06:12:49Z"
lastReleaseAt: "2026-07-27T09:59:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 66
maintainers: ["kwojcik-blockether"]
openGraphImageUrl: "https://opengraph.githubassets.com/6cde1b6217a5b3d523e7c1aed064433c3fcb7174ed008d803094975794492e0b/Blockether/vis"
---

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
curl -fsSL https://github.com/Blockether/vis/releases/latest/download/install-vis-agent | bash
vis-agent help
```

`install-vis-agent` is a release asset: every `vX.Y.Z` release publishes the installer and the `vis-agent` wrapper alongside the platform bundles, so that URL always serves the installer of the newest release.

That installs the `vis-agent` command into `~/.local/bin` (adding it to your PATH when needed). `vis-agent` then downloads its own private `vis-agent-native` runtime beside itself — the native image is never a separate command you install. From then on vis-agent owns both:

```bash
vis-agent runtime show      # what is installed and selected
vis-agent update            # update the command and its runtime together
vis-agent update --native   # (re)download just the native runtime
```

Native runtimes are published for Linux x64 and arm64.

**Clojure…
