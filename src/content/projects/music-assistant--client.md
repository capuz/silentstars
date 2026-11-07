---
repo: "music-assistant/client"
name: "client"
description: "Python client to interact with the Music Assistant Server API"
readmeQualityOk: true
url: "https://github.com/music-assistant/client"
language: "Python"
languages: ["Python"]
languagePcts: [95]
stars: 16
forks: 14
openIssues: 1
closedIssues: 6
watchers: 0
contributors: 22
recentReleases: 0
createdAt: "2024-10-30T00:04:31Z"
lastCommitAt: "2026-11-07T10:37:28Z"
lastReleaseAt: "2025-02-26T10:43:54Z"
status: "thriving"
tags: ["hidden_gem", "funded", "fork_magnet"]
healthScore: 95
undervaluedScore: 77
maintainers: ["MarvinSchenkel", "musicassistant-bot[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/04e87ae28276b229810769b56a4cd612ec8bbbbf4fb074b37ffb5192569353db/music-assistant/client"
fundingLinks: ["CUSTOM:https://www.openhomefoundation.org"]
---

# Music Assistant Client

Python client to interact with the [Music Assistant Server](https://github.com/music-assistant/server) API

---

## Installation

```bash
pip install music-assistant-client
```

## Authentication

Starting with Music Assistant Server schema version 28, authentication is required to connect to the server. The client supports multiple authentication methods:

### 1. Using a Long-Lived Token (Recommended)

The recommended approach is to use a long-lived token.
You can create Long Lived tokens in the Music Assistant web interface in your profile settings.
You can also obtain one using the `login_with_token()` helper:

```python
from music_assistant_client import login_with_token, MusicAssistantClient

# Login and get a long-lived token
user, token = await login_with_token(
    "http://your-server:8095",
    "your_username",
    "your_password",
    token_name="My Application"
)

# Save the token securely for future use
print(f"Your token: {token}")

# Use the token to connect
async with MusicAssistantClient("http://your-server:8095", None, token=token) as client:
    await client.start_listening()
```

### 2. Manual Token Management

You can also manually…
