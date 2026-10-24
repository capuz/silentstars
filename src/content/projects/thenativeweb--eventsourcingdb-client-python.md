---
repo: "thenativeweb/eventsourcingdb-client-python"
name: "eventsourcingdb-client-python"
description: "The official Python client SDK for EventSourcingDB."
readmeQualityOk: true
url: "https://github.com/thenativeweb/eventsourcingdb-client-python"
homepage: "https://www.eventsourcingdb.io"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 18
forks: 0
openIssues: 0
closedIssues: 26
watchers: 2
contributors: 10
recentReleases: 0
createdAt: "2023-03-18T13:41:46Z"
lastCommitAt: "2026-10-24T08:08:25Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 68
maintainers: ["dependabot[bot]", "goloroden"]
openGraphImageUrl: "https://opengraph.githubassets.com/13f18e9dae505dada5d4f0c07f04d9ad4a83838927df6ae5fb320d4381157ac2/thenativeweb/eventsourcingdb-client-python"
---

# eventsourcingdb

The official Python client SDK for [EventSourcingDB](https://www.eventsourcingdb.io) – a purpose-built database for event sourcing.

EventSourcingDB enables you to build and operate event-driven applications with native support for writing, reading, and observing events. This client SDK provides convenient access to its capabilities in Python.

For more information on EventSourcingDB, see its [official documentation](https://docs.eventsourcingdb.io/).

This client SDK includes support for [Testcontainers](https://testcontainers.com/) to spin up EventSourcingDB instances in integration tests. For details, see [Using Testcontainers](#using-testcontainers).

## Getting Started

Install the client SDK:

```shell
pip install eventsourcingdb
```

Import the `Client` class and create an instance by providing the URL of your EventSourcingDB instance and the API token to use:

```python
from eventsourcingdb import Client

url = 'http://localhost:3000'
api_token = 'secret'

client = Client(
  base_url = url,
  api_token = api_token,
)
```

Then call the `ping` function to check whether the instance is reachable. If it is not, the function will raise an error:

```python…
