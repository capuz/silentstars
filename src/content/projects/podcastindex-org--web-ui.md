---
repo: "Podcastindex-org/web-ui"
name: "web-ui"
description: "The public home page of podcastindex.org"
readmeQualityOk: true
url: "https://github.com/Podcastindex-org/web-ui"
homepage: "https://podcastindex.org/"
language: "HTML"
languages: ["HTML", "TypeScript"]
languagePcts: [38, 38]
topics: ["podcasting", "podcasting20"]
stars: 73
forks: 196
openIssues: 15
closedIssues: 77
watchers: 10
contributors: 158
recentReleases: 0
createdAt: "2020-09-15T21:14:08Z"
lastCommitAt: "2026-11-22T11:49:55Z"
lastReleaseAt: "2023-04-25T21:18:19Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 96
undervaluedScore: 59
maintainers: ["Marzal", "daveajones", "WolfPawTV"]
openGraphImageUrl: "https://opengraph.githubassets.com/d9ae9a0bfe0e21dba3438dc2c8eedfa49b6a0089d47b294dfc7e5784b1b54a09/Podcastindex-org/web-ui"
---

# PodcastIndex Web UI

Podcast Web UI is a project that houses the code for the React app and express server for [podcastindex.org](https://podcastindex.org/).

- Landing page for PodcastIndex.
- Search for podcasts in index.
- Simple podcast player for listening.
- List of apps using the PodcastIndex.
- Documentation and developer login for credential management.

## Project Structure

The project is split into two folders, `ui`, and `server`.

    .
    ├── ...
    ├── ui
    │   ├── public      # Static files for index.html and favicon
    │   ├── fonts       # Fonts used in the UI
    │   ├── images      # Images and icons that are part of the UI
    │   └── src         # All React and client code
    ├── server
    │   ├── assets      # static files that are dynamically updated
    │   ├── data        # static data files (ie. json) that are dynamically updated
    │   └── index.js    # express app that serves the UI and is a reverse proxy (replaces need for NGINX)
    └── ...

The folder `ui` houses all the React and client based code and assets.
