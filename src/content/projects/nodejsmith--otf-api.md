---
repo: "NodeJSmith/otf-api"
name: "otf-api"
description: "Python OrangeTheory API Client"
readmeQualityOk: true
url: "https://github.com/NodeJSmith/otf-api"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 21
forks: 4
openIssues: 7
closedIssues: 29
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2024-06-11T00:56:48Z"
lastCommitAt: "2026-11-06T12:18:15Z"
lastReleaseAt: "2024-09-23T16:35:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 60
maintainers: ["NodeJSmith", "nodejsmith-release-please[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0171ad18601fef48d87b9ca76d3114206584cff4ede9f847a057948deac5031d/NodeJSmith/otf-api"
discussionCount: 6
---

Simple API client for interacting with the OrangeTheory Fitness APIs.

Review the [documentation](https://otf-api.readthedocs.io/en/stable/).

This library allows access to the OrangeTheory API to retrieve workouts and performance data, class schedules, studio information, and bookings.

## Installation
```bash
pip install otf-api
```

## Overview

To use the API, you need to create an instance of the `Otf` class. This will authenticate you with the API and allow you to make requests. When the `Otf` object is created it automatically grabs your member details and home studio, to simplify the process of making requests.

You can either pass an `OtfUser` object to the `OtfClass` or you can pass nothing and allow it to prompt you for your username and password.

You can also export environment variables `OTF_EMAIL` and `OTF_PASSWORD` to get these from the environment.

```python
from otf_api import Otf, OtfUser

otf = Otf()

# OR

otf = Otf(user=OtfUser(<email_address>,<password>))

```

## OpenAPI Schema

This library generates OpenAPI 3.0.3 schema files from its Pydantic models, providing a machine-readable representation of the API structure and data models. These schemas are…
