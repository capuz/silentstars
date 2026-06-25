---
repo: "browniebroke/flake8-django-migrations"
name: "flake8-django-migrations"
description: "Flake8 plugin to lint for backwards incompatible database migrations"
url: "https://github.com/browniebroke/flake8-django-migrations"
language: "Python"
languages: ["Python"]
languagePcts: [95]
stars: 12
forks: 1
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2020-11-10T18:10:33Z"
lastCommitAt: "2026-06-25T01:31:55Z"
lastReleaseAt: "2025-09-18T07:45:16Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 87
undervaluedScore: 64
maintainers: ["renovate[bot]", "browniebroke"]
openGraphImageUrl: "https://opengraph.githubassets.com/a478084b402a0c78e023a5cba41afe76a3efdd1b961343df6b02449281173e32/browniebroke/flake8-django-migrations"
fundingLinks: ["GITHUB:https://github.com/browniebroke", "PATREON:https://patreon.com/browniebroke", "CUSTOM:https://paypal.me/browneibroke"]
---

# flake8-django-migrations

  </a>
  </a>
</p>
  </a>
  </a>
  </a>
</p>
  </a>
</p>

---

**Source Code**: <a href="https://github.com/browniebroke/flake8-django-migrations" target="_blank">https://github.com/browniebroke/flake8-django-migrations</a>

---

Flake8 plugin to lint for backwards incompatible database migrations.

## Installation

Install using `pip` (or your favourite package manager):

```sh
pip install flake8-django-migrations
```

## Usage

This plugin should be used automatically when running flake8:

```sh
flake8
```

## Checks

This is the list of checks currently implemented by this plugin.

### DM001

`RemoveField` operation should be wrapped in `SeparateDatabaseAndState`.

Such an operation should be run in two separate steps, using `SeparateDatabaseAndState`, otherwise it is not backwards compatible.

- Step 1: remove the field from the model and code. For foreign key fields, the foreign key constraint should also be dropped.
- Step 2: remove the column from the database.

#### Bad

```python
class Migration(migrations.Migration):
    operations = [
        migrations.RemoveField(
            model_name="order",
            name="total",
        ),
    ]…
