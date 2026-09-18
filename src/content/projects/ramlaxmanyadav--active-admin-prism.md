---
repo: "ramlaxmanyadav/active_admin_prism"
name: "active_admin_prism"
description: "Active Admin theme built on the Prism design system — swaps in a purple/lavender palette, refined typography, and subtle motion (animated backgrounds, gradient accents, transition states) over the default ActiveAdmin UI. Drop-in styling for dashboards, resource tables, filters, and forms without touching your app's business logic."
readmeQualityOk: true
url: "https://github.com/ramlaxmanyadav/active_admin_prism"
language: "SCSS"
languages: ["SCSS", "Ruby"]
languagePcts: [41, 36]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-07-12T13:07:07Z"
lastCommitAt: "2026-09-18T14:03:41Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 25
maintainers: ["ramlaxmanyadav"]
openGraphImageUrl: "https://opengraph.githubassets.com/4838efef9b580b96b5c6c305b63b86753e83e8398766c6341a710dde558b852b/ramlaxmanyadav/active_admin_prism"
---

# active_admin_prism

Prism is a plug-and-play [ActiveAdmin](https://activeadmin.info) theme:
a collapsible left sidebar with grouped navigation, card-style panels and
tables, and reskinned Formtastic forms — no Sass compiler, no JS bundler,
no manual asset manifest edits.

**→ See [INTEGRATION.md](https://github.com/ramlaxmanyadav/active_admin_prism/blob/HEAD/INTEGRATION.md) for the full integration guide**
(configuration reference, feature-by-feature usage, switching/disabling the
theme, troubleshooting). This README is a quick start.

## Live demo

A live demo dashboard is running at
**[prism-demo.onrender.com/admin](https://prism-demo.onrender.com/admin/login)**:

```
Username: admin@example.com
Password: password
```

The demo is hosted on Render's free tier, so the first request after a
period of inactivity can take up to a minute while the instance spins up.

## Requirements

- ActiveAdmin `>= 3.0, < 4`
- Rails `>= 7.0`
- Ruby `>= 3.1`

## Install
Add to your Gemfile:

```ruby
gem "active_admin_prism"
```

```sh
bundle install
rails g active_admin_prism:install
```

That's it. The generator:

- adds one line — `ActiveAdminPrism.enable!` — to your…
