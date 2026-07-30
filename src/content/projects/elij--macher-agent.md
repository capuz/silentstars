---
repo: "elij/macher-agent"
name: "macher-agent"
description: "An Emacs-native LLM agent harness featuring isolated sandboxing, asynchronous sub-agent orchestration, and fail-fast sync file merging."
readmeQualityOk: true
url: "https://github.com/elij/macher-agent"
language: "Emacs Lisp"
languages: ["Emacs Lisp"]
languagePcts: [100]
topics: ["emacs", "gptel", "macher"]
stars: 16
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-04T10:20:33Z"
lastCommitAt: "2026-07-30T06:07:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 47
maintainers: ["elij"]
openGraphImageUrl: "https://opengraph.githubassets.com/1868a8df59ac04b1f318a02b03d413ac2212a16df0b0917fa4e29a66c1593be9/elij/macher-agent"
---

<h1 align="center">macher-agent</h1>

https://github.com/user-attachments/assets/35908782-ee2b-4243-8b93-ad8381cfee5c

The macher-agent project is a *fully* Emacs native agentic harness. At its core, it is a collection of gptel presets and integrations with macher and gptel.

A truly native Emacs harness relies on buffers rather than terminal user interfaces with captures and Elisp over slash commands (no external middleware, SDKs, ACPs etc.). Tools and subagents act as sentinels operating in their own buffers. Subagents communicate via Elisp callbacks for one-to-one interactions or through hooks for broadcasting messages. Programmatic tool calling happens within an Elisp sandbox, integrating tool calls directly with Elisp. The `macher-agent-make-tool` function returns primitive types first and presentation second, fully utilising Emacs as a customisable multiplexing environment.

## Approach to subagents

The architecture is optimised to operate large numbers of agents running concurrently within a single Emacs instance. The Virtual File System and the Elisp sandbox with programmatic tool calling allow agents to solve problems before requiring explicit permissions from the user…
