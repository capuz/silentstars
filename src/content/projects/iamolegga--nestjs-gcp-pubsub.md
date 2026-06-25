---
repo: "iamolegga/nestjs-gcp-pubsub"
name: "nestjs-gcp-pubsub"
description: "The most basic and unopinionated implementation of GCP PubSub transport for NestJS microservices"
url: "https://github.com/iamolegga/nestjs-gcp-pubsub"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [85]
stars: 14
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-07-14T07:49:13Z"
lastCommitAt: "2026-06-25T02:06:15Z"
lastReleaseAt: "2025-01-24T16:08:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 64
maintainers: ["dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/01bcd8fe1d547419d362d6e1d97a7959afbcb923268800612a7c61df07aa93e1/iamolegga/nestjs-gcp-pubsub"
---

# nestjs-gcp-pubsub

  </a>
  </a>
  </a>
  </a>
  </a>
  </a>
</p>

The most basic and unopinionated implementation of [GCP PubSub](https://cloud.google.com/pubsub/) transport for NestJS microservices.

The publisher should not care who will handle the event and by which pattern, it only knows the topic. So, no hardcoded patterns in PubSub messages: on publishing events pass the `topic-name` as a pattern, and on subscription pass `topic-name/subscription-name` string as a pattern.

`ack()` is called automatically when no errors are thrown while handling, otherwise `nack()` is called.

No topics and subscriptions are created automatically. Because we care about [security](https://cloud.google.com/pubsub/docs/authentication).

---

---

## install

```sh
npm i nestjs-gcp-pubsub @google-cloud/pubsub
```

## configure

### setup server:

```ts
import { GCPPubSubStrategy } from 'nestjs-gcp-pubsub';

NestFactory.createMicroservice(
  AppModule,
  {
    strategy: new GCPPubSubStrategy({
      // Props of { ClientConfig } from '@google-cloud/pubsub'
      projectId: 'my-project-id',

      // Optional deserializer, please see
      // implementation in the sources.
      // Default…
