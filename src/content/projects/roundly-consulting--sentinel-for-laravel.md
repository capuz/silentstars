---
repo: "roundly-consulting/sentinel-for-laravel"
name: "sentinel-for-laravel"
description: "Tamper-evident seals for Eloquent models (keyed MACs and signatures, key rotation, append-only ledger), idempotency keys, nonces and RFC 9421 HTTP message signatures."
readmeQualityOk: true
url: "https://github.com/roundly-consulting/sentinel-for-laravel"
homepage: "https://roundly-consulting.com/open-source/docs/sentinel-for-laravel"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["audit", "eloquent", "hmac", "http-message-signatures", "idempotency", "integrity", "laravel", "laravel-package", "ledger", "nonce"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-10-02T15:31:08Z"
lastCommitAt: "2026-11-08T14:13:57Z"
lastReleaseAt: "2026-11-07T22:20:27Z"
status: "thriving"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 78
undervaluedScore: 57
maintainers: ["mihaliak"]
openGraphImageUrl: "https://opengraph.githubassets.com/d732f1e204160068f805c2efa6fe7e894ece7fef3ac56ef9d45a66697d8e0242/roundly-consulting/sentinel-for-laravel"
fundingLinks: ["PATREON:https://patreon.com/roundly", "CUSTOM:https://donate.stripe.com/dRmeVe8FX5PF1Qd9pXcEw00", "CUSTOM:https://roundly-consulting.com/support-us?utm_source=github&utm_medium=sponsor-button&utm_campaign=open-source#crypto"]
---

# Sentinel for Laravel

Know when your data was changed behind your application's back, and make every request count
once. Sentinel seals Eloquent models with keyed MACs or signatures, detects any change made
outside the application (a SQL console, a mass `update()`, a restored backup), and adds
idempotency keys, single-use nonces and URLs, and RFC 9421 HTTP message signatures.

## Installation

Requires PHP 8.4+ (`ext-hash`, `ext-mbstring`; `ext-sodium` for Ed25519 keys), Laravel 13,
and SQLite, PostgreSQL or MySQL.

```bash
composer require roundly-consulting/sentinel-for-laravel
php artisan sentinel:install   # publishes config + migrations, prints the key lines for .env
php artisan migrate
```

If your sealed models or users have UUID/ULID keys, set `sentinel.key_type` /
`sentinel.actor_key_type` **before** migrating. `php artisan sentinel:check` confirms the setup.

## Usage

Declare a seal on the model — every Eloquent write now seals the row:

```php
use Illuminate\Database\Eloquent\Model;
use RoundlyConsulting\Sentinel\Concerns\HasSeals;
use RoundlyConsulting\Sentinel\Contracts\Sealable;
use RoundlyConsulting\Sentinel\Definition\SealBuilder;

final class Invoice extends…
