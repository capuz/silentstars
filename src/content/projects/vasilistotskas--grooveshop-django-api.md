---
repo: "vasilistotskas/grooveshop-django-api"
name: "grooveshop-django-api"
description: "Multi-tenant e-commerce REST API for GrooveShop: Django 6, DRF, PostgreSQL schema per store, Celery, Channels, Meilisearch."
readmeQualityOk: true
url: "https://github.com/vasilistotskas/grooveshop-django-api"
homepage: "https://docs.grooveshop.space"
language: "Python"
languages: ["Python"]
languagePcts: [91]
topics: ["django", "django-rest-framework", "celery", "django-tenants", "ecommerce", "grooveshop", "headless-commerce", "meilisearch", "multi-tenant", "postgresql"]
stars: 9
forks: 1
openIssues: 47
closedIssues: 51
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2023-07-05T14:06:16Z"
lastCommitAt: "2026-11-10T14:49:27Z"
lastReleaseAt: "2023-07-21T19:36:52Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 71
maintainers: ["vasilistotskas"]
openGraphImageUrl: "https://opengraph.githubassets.com/ba980487f18f44489b020c1a3f39b8be4b8248020dfa2a37aae64b2b35224fba/vasilistotskas/grooveshop-django-api"
---

# GrooveShop Django API

The headless, multi-tenant e-commerce backend of GrooveShop: a Django 6 and
Django REST Framework API with the store admin, background jobs and real-time
notifications.

GrooveShop runs many stores on one platform. Each store is a PostgreSQL schema
(django-tenants) resolved from the request host. This API is the system of
record: the Nuxt storefront proxies its `/api/...` calls here, the agent gateway
reaches it over REST, and the storefront's TypeScript types and Zod schemas are
generated from the OpenAPI `schema.yml` committed in this repository. See the
[platform architecture](https://docs.grooveshop.space/dev/platform/architecture)
for how the services fit together. The developer docs are behind basic auth.

## Features

- **Catalogue**: products with translations, categories (trees), images, tags,
  reviews, favourites, stock with atomic reservations, EU Omnibus prior-price
  tracking, and product recommendations.
- **Checkout and orders**: carts, guest and signed-in checkout, order and
  payment state machines, transactional email, and turnover and profit reports.
- **Payments**: Viva Wallet (primary), Stripe through dj-stripe, and cash on…
