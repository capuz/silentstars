---
repo: "freshaengineering/opentelemetry_datadog"
name: "opentelemetry_datadog"
description: "[Library] OpenTelemetry Datadog exporter for Elixir - Proper sampling support, x-datadog header propagation, trace export. | Elixir, OpenTelemetry"
readmeQualityOk: true
url: "https://github.com/freshaengineering/opentelemetry_datadog"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [100]
topics: ["non-production"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2024-03-20T20:59:54Z"
lastCommitAt: "2026-10-23T12:04:35Z"
status: "thriving"
tags: []
healthScore: 81
undervaluedScore: 39
maintainers: ["hansihe", "CGA1123"]
openGraphImageUrl: "https://opengraph.githubassets.com/1735bd981057255d59db8570387a90f4bf8d0cd3bcdd423145fc18779ca0012e/freshaengineering/opentelemetry_datadog"
---

# OpentelemetryDatadog

OpenTelemetry DataDog Exporter and utilities for Elixir.

The main reason you would use this over exporting over the DataDog Agent over otlp is that this approach supports proper sampling.

## Installation

```elixir
def deps do
  [
    {:opentelemetry_datadog, git: "https://github.com/hansihe/opentelemetry_datadog.git"}
  ]
end
```

After installing, `opentelemetry` needs to be configured with the datadog exporter:

```elixir
config :opentelemetry,
  traces_exporter: {OpentelemetryDatadog.Exporter, [host: "http://localhost", port: 8126]},
  resource: %{
    # Resources configuration go in here or are specified using env variables
    "service.name": "my-service",
    "deployment.environment": "production"
  },
  sampler: {OpentelemetryDatadog.Sampler.UseLocalSamplingRules, 0.5},
  text_map_propagators: [OpentelemetryDatadog.Propagator.Datadog]
```

The above config will:
* Send traces to a DataDog agent running on `localhost:8126`
* Randomly sample traces at a rate of 0.5, while accurately reporting sampling rates to DataDog
* Setup a propagator that is compatible with the "x-datadog-*" headers
