---
repo: "bullno1/remodule"
name: "remodule"
description: "Hot reload for C"
readmeQualityOk: true
url: "https://github.com/bullno1/remodule"
language: "C"
languages: ["C"]
languagePcts: [82]
stars: 21
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-01-06T11:14:22Z"
lastCommitAt: "2026-09-29T10:04:09Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 27
maintainers: ["bullno1"]
openGraphImageUrl: "https://opengraph.githubassets.com/26d349cc0bfa1b1f23b6a873e0fcf3fdf0301e703ce8c1bd8fc6f4509e7f581b/bullno1/remodule"
---

# re:module

re:module is a library for live reloading.

# Usage

Copy [remodule.h](https://github.com/bullno1/remodule/blob/HEAD/remodule.h) into your project.
A project using re:module must be structured as follow:

* A host program with minimal code (e.g: [example_host.c](https://github.com/bullno1/remodule/blob/HEAD/example_host.c)).
  This will not be reloadable.
* One or more dynamic library as plugin (e.g: [example_plugin.c](https://github.com/bullno1/remodule/blob/HEAD/example_plugin.c)).
  This is where the bulk of the behaviour should be.
* Optionally, some sort of shared interface between a program and its plugin: [example_shared.h](https://github.com/bullno1/remodule/blob/HEAD/example_shared.h).

In **exactly one** source file of the host program, define `REMODULE_HOST_IMPLEMENTATION` before including remodule.h:

```c
#define REMODULE_HOST_IMPLEMENTATION
#include "remodule.h"
```

Likewise, in **exactly one** source file of every plugin, define `REMODULE_PLUGIN_IMPLEMENTATION` before including remodule.h:

```c
#define REMODULE_PLUGIN_IMPLEMENTATION
#include "remodule.h"
```

Additionally, a plugin must define an entrypoint:

```c
void
remodule_entry(remodule_op_t op,…
