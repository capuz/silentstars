---
repo: "gabrielegenovese/chorer"
name: "chorer"
description: "A static analyzer to generate Choreography Automata from Erlang source."
readmeQualityOk: true
url: "https://github.com/gabrielegenovese/chorer"
homepage: "https://gabrielegenovese.github.io/chorer/"
language: "Erlang"
languages: ["Erlang"]
languagePcts: [91]
stars: 12
forks: 0
openIssues: 4
closedIssues: 2
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2023-04-08T09:57:09Z"
lastCommitAt: "2026-10-23T12:04:05Z"
lastReleaseAt: "2025-12-30T11:34:55Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 31
maintainers: ["gabrielegenovese"]
openGraphImageUrl: "https://opengraph.githubassets.com/fb1858e08453d3f803d030353a1975934006b8f0052fa9fecd6f0f070ca85938/gabrielegenovese/chorer"
---

# ChorEr

ChorEr is a static analyzer to generate Choreography Automata from Erlang source code.
A web version is also [available](https://chorer.cappuccino.ovh/).

## Requirements

The project requires `erlang` and `rebar3` to run.

## Usage

Use `rebar3` to compile it and run the binary:

```
shell> rebar3 escriptize
shell> ./_build/default/bin/chorer
Usage:
  chorer <input> <entrypoint> <output> <minl> <ming>

Extract a choreography automata of an Erlang program.

Arguments:
  input      Erlang soure file (string)
  entrypoint Entrypoint of the program (atom)
  output     Output directory for the generated dot files (string), default: .
  minl       Minimize the localviews , default: true
  ming       Minimize the globalviews , default: false
```

Otherwise, use it with the Erlang shell:

```
shell> rebar3 shell
1> chorer:generate("./examples/ticktack/tictacstop.erl", start/0).
...
[INFO] Finished!
```

### Output

The tool will create a DOT file for each actor's local view and a DOT file for the global view in the specified folder. To visualize the Choreography Automata copy and paste the `.dot` files' content in a [DOT viewer](https://dreampuf.github.io/GraphvizOnline).

##…
