---
repo: "ecotoneframework/ecotone-dev"
name: "ecotone-dev"
description: "Ecotone Framework Development - This is Monorepo which contains all official public modules"
readmeQualityOk: true
url: "https://github.com/ecotoneframework/ecotone-dev"
homepage: "https://docs.ecotone.tech"
language: "PHP"
languages: ["PHP"]
languagePcts: [99]
topics: ["amqp", "asynchronous", "cqrs", "ddd", "distributed-architectures", "event-sourcing", "laravel", "microservices", "php", "symfony"]
stars: 56
forks: 24
openIssues: 2
closedIssues: 123
watchers: 4
contributors: 20
recentReleases: 0
createdAt: "2022-07-23T16:29:44Z"
lastCommitAt: "2026-11-08T10:41:42Z"
lastReleaseAt: "2023-06-04T12:16:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 96
undervaluedScore: 59
maintainers: ["dgafka", "lifinsky", "jlabedo"]
openGraphImageUrl: "https://opengraph.githubassets.com/8fc5572c13510f1b832c7bf593e4d7cb982403c47e5df87e8d732462190003d1/ecotoneframework/ecotone-dev"
fundingLinks: ["GITHUB:https://github.com/dgafka"]
discussionCount: 19
---

**Ecotone is the PHP architecture layer that grows with your system — without rewrites.**

From `#[CommandHandler]` on day one, to event sourcing, sagas, outbox, and distributed messaging at scale — one package, same codebase, no forced migrations between growth stages. Declarative PHP 8 attributes on the classes you already have. No base classes, no bus wiring, no retry config.

Built on Enterprise Integration Patterns — the same pattern language behind Spring Integration, Axon, NServiceBus, and Apache Camel — brought to PHP as attribute-driven code.

```php
class OrderService
{
    #[CommandHandler]
    public function placeOrder(PlaceOrder $command, EventBus $eventBus): void
    {
        $eventBus->publish(new OrderWasPlaced($command->orderId));
    }
}

class NotificationService
{
    #[Asynchronous('notifications')]
    #[EventHandler]
    public function whenOrderPlaced(OrderWasPlaced $event, NotificationSender $sender): void
    {
        $sender->sendOrderConfirmation($event->orderId);
    }
}
```

Every flow — sync, async, sagas, projections — runs through the same messaging pipeline in production and in tests. Swap the in-memory channel for RabbitMQ, Kafka, SQS, Redis,…
