---
repo: "sevenseacat/cinder"
name: "cinder"
description: "A powerful, intelligent data collection component for Ash Framework resources in Phoenix LiveView"
readmeQualityOk: true
url: "https://github.com/sevenseacat/cinder"
homepage: "http://cinder.sevenseacat.net"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [100]
stars: 127
forks: 41
openIssues: 21
closedIssues: 67
watchers: 5
contributors: 30
recentReleases: 0
createdAt: "2025-06-15T03:52:50Z"
lastCommitAt: "2026-10-15T08:32:38Z"
status: "thriving"
tags: []
healthScore: 93
undervaluedScore: 47
maintainers: ["sevenseacat", "Alt-iOS", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/43d439f46a60ec606a6573d5b04950d0a2540332ed9348fd4b0bfe3fade0fb14/sevenseacat/cinder"
---

# Cinder

A powerful, intelligent data collection component for Ash Framework resources in Phoenix LiveView.

## What is Cinder?

Cinder transforms complex data table requirements into simple, declarative markup. With automatic type inference and intelligent defaults, you can build feature-rich tables, lists, and grids with minimal configuration.

```heex
<Cinder.collection resource={MyApp.User} actor={@current_user}>
  <:col :let={user} field="name" filter sort>{user.name}</:col>
  <:col :let={user} field="email" filter>{user.email}</:col>
  <:col :let={user} field="department.name" filter sort>{user.department.name}</:col>
  <:col :let={user} field="settings__country" filter>{user.settings.country}</:col>
</Cinder.collection>
```

Cinder automatically provides:
- ✅ Intelligent filter types based on your Ash resource (enums become selects, dates become range pickers, etc.)
- ✅ Interactive sorting with visual indicators
- ✅ Pagination with efficient queries
- ✅ Relationship and embedded resource support
- ✅ URL state management for bookmarkable views

## Key Features

- **📋 Multiple Layouts**: Table, List, and Grid with shared filtering, sorting, and pagination
- **🧠 Intelligent…
