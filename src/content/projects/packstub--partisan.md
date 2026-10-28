---
repo: "packstub/partisan"
name: "partisan"
description: "Artisan for Laravel packages — make: generators that write into src/ with your package namespace. Built on Orchestra Testbench."
readmeQualityOk: true
url: "https://github.com/packstub/partisan"
homepage: "https://packstub.dev/docs/partisan"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["artisan", "generator", "laravel", "laravel-package", "package", "php", "testbench", "workbench"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 8
watchers: 0
contributors: 2
recentReleases: 5
createdAt: "2026-08-07T10:13:38Z"
lastCommitAt: "2026-10-28T09:56:49Z"
lastReleaseAt: "2026-09-17T10:22:47Z"
status: "thriving"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 96
undervaluedScore: 64
maintainers: ["icaliman", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2f7f8829868ce3e222227112f27df73d124d7a1904123c525b5e122b820b3c56/packstub/partisan"
fundingLinks: ["GITHUB:https://github.com/icaliman"]
---

# Partisan

**Artisan for Laravel packages.** Run every `make:` generator from your package directory and get files in `src/` with your package's namespace — models, commands, migrations, factories, tests, and full Filament resources included.

Built on [Orchestra Testbench](https://packages.tools/testbench) and [Canvas](https://github.com/orchestral/canvas), the tools that already power Laravel package testing. Partisan adds the missing piece: generators that understand your package is the app.

```bash
composer require --dev packstub/partisan

vendor/bin/partisan make:model Invoice
# → src/Models/Invoice.php with `namespace Acme\Widget\Models;`
```

## What you get

Partisan reads your package's `composer.json` and points the whole generator suite at it:

| Command | Destination | Namespace |
| --- | --- | --- |
| `make:model Invoice` | `src/Models/Invoice.php` | `Acme\Widget\Models` |
| `make:command SyncInvoices` | `src/Console/SyncInvoices.php` | `Acme\Widget\Console` |
| `make:migration create_invoices_table` | `database/migrations/…` | — |
| `make:factory InvoiceFactory` | `database/factories/…` | `Acme\Widget\Database\Factories` |
| `make:seeder InvoiceSeeder` |…
