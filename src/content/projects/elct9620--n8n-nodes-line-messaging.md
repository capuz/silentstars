---
repo: "elct9620/n8n-nodes-line-messaging"
name: "n8n-nodes-line-messaging"
description: "The LINE Bot node for n8n, which allows you to send messages to LINE users using the LINE Messaging API."
url: "https://github.com/elct9620/n8n-nodes-line-messaging"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 11
forks: 3
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-06-15T09:00:47Z"
lastCommitAt: "2026-06-29T07:25:26Z"
lastReleaseAt: "2025-09-23T12:29:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 64
maintainers: ["dependabot[bot]", "elct9620"]
openGraphImageUrl: "https://opengraph.githubassets.com/71dbd4f58fd42f41530d9f0e03337708199ef6a9c224e69102a5d76f3914d830/elct9620/n8n-nodes-line-messaging"
---

# n8n-nodes-line-messaging

This is an n8n community node. It lets you use LINE Messaging API in your n8n workflows.

LINE Messaging API enables developers to build chatbots and integrate messaging features into their services with the LINE platform, which is especially popular in Japan, Thailand, Taiwan, and other parts of Asia.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

- [Installation](#installation)
- [Operations](#operations)
- [Credentials](#credentials)
- [Compatibility](#compatibility)
- [Usage](#usage)
- [Development](#development)
- [Resources](#resources)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

```bash
npm install @aotoki/n8n-nodes-line-messaging
```

## Operations

This node provides the following operations:

### Line Messaging Node

- **Reply**: Reply to a user's message using the replyToken
- **Send**: Proactively send messages to users using their User ID
- **Multicast**: Send messages to multiple users simultaneously (up to 500 recipients)
- **Get Profile**: Retrieve user…
