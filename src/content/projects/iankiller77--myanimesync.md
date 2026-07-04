---
repo: "iankiller77/MyAnimeSync"
name: "MyAnimeSync"
description: "Jellyfin plugin to synchronize anime watch status on myanimelist.net"
url: "https://github.com/iankiller77/MyAnimeSync"
language: "C#"
languages: ["C#", "HTML"]
languagePcts: [71, 29]
topics: ["anime", "jellyfin", "jellyfin-plugin"]
stars: 59
forks: 2
openIssues: 3
closedIssues: 9
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2024-01-09T06:36:41Z"
lastCommitAt: "2026-07-04T06:13:10Z"
lastReleaseAt: "2025-01-19T02:51:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 86
undervaluedScore: 48
maintainers: ["iankiller77", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/95315262b3dfaf14cf063c8485f378ebede8e77ecbb20ded5a4da56d7b84b4b4/iankiller77/MyAnimeSync"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/jellyfin"]
---

<h1 align="center">My Anime Sync</h1>
<p>
</p>

## About the Plugin
This is a simple plugin for Jellyfin to update watch status on <a src="https://myanimelist.net/">MyAnimeList.net</a><br/>
The goal of the implementation is to solely use the API for both gathering information about the anime and updating the user list.<br/>

## Important Notes
The refresh token for the API is only valid for a period of 1 month.<br/>
If you ever stop the server for more than one month, the refresh token will be invalid and you will have to redo the authentication process.<br/>
Otherwise, tokens are automatically refreshed when either required or if the access token is 7+ days old.<br/>
A task is executed every day, validating if the tokens need to be refreshed. As long as the server is running, your tokens should never expire.<br/>

If you ever encounter issues with a specific anime, feel free to create a ticket. The goal here is for the implementation to work with every single anime listed on MyAnimeList.<br/>

## How to Install the Plugin
1. Important notes:
   - I highly recommend running the plugin using the Jellyfin stable build.<br/>
   - If you want to use the plugin with the unstable…
