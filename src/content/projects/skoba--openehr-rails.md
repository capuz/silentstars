---
repo: "skoba/openehr-rails"
name: "openehr-rails"
description: "Rails related openEHR extension"
readmeQualityOk: true
url: "https://github.com/skoba/openehr-rails"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [91]
stars: 9
forks: 5
openIssues: 9
closedIssues: 15
watchers: 6
contributors: 2
recentReleases: 0
createdAt: "2012-04-17T12:36:31Z"
lastCommitAt: "2026-08-12T05:13:39Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 74
undervaluedScore: 45
maintainers: ["skoba"]
openGraphImageUrl: "https://opengraph.githubassets.com/4a5f561def74b0b66f63b98be61e65e41ed260c78639106302ecc2bedde05242/skoba/openehr-rails"
---

# Synopsys

This is a support library for openEHR on Rails implementation and
still working exeperimental codes.

## Requirements

* Current version supports Rails 7.0+ and Rails 8.x
* Requires Ruby 3.0 or later (tested with Ruby 3.4)
* Developed with CRuby 3.4 on Linux
* Previous versions supported older Ruby/Rails versions (see git history)

## Usage

Generate a complete Rails resource (model, migration, controller,
views, routes, i18n locale, request spec) from an openEHR Operational
Template (.opt):

```sh
# one-time setup: template registry model + migration + initializer
bin/rails generate openehr:install
bin/rails db:migrate

# scaffold from an OPT file
bin/rails generate openehr:scaffold path/to/your_template.opt
bin/rails db:migrate
bin/rails db:seed   # registers the template in the openehr_templates table
```

The generated model keeps typed columns for Rails forms and queries,
and **persists every record as a canonical openEHR RM Composition** —
first as a **typed node graph** in `openehr_rm_*` tables (if the
install migrations were run), and also as a JSON document in the
`rm_composition` column for backward compatibility and export.

The `FIELD_MAP` constant on the…
