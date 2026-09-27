---
repo: "nnsnodnb/kalyke"
name: "kalyke"
description: ":toolbox: A library for interacting with APNs and VoIP using HTTP/2."
readmeQualityOk: true
url: "https://github.com/nnsnodnb/kalyke"
homepage: "https://pypi.org/project/kalyke-apns"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["apns", "voip", "python", "pip", "liveactivity"]
stars: 19
forks: 6
openIssues: 1
closedIssues: 13
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2019-05-05T11:04:23Z"
lastCommitAt: "2026-09-27T09:28:18Z"
lastReleaseAt: "2023-01-11T13:21:48Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded"]
healthScore: 94
undervaluedScore: 71
maintainers: ["nnsnodnb", "renovate[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/602612726c29c3fde70a86cbe4d862b826798931aea008bc898abb867645dee4/nnsnodnb/kalyke"
fundingLinks: ["GITHUB:https://github.com/nnsnodnb"]
discussionCount: 1
---

# kalyke

A library for interacting with APNs and VoIP using HTTP/2.

## Installation

kalyke requires python 3.10 or later.

```bash
$ pip install kalyke-apns
```

## Usage

### APNs

```python
import asyncio

from kalyke import ApnsClient, ApnsConfig, Payload, PayloadAlert

client = ApnsClient(
    use_sandbox=True,
    team_id="YOUR_TEAM_ID",
    auth_key_id="AUTH_KEY_ID",
    auth_key_filepath="/path/to/AuthKey_AUTH_KEY_ID.p8",
)

registration_id = "a8a799ba6c21e0795b07b577b562b8537418570c0fb8f7a64dca5a86a5a3b500"

payload_alert = PayloadAlert(title="YOUR TITLE", body="YOUR BODY")
payload = Payload(alert=payload_alert, badge=1, sound="default")
config = ApnsConfig(topic="com.example.App")

asyncio.run(
    client.send_message(
        device_token=registration_id,
        payload=payload,
        apns_config=config,
    )
)
```

### LiveActivity

> [!NOTE]
> - The topic suffix must be `.push-type.liveactivity`.
> - `LiveActivityPayload.event` default value is `LiveActivityEvent.UPDATE`.

```python
import asyncio
from datetime import datetime

from kalyke import LiveActivityClient, LiveActivityApnsConfig, LiveActivityEvent, LiveActivityPayload, PayloadAlert

client =…
