---
repo: "grafana/oats"
name: "oats"
description: "OpenTelemetry Acceptance Tests (OATs), or OATs for short, is a test framework for OpenTelemetry."
readmeQualityOk: true
url: "https://github.com/grafana/oats"
homepage: "https://grafana.com/blog/2025/07/08/observability-in-under-5-seconds-reflecting-on-a-year-of-grafana/otel-lgtm/"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["acceptance-testing", "opentelemetry"]
stars: 47
forks: 4
openIssues: 2
closedIssues: 7
watchers: 10
contributors: 46
recentReleases: 0
createdAt: "2023-08-03T02:38:44Z"
lastCommitAt: "2026-07-30T06:06:20Z"
lastReleaseAt: "2025-04-22T14:36:34Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 53
maintainers: ["renovate-sh-app[bot]", "zeitlinger", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/989582b3df3cec5b874285da5ff0c9f8111fc116488893586483e418919c8304/grafana/oats"
---

</p>

<h1 align="center">OpenTelemetry Acceptance Tests (OATs)</h1>

</p>

</p>

OATs is a declarative acceptance-test framework for OpenTelemetry. You describe,
in YAML, the telemetry an instrumented app *should* produce — traces, logs,
metrics, profiles — and OATS drives the app (or seeds telemetry directly), then
asserts against a real observability stack (Grafana, Loki, Tempo, Prometheus,
Pyroscope) via [`gcx`](https://github.com/grafana/gcx).

A case reads like the outcome you care about:

```yaml
name: rolldice traces have a route attribute

fixture:
  compose:
    file: docker-compose.oats.yml   # your app; OATS adds a Grafana LGTM stack by default

input:
  - path: /rolldice?rolls=5         # drive the app (seed defaults to type: app)

expected:
  traces:
    - traceql: '{ span.http.route = "/rolldice" }'
      match_spans:
        - name: "GET /rolldice"
```

## Install

1. Install [mise](https://mise.jdx.dev/).

2. Pin `oats` and `gcx` into your repo — mise resolves the latest releases and
   locks them into `mise.toml`:

   ```sh
   mise use --pin aqua:grafana/oats aqua:grafana/gcx
   ```

For CI, see [docs/ci.md](https://github.com/grafana/oats/blob/HEAD/docs/ci.md).…
