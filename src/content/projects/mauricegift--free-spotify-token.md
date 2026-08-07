---
repo: "mauricegift/free-spotify-token"
name: "free-spotify-token"
description: "Free to use spotify access token, auto updated every 30 minutes."
readmeQualityOk: true
url: "https://github.com/mauricegift/free-spotify-token"
homepage: "https://stoken.gifted.co.ke"
language: "HTML"
languages: ["HTML"]
languagePcts: [100]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-11-30T19:58:47Z"
lastCommitAt: "2026-08-07T05:15:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 57
maintainers: ["mauricegift"]
openGraphImageUrl: "https://opengraph.githubassets.com/46d7c5d9d60e9e283f27b09dde5444bd5f8b57915f337bda95d9bde45ace87b1/mauricegift/free-spotify-token"
---

# free-spotify-token

> **1 fresh Spotify access token** — updated every **30 minutes**

A free, continuously refreshed **Spotify Web Player access token** — no login, no API keys, no cost. Works with all public Spotify API endpoints. Powered by a reverse-engineered TOTP flow identical to the official web player.

🌐 Live Dashboard: [stoken.gifted.co.ke](https://stoken.gifted.co.ke)

---

## Token JSON

```
https://stoken.gifted.co.ke/token.json
```

### Structure

```json
{
  "token": "BQC...",
  "token_type": "Bearer",
  "expires_in": 3600,
  "last_updated": "2026-04-06T03:10:49.000Z"
}
```

---

## Usage

### JavaScript / Node.js

```js
const res = await fetch('https://stoken.gifted.co.ke/token.json');
const { token } = await res.json();

const data = await fetch('https://api.spotify.com/v1/browse/new-releases', {
  headers: { Authorization: `Bearer ${token}` }
}).then(r => r.json());
```

### Python

```python
import requests

res = requests.get('https://stoken.gifted.co.ke/token.json').json()
token = res['token']

data = requests.get(
    'https://api.spotify.com/v1/browse/new-releases',
    headers={'Authorization': f'Bearer {token}'}
).json()
```

### cURL

```bash…
