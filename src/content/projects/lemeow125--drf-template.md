---
repo: "lemeow125/DRF_Template"
name: "DRF_Template"
description: "A Django REST Framework template for building RESTful APIs"
readmeQualityOk: true
url: "https://github.com/lemeow125/DRF_Template"
language: "Python"
languages: ["Python"]
languagePcts: [85]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-01-06T04:28:09Z"
lastCommitAt: "2026-07-20T06:35:22Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 60
maintainers: ["lemeow125"]
openGraphImageUrl: "https://opengraph.githubassets.com/d33d36fd54579c4d32755ce6824a40368cb117c06ac3094103066498a5a318b5/lemeow125/DRF_Template"
---

## DRF-Template

A barebones Django REST Framework template for personal use in projects.

- Pre-templated emails
- Caching via Redis
- Debug mode profiling (via Django Silk)
- Template CI/CD for automated builds/tests/linting/deployments (see [service_queue](https://github.com/lemeow125/Service_Queue) for more info)

A live API demo can be found [here](https://api.template.06222001.xyz/api/v1/swagger)

### Development

- Create a copy of the `.env.sample` file and name it as `.env` in the same directory
- Populate .env with values
- Run `docker-compose -f docker-compose.dev.yml up`

When using `docker-compose.dev.yml`, the entire project directory is mounted onto the container allowing for hot-reloading. This requires `DEBUG` to be set to `True`.

Also make sure to follow through the steps shown in the `stripe-listener` container for initial setup with Stripe.

### Deployment

A sample `docker-compose.yml` is provided which I use in hosting the demo. `DEBUG` should be set to `False` when deploying as to not expose the URLs fro Celery Flower and the Django Silk Profiler. The local Inbucket container is not present with `DEBUG` turned off so make sure to specify an external SMTP…
