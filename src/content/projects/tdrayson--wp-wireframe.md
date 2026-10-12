---
repo: "tdrayson/wp-wireframe"
name: "wp-wireframe"
description: "A fast, standardised way to build WordPress settings pages from a PHP array."
readmeQualityOk: true
url: "https://github.com/tdrayson/wp-wireframe"
language: "PHP"
languages: ["PHP", "JavaScript"]
languagePcts: [56, 33]
stars: 50
forks: 2
openIssues: 3
closedIssues: 15
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-04-18T16:34:52Z"
lastCommitAt: "2026-10-12T11:15:30Z"
lastReleaseAt: "2026-06-04T11:56:09Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 81
undervaluedScore: 20
maintainers: ["tdrayson", "BrianHenryIE", "drkskwlkr"]
openGraphImageUrl: "https://opengraph.githubassets.com/79087dfc55d25cf2b51292b618db79e97ae93b41382b1ae86fddae01a5ddb2ee/tdrayson/wp-wireframe"
---

# WP Wireframe

**Skip the admin UI. Ship your plugin.**

A fast, standardised way to build WordPress settings pages. List your fields in a PHP array and WP Wireframe builds the whole admin page using WordPress react components. Same clean UI, same field behaviour, same patterns across every plugin you ship.

---

## Features

- **One PHP array, full settings page** — tabs, sections, and 20+ field types
- **Standardised fields** — every input looks and behaves the same across plugins and projects
- **Native WordPress look** — built on `@wordpress/components` and `@wordpress/admin-ui`
- **Laravel-style API** — `Settings::get()`, `Settings::bool()`, dot notation
- **Validation & conditional fields** — server-side rules and show/hide logic built right into the field config
- **Multi-page, repeaters, import/export, i18n** — included out of the box
- **Zero JS build** — pre-built React app ships with the package

---

## Demo Settings UI

An example of what the settings page looks like

---

## Example plugins

Working starting points you can copy and adapt:

- [Field Reference](https://github.com/tdrayson/wp-wireframe/blob/HEAD/examples/field-reference) — kitchen-sink demo of every…
