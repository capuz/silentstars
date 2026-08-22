---
repo: "skoba/openehr-rails"
name: "openehr-rails"
description: "Rails related openEHR extension"
readmeQualityOk: true
url: "https://github.com/skoba/openehr-rails"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [89]
stars: 9
forks: 5
openIssues: 0
closedIssues: 25
watchers: 6
contributors: 3
recentReleases: 3
createdAt: "2012-04-17T12:36:31Z"
lastCommitAt: "2026-08-22T04:05:54Z"
lastReleaseAt: "2026-08-22T04:05:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 95
undervaluedScore: 75
maintainers: ["skoba"]
openGraphImageUrl: "https://opengraph.githubassets.com/12f499d7649e4091fc5bbabde1a3effee6ab888afa4df87cf37727b88c8b78a5/skoba/openehr-rails"
---

# Synopsis

openehr-rails turns an openEHR Operational Template (`.opt`) into a
working Rails resource in one command — model, migration, CRUD UI,
i18n locale, and HL7 FHIR R5 profiles. What sets it apart: usability
and openEHR conformance usually trade off against each other, but here
you get both. The generated model behaves like any ordinary
ActiveRecord model (typed columns, familiar forms and queries), while
every save also persists a fully conformant openEHR RM Composition —
canonical JSON plus a versioned, audit-trailed node graph — with no
hand-written mapping code. HL7 FHIR R5 support is derived automatically
from the same RM type mapping rather than hand-coded per resource, and
AQL (openEHR's query language) works identically from a Ruby model API
(`Model.aql`), a REST endpoint, and a browser console.

## Requirements

* Current version supports Rails 7.0+ and Rails 8.x
* Requires Ruby 3.3 or later (tested with Ruby 3.4)
* Developed with CRuby 3.4 on Linux
* Previous versions supported older Ruby/Rails versions (see git history)

## Usage

Generate a complete Rails resource (model, migration, controller,
views, routes, i18n locale, request spec) from an openEHR…
