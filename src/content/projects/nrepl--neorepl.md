---
repo: "nrepl/neorepl"
name: "neorepl"
description: "A terminal REPL for Clojure (and friends) built on nREPL"
readmeQualityOk: true
url: "https://github.com/nrepl/neorepl"
language: "Clojure"
languages: ["Clojure"]
languagePcts: [99]
stars: 16
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 5
createdAt: "2026-10-09T13:36:07Z"
lastCommitAt: "2026-10-31T09:53:10Z"
lastReleaseAt: "2026-10-31T08:06:05Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 47
maintainers: ["bbatsov"]
openGraphImageUrl: "https://opengraph.githubassets.com/4170adca9d662ccc3ec6a755d72103efa7cee9e22425951dc10d88d38f24f3fd/nrepl/neorepl"
---

# neorepl

A terminal REPL for Clojure (and friends) built on nREPL. It's meant as a
spiritual successor to [REPLy](https://github.com/trptcolin/reply), with a
proper line editor, the core of CIDER's tooling and a CLI that works just as
well for scripts and coding agents as it does for people.

It's early days: there's a REPL, jack-in and a handful of command line
tools. [PLAN.md](https://github.com/nrepl/neorepl/blob/HEAD/PLAN.md) has the details on where this is going.

## Usage

[bbin](https://github.com/babashka/bbin) installs the latest release as a
`neorepl` command, which runs on [babashka](https://babashka.org) 1.13.225
or newer:

```shell
bbin install io.github.nrepl/neorepl
```

From a checkout, `bbin install .` installs that instead.

`neorepl` connects to the nREPL server whose `.nrepl-port` file is in the
current directory or one of its parents (`neorepl ports` lists the ones it
can see) and starts a REPL. Enter evaluates the input once its forms are
complete, Ctrl-C interrupts an evaluation and Ctrl-D exits. Code gets
highlighted, values get pretty printed and the history is kept per project.
TAB completes, the arglists of the function you're calling show up after…
