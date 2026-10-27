---
repo: "algoan/pubsub"
name: "pubsub"
description: "A simple PubSub factory method exposing a listen-emit pattern"
readmeQualityOk: true
url: "https://github.com/algoan/pubsub"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["nodejs", "google-pubsub", "factory", "typescript"]
stars: 17
forks: 18
openIssues: 0
closedIssues: 15
watchers: 4
contributors: 14
recentReleases: 0
createdAt: "2020-04-15T13:24:53Z"
lastCommitAt: "2026-10-27T09:16:46Z"
lastReleaseAt: "2020-06-28T22:12:32Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 99
undervaluedScore: 77
maintainers: ["g-ongenae", "dependabot[bot]", "fabong"]
openGraphImageUrl: "https://opengraph.githubassets.com/9ec33b33278f21a0acb829472d689963d06310b239a8eba954374ca1e2cb6e34/algoan/pubsub"
---

# PubSub

This is a generic PubSub Factory exposing a listen and a emit method.

_NOTE_: Today, only [Google Cloud PubSub](https://cloud.google.com/pubsub/docs/overview) has been added.

## Installation

```bash
npm install --save @algoan/pubsub
```

## Usage

### Google Cloud PubSub

#### Run tests

To run tests or to try the PubSubFactory class, you need to have a google account and have installed gcloud sdk.

Then, to install the [Google PubSub simulator](https://cloud.google.com/pubsub/docs/emulator), run:

```shell
gcloud components install pubsub-emulator
gcloud components install beta
gcloud components update
```

Start tests running:

```shell
npm test
```

It will launch a Google PubSub emulator thanks to the [google-pubsub-emulator](https://github.com/ert78gb/google-pubsub-emulator) library.

#### Example

To create a PubSub instance using Google Cloud:

```typescript
import { EmittedMessage, GCPubSub, PubSubFactory, Transport } from '@algoan/pubsub'

const pubsub: GCPubSub = PubSubFactory.create({
  transport: Transport.GOOGLE_PUBSUB,
  options: {
    projectId: 'test',
    // And all other Google PubSub properties
  }
});
const topicName: string = 'some_topic';

await…
