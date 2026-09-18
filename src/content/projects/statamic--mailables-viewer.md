---
repo: "statamic/mailables-viewer"
name: "mailables-viewer"
description: "Preview Laravel mailables from the Statamic Control Panel."
readmeQualityOk: true
url: "https://github.com/statamic/mailables-viewer"
homepage: "https://statamic.com/addons/statamic/mailables-viewer"
language: "PHP"
languages: ["PHP", "Vue"]
languagePcts: [72, 27]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 6
recentReleases: 2
createdAt: "2026-08-20T01:50:04Z"
lastCommitAt: "2026-09-18T08:28:21Z"
lastReleaseAt: "2026-08-24T14:10:24Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 86
undervaluedScore: 31
maintainers: ["duncanmcclean", "jackmcdade", "jonatanalvarsson"]
openGraphImageUrl: "https://opengraph.githubassets.com/0e3461f5af8c6aa96c8822040cf14c794b980c2d4c165a7b64a0e54bee2e72e5/statamic/mailables-viewer"
---

# Mailables Viewer

> Preview Laravel mailables from the Statamic Control Panel.

## Features

- Discovers concrete `Illuminate\Mail\Mailable` classes in `app/Mail`
- Renders a live HTML preview
- Injects sample constructor data (scalars, Eloquent models, Statamic users/entries/forms)
- Lets you edit strings, numbers, bools, and datetimes and see the preview update
- Shows subject, from, attachments, template, queue status, and where the mailable is referenced
- Sends a test email with `sendNow()`
- Opens a chosen mailable directly via `?mailable=`

## Installation

You can install the Mailables Viewer addon via Composer:

```
composer require statamic/mailables-viewer
```

Then visit **Utilities → Mailables** in the Control Panel. Super users see it automatically. Everyone else needs the `access mailables utility` permission.

## Usage

Any concrete mailable in `app/Mail` is discovered automatically.

Register mailables that live elsewhere:

```php
use Statamic\MailablesViewer\Mailables;

Mailables::register(\App\Mail\Billing\InvoiceReady::class);
```

You can pass a class or an array of classes. The `Mailables` facade is also available as a Laravel alias.

### Linking to a…
