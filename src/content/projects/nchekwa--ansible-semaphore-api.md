---
repo: "nchekwa/ansible-semaphore-api"
name: "ansible-semaphore-api"
description: "Ansible Semaphore Python API Lib"
readmeQualityOk: true
url: "https://github.com/nchekwa/ansible-semaphore-api"
homepage: "https://pypi.org/project/semaphore-api/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ansible", "ansible-semaphore", "api", "openapi-generator", "semui", "python"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-12-02T04:28:00Z"
lastCommitAt: "2026-07-29T06:13:40Z"
lastReleaseAt: "2024-06-21T13:36:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 42
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/eafd3cb6c2d89f0814cc11b5100300299b3ee108eb9d5470ae3f228f1b17083d/nchekwa/ansible-semaphore-api"
---

# ansible-semaphore-api

[Ansible Semaphore](https://www.ansible-semaphore.com/) Python API Lib <br> 

<br>

 
```bash
pip install semaphore-api
```

-or- manual installation:
```bash
SEMAPHORE_API_VERSION=$(curl -s https://api.github.com/repos/nchekwa/ansible-semaphore-api/releases/latest | jq -r '.name' | sed 's/^v//')
echo $SEMAPHORE_API_VERSION
curl -LJOs https://github.com/nchekwa/ansible-semaphore-api/raw/main/dist/semaphore_api-$SEMAPHORE_API_VERSION-py3-none-any.whl
pip install semaphore_api-$SEMAPHORE_API_VERSION-py3-none-any.whl
```

# Example:
## Generate token based on user credentials:

```python
from semaphore_api.configuration import Configuration
from semaphore_api.api.authentication_api import AuthenticationApi
from semaphore_api.api_client import ApiClient
from semaphore_api.api.projects_api import ProjectsApi
from semaphore_api.models.login import Login

from semaphore_api.models.api_token import APIToken
from semaphore_api.api_response import ApiResponse
from semaphore_api.api.user_api import UserApi

host = "127.0.0.1"
port="3000"
protocol="http"
username="admin"
password="admin"

configuration = Configuration(
    host = f"{protocol}://{host}:{port}/api",
)…
