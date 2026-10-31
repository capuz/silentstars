---
repo: "itswadesh/gocommerce"
name: "gocommerce"
description: "A composable commerce engine for Go: catalog, carts, checkout, orders, payments and inventory as a library, with an embedded admin panel. One production dependency."
readmeQualityOk: true
url: "https://github.com/itswadesh/gocommerce"
homepage: "https://kitcommerce.store/gocommerce/"
language: "Go"
languages: ["Go", "Svelte"]
languagePcts: [62, 27]
topics: ["admin-panel", "b2b-ecommerce", "ecommerce", "ecommerce-api", "ecommerce-platform", "go", "golang", "headless-commerce", "marketplace", "mcp-server"]
stars: 11
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-08-30T19:05:35Z"
lastCommitAt: "2026-10-31T07:46:27Z"
lastReleaseAt: "2026-10-16T08:55:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 61
maintainers: ["itswadesh"]
openGraphImageUrl: "https://opengraph.githubassets.com/8eddb3a3e65780262eeefa87943bcc1c5c5b38c50250859d3645ad44eb4496f1/itswadesh/gocommerce"
---

# GoCommerce

**Commerce primitives in Go, without a commerce monolith.**

GoCommerce is a small, composable commerce engine. It owns the hard parts —
products and variants, inventory, carts, checkout, orders, payments,
fulfillment and durable events — over a PostgreSQL database. Integrations are
ordinary Go packages you wire together in `main()`.

The project's page is [kitcommerce.store/gocommerce](https://kitcommerce.store/gocommerce/),
with every screen of the [admin panel](https://kitcommerce.store/gocommerce/admin/),
the [modules](https://kitcommerce.store/integrations/) and the
[features](https://kitcommerce.store/features/).

> **Status: 1.0.** The engine and the modules below are implemented and
> tested. The exported API and the HTTP contract are stable and breaking
> either takes a major version. See [PLAN.md](https://github.com/itswadesh/gocommerce/blob/HEAD/PLAN.md) for the architecture
> and the decisions behind it.

## A store is a Go program

```go
app, err := gocommerce.New(
    gocommerce.Config{
        DBURL:       os.Getenv("DATABASE_URL"),
        Currency:    "USD",
        AdminTokens: []string{os.Getenv("GOCOMMERCE_ADMIN_TOKEN")},
    },…
