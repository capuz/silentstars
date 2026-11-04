---
repo: "elixir-cloud-aai/foca"
name: "foca"
description: "Opinionated API-first Python microservice archetype for rapid development"
readmeQualityOk: true
url: "https://github.com/elixir-cloud-aai/foca"
homepage: "https://foca.readthedocs.io/"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["openapi", "flask", "archetype", "connexion", "microservice", "python", "elixir-europe", "elixir-on-cloud"]
stars: 18
forks: 15
openIssues: 17
closedIssues: 299
watchers: 21
contributors: 25
recentReleases: 0
createdAt: "2020-02-05T15:30:51Z"
lastCommitAt: "2026-11-04T11:27:20Z"
lastReleaseAt: "2022-11-07T17:49:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 99
undervaluedScore: 68
maintainers: ["uniqueg", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/21e069ed95b0f1505a1a79c286479b91a574a39dd5aab385a591ded37c4ab726/elixir-cloud-aai/foca"
---

# FOCA

An archetype for [OpenAPI](https://www.openapis.org/)-based web services in
Python, brought to you by [ELIXIR On-Cloud](https://elixir-on.cloud/). FOCA
(**F**lask-**O**penAPI-**C**onnexion-**A**rchetype) builds a
[Connexion](https://github.com/spec-first/connexion) app on
[Flask](https://flask.palletsprojects.com/) from your OpenAPI specifications
and a single configuration file, so that you only write the controllers and
the logic of your app. It provides:

- OpenAPI 2.x/3.x specifications, validated and routed by Connexion and
  modified on the fly;
- a validated, typed configuration, with environment-specific overlays;
- errors as [problem details](https://www.rfc-editor.org/rfc/rfc9457);
- bearer token validation for the OpenID Connect providers that you trust;
- access control with [Casbin](https://casbin.org/): policies on all
  operations, roles of users and groups, resource ownership and a
  permissions API;
- [MongoDB](https://www.mongodb.com/) databases, collections and indexes;
- background tasks with [Celery](https://docs.celeryq.dev/) and
  [RabbitMQ](https://www.rabbitmq.com/);
- CORS and a [GA4GH service…
