---
repo: "team-telnyx/telnyx-php"
name: "telnyx-php"
description: "PHP SDK for the Telnyx API"
url: "https://github.com/team-telnyx/telnyx-php"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["hacktoberfest"]
stars: 36
forks: 34
openIssues: 1
closedIssues: 24
watchers: 6
contributors: 364
recentReleases: 0
createdAt: "2019-08-06T00:01:14Z"
lastCommitAt: "2026-07-03T12:21:48Z"
lastReleaseAt: "2020-04-02T01:54:25Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 98
undervaluedScore: 66
maintainers: ["stainless-app[bot]", "ankitTelnyx", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/65e4ffcac981d94ebb78d8fd0bfbaf6be67703b82ebec695e7fc7893241f47f4/team-telnyx/telnyx-php"
---

# Telnyx PHP API library

The Telnyx PHP library provides convenient access to the Telnyx REST API from any PHP 8.1.0+ application.

It is generated with [Stainless](https://www.stainless.com/).

## Documentation

## Installation

```
composer require "telnyx/telnyx-php 7.90.0"
```

## Usage

This library uses named parameters to specify optional arguments.
Parameters with a default value must be set by name.

```php
<?php

use Telnyx\Client;

$client = new Client(apiKey: getenv('TELNYX_API_KEY') ?: 'My API Key');

$response = $client->calls->dial(
  connectionID: 'conn12345',
  from: '+15557654321',
  to: '+15551234567',
  webhookURL: 'https://your-webhook.url/events',
);

var_dump($response->data);
```

### Value Objects

It is recommended to use the static `with` constructor `AzureVoiceSettings::with(type: 'azure', ...)`
and named parameters to initialize value objects.

However, builders are also provided `(new AzureVoiceSettings)->withType('azure')`.

### Pagination

List methods in the Telnyx API are paginated.

This library provides auto-paginating iterators with each list response, so you do not have to request successive pages manually:

```php
<?php

use Telnyx\Client;…
