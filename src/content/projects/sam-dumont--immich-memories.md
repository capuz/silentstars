---
repo: "sam-dumont/immich-memories"
name: "immich-memories"
description: "Turn your Immich photos and videos into memory films. Self-hosted, with titles and music."
readmeQualityOk: true
url: "https://github.com/sam-dumont/immich-memories"
homepage: "https://sam-dumont.github.io/immich-memories/"
language: "Python"
languages: ["Python"]
languagePcts: [95]
topics: ["ffmpeg", "immich", "memories", "photo-library", "python", "self-hosted", "video", "docker", "slideshow", "immich-memories"]
stars: 36
forks: 6
openIssues: 42
closedIssues: 1073
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-06T07:40:36Z"
lastCommitAt: "2026-10-15T08:32:21Z"
lastReleaseAt: "2026-03-11T17:11:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 47
maintainers: ["sam-dumont"]
openGraphImageUrl: "https://opengraph.githubassets.com/810f37ee78ebb25f9621fe98affd27e822e6c07f686fefa27c86654743841f44/sam-dumont/immich-memories"
discussionCount: 2
---

# Immich Memories

**Watch your memories again, in films you can make your own.**

Immich Memories turns the photos and videos in your Immich library into MP4 films with titles
and music. Pick a month, a year, a trip, an album or a person. Review the proposed cut, swap what
you don't like, then render. A quiet month makes a short film rather than 3 minutes of filler.

It runs on a plain NAS with no GPU or text reader. Basic uses small local picture classifiers;
GPU adds descriptions and extra checks, and Full adds a text reader to refine the cut.

**[Quick start](#make-your-first-film)** · **[Documentation](https://sam-dumont.github.io/immich-memories/docs/)** · **[Install guides](https://sam-dumont.github.io/immich-memories/docs/run/overview)** · **[Demo](https://sam-dumont.github.io/immich-memories/demo/demo.mp4)**

## Make your first film

**Docker Compose is the recommended install. Start with Basic if you are unsure.** Every tier
makes a complete film, and you can change tiers later.

| Tier | What it adds | What it needs | Install |
|---|---|---|---|
| **Basic** | Dates, favourites, people, places and small picture classifiers guide the cut; up to 1080p. | 2 CPU cores and 4…
