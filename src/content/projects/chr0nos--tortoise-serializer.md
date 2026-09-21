---
repo: "Chr0nos/tortoise_serializer"
name: "tortoise_serializer"
description: "Tortoise-ORM serialization using pydantic BaseModel without the pain of pydantic_model_creator"
readmeQualityOk: true
url: "https://github.com/Chr0nos/tortoise_serializer"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2024-12-19T15:42:43Z"
lastCommitAt: "2026-09-21T09:14:57Z"
lastReleaseAt: "2025-07-01T08:45:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 65
undervaluedScore: 34
maintainers: ["Chr0nos"]
openGraphImageUrl: "https://opengraph.githubassets.com/eeb0681b4c53fa170f76d848b23db53b5bbbcbb77831653d80d1baa07f7720ce/Chr0nos/tortoise_serializer"
---

# Tortoise Serializer

## Motivation
This project was created to address some of the limitations of `pydantic_model_creator`, including:
- The ability to use a `context` in serialization at the field level.
- Access to the actual Tortoise `Model` instance during serialization.
- Improved readability.
- Support for adding extra logic to specific serializers.
- The ability to document fields in a way that is visible in Swagger.

## Useful readings
- https://docs.pydantic.dev/latest/
- https://tortoise.github.io/

## Installation
```shell
pip install tortoise-serializer
```

## Core concept
A `Serializer` does not need to know which model it will serialize. For example:
```python
from tortoise_serializer import Serializer

class ItemByNameSerializer(Serializer):
    id: int
    name: str

products = await ItemByNameSerializer.from_queryset(Product.all())
users = await ItemByNameSerializer.from_queryset(User.all())
```
This is entirely valid.

`Serializers` are `pydantic.BaseModel` objects, which means you can directly return them from FastAPI endpoints or use any functionality provided by BaseModel.

## Usage
### Reading
```python
from tortoise_serializer import Serializer
from…
