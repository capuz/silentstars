---
repo: "gren-lang/node"
name: "node"
description: "Run Gren on NodeJS"
readmeQualityOk: true
url: "https://github.com/gren-lang/node"
homepage: "https://packages.gren-lang.org/package/gren-lang/node/version/latest/overview"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
stars: 13
forks: 6
openIssues: 8
closedIssues: 22
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2022-08-26T09:13:48Z"
lastCommitAt: "2026-09-21T09:13:31Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 74
maintainers: ["robinheghan", "joeybright", "blaix"]
openGraphImageUrl: "https://opengraph.githubassets.com/b15b5488527b8b743832453f4d86d39c6104037282e846387ba46e39d15d9697/gren-lang/node"
fundingLinks: ["KO_FI:https://ko-fi.com/gren"]
---

# Gren on Node.js

This package allows you to create Gren programs that run on the Node.js runtime.

**I highly recommend working through the [guide](https://gren-lang.org/book/) to learn how to use Gren.**

## Creating a node application

In addition to [installing gren](https://gren-lang.org/install), you'll need the current [node LTS](https://nodejs.org/en) release.

Initialize a gren application that targets node:

```
gren init --platform=node
```

Create a `src/Main.gren` file:

```elm
module Main exposing (main)

import Node
import Stream
import Task

main =
    Node.defineSimpleProgram
        (\env ->
            Stream.sendLine env.stdout "Hello, World!"
                |> Task.execute
                |> Node.endWithCmd
        )
```

compile and run with

```
gren make src/Main.gren
node app
```

See the [cat example](https://github.com/gren-lang/example-projects/tree/main/cat) for a more complex example.

## Applications, sub-systems and permissions

This package is based around the idea of sub-systems. A sub-system provides access to functionality which interact with the outside world, like reading files or communicating with the terminal.

A sub-system must be…
