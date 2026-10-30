---
repo: "incident-io/sdk-python"
name: "sdk-python"
description: "Python SDK for the incident.io API"
readmeQualityOk: true
url: "https://github.com/incident-io/sdk-python"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 35
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 6
recentReleases: 10
createdAt: "2026-09-18T10:11:51Z"
lastCommitAt: "2026-10-30T10:23:06Z"
lastReleaseAt: "2026-10-01T17:28:08Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 45
maintainers: ["github-actions[bot]", "joladev", "yuhanwwu"]
openGraphImageUrl: "https://opengraph.githubassets.com/79dc889c996acd0da46917464ba16e07f11eafe6f9483af8f4c5236e3664a50e/incident-io/sdk-python"
---

# incident.io Python SDK

The official Python SDK for the [incident.io](https://incident.io)
[public API](https://api-docs.incident.io/).

It is generated automatically from our published OpenAPI schema, so it always
tracks the live API — there is a function for every endpoint, and a type for
every request and response.

## Install

```bash
pip install incident-io
```

Requires Python 3.11 or later.

## Quickstart

Create an API key in your incident.io dashboard under **Settings → API keys**,
then:

```python
from incident_io import AuthenticatedClient
from incident_io.api.incidents_v2 import incidents_v2_list
from incident_io.models import IncidentsListResultV2

client = AuthenticatedClient(
    base_url="https://api.incident.io",
    token="my-api-key",
)

result = incidents_v2_list.sync(client=client, page_size=25)
if isinstance(result, IncidentsListResultV2):
    for incident in result.incidents:
        print(incident.reference, incident.name)
```

The `isinstance` check isn't ceremony: a failed request comes back as an
`ErrorResponse` rather than raising, so `result` is one of the two. The SDK
ships type annotations, so a type checker will tell you if you skip it.

Every…
