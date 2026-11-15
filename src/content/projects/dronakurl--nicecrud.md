---
repo: "Dronakurl/nicecrud"
name: "nicecrud"
description: "Edit your pydantic models with a nice GUI - CRUD Create Update Replace Delete"
readmeQualityOk: true
url: "https://github.com/Dronakurl/nicecrud"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [72, 28]
stars: 61
forks: 8
openIssues: 2
closedIssues: 12
watchers: 1
contributors: 4
recentReleases: 2
createdAt: "2024-06-01T23:53:49Z"
lastCommitAt: "2026-11-15T11:06:56Z"
lastReleaseAt: "2026-11-15T11:20:27Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 33
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/c951b0632d7c82fe7a43bb4da4a83833cd0b178864425332a619666922c4b0c8/Dronakurl/nicecrud"
---

# NiceCRUD

NiceCRUD is a CRUD (Create, Read, Update, Delete) interface built with python. The library integrates with pydantic models and [NiceGUI](https://nicegui.io) to handle data manipulation with a browser interface.

## Features

- Automatically generate CRUD interfaces from pydantic models.
- Field options, ranges, constraints, descriptions etc. are directly taken from your pydantic model
- Integrated validation and error handling with pydantic.
- Support for nested models and selection options.
- Inject your own (database?) update methods
- Minimal configuration required with sensible defaults.

## Screenshots

Taken from the [input_choices](https://github.com/Dronakurl/nicecrud/blob/HEAD/examples/input_choices.py) example:

## Installation

To install NiceCRUD, use pip:

```bash
pip install niceguicrud
```

## Quick Start

Here is a very basic example:

```python
from nicegui import ui
from pydantic import BaseModel, Field

from niceguicrud import NiceCRUD

class MyModel(BaseModel, title="User"):
    id: int
    name: str = Field(title="Name")
    age: int = Field(gt=0, title="Age")

instance1 = MyModel(id=1, name="Alice", age=30)
instance2 = MyModel(id=2, name="Bob",…
