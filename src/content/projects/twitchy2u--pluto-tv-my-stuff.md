---
repo: "twitchy2u/Pluto-TV-my-stuff"
name: "Pluto-TV-my-stuff"
description: "Auto-updated Pluto TV M3U playlists with EPG"
url: "https://github.com/twitchy2u/Pluto-TV-my-stuff"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 5
forks: 10
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-15T22:54:34Z"
lastCommitAt: "2026-06-30T06:51:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 70
undervaluedScore: 64
maintainers: ["actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/71f779a994276f9cbdff0226f137e1d88b585ee14922c766356bcef093fa9690/twitchy2u/Pluto-TV-my-stuff"
---

# 🌎 PLUTO TV PLAYLISTS

---

# Pluto TV Playlists

This repository provides an automatically updated Pluto TV M3U playlist with EPG.  
**Important:** Each user must use their own unique `client_id` (UUID) to avoid stream conflicts on Pluto TV servers.

---

## Step 1: Fork This Repository

1. Click the **Fork** button on the top right of this repo.  
2. You now have your own copy of the repo in your GitHub account.

---

## Step 2: Generate Your Client ID (UUID)

You need a unique client ID for Pluto TV:

- Go to [https://www.uuidgenerator.net/](https://www.uuidgenerator.net/) and generate a new UUID.  
- Example: `9a1cce51-2d2f-4b6c-9f8e-1e2d0a3b4c5d`
- Copy the UUID.

---

## Step 3: Edit `config.json`

Open the `config.json` file in your fork and replace the default client_id with your UUID:

```json
{
  "client_id": "PASTE_YOUR_UNIQUE_UUID_HERE"
}
```

### Step 4: Run GitHub Actions

After editing `config.json`:

1. Go to the **Actions** tab in your fork.
2. Select **All workflows** the click **Auto Pluto Update**.
3. Click **Run workflow**.
4. Wait for the workflow to finish. The playlist will now be updated with your unique client ID.

### Step 5: Access Your M3U8 Playlist…
