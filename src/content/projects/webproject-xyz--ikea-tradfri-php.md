---
repo: "WebProject-xyz/ikea-tradfri-php"
name: "ikea-tradfri-php"
description: "PHP library to wrap coap-client commands to control ikea tradfri hub "
url: "https://github.com/WebProject-xyz/ikea-tradfri-php"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["ikea", "tradfri", "smarthome", "php", "codeception", "light-controller"]
stars: 10
forks: 1
openIssues: 1
closedIssues: 7
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2017-12-30T20:57:48Z"
lastCommitAt: "2026-06-25T02:07:16Z"
lastReleaseAt: "2021-11-02T20:30:59Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 96
undervaluedScore: 71
maintainers: ["renovate[bot]", "Fahl-Design", "semantic-release-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/ba1cf1cace71a641c62572f168f3179ec52bd493077d884e244c3086d104debb/WebProject-xyz/ikea-tradfri-php"
---

# IKEA Tradfri PHP API

A powerful PHP library to control IKEA Tradfri smart lights via the Gateway.

---

## 🚀 Quick Start

### 1. Requirements
- PHP 8.4+
- `coap-client` (available via Docker)

### 2. Generate Security Key
Use the [Docker Coap-Client](https://hub.docker.com/r/webproject/coap-client) to get your credentials:

```bash
docker run --rm webproject/coap-client 
  -m post -u "Client_identity" -k "<GATEWAY_SECRET>" 
  -e '{"9090":"php-api-user"}' 
  "coaps://<GATEWAY_IP>:5684/15011/9063"
```

---

## 💻 Usage

### Initialize API
```php
use IKEA\Tradfri\Dto\CoapGatewayAuthConfigDto;
use IKEA\Tradfri\Factory\GatewayServiceFactory;

$api = (new GatewayServiceFactory(
    new CoapGatewayAuthConfigDto(
        username: 'php-api-user',
        apiKey: 'GENERATED_API_KEY',
        gatewayIp: '192.168.1.10',
        gatewaySecret: 'GATEWAY_SECRET'
    )
))();
```

### Control Devices
```php
// Switch on all lights and dim to 80%
foreach ($api->getLights() as $light) {
    $light->switchOn()->dim(80);
}

// Switch off a specific group
$api->getGroups()->first()?->switchOff();
```

---

## 📖 Documentation
- [Requirements](requirements.md)
- [Examples](wiki/example)

## 🤝…
