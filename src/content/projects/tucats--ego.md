---
repo: "tucats/ego"
name: "ego"
description: "EGO is emulated Go, a scripting language based on Go syntax."
readmeQualityOk: true
url: "https://github.com/tucats/ego"
language: "Go"
languages: ["Go"]
languagePcts: [92]
stars: 8
forks: 1
openIssues: 0
closedIssues: 8
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2020-05-07T19:40:41Z"
lastCommitAt: "2026-07-04T23:16:50Z"
lastReleaseAt: "2026-03-22T17:01:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 78
maintainers: ["tucats", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/262142706/2759bf80-97b5-11eb-9976-ebfa52263bee"
---

# Introduction to Ego

The `ego` command-line tool is an implementation of the _Ego_ language, which is a
scripting language with syntax and functionality based on _Go_. Think of this as
_Emulated Go_. The command can either run a program interactively, start a REST
server that uses _Ego_ programs as service endpoints, and other operations.

This command accepts either an input file (via the `run` command followed by a file
name) or an interactive set of commands typed in from the console (via the `run`
command with no file name given ). You can use the `help` command to get a full
display of the options available.

Example:

```sh
    $ ego run
    ego> fmt.Println(3*5)
```

This prints the value 15. You can enter virtually any program statement using the
interactive command mode. If the line is incomplete due to mismatched quotes,
parentheses, or braces, then _Ego_ will prompt for additional lines before trying
to execute the statement(s) entered.

In this mode, _Ego_ maintains the state of all values and variables you create directly
from the command line, including functions you might define. This allows you to interactively
examine values, create functions, execute individual…
