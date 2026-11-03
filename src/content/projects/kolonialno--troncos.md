---
repo: "kolonialno/troncos"
name: "troncos"
description: "🪵 Troncos - Collection of logging, tracing and profiling tools"
readmeQualityOk: true
url: "https://github.com/kolonialno/troncos"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["logging", "tracing", "profiling", "python", "debugging"]
stars: 13
forks: 0
openIssues: 2
closedIssues: 9
watchers: 25
contributors: 26
recentReleases: 0
createdAt: "2022-01-04T17:45:51Z"
lastCommitAt: "2026-11-03T12:47:14Z"
lastReleaseAt: "2022-11-08T12:35:45Z"
status: "thriving"
tags: ["hidden_gem", "community_watch"]
healthScore: 78
undervaluedScore: 47
maintainers: ["renovate[bot]", "thor", "tiendabot"]
openGraphImageUrl: "https://opengraph.githubassets.com/64c3ee77f14381647d5d993cd3c9b5edc44d860b65abdcc82964a5d27eb2999e/kolonialno/troncos"
---

🪵<br>
  Troncos <br/>

        Collection of Python logging and tracing tools

- [Etymology](#etymology)
- [Installation](#installation)
- [Tracing](#tracing)
- [Profiling](#profiling)
- [Logging](#logging)

## Etymology

"Troncos" is the plural of the spanish word "Tronco", which translates to "trunk" or "log".

## Installation

```console
# With pip
pip install troncos
```

## Tracing

Troncos is designed to take advantage of `ddtrace` made by DataDog.

The ddtrace docs can be found [here](https://ddtrace.readthedocs.io/en/stable/).

[Best practices for traces](https://grafana.com/docs/tempo/latest/operations/best-practices/#naming-conventions-for-span-and-resource-attributes) is a good guide to get started.

### Span vs resource attributes

- A `span attribute` is a key/value pair that provides context for its span.
- A `resource attribute` is a key/value pair that describes the context of how the span was collected.

For more information, read the [Attribute and Resource](https://opentelemetry.io/docs/specs/otel/overview/) sections in the OpenTelemetry specification.

### Enabling the tracer

 Run `configure_tracer` to send spans to Tempo and configure ddtrace as usual.…
