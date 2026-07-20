---
repo: "jadolg/outline-vpn-api"
name: "outline-vpn-api"
description: "A Python API wrapper for Outline VPN https://getoutline.org/"
readmeQualityOk: true
url: "https://github.com/jadolg/outline-vpn-api"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["api-rest", "outline", "shadowsocks", "vpn", "hacktoberfest"]
stars: 146
forks: 34
openIssues: 1
closedIssues: 11
watchers: 3
contributors: 7
recentReleases: 0
createdAt: "2021-08-09T19:03:51Z"
lastCommitAt: "2026-07-20T06:33:58Z"
lastReleaseAt: "2024-02-26T20:39:40Z"
status: "thriving"
tags: []
healthScore: 92
undervaluedScore: 35
maintainers: ["jadolg", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8b4bc213e05bbc6821d1d1188f0b79d83d04f5055bf062b117d7f0e9ffea0710/jadolg/outline-vpn-api"
discussionCount: 0
---

# outline-vpn-api

A Python API wrapper for [Outline VPN](https://getoutline.org/)

## How to use

```python
from outline_vpn import OutlineVPN

# Setup the access with the API URL (Use the one provided to you after the server setup)
client = OutlineVPN(api_url="https://127.0.0.1:51083/xlUG4F5BBft4rSrIvDSWuw",
                    cert_sha256="4EFF7BB90BCE5D4A172D338DC91B5B9975E197E39E3FA4FC42353763C4E58765")

# Get all access URLs on the server
for key in client.get_keys():
    print(key.access_url)

# Create a new key
new_key = client.create_key()

# Or create a key with a specific attributes
key = client.create_key(
    key_id="new_key_001",
    name="Yet another test key",
    data_limit=1024 * 1024 * 20,
    method="aes-192-gcm",
    password="test",
    port=2323,
)

# Rename it
client.rename_key(new_key.key_id, "new_key")

# Delete it
client.delete_key(new_key.key_id)

# Set a monthly data limit for a key (20MB)
client.add_data_limit(new_key.key_id, 1000 * 1000 * 20)

# Remove the data limit
client.delete_data_limit(new_key.key_id)

```

## API documentation…
