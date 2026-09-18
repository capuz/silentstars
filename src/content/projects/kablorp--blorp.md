---
repo: "kablorp/blorp"
name: "blorp"
description: "A safe, readable, and fast programming language"
readmeQualityOk: true
url: "https://github.com/kablorp/blorp"
language: "C"
languages: ["C", "Python"]
languagePcts: [45, 41]
stars: 65
forks: 0
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-05-14T19:30:31Z"
lastCommitAt: "2026-09-18T08:26:43Z"
lastReleaseAt: "2026-07-01T06:23:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 29
maintainers: ["keithasaurus"]
openGraphImageUrl: "https://opengraph.githubassets.com/63ab25640a222ba0977fb2ea4db460b5151df20952e225bf43d4d15b3ed35a7e/kablorp/blorp"
---

# Blorp

Blorp is a compiled language for writing safe, understandable code that is easy
to generate, review, debug, and trust.

Blorp is in early preview. For the language tour, examples, documentation, and
current project status, start here:

**https://blorp-lang.org**

## Hello, World

```blorp
func main(args: List[String]):
	print("Hello, world!")
```

The root `main` may also return `Int`, `Void`, or a locally defined type that
implements the prelude's `ExitStatusAble` trait. `Int` is the process exit
code; `Void` exits with 0. Custom status types can provide an optional message
for nonzero exits. Functions named `main` in imported modules remain ordinary
functions.

## Try It Out

The easiest way to try Blorp is to install the latest dev release. This
downloads the matching binary for your system and installs a single binary to `~/.local/bin/blorp`.

```bash
curl -fsSL https://raw.githubusercontent.com/kablorp/blorp/main/scripts/install-dev | bash

~/.local/bin/blorp --version
```

Set `BLORP_INSTALL_TAG=dev-<short-sha>` to install an immutable dev snapshot
instead of the moving latest `dev` build.

To remove the dev binary:

```bash
rm -f "$HOME/.local/bin/blorp"
```

A C…
