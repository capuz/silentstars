---
repo: "tandemdude/linkd"
name: "linkd"
description: "A powerful async-only dependency injection framework for Python"
url: "https://github.com/tandemdude/linkd"
homepage: "https://linkd.readthedocs.io/en/latest/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 10
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-04-08T14:31:42Z"
lastCommitAt: "2026-07-03T12:22:15Z"
lastReleaseAt: "2025-07-25T15:29:59Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 84
undervaluedScore: 68
maintainers: ["dependabot[bot]", "tandemdude"]
openGraphImageUrl: "https://opengraph.githubassets.com/9439e1ca4c4f8fea8589d8da1e762cd8cf2fff2f8aa951989c35edce54c19f78/tandemdude/linkd"
fundingLinks: ["GITHUB:https://github.com/tandemdude"]
discussionCount: 0
---

# Overview
Linkd is a powerful [dependency-injection](https://en.wikipedia.org/wiki/Dependency_injection) framework for
asyncio-based Python applications.

This library aims to provide an easy way for framework developers to provide dependency-injection functionality,
while also being suitable for use with standalone applications with a little bit more work.

For an example of `linkd` in action, have a look at [`hikari-lightbulb`](https://github.com/tandemdude/hikari-lightbulb) which
uses it to provide all dependency injection functionality.

## Installation
Use the package manager [pip](https://pip.pypa.io/en/stable/) to install linkd.

```bash
pip install linkd
```

## Usage

### Standalone

The most basic usage of linkd involves three main steps:
- Creating a `DependencyInjectionManager` and registering dependencies
- Setting up an injection context
- Enabling injection on a function

An example of all the above can be seen below:

```python
import asyncio

import linkd

# create a manager instance
manager = linkd.DependencyInjectionManager()
# register a dependency to on of the manager's registries
manager.registry_for(linkd.Contexts.ROOT).register_value(str, "thomm.o")

#…
