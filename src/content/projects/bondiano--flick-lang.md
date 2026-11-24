---
repo: "bondiano/flick-lang"
name: "flick-lang"
description: "A language for whole apps, where every function does what it says. Compiles to JavaScript and Go."
readmeQualityOk: true
url: "https://github.com/bondiano/flick-lang"
homepage: "https://bondiano.github.io/flick-lang/"
language: "Rust"
languages: ["Rust"]
languagePcts: [67]
stars: 6
forks: 2
openIssues: 202
closedIssues: 141
watchers: 0
contributors: 4
recentReleases: 2
createdAt: "2026-10-22T09:50:46Z"
lastCommitAt: "2026-11-24T00:58:09Z"
lastReleaseAt: "2026-11-04T04:02:37Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 59
maintainers: ["bondiano", "rogerok"]
openGraphImageUrl: "https://opengraph.githubassets.com/9af61040a68ffdfb2d59951b967d01ff59b5404d6ba9e55ffd7b58ed67a71fbc/bondiano/flick-lang"
---

Flick is a language for whole apps: the browser, the server and the command
line. A function's signature says what it needs and how it can fail, the
compiler holds the body to it, and the code still reads like plain code. It
compiles to JavaScript and TypeScript, where effects run on a small runtime
of Flick's own and parts of the standard library still use
[Effect](https://effect.website/) through an adapter, and to Go for a
standalone executable.
[Why Flick](https://github.com/bondiano/flick-lang/blob/HEAD/docs/src/content/docs/start/why.md) says what it is for, and
who it is not for yet.

## A little Flick

```flick
module Main exposing (main)

type Greeting = Hello String | Goodbye

message : Greeting -> String
let message greeting =
  match greeting with
  | Hello name -> "Hello, \{name}!"
  | Goodbye -> "See you soon!"

main : Unit ->{Host.Console} Unit
let main () =
  Platform.stdout_line (message (Hello "Flick"))
```

`message` is pure: its arrow is a plain `->`. `main` runs in the runtime, so its
arrow has braces: they name the services it needs, here the console it prints
to, and after a `;` how it can fail.
Generated programs are ordinary ES modules.
