---
repo: "spiral/roadrunner-bridge"
name: "roadrunner-bridge"
description: "🌉 RoadRunner bridge to Spiral Framework"
readmeQualityOk: true
url: "https://github.com/spiral/roadrunner-bridge"
homepage: "https://spiral.dev/docs/packages-roadrunner-bridge"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["grpc", "microservices", "php", "psr-16", "psr-7", "roadrunner", "spiral-framework", "tcp-client"]
stars: 64
forks: 11
openIssues: 13
closedIssues: 19
watchers: 3
contributors: 13
recentReleases: 0
createdAt: "2022-01-13T11:55:22Z"
lastCommitAt: "2026-08-28T12:23:27Z"
lastReleaseAt: "2022-10-21T10:58:53Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 91
undervaluedScore: 30
maintainers: ["roxblnfk", "gam6itko"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/447581540/8aeb8572-02d9-40e6-ac0c-ba3cf4ecb241"
fundingLinks: ["GITHUB:https://github.com/spiral"]
---

# RoadRunner bridge to Spiral Framework

## Requirements

Make sure that your server is configured with following PHP version and extensions:

- PHP 8.2+
- Spiral Framework 3.14+
- Extension `protobuf` (recommended)

## Installation

To install the package:

```bash
composer require spiral/roadrunner-bridge
```

After package install you need to add bootloaders from the package in your application on the top of the list.

```php
use Spiral\RoadRunnerBridge\Bootloader as RoadRunnerBridge;

protected const LOAD = [
    RoadRunnerBridge\HttpBootloader::class, // Optional, if it needs to work with http plugin
    RoadRunnerBridge\QueueBootloader::class, // Optional, if it needs to work with jobs plugin
    RoadRunnerBridge\CacheBootloader::class, // Optional, if it needs to work with KV plugin
    RoadRunnerBridge\GRPCBootloader::class, // Optional, if it needs to work with GRPC plugin
    RoadRunnerBridge\CentrifugoBootloader::class, // Optional, if it needs to work with centrifugo server
    RoadRunnerBridge\TcpBootloader::class, // Optional, if it needs to work with TCP plugin
    RoadRunnerBridge\MetricsBootloader::class, // Optional, if it needs to work with metrics plugin…
