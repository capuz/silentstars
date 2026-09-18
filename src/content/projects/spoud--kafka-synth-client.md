---
repo: "spoud/kafka-synth-client"
name: "kafka-synth-client"
description: "Synthetic Kafka Client for Monitoring E2E Latencies"
readmeQualityOk: true
url: "https://github.com/spoud/kafka-synth-client"
homepage: "https://spoud.github.io/kafka-synth-client/"
language: "Java"
languages: ["Java", "TypeScript"]
languagePcts: [72, 26]
stars: 8
forks: 0
openIssues: 5
closedIssues: 14
watchers: 5
contributors: 7
recentReleases: 0
createdAt: "2024-10-17T13:55:58Z"
lastCommitAt: "2026-09-18T08:27:22Z"
lastReleaseAt: "2025-03-25T04:42:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 68
maintainers: ["dependabot[bot]", "RuiTeixeira", "spike83"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/874250060/f574a673-4cbb-490a-afeb-ea2cd5209591"
---

# kafka-synth-client

</p>

Kafka-Synth-Client is a simple Kafka client (producer+consumer) that measures end-to-end latency of using Kafka.
The latencies are measured by sending messages to the given Kafka topic via all the brokers, consuming them
and measuring the time it took for the message to be produced and consumed.
The recorded latencies are reported in prometheus format on a metrics endpoint (`/q/metrics`).
The metrics contain values for the median, percentiles like 95th percentile, and 99th percentile of the latencies.

The exposed metrics can be visualized in Grafana, but Kafka Synth Client also comes with a simple UI, allowing you to get started without any additional tools (Except, of course, your Kafka cluster)

If the client is given the required ACLs, it will report latencies per broker.
It is also able to automatically increase the number of partitions in a topic to match the number of brokers
and automatically reassigns partitions to brokers to ensure that each broker will be produced to and consumed from.

For detailed information see our documentation at https://spoud.github.io/kafka-synth-client/.

## Contributing

We welcome contributions to this project.

##…
