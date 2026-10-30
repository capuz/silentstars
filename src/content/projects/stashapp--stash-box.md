---
repo: "stashapp/stash-box"
name: "stash-box"
description: "Stash App's own OpenSource video indexing and Perceptual Hashing MetaData API"
readmeQualityOk: true
url: "https://github.com/stashapp/stash-box"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [51, 46]
topics: ["hacktoberfest"]
stars: 379
forks: 97
openIssues: 173
closedIssues: 170
watchers: 15
contributors: 30
recentReleases: 0
createdAt: "2019-11-12T00:02:39Z"
lastCommitAt: "2026-10-30T10:23:32Z"
lastReleaseAt: "2022-02-14T10:11:24Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "funded"]
healthScore: 84
undervaluedScore: 35
maintainers: ["InfiniteStash", "slick-daddy", "Maista6969"]
openGraphImageUrl: "https://opengraph.githubassets.com/838e98273dffb677bb305d937164140c56efdf6caa8d8f2c4acafd17c8be9e05/stashapp/stash-box"
fundingLinks: ["GITHUB:https://github.com/stashapp", "OPEN_COLLECTIVE:https://opencollective.com/stashapp"]
discussionCount: 3
---

# stash-box

Stash-box is an open-source video indexing and metadata API server for porn developed by Stash App. The purpose of stash-box is to provide a community-driven database of porn metadata, similar to what MusicBrainz does for music. The submission and editing of metadata should follow the same principles as MusicBrainz. [Learn more here](https://musicbrainz.org/doc/Editing_FAQ). Installing Stash-box will create an empty database for you to populate.

# Canonical community-database

If you're a Stash user, you don't need to install stash-box. The Stash community has a server with many titles from which you can pull data. You can get the login information from our guide to [Accessing StashDB](https://guidelines.stashdb.org/docs/faq_getting-started/stashdb/accessing-stashdb/).

# Docker install

You can find a `docker-compose` file for production deployment [here](https://github.com/stashapp/stash-box/blob/HEAD/docker/production/docker-compose.yml). You can omit Traefik if you don't need a reverse proxy.

If you already have PostgreSQL installed, you can install stash-box on its own from [Docker Hub](https://hub.docker.com/r/stashapp/stash-box).

# Bare-metal install…
