---
repo: "eclipse-lmos/lmos-runtime"
name: "lmos-runtime"
description: "The LMOS Runtime facilitates dynamic agent routing and conversation handling in a multi-tenant, multi-channel environment."
url: "https://github.com/eclipse-lmos/lmos-runtime"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [98]
stars: 48
forks: 8
openIssues: 3
closedIssues: 9
watchers: 5
contributors: 18
recentReleases: 0
createdAt: "2024-09-23T07:17:57Z"
lastCommitAt: "2026-06-26T06:46:32Z"
lastReleaseAt: "2025-08-27T15:39:30Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 51
maintainers: ["dependabot[bot]", "sbussweiler", "kaikreuzer"]
openGraphImageUrl: "https://opengraph.githubassets.com/13e2efd677c28be7a07b2aa4a660132cc6101113670c03068d8b08fd33288c6e/eclipse-lmos/lmos-runtime"
discussionCount: 0
---

# lmos-runtime

LMOS Runtime is a component of the LMOS (Language Model Operating System) ecosystem, designed to facilitate dynamic agent routing and conversation handling in a multi-tenant, multi-channel environment.

It is a comprehensive system designed to manage and route conversations to the most suitable agents based on their capabilities. 
It leverages the LMOS Operator and LMOS Router to dynamically resolve and route user queries to the appropriate agents.
This project extends the functionalities of the original [lmos-operator](https://github.com/eclipse-lmos/lmos-operator/)  and [lmos-router](https://github.com/eclipse-lmos/lmos-router) by integrating them into a cohesive runtime environment.

The LMOS Runtime directs user queries to an agent based on its capabilities. 
It fetches the list of all installed agents applicable to the tenant and channel from lmos-operator, and uses lmos-router to dynamically resolve the most appropriate agent for each query. 
The user queries are then forwarded to the selected agent, and the response is returned to the client.

## Features

- **Dynamic Agent Routing** : Routes user queries to the most appropriate agent dynamically.
-…
