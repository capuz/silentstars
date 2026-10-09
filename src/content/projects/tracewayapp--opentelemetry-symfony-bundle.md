---
repo: "tracewayapp/opentelemetry-symfony-bundle"
name: "opentelemetry-symfony-bundle"
description: "Pure-PHP OpenTelemetry instrumentation for Symfony - automatic HTTP, HttpClient, and Messenger tracing. No C extension required"
readmeQualityOk: true
url: "https://github.com/tracewayapp/opentelemetry-symfony-bundle"
homepage: "https://packagist.org/packages/traceway/opentelemetry-symfony"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["instrumentation", "observability", "opentelemetry", "otel", "php", "symfony", "symfony-bundle", "tracing"]
stars: 85
forks: 6
openIssues: 0
closedIssues: 24
watchers: 2
contributors: 11
recentReleases: 0
createdAt: "2026-03-13T17:40:57Z"
lastCommitAt: "2026-10-09T10:51:09Z"
lastReleaseAt: "2026-04-02T13:27:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 36
maintainers: ["jstojiljkovic", "d-mitrofanov-v", "nmspaced"]
openGraphImageUrl: "https://opengraph.githubassets.com/e1ae4ccb35e59b97a4b5b98631cb8d44bb8576295da3a6576a86669724cf190a/tracewayapp/opentelemetry-symfony-bundle"
---

# OpenTelemetry Symfony Bundle

Pure-PHP OpenTelemetry instrumentation for Symfony. Automatic tracing for HTTP, Console, HttpClient, Messenger, Mailer, Scheduler, Doctrine DBAL, Cache, and Twig — plus Monolog log-trace correlation, OTel log export, and opt-in metrics. **No C extension required.**

Works with any OpenTelemetry-compatible backend: [Traceway](https://tracewayapp.com), [Jaeger](https://www.jaegertracing.io/), [Zipkin](https://zipkin.io/), [Datadog](https://www.datadoghq.com/), [Grafana Tempo](https://grafana.com/oss/tempo/), [Honeycomb](https://www.honeycomb.io/), [AWS X-Ray](https://github.com/tracewayapp/opentelemetry-symfony-bundle/blob/HEAD/docs/aws-xray.md), and more.

- **Pure PHP** — installs on every managed Symfony host
- **Production-ready** — stable since v1.0, PHPStan level 10 with no baseline, Symfony 6.4 LTS through 8.x
- **Correct under load** — Messenger context propagates across async boundaries, DBAL 3 and 4 CI-tested, re-entrance guards on HttpClient and the log handler

## Installation

```bash
composer require traceway/opentelemetry-symfony
```

Symfony Flex registers the bundle automatically. Without Flex, add it to `config/bundles.php`:

```php…
