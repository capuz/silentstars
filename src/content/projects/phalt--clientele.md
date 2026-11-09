---
repo: "phalt/clientele"
name: "clientele"
description: "Clientele is a comprehensive framework for building and maintaining API Integrations"
readmeQualityOk: true
url: "https://github.com/phalt/clientele"
homepage: "http://docs.clientele.dev/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["api", "asyncio", "openapi", "pydantic", "python", "httpx", "django-ninja", "django-rest-framework", "fastapi", "api-rest"]
stars: 220
forks: 16
openIssues: 7
closedIssues: 59
watchers: 2
contributors: 9
recentReleases: 0
createdAt: "2023-07-21T07:13:34Z"
lastCommitAt: "2026-11-09T11:59:08Z"
lastReleaseAt: "2023-08-09T22:28:20Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 39
maintainers: ["phalt", "claude", "chassing"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/669029134/e7b11b99-3974-411c-9eff-857b32271f2a"
discussionCount: 15
---

# ⚜️ Clientele

## What is Clientele?

Clientele is a comprehensive framework for building and maintaining API Integrations.

Focus on the functionality and the data you want from an API, and let Clientele handle the rest.

Build, test, and maintain API integrations confidently.

## Example code

```python
from clientele import api
from pydantic import BaseModel

client = api.APIClient(base_url="https://pokeapi.co/api/v2/")

class Pokemon(BaseModel):
    name: str

@client.get("/pokemon/{id}")
def get_pokemon_name(id: int, result: Pokemon) -> str:
    return result.name
```

[See more examples](https://docs.clientele.dev/api-examples/)

## Why use Clientele?

- **A comfortable abstraction** - Encourages consistency and focus on the functionality.
- **Easy to learn** - Clientele is visually similar to popular python API server frameworks.
- **Easy to test** - All the testing tools you need to maintain API integrations.
- **Easy to configure** - Sensible HTTP defaults and plenty of hooks for customisation.
- **Easy data validation** - Built in data validation using [Pydantic](https://docs.pydantic.dev/latest/).
- **Core built-ins** - Caching, Network, and Retry handling built…
