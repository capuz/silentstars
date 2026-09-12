---
repo: "cboxdk/laravel-geo"
name: "laravel-geo"
description: "Cbox Geo — a canonical ISO 3166 country/subdivision and ISO 4217 currency reference for Laravel: data-driven jurisdiction lookups and structured addresses bound to stable codes, carrying the tax-relevant attributes downstream billing and tax engines need."
readmeQualityOk: true
url: "https://github.com/cboxdk/laravel-geo"
homepage: "https://cbox.dk/packages/laravel-geo"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["address", "cbox", "country", "geo", "iso-3166", "jurisdiction", "laravel", "subdivision"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 7
createdAt: "2026-07-14T21:36:15Z"
lastCommitAt: "2026-09-12T08:03:37Z"
lastReleaseAt: "2026-08-14T09:51:31Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 72
undervaluedScore: 35
maintainers: ["sylvesterdamgaard"]
openGraphImageUrl: "https://opengraph.githubassets.com/53ad230267a2c05749bb31669e129daee469ee1c3ef3a9b7417bd5f307c82ef7/cboxdk/laravel-geo"
---

# Cbox Geo

**`cboxdk/laravel-geo`** — a canonical geography reference for Laravel: countries,
subdivisions and currencies bound to **stable ISO codes**, resolved deny-by-default,
and carrying the **tax-relevant attributes** that billing and tax engines build on.
A dependency-light framework library — every capability sits behind a contract you
bind, mock or replace.

> This is the shared **jurisdiction primitive** for the Cbox portfolio. Identity
> (org addresses), billing (invoice address, seller entities) and the tax engine
> all bind to the *same* jurisdiction keys, so nothing downstream matches on free
> text.

## Why it exists

A tax or billing engine must never fuzzy-match a country name or guess a rate from
a ZIP. Everything has to bind to a stable, validated jurisdiction key. This package
provides that key — ISO 3166-1 alpha-2 countries, ISO 3166-2 subdivisions, ISO 4217
currencies — sourced from the vetted [`commerceguys/addressing`][addr] dataset, with
one layer added on top: the **tax profile** of each jurisdiction.

```php
use Cbox\Geo\Contracts\JurisdictionRepository;
use Cbox\Geo\ValueObjects\CountryCode;
use Cbox\Geo\ValueObjects\SubdivisionCode;

$geo =…
