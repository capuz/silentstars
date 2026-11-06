---
repo: "alkem-io/client-web"
name: "client-web"
description: "Default web frontend, enabling browsing the Alkemio platform - so the hosted Challenges and communities collaborating around those Challenges. "
readmeQualityOk: true
url: "https://github.com/alkem-io/client-web"
homepage: "https://alkem.io"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["apollo-client", "graphql", "react", "web"]
stars: 24
forks: 5
openIssues: 726
closedIssues: 4784
watchers: 10
contributors: 32
recentReleases: 0
createdAt: "2020-07-28T09:24:49Z"
lastCommitAt: "2026-11-06T12:17:00Z"
lastReleaseAt: "2020-11-12T14:23:44Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 97
undervaluedScore: 62
maintainers: ["bobbykolev", "ccanos", "polibb"]
openGraphImageUrl: "https://opengraph.githubassets.com/fc8949513d59efe74c2f1bf6fb2afd91f48afa1f26bcb642b014510b0ba7640a/alkem-io/client-web"
---

# Alkemio Web Client

Welcome to the Alkemio web client - allowing you to browse the contents of the Alkemio Platform. Please see the [Alkemio repository](https://github.com/alkem-io/alkemio) for more details on the Alkemio platform.

This client is based on React, and is intended to showcase how clients in general can interact with the domain model exposed by the [Alkemio server](https://github.com/alkem-io/server).

## Configuration

Beyond the bootstrap configuration to point to the Alkemio server, all further configuration is obtained from the server configuration graphql schema.

## Public Routes

### Guest Whiteboard Access (`/public/whiteboard/:whiteboardId`)

The client includes a public guest access route for whiteboards, allowing anonymous and authenticated users to view and **edit** whiteboards collaboratively without full platform authentication.

**Route**: `/public/whiteboard/:whiteboardId`

**Features**:

- **Anonymous Access**: Guests prompted to enter a display name via dialog
- **Authenticated Derivation**: Signed-in users automatically get an anonymized guest name (e.g., "Alice S.") derived from their profile
- **Real-Time Collaboration**: Guest edits sync…
