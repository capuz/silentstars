---
repo: "day50-dev/simple-llm-cli"
name: "simple-llm-cli"
description: "LLM infradebugging and diagnostic tool"
url: "https://github.com/day50-dev/simple-llm-cli"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["cli", "llm", "local-llm"]
stars: 36
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 5
createdAt: "2026-01-09T09:24:44Z"
lastCommitAt: "2026-06-27T00:46:31Z"
lastReleaseAt: "2026-06-26T02:49:04Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 88
undervaluedScore: 44
maintainers: ["kristopolous"]
openGraphImageUrl: "https://opengraph.githubassets.com/2958b951c24a1440e62e6d45c5ea89fae7690692c82d3fccb41bd07da361a31b/day50-dev/simple-llm-cli"
---

<br/> <strong>/usr/bin/cat for LLMs</strong>
<br/> <a href=https://pypi.org/project/llcat><img src=https://badge.fury.io/py/llcat.svg/></a>
</p>
<hr>

You want to test if an inference endpoint is working or want to one-shot call a model on a server. Maybe you want to cycle through keys or models or benchmark a bank of IPs. Perhaps you want to orchestrate `N` queries across `M` models running on `P` servers and want to run the job in parallel without leaving any leaky state behind.

Existing tools require you to:
 * install plugins
 * pick from a pre-baked provider boutique
 * pick a list of models which don't update
 * swap around credentials like you're Indiana Jones with a bag of sand

llcat is a response to the inconsistent patchwork of tools that sacrifice control for convenience and forfeit functionality.

For instance, let's say I have a list of authentication tokens:

```shell
credentials.txt

sk-or-v1-e1e5...
sk-or-v1-ej24...
sk-or-v1-ff24...
```
Here's how you do that with llcat:

```shell
Method 1:

llcat -k @credentials.txt:0
llcat -k @credentials.txt:1
llcat -k @credentials.txt:2

Method 2:

llcat -k sk-or-v1-e1e5...
llcat -k sk-or-v1-ej24...
llcat -k sk-or-v1-ff24...…
