---
repo: "resend/resend-python"
name: "resend-python"
description: "Resend's official python sdk"
readmeQualityOk: true
url: "https://github.com/resend/resend-python"
homepage: "https://resend.com"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 134
forks: 24
openIssues: 1
closedIssues: 42
watchers: 4
contributors: 33
recentReleases: 0
createdAt: "2022-12-06T17:58:04Z"
lastCommitAt: "2026-11-17T14:42:32Z"
lastReleaseAt: "2024-01-10T01:00:36Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 48
maintainers: ["dielduarte", "gabrielmfern", "felipefreitag"]
openGraphImageUrl: "https://opengraph.githubassets.com/aec8e586c38f822db2eba10a5c46ffecf74fc5fe2ca31f1e8cbfef7fd620f2af/resend/resend-python"
---

# Resend Python SDK

---

## Installation

To install Resend Python SDK, simply execute the following command in a terminal:

```
pip install resend
```

## Setup

First, you need to get an API key, which is available in the [Resend Dashboard](https://resend.com).

```py
import resend
import os

resend.api_key = "re_yourkey"
```

## Example

You can get an overview about all parameters in the [Send Email](https://resend.com/docs/api-reference/emails/send-email) API reference.

```py
import os
import resend

resend.api_key = "re_yourkey"

params: resend.Emails.SendParams = {
    "from": "onboarding@resend.dev",
    "to": ["delivered@resend.dev"],
    "subject": "hi",
    "html": "<strong>hello, world!</strong>",
    "reply_to": "to@gmail.com",
    "bcc": "bcc@resend.dev",
    "cc": ["cc@resend.dev"],
    "tags": [
        {"name": "tag1", "value": "tagvalue1"},
        {"name": "tag2", "value": "tagvalue2"},
    ],
}

email: resend.Emails.SendResponse = resend.Emails.send(params)
print(email)
```

## Async Support

The SDK supports async operations via `httpx`. Install the async extra:

```bash
pip install resend[async]
```

Once installed, async methods (suffixed with `_async`)…
