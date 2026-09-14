---
repo: "laranex/laravel-myanmar-payments"
name: "laravel-myanmar-payments"
description: "A Laravel Package to deal with Payment Packages from Myanmar"
readmeQualityOk: true
url: "https://github.com/laranex/laravel-myanmar-payments"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
stars: 27
forks: 8
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 5
recentReleases: 1
createdAt: "2022-11-14T04:29:45Z"
lastCommitAt: "2026-09-14T09:12:10Z"
lastReleaseAt: "2026-09-14T09:12:51Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 32
maintainers: ["NayThuKhant"]
openGraphImageUrl: "https://opengraph.githubassets.com/d6600f606dde9610c0f84d0475315dcf915593fceb573d3fbb2f4aafa2f3ef4a/laranex/laravel-myanmar-payments"
---

# Laravel Myanmar Payments

A Laravel Package to deal with Payment Providers from Myanmar. This package can take care of PGW payments.

Supported Payments are as follows.

- Wave Money
- KBZPay
- Cybersource
- AYA Payment Gateway
- Yoma MMQR

### Workflows
- Client App - Server Workflow
<br>

- Server Side only Workflow
<br>

## Installation

You can install the package via composer:

```bash
composer require laranex/laravel-myanmar-payments
```

## Configuration

```bash
  php artisan vendor:publish --tag="laravel-myanmar-payments"
```

## Upgrade Guide

- v1 -> v2
    - Backup & Delete the existing config/laravel-myanmar-payments.php (if only published before)
    - Publish the new config/laravel-myanmar-payments, and re-merge the old config/laravel-myanmar-payments.php
    - Update .env (KBZ Pay is supported now)

[Wave Money Configuration](https://github.com/DigitalMoneyMyanmar/wppg-documentation#23-environment)
[KBZ Pay Configuration](https://wap.kbzpay.com/pgw/uat/api/#/en/dashboard)

## Usage

```php
use Laranex\LaravelMyanmarPayments\LaravelMyanmarPaymentsFacade;

# WAVEMONEY
# Payment Screen
LaravelMyanmarPaymentsFacade::channel('wave_money')…
