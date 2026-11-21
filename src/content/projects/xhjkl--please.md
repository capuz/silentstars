---
repo: "xhjkl/please"
name: "please"
description: "A polite LLM for CLI 🙏"
readmeQualityOk: true
url: "https://github.com/xhjkl/please"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 22
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-10-30T18:20:42Z"
lastCommitAt: "2026-11-21T11:35:06Z"
lastReleaseAt: "2025-11-20T13:08:09Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 67
undervaluedScore: 25
maintainers: ["xhjkl"]
openGraphImageUrl: "https://opengraph.githubassets.com/1027a4c8ed1dd311a5682eb5cbf04e9cbd734a0fb31bdf6326024594bc2e68f0/xhjkl/please"
---

# 🙏🙏🙏

A command-line tool that lets you interact with your terminal in natural language.
All inference stays local.

*The name is chosen so that the invocation reads like a natural-language phrase.*

# Installation

First, install the tool itself.
You can get it from Homebrew:
```
$ brew install xhjkl/made/please
```

Or with the installer script:
```
# either the above, or this:
$ curl -fsSL xhjkl.xyz/please | sh
```

Then, download the weights just once:
```
$ please load
```

And, optionally, verify them:
```
$ (cd ~/.please/weights && sha256sum Qwen3.8-27B-Q4_0.gguf)
ede16c7b36e578ca87a8c70e011e4b4633a32c831c0ce76d0f474582384e671d  Qwen3.8-27B-Q4_0.gguf
```

# Usage

```
$ git diff --cached | please summarize to a concise commit message
$ please take the creds from Justfile and make a fuzzer one-off script > fuzz.ts
$ please format all the git-staged files
$ please tar the current folder but without git-ignored files
$ please resolve all the merge conflicts in the current folder
$ please fix all clippy diagnostics
```
