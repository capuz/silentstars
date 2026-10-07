---
repo: "arm/ai-ml-sdk-scenario-runner"
name: "ai-ml-sdk-scenario-runner"
description: "The Scenario Runner is an application that executes shader and neural network graph workloads through Vulkan® or the ML extensions for Vulkan®. "
readmeQualityOk: true
url: "https://github.com/arm/ai-ml-sdk-scenario-runner"
homepage: "https://arm.github.io/ai-ml-sdk-for-vulkan/scenario-runner/docs/in/index.html"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [72, 23]
stars: 13
forks: 4
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 28
recentReleases: 1
createdAt: "2025-06-10T13:13:37Z"
lastCommitAt: "2026-10-07T10:30:20Z"
lastReleaseAt: "2026-09-28T16:33:11Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 78
maintainers: ["nlithammer", "Lengjunyi", "AwadhyM"]
openGraphImageUrl: "https://opengraph.githubassets.com/66f852c441d3cc01eda6f43f6cf95df9baaacd13f260ebb5f5f3d7709a841628/arm/ai-ml-sdk-scenario-runner"
---

# ML SDK Scenario Runner

The Scenario Runner is an application that executes shader and neural network
graph workloads through Vulkan® or the ML extensions for Vulkan®. The Scenario
Runner acts as a validation and performance exploration vehicle. The Scenario
Runner also acts as a mechanism to define test-cases called scenarios in a
declarative way via a JSON description. The Scenario Runner can parse the JSON,
load the input stimulus that is described in the JSON, execute the scenario and
produce output artifacts.

## Cloning the repository

To clone the ML SDK Scenario Runner as a stand-alone repository, you can use
regular git clone commands. However, for better management of dependencies and
to ensure everything is placed in the appropriate directories, we recommend
using the `git-repo` tool to clone the repository as part of the ML SDK for
Vulkan® suite. [Repo tool](https://gerrit.googlesource.com/git-repo).

For a minimal build and to initialize only the Scenario Runner and its
dependencies, run:

```bash
repo init -u https://github.com/arm/ai-ml-sdk-manifest -g scenario-runner
```

Alternatively, to initialize the repo structure for the entire ML SDK for
Vulkan®, including…
