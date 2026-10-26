---
repo: "reportportal/client-Python"
name: "client-Python"
description: "A common client library for Python-based agents"
readmeQualityOk: true
url: "https://github.com/reportportal/client-Python"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["python", "reportportal", "client-python", "testing"]
stars: 46
forks: 93
openIssues: 0
closedIssues: 74
watchers: 39
contributors: 69
recentReleases: 0
createdAt: "2016-09-12T10:41:14Z"
lastCommitAt: "2026-10-26T09:17:54Z"
lastReleaseAt: "2020-03-06T10:41:09Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 90
undervaluedScore: 54
maintainers: ["HardNorth", "othererik", "M1troll"]
openGraphImageUrl: "https://opengraph.githubassets.com/0446df898ec9f0477d96190db5faf5cc8c0aa439838003e69d88903f17e18ddf/reportportal/client-Python"
---

# ReportPortal python client

Library used only for implementors of custom listeners for ReportPortal

## Already implemented listeners:

- [PyTest Framework](https://github.com/reportportal/agent-python-pytest)
- [Robot Framework](https://github.com/reportportal/agent-Python-RobotFramework)
- [Behave Framework](https://github.com/reportportal/agent-python-behave)
- [Nose Framework (archived)](https://github.com/reportportal/agent-python-nosetests)

## Installation

The latest stable version is available on PyPI:

```
pip install reportportal-client
```

## Usage

Basic usage example:

```python
import os
import subprocess
from mimetypes import guess_type

from reportportal_client import RPClient
from reportportal_client.helpers import timestamp

endpoint = "http://docker.local:8080"
project = "default"
# You can get UUID from user profile page in the ReportPortal.
api_key = "1adf271d-505f-44a8-ad71-0afbdf8c83bd"
launch_name = "Test launch"
launch_doc = "Testing logging with attachment."

client = RPClient(endpoint=endpoint, project=project,
                  api_key=api_key)

# Start log upload thread
client.start()

# Start launch.
launch = client.start_launch(name=launch_name,…
