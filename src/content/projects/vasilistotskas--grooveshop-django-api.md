---
repo: "vasilistotskas/grooveshop-django-api"
name: "grooveshop-django-api"
description: "Django Ecommerce"
readmeQualityOk: true
url: "https://github.com/vasilistotskas/grooveshop-django-api"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["admin-dashboard", "authentication", "authorization", "django", "django-rest-framework"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2023-07-05T14:06:16Z"
lastCommitAt: "2026-09-09T08:18:44Z"
lastReleaseAt: "2023-07-21T19:36:52Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 68
maintainers: ["vasilistotskas", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ca6b17075f8fd7fbfe95328188d6f465baf2a5319390f5ef14da7c097bf17c2f/vasilistotskas/grooveshop-django-api"
---

# Grooveshop Django API

## Overview

A headless, multi-tenant e-commerce API built with Django 6 and Django REST
Framework. Served as ASGI (Gunicorn managing Uvicorn workers) with real-time WebSocket
notifications via Django Channels; each store is a django-tenants schema resolved from
the request host. Uses Knox + Django Allauth for authentication (token API + social/MFA),
Celery with RabbitMQ broker for background tasks, PostgreSQL 18 for data storage, Redis
for caching and Channels layer, and Meilisearch for federated search. Features include
multi-language support (Greek, English, German), Stripe payments via dj-stripe,
comprehensive test coverage, and a Django Unfold admin panel.

## Project Structure

All Django apps live at the project root (flat structure, no `src/` directory):

- **core/** — Shared infrastructure: base views, serializers, permissions, middleware, filters, caching, Celery config, URL routing
- **tenant/** — Multi-tenancy control plane: tenant/domain models, provisioning, billing, lifecycle, staff identity, per-tenant credentials
- **user/** — User accounts, authentication, and profile management
- **product/** — Product catalog, categories, reviews,…
