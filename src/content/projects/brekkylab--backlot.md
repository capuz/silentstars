---
repo: "brekkylab/backlot"
name: "backlot"
description: "A local emulator for enterprise SaaS APIs — Slack, Gmail, Google Drive, GitHub, Jira, Notion, S3 and more — with the real response shapes, pagination, auth and per-document ACLs, over a corpus you supply."
readmeQualityOk: true
url: "https://github.com/brekkylab/backlot"
homepage: "https://pypi.org/project/backlot"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["ai-agents", "amazon-s3", "api-mock", "enterprise", "fastapi", "github", "gmail", "google-drive", "jira", "mcp"]
stars: 264
forks: 76
openIssues: 170
closedIssues: 402
watchers: 2
contributors: 72
recentReleases: 7
createdAt: "2026-07-02T11:04:23Z"
lastCommitAt: "2026-10-30T10:22:44Z"
lastReleaseAt: "2026-10-23T09:14:11Z"
status: "thriving"
tags: ["needs_contributors", "release_machine"]
healthScore: 93
undervaluedScore: 33
maintainers: ["nuriyoo", "khj809", "tony1233200"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1287077005/846bf1b7-ed4a-4a49-abe1-3bf4f21f6318"
---

# Backlot

**Run enterprise SaaS APIs locally.**

Backlot is a local emulator for Slack, Gmail, Google Drive, GitHub, Jira, Notion, S3 and other enterprise APIs. It reproduces the response shapes, pagination, authentication, errors and per-document access controls an integration has to handle, over a deterministic corpus you control — so you build and test against the official vendor SDKs with **no vendor account**, **no OAuth approval**, **no secrets in CI** and **no network**.

## Try it in 60 seconds

```bash
pip install backlot
backlot import --bundled   # a corpus ships with the package; nothing to fetch or write
backlot serve              # every supported API, at http://127.0.0.1:8000
```

Point an official SDK at it by changing one base URL:

```python
from slack_sdk import WebClient  # pip install slack_sdk

slack = WebClient(token="admin-service-token", base_url="http://127.0.0.1:8000/slack/api/")
print(slack.conversations_list()["channels"])
```

The same call targets Slack in production and Backlot in development. Backlot supplies the data and the credentials; your code keeps the vendor's request and response contract.

A test can run its own server instead, on a free…
