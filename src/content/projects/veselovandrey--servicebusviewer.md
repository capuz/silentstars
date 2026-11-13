---
repo: "VeselovAndrey/ServiceBusViewer"
name: "ServiceBusViewer"
description: "Service Bus Viewer is a web application for viewing and interacting with Azure Service Bus queues and topics."
readmeQualityOk: true
url: "https://github.com/VeselovAndrey/ServiceBusViewer"
language: "C#"
languages: ["C#", "TypeScript"]
languagePcts: [43, 37]
topics: ["service-bus"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2025-05-26T05:25:07Z"
lastCommitAt: "2026-11-13T04:43:46Z"
lastReleaseAt: "2026-08-24T15:03:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 80
maintainers: ["VeselovAndrey"]
openGraphImageUrl: "https://opengraph.githubassets.com/de15787b86769d262ecf2370844fab7f8834fc33d3be8597f7b51e7604a43472/VeselovAndrey/ServiceBusViewer"
---

# Service Bus Viewer

Service Bus Viewer is a tool for inspecting and working with Azure Service Bus queues, topics, and subscriptions, available in the browser and as an Electron desktop application. It is primarily intended for local development and testing with the [Azure Service Bus Emulator](https://github.com/Azure/azure-service-bus-emulator-installer), but it can also connect to Azure Service Bus namespaces.

The repository also includes the `SolidCode.Aspire.Hosting.ServiceBusViewer` Aspire support package for registering the published Service Bus Viewer container from .NET Aspire AppHosts. See [`src\SolidCode.Aspire.Hosting.ServiceBusViewer\README.md`](https://github.com/VeselovAndrey/ServiceBusViewer/blob/HEAD/src/SolidCode.Aspire.Hosting.ServiceBusViewer/README.md) for package installation and usage details.

## Features

- Automatically browse an Azure namespace when the primary connection has Manage permission, or connect directly to a queue or subscription.
- Browse queues, topics, subscriptions, entity properties, and subscription filters.
- Peek and receive messages from queues or topic subscriptions, including session-enabled entities, with a configurable peek…
