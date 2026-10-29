---
repo: "BEagle1984/silverback"
name: "silverback"
description: "Silverback is a message bus and broker integration library for .NET. It is designed to simplify event-driven architectures and asynchronous messaging, with first-class support for Apache Kafka and MQTT."
readmeQualityOk: true
url: "https://github.com/BEagle1984/silverback"
homepage: "https://silverback-messaging.net"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["microservice", "messaging", "kafka", "silverback", "message-bus", "message-brokers", "message-broker", "microservices", "service-bus", "cqrs"]
stars: 283
forks: 44
openIssues: 11
closedIssues: 104
watchers: 13
contributors: 20
recentReleases: 0
createdAt: "2018-04-06T09:35:32Z"
lastCommitAt: "2026-10-29T10:36:51Z"
lastReleaseAt: "2020-05-14T14:16:40Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "community_hub"]
healthScore: 93
undervaluedScore: 41
maintainers: ["BEagle1984", "msallin", "mjeanrichard"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/128375935/44e5d600-48f6-11eb-9417-d58561047522"
discussionCount: 22
---

# Silverback

**Simplicity at its core. Flexibility at its peak. Effortless messaging for .NET.**

Silverback is a message bus and broker integration library to build event-driven architectures with first-class support for **Apache Kafka** and **MQTT**.

Documentation, guides, and samples are available at **https://silverback-messaging.net**.

## Produce and Consume in a Few Lines

Configure the broker connection, the producer and consumer endpoints, and a subscriber. Silverback takes care of serialization, headers, error handling and delivery.

```csharp
services.AddSilverback()
    .WithConnectionToMessageBroker(options => options.AddKafka())
    .AddKafkaClients(clients => clients
        .WithBootstrapServers("PLAINTEXT://localhost:9092")
        .AddProducer(producer => producer
            .Produce<OrderCreated>(endpoint => endpoint
                .ProduceTo("orders")))
        .AddConsumer(consumer => consumer
            .WithGroupId("billing")
            .Consume<OrderCreated>(endpoint => endpoint
                .ConsumeFrom("orders")
                .OnError(policy => policy.Retry(3).ThenSkip()))))
    .AddSingletonSubscriber<OrderCreatedHandler>();
```

```csharp
//…
