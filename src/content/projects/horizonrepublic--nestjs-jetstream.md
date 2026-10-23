---
repo: "HorizonRepublic/nestjs-jetstream"
name: "nestjs-jetstream"
description: "NestJS transport for NATS JetStream — durable events, broadcast, ordered delivery, RPC, dead letter queues, and lifecycle hooks"
readmeQualityOk: true
url: "https://github.com/HorizonRepublic/nestjs-jetstream"
homepage: "https://nestjs-jetstream.horizon-republic.dev/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["event-driven", "jetstream", "microservice", "nats", "nestjs", "nodejs"]
stars: 22
forks: 3
openIssues: 0
closedIssues: 17
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-11-04T18:54:26Z"
lastCommitAt: "2026-10-23T08:47:39Z"
lastReleaseAt: "2026-03-11T19:04:33Z"
status: "thriving"
tags: []
healthScore: 94
undervaluedScore: 53
maintainers: ["themaiby", "renovate[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/faffc32a7b5e36e54671f5185c631d99b7f3aa19f59ecbf51cc440b2a575564a/HorizonRepublic/nestjs-jetstream"
discussionCount: 1
---

A NATS JetStream transport for NestJS microservices.<br/>
  Same <code>@EventPattern</code> and <code>@MessagePattern</code> decorators, with durability,<br/>
  bounded retries, dead-letter queues and OpenTelemetry tracing underneath.

  ·
  ·
  ·

---

## The problem

NestJS includes a built-in NATS transport that is fire-and-forget. A pod restart
loses whatever was in flight, a handler that throws is never retried, and when
something goes wrong in production there is nothing to look at.

## The swap

Same decorators, same `client.emit()`. One module import changes underneath.

```ts
// app.module.ts
@Module({
  imports: [JetstreamModule.forRoot({ servers: ['nats://localhost:4222'] })],
})
export class AppModule {}
```

```ts
// orders.controller.ts
@Controller()
export class OrdersController {
  @EventPattern('orders.created')
  async onCreated(@Payload() order: Order) {
    await this.billing.charge(order); // throws → nak → redelivered with backoff
  }
}
```

The transport acknowledges an event only after its handler resolves. A throw is
a `nak` with exponential backoff. Exhausted retries go to a typed dead-letter
queue with the original headers intact. A `traceparent` header…
