---
repo: "nstfkc/gemi"
name: "gemi"
description: "Batteries included full-stack MVC web framework"
readmeQualityOk: true
url: "https://github.com/nstfkc/gemi"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
stars: 95
forks: 3
openIssues: 74
closedIssues: 210
watchers: 2
contributors: 3
recentReleases: 10
createdAt: "2024-05-31T12:08:53Z"
lastCommitAt: "2026-09-27T09:27:56Z"
lastReleaseAt: "2026-07-25T23:22:11Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 94
undervaluedScore: 49
maintainers: ["nstfkc"]
openGraphImageUrl: "https://opengraph.githubassets.com/19410e46fe7b450ae2bd990cf421be920a97bcc157c550e3331d8c5bb20407a0/nstfkc/gemi"
---

Baterries included full-stack web framework designed for developers who enjoys life more than discussing which library is better with strangers on the internet.

Gemi provides a full set of features every web application possibly needs. Such as authentication and authorization, routing, route level middleware, type-safe data fetching and mutations, form validations,sending emails, background tasks, object storage and more.

By using Gemi, you will relieve yourself from the duty of constantly finding the best libraries for your stack and have more time for your friends and your family.

## Why/When you should use Gemi?
Even though you can build any kind of web application with Gemi, due to its nature it is a better fit for B2B apps where you need to create too many api endpoints with a relatively complex business logic. If you are building a static website, blog or an e-commerce application, nextjs or astro might be better fit because they can provide better results at initial load.

## Features

### Config based routing

Creating Api routes

``` typescript
import { ApiRouter, HttpRequest } from "gemi/http";

export default class extends ApiRouter {
  routes = {
    "/orders":…
