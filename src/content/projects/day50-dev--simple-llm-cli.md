---
repo: "day50-dev/simple-llm-cli"
name: "simple-llm-cli"
description: "Easily pipe anything into an LLM"
url: "https://github.com/day50-dev/simple-llm-cli"
language: "Python"
languages: ["Python"]
languagePcts: [95]
topics: ["cli", "llm", "local-llm"]
stars: 36
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 4
createdAt: "2026-01-09T09:24:44Z"
lastCommitAt: "2026-06-25T02:06:30Z"
lastReleaseAt: "2026-06-15T23:19:13Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 43
maintainers: ["kristopolous"]
openGraphImageUrl: "https://opengraph.githubassets.com/2d0ab9214cb4e862f362d012cd595394db6650803ff378baf38e9154a70f20dd/day50-dev/simple-llm-cli"
---

<br/> <strong>/usr/bin/cat for LLMs</strong>
<br/> <a href=https://pypi.org/project/llcat><img src=https://badge.fury.io/py/llcat.svg/></a>
</p>
<hr>

You want to pipe something into or out of a model sitting on a server. 

Existing tools require you to:
 * install plugins
 * pick from a pre-baked provider boutique
 * pick a list of models which don't update
 * swap around credentials like you're Indiana Jones with a bag of sand

llcat is a response to the inconsistent patchwork of tools that sacrifice control for convenience and forfeit functionality.

Part of the [DAY50](https://day50.dev) suite of open-source tools for AI workflows, llcat is for targeted, precise, focused interaction with models and servers.
   
`llcat` works through regular JSON files through a principle of "least magic" - prioritizing predictability, compatibility, coherency, transparency and functionality.

It exists as a general-purpose CLI-based OpenAI-compatible `/chat/completions` caller (and also works with Ollama, Openrouter, sglang, llama.cpp ...) 

It is like cURL or cat for LLMs: a stateless, transparent, explicit, low-level, composable tool for scripting and glue.

Conversations, keys, servers and…
