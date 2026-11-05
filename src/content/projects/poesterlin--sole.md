---
repo: "poesterlin/sole"
name: "sole"
description: "Index your music library by how it sounds. OpenL3 embeddings and pgvector clusters, self-hosted."
readmeQualityOk: true
url: "https://github.com/poesterlin/sole"
homepage: "https://poesterlin.github.io/sole/"
language: "TypeScript"
languages: ["TypeScript", "Python", "Svelte"]
languagePcts: [46, 20, 20]
topics: ["audio", "clustering", "docker", "embeddings", "home-automation", "local-first", "music", "music-assistant", "music-recognition", "openl3"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 6
createdAt: "2025-05-19T08:10:25Z"
lastCommitAt: "2026-11-05T11:24:07Z"
lastReleaseAt: "2026-10-02T06:53:49Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 78
undervaluedScore: 74
maintainers: ["PhilipOesterlinW3"]
openGraphImageUrl: "https://opengraph.githubassets.com/ea503202452c027d16a465e1c467b2c9b4644b185065d70ad66291d0d59ee86a/poesterlin/sole"
---

# Sole

Sole browses a local music collection and recommends tracks by sound.
[Music Assistant](https://www.music-assistant.io/) supplies metadata and playback.
The Python worker analyses audio with pretrained
[OpenL3](https://github.com/marl/openl3).

Each analysed track gets an embedding: 512 numbers stored in PostgreSQL.
Sole compares embeddings and groups tracks into clusters. The interface calls
these groups **vibes**.

## Why I made it

I wanted background music that fits the time of day.
I wanted a way to curate my song library.
I also wanted Spotify-like song recommendations from a self-hosted app using
my own music.
Sole needs no listening history or model training on your collection.
It uses Music Assistant metadata to index files and request playback.

Recommendations combine audio similarity, likes, artist limits, and a penalty
for similar picks ([recommendation code](https://github.com/poesterlin/sole/blob/HEAD/web/src/lib/server/recomendation-engine.ts)).
Cluster names use the three most frequent artists
([naming code](https://github.com/poesterlin/sole/blob/HEAD/web/src/lib/server/cluster-naming.ts)).

## Requirements and limits

- Install Docker Compose v2, `curl`,…
